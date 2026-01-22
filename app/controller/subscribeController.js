const Controller = require("egg").Controller;

class SubscribeController extends Controller {
  async create() {
    const { product } = this.ctx.request.body;
    const record = await this.ctx.service.subscribeService.create(product);
    this.ctx.body = record;
  }
}

module.exports = SubscribeController;
