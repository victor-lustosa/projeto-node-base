export const express = require('express');
export const app = express();

const porta = process.env.PORT || 3000;
app.listen(porta, function() {
    console.log(`Escutando a porta ${porta}...`)
});