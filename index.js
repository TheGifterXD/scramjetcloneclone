// index.js - Puente de Scramjet para Vercel

module.exports = (req, res) => {
  // Si entran a la raíz del sitio "/", redirigimos directamente a TikTok 
  // (o puedes cambiar la URL por la de cualquier otra página que quieras abrir)
  if (req.url === '/' || req.url === '') {
    res.writeHead(302, {
      Location: 'https://www.tiktok.com'
    });
    res.end();
    return;
  }

  // Respuesta por defecto para mantener el flujo del proxy
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>Scramjet Proxy Corriendo en Vercel</h1><p>Redirección activa.</p>');
};
