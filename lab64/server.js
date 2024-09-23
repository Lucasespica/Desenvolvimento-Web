const http = require('http');
const express = require('express');
const path = require('path');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>Bem-vindo ao Node.js!</h1><p>Esta é a página inicial.</p>');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>Sobre Nós</h1><p>Esta é a página sobre nós.</p>');
    } 
    else if (req.url === '/roda-roda'){
        res.statusCode = 200;
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    }else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>404 Não Encontrado</h1><p>A página que você está procurando não existe.</p>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});