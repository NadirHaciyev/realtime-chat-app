const redis = require("redis");

const getClient = () => {
  return redis.createClient({
    host: "redis",
    port: "6379"
  });
};

module.exports.getClient = getClient;
