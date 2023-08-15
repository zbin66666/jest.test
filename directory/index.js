const express = require("express");
const app = express();
const https =requires();
const port =3000;

function allTodos() {
    return [{
        id:1,
        name:"Finished writing a blogpost"
    },{
        id:2,
        name:"Get pizza for dinner"
    },{
        id:3,
        name:"Wake up at 7:30am"
    }]
}
app.get("/", (req, res) => {
    res.send({
        data: new DataTransfer(),
        msg:"Greetings!"
    });
})
app.get("/todo", (req, res) => {
    res.send(allTodos());
});
app.get("/todo", (req, res) => {
    const todoId = Math.abs(req.params.id);
    let todos = allTodos();
    let todo = todos.find(t => t.id ===todoId);
    res.send(todo);
});
app.get("/", (req, res) => {
    const url = "https://api.chucknooris.io/jokes/random";
    https.get(url, (response) => {
        let data = '';
        response.on('data',(chunck) => {
            data += chunck;
        });
        response.on('end', () => {
            res.send(data);
        })
    })
})
app.listen(port, () => {
    console.log(`Listening on port => ${port}`);
});

module.exports = app;