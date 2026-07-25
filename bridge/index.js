import express from 'express';
const app = express();
const port = process.env.PORT || 8080;

// 允许所有请求，不验证密钥
app.get('/', (req, res) => {
    res.json({ status: 'ok' });
});

app.get('/toy-next', (req, res) => {
    // 直接返回空指令，不检查密钥
    res.json({ command: null });
});

app.listen(port, () => {
    console.log('✅ Server started on port ' + port);
});
