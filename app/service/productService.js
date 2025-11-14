const Service = require('egg').Service;

class ProductService extends Service {
    async create(data) {
        const record = await this.ctx.model.Product.create(data);
        return record;
    }
    async findMany() {
        const records = await this.ctx.model.Product.find().populate('category');
        return records;
  }
}

module.exports=ProductService