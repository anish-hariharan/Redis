import { createClient, cacheClient } from "redis";
const redis = require("redis");

const client = redis.createClient("127.0.0.1", 6379);

client.on('error', (err) => console.log('Redis Client Error', err));

client.connect();

client.set('key', 'value');

const value = await client.get('key')

