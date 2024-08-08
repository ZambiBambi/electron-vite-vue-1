const configs = {
  development: {
    dialect: "sqlite",
    storage: process.env.SQLITE || "./database/db_dev.db",
    logging: false,
    sync: {
      force: process.env.NODE_ENV === "development",
    },
  },
  test: {
    dialect: "sqlite",
    storage: process.env.SQLITE || "./database/db_dev.db",
  },
  production: {
    dialect: "sqlite",
    storage: process.env.SQLITE,
  },
};

export default configs;
