const express = require("express");
const cors = require("cors");
const app = express();

const port = 4000;
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send(users)
})
const users = [
    { name: "hasan", id: 0, sub: "bangla", phone: "0120254802", email: "meehdi@gmail.com" },
    { name: "hasan", id: 1, sub: "bangla", phone: "0120254802", email: "meehdi@gmail.com" },
    { name: "hasan", id: 2, sub: "bangla", phone: "0120254802", email: "meehdi@gmail.com" },
    { name: "hasan", id: 3, sub: "bangla", phone: "0120254802", email: "meehdi@gmail.com" },
    { name: "hasan", id: 4, sub: "bangla", phone: "0120254802", email: "meehdi@gmail.com" },
    { name: "hasan", id: 5, sub: "bangla", phone: "0120254802", email: "meehdi@gmail.com" },
    { name: "hasan", id: 6, sub: "bangla", phone: "0120254802", email: "meehdi@gmail.com" },
    { name: "hasan", id: 7, sub: "bangla", phone: "0120254802", email: "meehdi@gmail.com" },
    { name: "hasan", id: 8, sub: "bangla", phone: "0120254802", email: "meehdi@gmail.com" },
    { name: "hasan", id: 9, sub: "bangla", phone: "0120254802", email: "meehdi@gmail.com" },
    { name: "hasan", id: 10, sub: "bangla", phone: "0120254802", email: "meehdi@gmail.com" },
    { name: "hasan", id: 11, sub: "bangla", phone: "0120254802", email: "meehdi@gmail.com" },
]

app.get('/user', (req, res) => {
    const search = (req.query.search);
    if (search) {
        const serchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(serchResult)
    }
    else {
        res.send(users)
    }

});
app.post('/user', (req, res) => {
    const newUsers = req.body;
    newUsers.id = users.length;
    users.push(newUsers)
    console.log("hitting the post", req.body);
    // res.send(JSON.stringify(newUsers))
    res.json(newUsers)
})
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})
app.get('/f', (req, res) => {
    res.send(["mango", "jackbfo", "bafam"])
})
app.get('/f/m/j', (req, res) => {
    res.send("jack food")
})


app.listen(port, () => {
    console.log("listening", port);
})

