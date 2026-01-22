const Service = require("egg").Service;

class SubscribeService extends Service {
  async create(id) {
    const record = await this.ctx.model.Subscribe.create({
      product: id,
    });
    return record;
  }
}

module.exports = SubscribeService;
