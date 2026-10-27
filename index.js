// index.js (Punto de entrada universal para Vercel)
module.exports = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Scramjet proxy funcionando en Vercel');
};
