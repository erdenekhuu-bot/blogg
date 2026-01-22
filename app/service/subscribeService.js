const Service = require("egg").Service;

class SubscribeService extends Service {
  async create(id) {
    const record = await this.ctx.model.Subscribe.create({
      product: id,
    });
    return record;
  }

  async findMany() {
    const records = await this.ctx.model.Subscribe.find().populate("product");
    return records;
  }
}

module.exports = SubscribeService;
