const Service = require("egg").Service;

class SubscribeService extends Service {
  async create(data) {
    const { ctx } = this;
    const record = new ctx.model.Subscribe(data);
    return record;
  }
}

module.exports = SubscribeService;
