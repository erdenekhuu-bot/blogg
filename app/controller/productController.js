const Controller = require("egg").Controller;
const fs = require("fs");
const path = require("path");
const pump = require("pump");

class ProductController extends Controller {
  async create() {
    const stream = await this.ctx.getFileStream();
    const uploadDir = path.join(this.app.baseDir, "app/public/products");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filename = Date.now() + path.extname(stream.filename);

    const target = path.join(uploadDir, filename);
    const writeStream = fs.createWriteStream(target);
    await pump(stream, writeStream);

    const { name, price, size, about, category } = stream.fields;

    await this.ctx.service.productService.create({
      name,
      price,
      size,
      about,
      category,
      image: `/products/${filename}`,
    });
    this.ctx.redirect("/admin/product");
  }

  async list() {
    const { kind } = this.ctx.queries;
    const product_record = await this.ctx.service.productService.findMany(kind);
    this.ctx.body = product_record;
  }
  async favorite() {
    const { attribute } = this.ctx.request.body;
    const updatedProduct =
      await this.ctx.service.productService.update(attribute);
    this.ctx.body = updatedProduct;
  }
  async favoriteList() {
    const { param } = this.ctx.queries;
    const result = await this.ctx.service.productService.favoritelist(param);
    this.ctx.body = result;
  }

  async search() {
    const { name } = this.ctx.queries;
    const result = await this.ctx.service.productService.searchs(name);
    this.ctx.body = result;
  }
}

module.exports = ProductController;
