const Controller = require("egg").Controller;

class SubscribeController extends Controller {
  async create() {
    const { ctx } = this;
    const { product, date } = ctx.request.body;
    const record = await ctx.service.subscribeService.create({ product, date });
    ctx.body = record;
  }
}

module.exports = SubscribeController;
