import express from 'express';
const app = express();
const PORT = 3000;

app.get('/health-check', (req, res) =>
    res.json({ 'status': 'Health Check API is Up & Running!!!' })
);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
