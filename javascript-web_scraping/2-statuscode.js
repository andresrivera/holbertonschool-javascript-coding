#!/usr/bin/node
const request = require('request');

// Récupération de l'URL depuis le 1er argv en ligne de commande.
const url = process.argv[2];

request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('code:', response.statusCode);
  }
});
