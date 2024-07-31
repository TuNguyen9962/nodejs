exports.getPing = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write("hihihi")
  res.end('Pong');
};


exports.postPing = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write("huhu")
  res.end('Pong');
};