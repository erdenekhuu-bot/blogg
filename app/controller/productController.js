const Controller = require('egg').Controller;
const fs=require('fs')
const path=require('path')
const pump = require('pump');

class ProductController extends Controller {
    async create() {
        const { ctx, service } = this;
        // const {name, price,image, size, about}=ctx.request.body
        const stream = await ctx.getFileStream();
        const uploadDir = path.join(this.app.baseDir, 'app/public/products');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        const filename = Date.now() + path.extname(stream.filename);

 
        const target = path.join(uploadDir, filename);
        const writeStream = fs.createWriteStream(target);
        await pump(stream, writeStream);
        const { name, price, size, about,category  } = stream.fields;

        await ctx.service.productService.create({
            name,
            price,
            size,
            about,
            category,
            image: `/products/${filename}`,
        });
        ctx.redirect('/admin/product');
        }
    async list(){
        const product_record=await this.ctx.model.Product.find().populate('category')
        this.ctx.body = product_record;
    }
}

module.exports=ProductController