const Service = require('egg').Service;

class CategoryService extends Service {
  async create(data) {
    const { name, description } = data;
    const record = await this.ctx.model.Category.create({ name, description });
    return record;
  }
  async findMany() {
    const records = await this.ctx.model.Category.find();
    return records;
  }
}

module.exports = CategoryService;
