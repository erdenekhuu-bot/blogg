const Service = require("egg").Service;

class UserService extends Service {
  async create(data) {
    const { username, phone, password } = data;
    const record = await this.ctx.model.User.create({
      username,
      phone,
      password,
    });
    return record;
  }
}
