/**
 * Точка входа Серверной части приложения
 */
import express from 'express';
import * as path from 'path';
import { fileURLToPath } from 'url';
import * as bodyParser from 'body-parser';
import { listData, treeData } from 'test_data/TestData';
import { ServerChannel } from 'ServerChannel/ServerChannel';
import { renderPage } from 'server/utils/renderPage';
import * as cookieParser from 'cookie-parser';
import appConfig from 'configs/app.config.json';
import * as favicon from 'serve-favicon';
import { Database } from 'server/modules/Database/Database';
import { METHOD_TYPE } from 'types';
import { PageRouter, ArticlesRouter } from './routes/routes';

const serverChannel = new ServerChannel(); // создаем WebSocket подключение
const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appUseRoutes = () => {
  app.use(ArticlesRouter);
  app.use(PageRouter);
};

const appUse = () => {
  app.use(favicon(path.join('./public', 'favicon.ico')));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(express.static('build'));
  // роуты
  appUseRoutes();
};

// для Демо страницы
setInterval(() => {
  serverChannel.send('eventone', {
    msg: 'You get data because subscribe on channel'
  });
}, 1000);

appUse();

app.listen(port, () => {
  console.log(`Server is running at port  ${port}`);
});
