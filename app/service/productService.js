const Service = require('egg').Service;
const { ObjectId } = require('mongodb');

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
            throw new Error("No id")
        }

        const record = await this.ctx.model.Product.updateOne(
            {_id: new ObjectId(id)},
            {$set: {attribute: '1'}}
        )
        return record
    }

    async find(id){
        if(!id){
           throw new Error("No id")
        }
        const record = await this.ctx.model.Product.findById(id)
        return record
    }
}

module.exports=ProductService