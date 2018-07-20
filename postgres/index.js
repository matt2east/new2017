const express = require('express');
const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
  res.end('welcome');
});

const app = express();


server.listen(port, hostname, () => {
  console.log(`server running ${hostname}:${port}`)
});
