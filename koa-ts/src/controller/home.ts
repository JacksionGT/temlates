import Router from '@koa/router';
import type { Context } from 'koa';
import { getData } from '../service/home';

const homeController = new Router();

homeController.get('/test', (ctx: Context) => {
    ctx.body = 'text from get /api/test';
});

homeController.post('/test', async (ctx: Context) => {
    const data = await getData();
    console.log(data);

    ctx.type = 'application/json';

    ctx.body = {
        code: 200,
        success: true,
        data
    };
});


export default homeController;