const app = require('express')();
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;

const cors = require('cors')
app.use(cors());

function getAll(jpcore, req, res){
    fs.readFile(path.join(__dirname, 'api', jpcore), (err, data) => {
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
}


function getPart(jpcore, page, req, res){
    fs.readFile(path.join(__dirname, 'api', jpcore), (err, data) => {
        if (err) {
            console.error('Error reading jpcore1000.json', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            let maxRange = page * 100;
            let minRange = (page - 1) * 100
            // res.json(jsonData);

            let corePart = jsonData.slice(minRange, maxRange)

            res.json(corePart)


        } catch (error) {
            console.error('Error trying to parse jpcore1000.json', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    })
}



app.get("/api/jpcore1000", (req, res) => {
    console.log(req.query.page)

    const page = req.query.page;

    if(page){
        getPart('jpcore1000.json', page, req, res)
    }else{
        getAll('jpcore1000.json', req, res);
    }

    
})

app.get("/api/jpcore1000", (req, res) => {
  
})

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
})