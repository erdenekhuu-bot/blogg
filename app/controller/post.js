const Controller = require('egg').Controller;

class PostController extends Controller {
  async index() {
    const posts = await this.ctx.model.Post.find().populate('author');
    this.ctx.body = { code: 0, data: posts };
  }

  async create() {
    const { title, content, authorId } = this.ctx.request.body;
    const newPost = await this.ctx.model.Post.create({
      title,
      content,
      author: authorId,
    });

    this.ctx.body = { code: 0, data: newPost };
  }
}

module.exports = PostController;
