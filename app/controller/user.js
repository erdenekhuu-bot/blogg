const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const users = await this.ctx.model.User.find();
    this.ctx.body = users;
  }

  async create() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const newUser = await ctx.model.User.create({ username, password });
    ctx.body = newUser;
  }
}

module.exports = UserController;
