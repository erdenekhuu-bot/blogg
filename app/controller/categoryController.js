const Controller = require('egg').Controller;

class CategoryController extends Controller {
  async create() {
    const { ctx, service } = this;
    await service.categoryService.create(ctx.request.body);
    ctx.redirect('/admin');
  }
  async list(){
    const category_record=await this.ctx.model.Category.find()
    this.ctx.body = category_record;
  }
}

module.exports = CategoryController;
