const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017/nodemongo')

client.connect()
  .then(() => {
   // console.log('Connected Successfully & Database Created!')
   // client.close()
   const db0 = client.db('nodemongo');
   /*db0.createCollection('customers').then(() => {
     console.log('Collection Created!')
     client.close()
   })*/
  /*const custData = {name: "Westcliff", address: "Irvine, CA"};
  db0.collection('customers').insertOne(custData)
    .then(() => {
      console.log('1 document inserted')
      client.close()
    })
    .catch((err) => {
      console.error('Failed to insert data', err)
      client.close()
    })*/
   /*const custData = [{ name: 'John', address: 'Highway 71'},
{ name: 'Peter', address: 'Lowstreet 4'},
{ name: 'Amy', address: 'Apple st 652'},
{ name: 'Hannah', address: 'Mountain 21'},
{ name: 'Michael', address: 'Valley 345'},
{ name: 'Sandy', address: 'Ocean blvd 2'},
{ name: 'Betty', address: 'Green Grass 1'},
{ name: 'Richard', address: 'Sky st 331'},
{ name: 'Susan', address: 'One way 98'},
{ name: 'Vicky', address: 'Yellow Garden 2'},
{ name: 'Ben', address: 'Park Lane 38'},
{ name: 'William', address: 'Central st 954'},
{ name: 'Chuck', address: 'Main Road 989'},
{ name: 'Viola', address: 'Sideway 1633'}
   ];
   db0.collection('customers').insertMany(custData)
     .then((res) => {
       console.log("number of documents inserted:" + res.insertedCount)
       client.close()
     })*/
    /*db0.collection('customers').findOne({}).then((res) => {
        console.log(res.name)
        client.close()
      })*/
     /*const query = { address: 'Park Lane 38' };
     db0.collection('customers').find(query).toArray()
       .then((items) => {
         console.log(`Successfully found ${items.length} documents`)
         console.log(items);
         client.close();
       })*/

   /*const mysort = { name: 1 };
   db0.collection('customers').find().sort(mysort).toArray()
     .then((items) => {
       console.log(`Successfully sorted ${items.length} documents`)
       console.log(items);
       client.close();
     })*/
    
       /*const myquery = { address: 'Mountain 21' };
       db0.collection('customers').deleteOne(myquery)
         .then((res) => {
           console.log("1 document deleted");
           client.close();
         })
         .catch((err) => {
           console.error('Failed to delete data', err)
           client.close()
         })*/

        const myquery = { address: 'Valley 345' }; 
        const newvalues = { $set: { address: 'Mickey', address: "Canyon 123"}};
        db0.collection('customers').updateOne(myquery, newvalues)
          .then((res) => {
            console.log("1 document updated");
            client.close();
          })
          .catch((err) => {
            console.error('Failed to update data', err)
            client.close()
          })      
  })
  .catch((err) => {
    console.error('Failed to connect', err)
  })