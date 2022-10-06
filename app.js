"use strict";
exports.__esModule = true;
var redis_1 = require("redis");
var redis = require("redis");
var client = redis.createClient("127.0.0.1", 6379);
client.on('error', function (err) { return console.log('Redis Client Error', err); });
client.connect();
client.set('key', 'value');
var value = client.get('key');
var cacheResult = redis_1.ca
console.log(" Cache result : ".concat(JSON.stirngify(cacheResult), " "));
