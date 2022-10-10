const express = require('express');
const app = express();
const fs = require('fs')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.listen(3000)
const Eris = require('eris')
let client = Eris('ODQzNzE2MTAwMjE5MDc2NjE4.YKH52Q.ZFkyZgIWWRTUxL7Z2mkH8HAjf3U')
        const requests = fs.readdirSync(`./api_requests/`).filter(file => file.endsWith(".js"));


    fs.readdirSync("./api_requests/").forEach(dir => {
        const requests = fs.readdirSync(`./api_requests/${dir}/`).filter(file => file.endsWith(".js"));

        for (let file of requests) {
            let request = require(`./api_requests/${dir}/${file}`);
if(request.method && request.path){
app[request.method](request.path , (req , res) =>{
 
return request.run(req, res, client)
})
}} 

})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/commands", (req, res) => {
    res.sendFile(__dirname + "/Commands.html");
})
app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/style.css");
})

app.get("/commands/public", (req, res) => {
    res.sendFile(__dirname + "/commands/public.html");
})

app.get("/commands/moderation", (req, res) => {
    res.sendFile(__dirname + "/commands/moderation.html");
})

app.get("/commands/economy", (req, res) => {
    res.sendFile(__dirname + "/commands/economy.html");
})

app.get("/commands/giveaway", (req, res) => {
    res.sendFile(__dirname + "/commands/giveaway.html");
})

app.get("/commands/top", (req, res) => {
    res.sendFile(__dirname + "/commands/top.html");
})

app.get("/commands/music", (req, res) => {
    res.sendFile(__dirname + "/commands/music.html");
})


app.get("/commands/voice-manage", (req, res) => {
    res.sendFile(__dirname + "/commands/voice-manage.html");
})


app.get("/dashboard", (req, res) => {
    res.sendFile(__dirname + "/dashboard.html");
})

app.get("/test", (req, res) => {
    res.sendFile(__dirname + "/test.html");
})

client.connect()