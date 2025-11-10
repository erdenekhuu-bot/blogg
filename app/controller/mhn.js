const Controller = require('egg').Controller;
const path = require('path');
const fs = require('fs').promises; // Use promises for fs

class TestController extends Controller {
    constructor(ctx) {
        super(ctx);
        this.demoPath = path.join(this.ctx.app.baseDir, 'app','public', 'hello.txt');
    }
    
    async mhn() {
       try {
            await fs.access(path.dirname(this.demoPath));
            console.log('Directory exists');
        } catch (error) {
            console.log('Directory does not exist:', error);
            fs.writeFile(this.demoPath,'hello.txt')
        }

        return (this.ctx.body = "Hello World");
    }
}

module.exports = TestController;
