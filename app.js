const http = require('http');

const PORT = 13371;
const TARGET_URL = 'docker-desktop://projects/create?name=GenAI%20Stack&source_repo=https%3A%2F%2Fgithub.com%2Fdocker%2Fgenai-stack';

const PORT2 = 13372;
const TARGET_URL2 = 'docker-desktop://projects/create?name=MERN%20Stack&source_repo=https%3A%2F%2Fgithub.com%2Fdocker%2Fawesome-compose&subfolder=react-express-mongodb';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(302, {
      'Location': TARGET_URL,
      'Content-Type': 'text/html'
    });
    res.end(`Redirecting to <a href="${TARGET_URL}">${TARGET_URL}</a>`);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});


const server2 = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(302, {
      'Location': TARGET_URL2,
      'Content-Type': 'text/html'
    });
    res.end(`Redirecting to <a href="${TARGET_URL2}">${TARGET_URL2}</a>`);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>404 Not Found</h1>');
  }
});

server2.listen(PORT2, () => {
  console.log(`Server is listening on http://localhost:${PORT2}`);
});