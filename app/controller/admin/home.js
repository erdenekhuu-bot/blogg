const Controller = require('egg').Controller;

class AdminHomeController extends Controller {
  async index() {
    await this.ctx.render('admin/user_list.html', {
      users: await this.ctx.model.User.find(),
    });
  }
}

module.exports = AdminHomeController;
