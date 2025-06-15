import express from 'express';

const app = express();

app.get('/messages', (req, res) => {
    const requestSource = req.headers['x-id'];
    console.log(`${new Date().toISOString()}: EXECUTING /messages on backend from ${requestSource}`);
    return res.status(200).json([
        { id: 1, text: 'Hello World' },
        { id: 2, text: 'Another message from the separate backend' },
    ]);
});

app.listen(8080, () => console.log('server is running on: http://localhost:8080'));