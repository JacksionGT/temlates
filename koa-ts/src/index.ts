import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import router from './controller/index.js';
import type { Context, Next } from 'koa';

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(serve(__dirname + '/public'));

// 错误处理中间件
app.use(async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (err: unknown) {
    console.error('Server Error:', err);
    ctx.status = err instanceof Error ? (err as any).status || 500 : 500;
    ctx.body = {
      message: err instanceof Error ? err.message : '服务器内部错误',
    };
  }
});

// 配置 CORS
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://example.com'  // 生产环境域名
    : '*',                   // 开发环境允许所有域名
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
}));

// 请求体解析
app.use(bodyParser());

// 注册路由
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});