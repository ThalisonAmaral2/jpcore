const app = require('express')();
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;

const cors = require('cors')
app.use(cors());

app.get("/api/jpcore1000", (req, res) => {
    fs.readFile(path.join(__dirname, 'api', 'jpcore1000.json'), (err, data) => {
        if (err) {
            console.error('Error reading jpcore1000.json', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (error) {
            console.error('Error trying to parse jpcore1000.json', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    })
})

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
})