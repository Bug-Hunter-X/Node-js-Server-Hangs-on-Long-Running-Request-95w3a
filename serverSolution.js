const http = require('http');

const server = http.createServer(async (req, res) => {
  try {
    // Simulate a long-running task using async/await
    await new Promise(resolve => setTimeout(resolve, 10000)); // Simulate a 10-second task
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Task completed!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});