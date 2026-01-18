const Service = require('egg').Service;

class ProductService extends Service {
    async create(data) {
        const record = await this.ctx.model.Product.create(data);
        return record;
    }
    async findMany(params) {
        if (!params || String(params).trim() === '') {
            return await this.ctx.model.Product.find().populate('category');
        }
        const records = await this.ctx.model.Product.find({
            category: params
        }).populate('category');
        return records;
  }
    async searchs(name){
        if (!name || String(name).trim() === '') {
            return await this.ctx.model.Product.find();
        }
        const safe = String(name).toLowerCase().trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const record = await this.ctx.model.Product.find({
            name: { $regex: safe, $options: 'i' }
        });
        return record
    }
    async update(id){
        if(!id){
            return
        }
        const record = await this.ctx.model.Product.updateOne(
            {_id: ObjectId(id)},
            {$set: {attribute: '1'}}
        )
        return record
    }

    async find(id){
        if(!id){
            return
        }
        const record = await this.ctx.model.Product.findById(id)
        return record
    }
}

module.exports=ProductService