'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const list = [{
            id: 1,
            name: '测试数据1',
        }, {
            id: 2,
            name: '测试数据2',
        }];

        this.ctx.body={
            returnCode: 0,
            msg: '',
            list
        };
    }
}

module.exports = HomeController;
