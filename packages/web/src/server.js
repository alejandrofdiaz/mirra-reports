const { i18n } = require('./_i18n');

const express = require('express');
const next = require('next');

const nextI18NextMiddleware = require('next-i18next/middleware').default;

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  await i18n.initPromise;
  server.use(nextI18NextMiddleware(i18n));

  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();