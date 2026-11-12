// Servidor estático simples para testar landing, login e painel localmente.
// Uso: node tools/serve.js [porta]   →   http://localhost:5180
const http = require('http'), fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..'), port = Number(process.argv[2] || 5180);
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.md': 'text/plain; charset=utf-8' };

http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  // a raiz e as pastas sem barra final redirecionam, para os caminhos relativos (img/...) funcionarem
  if (p === '/') { res.writeHead(302, { Location: '/landing/' }); return res.end(); }
  const f = path.join(root, p);
  if (!f.startsWith(root)) { res.writeHead(403); return res.end(); }
  fs.stat(f, (err, st) => {
    if (!err && st.isDirectory()) {
      if (!p.endsWith('/')) { res.writeHead(301, { Location: p + '/' }); return res.end(); }
      return send(path.join(f, 'index.html'));
    }
    send(f);
  });
  function send(file) {
    fs.readFile(file, (e, d) => {
      if (e) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); return res.end('404'); }
      res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
      res.end(d);
    });
  }
}).listen(port, '127.0.0.1', () => console.log('http://localhost:' + port + '  (landing em /landing/)'));
