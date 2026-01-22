const Controller = require("egg").Controller;

class SubscribeController extends Controller {
  async create() {
    const { product } = this.ctx.request.body;
    const record = await this.ctx.service.subscribeService.create(product);
    this.ctx.body = record;
  }

  async listpackage() {
    const records = await this.ctx.service.subscribeService.findMany();
    this.ctx.body = records;
  }
}

module.exports = SubscribeController;
