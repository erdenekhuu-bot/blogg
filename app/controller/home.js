const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const data = await this.ctx.service.productService.findMany();
    await ctx.render("index.html", { data });
  }
}

module.exports = HomeController;
