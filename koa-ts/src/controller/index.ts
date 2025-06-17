import type { DefaultState, DefaultContext } from 'koa';
import Router from '@koa/router';
import homeController from './home.js';

// 创建根路由
const rootRouter = new Router<DefaultState, DefaultContext>();

// 注册子路由
rootRouter.use('/api', homeController.routes());

// 注册所有路由的 allowedMethods
rootRouter.use(homeController.allowedMethods());

// 导出路由中间件
export default rootRouter.routes();