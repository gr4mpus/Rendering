const express = require('express');
const path = require('path');
const app = express();

app.set('view engine','hbs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
let todos=[];

app.use('/',express.static(path.join(__dirname,'public')));

app.get('/todos', (r,s)=>{
    s.send(todos);
})

app.post('/todos',(r,s)=>{
    let todo = {
        task: r.body.task
    }
    todos.push(todo)
    console.log("BY API METHOD",todos)
    s.redirect('/todos')
});

app.get('/',(r,s)=>{
    s.render('index',{
        title: 'My List',
        todos
    })
});

app.post('/',(r,s)=>{
    let todo = {
        task: r.body.task
    }
    todos.push(todo)
    console.log("BY SERVER SIDE RENDERING",todos)
    s.redirect('/')
});


app.listen(5556, ()=>console.log('http://localhost:5556'));