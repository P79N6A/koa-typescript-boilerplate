"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const chalk_1 = __importDefault(require("chalk"));
const server = new koa_1.default();
server.use(async (ctx, next) => {
    ctx.body = '<h2>hello, koa-typescript-boilerplate</h2>';
    await next();
});
server.listen(1027, 'localhost');
console.log(chalk_1.default.green(`Server is running at ${chalk_1.default.cyan('http://localhost:1027/')}`));
//# sourceMappingURL=index.js.map