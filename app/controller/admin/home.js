const Controller = require("egg").Controller;

class AdminHomeController extends Controller {
  async category() {
    const data = await this.ctx.service.categoryService.findMany();
    await this.ctx.render("admin/category.html", { data });
  }
  async product() {
    const data = await this.ctx.service.productService.findMany();
    const category = await this.ctx.service.categoryService.findMany();
    await this.ctx.render("admin/product.html", { data, category });
  }
  async subscribe() {
    await this.ctx.render("admin/subscribe.html");
  }
  async type() {
    await this.ctx.render("admin/type.html");
  }
}

module.exports = AdminHomeController;
