const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    // name of service in docker-compose.yml. Without Docker this may be a connection URL. 
    host: 'redis-server', // docker will redirect this for us. Not this code. 
    port: 6379 //refault redis port, don't need to have this here. 
});
client.set('visits', 0);

app.get('/', (req,res) =>{
    process.exit(0); //force crash server to demonstrate restarting container
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081')
});