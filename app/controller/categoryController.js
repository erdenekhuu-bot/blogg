const Controller = require('egg').Controller;

class CategoryController extends Controller {
  async create() {
    const { ctx, service } = this;
    await service.categoryService.create(ctx.request.body);
    ctx.redirect('/admin');
  }
  async list(){
    const {param}=this.ctx.query;
    const record = await this.ctx.service.categoryService.findMany(param)
    this.ctx.body = record
  }
}

module.exports = CategoryController;
