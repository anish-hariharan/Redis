const { error } = require("console");
const cli = require("nodemon/lib/cli");
const { emitWarning } = require("process");
const { stringify } = require("querystring");
const redis = require("redis");
const client = redis.createClient("127.0.0.1", 6379);


client.connect().then(console.log("connected"))
.catch((err) => console.log(err))

client.set("name" , "anish")
.then((result) => console.log(result))
.catch((err) => console.log(err))

client.on("connect", () => {
  console.log("connected");
});

const result = client.get("anish");
console.log(`result : ${JSON.stringify(result)}`);

client.get("ping").then((result) => console.log(result));
client.get("anish").then((result) => console.log(result));

client
  .set("newbee", "oldbee", {
    EX: 10,
  })
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

client
  .hGetAll("newkey")
  .then((result) => console.log(result))
  .catch((err) => console.log("err is " + err));

client
  .get("jsondata")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
client
  .get("jsondata2")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
client
  .set("jsondata2", '{"name" : "sam", "age" : 120}')
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
client
  .set("name1", "anish")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
client.get("THIRD")
.then((result) => console.log(result))
.catch((err) => console.log("Error is "+ err));
