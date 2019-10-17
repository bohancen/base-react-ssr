module.exports = {
  apps : [{
    name        : "render-server",
    script      : "./src/server/index.js",
    log_date_format : "YYYY-MM-DD HH:mm:ss.SS",
    "node_args": "--experimental-modules",
    // watch       : true,
    env_dev: {
      "NODE_ENV": "dev",
    },
    env_test: {
      "NODE_ENV": "test",
    },
    env_prod : {
       "NODE_ENV": "production"
    }
  }]
}
// use
// pm2 start pm2.api.server.config.js --env dev
// pm2 start pm2.api.server.config.js --env prod
