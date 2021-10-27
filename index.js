// const e = require('express');
const express = require('express');

const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
   res.send('bbbwow ,wow ! wosdftghdfghdfghdfgw wow ! wow ! wow wow wow !hello node')
});


const users = [
   { id: 0, name: 'shabana', email: 'shabana@gmail.com', phone: '0173333444455' },
   { id: 1, name: 'apubisas', email: 'shabdsfgsdfana@gmail.com', phone: '0173333444455' },
   { id: 2, name: 'bobita', email: 'shadfgsdfbana@gmail.com', phone: '017dfg3333444455' },
   { id: 3, name: 'kobori', email: 'shabdfgsdfana@gmail.com', phone: '0173df333444455' },
   { id: 4, name: 'porimoni', email: 'shabdsfgsdfana@gmail.com', phone: '0173333444455' },
   { id: 5, name: 'purnima', email: 'shaba@gmail.com' },
   // { id: 8, name: 'purnima', email: 'shaba@gmail.com' },
]
app.get('/users', (req, res) => {
   // res.send('users')

   // res.send(users);//eita uncomment hobe step-2 er age

   // step-2 (63-5)
   // console.log(req.query.search);
   const search = req.query.search;

   if (search) {
      const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
      res.send(searchResult);

   }
   else {
      res.send(users)
   }

});

//post//////////////////
app.post('/users', (req, res) => {
   // console.log('hitting post', req.body);
   // res.send('inside post')

   const newUser = req.body;
   newUser.id = users.length;
   users.push(newUser);
   console.log('hitting post', req.body);
   //res.send(JSON.stringify(newUser))
   res.json(newUser);

})

app.get('/users/:id', (req, res) => {

   // console.log(req.params.id);

   const id = req.params.id;
   const user = users[id];
   res.send(user);
})

app.listen(port, () => { console.log('lisddddte automatic restart port', port); });