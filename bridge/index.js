import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const toyQueue = {
  command: null,
  timestamp: 0
};

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/toy', (req, res) => {
  const { action, value } = req.body;
  toyQueue.command = { action, value, received: Date.now() };
  toyQueue.timestamp = Date.now();
  console.log(`📥 收到指令: ${action} = ${value}`);
  res.json({ status: 'ok' });
});

app.get('/toy-next', (req, res) => {
  const age = Date.now() - toyQueue.timestamp;
  if (age > 5000) {
    return res.json({ command: null });
  }
  const cmd = toyQueue.command;
  toyQueue.command = null;
  res.json({ command: cmd });
});

app.get('/status', (req, res) => {
  res.json({
    hasCommand: toyQueue.command !== null,
    age: Date.now() - toyQueue.timestamp
  });
});

app.listen(PORT, () => {
  console.log(`🚀 服务运行在端口 ${PORT}`);
});
