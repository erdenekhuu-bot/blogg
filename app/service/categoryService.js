const Service = require("egg").Service;

class CategoryService extends Service {
  async create(data) {
    const { name, description } = data;
    const record = await this.ctx.model.Category.create({ name, description });
    return record;
  }
  async findMany(param) {
    if (!param) {
      return await this.ctx.model.Category.find();
    }
    const safe = String(param)
      .trim()
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const record = await this.ctx.model.Category.find({
      name: { $regex: safe, $options: "i" },
    });
    return record;
  }
}

module.exports = CategoryService;
