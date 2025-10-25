const {Controller} = require('egg');

class AdminHomeController extends Controller {
    async index() {
        const {ctx} = this;
        ctx.body = 'hi, admin egg';
    }
}

module.exports = AdminHomeController;