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
}

module.exports=ProductService