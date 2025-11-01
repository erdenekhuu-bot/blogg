module.exports=app=>{
    const mongoose =app.mongoose;
    const Schema=mongoose.Schema;

    const AdminSchema=new Schema({
         username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'admin' },
    });
    
    return mongoose.model('Admin', AdminSchema)
}

exports.index=function*(ctx){
    ctx.body=yield ctx.model.User.find({})
}