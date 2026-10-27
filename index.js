module.exports = (req, res) => {
  // Redirección directa a TikTok al entrar a la raíz
  res.writeHead(302, {
    Location: 'https://www.tiktok.com'
  });
  res.end();
};
