const Service=requre('egg').Service

class UserService extends Service {
    async find(uid){
        const user = await this.ctx.db.query(
            'select * from user where uid =?',uid
        )
    }
}

module.exports=UserService