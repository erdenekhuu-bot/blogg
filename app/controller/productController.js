const Controller = require('egg').Controller;

class ProductController extends Controller {
    async create() {
        const { ctx, service } = this;
        await service.productService.create(ctx.request.body);
        ctx.redirect('/admin/product');
    }
}

module.exports=ProductController