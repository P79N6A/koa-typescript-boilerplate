import Koa from 'koa';
import chalk from 'chalk';

const server = new Koa();
server.use(
    async (ctx, next): Promise<void> => {
        ctx.body = '<h2>hello, koa-typescript-boilerplate</h2>';
        await next();
    }
);
server.listen(1027, 'localhost');
console.log(
    chalk.green(`Server is running at ${chalk.cyan('http://localhost:1027/')}`)
);
