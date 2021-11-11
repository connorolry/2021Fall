const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:$QK@UnmUR2KfVtG@cluster0.ga79n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const isConnected = client.connect();


module.exports = {
    client, isConnected
}
