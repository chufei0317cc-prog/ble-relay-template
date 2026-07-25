import express from 'express';
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({ status: 'ok' });
});

app.get('/toy-next', (req, res) => {
    res.json({ command: null });
});

app.listen(port, () => {
    console.log('✅ Server started on port ' + port);
});
