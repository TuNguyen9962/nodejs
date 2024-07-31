exports.getPing = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("hihihi")
    res.end('Pong');
  };