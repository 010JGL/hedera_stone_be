module.exports = (db) => {
  return {
    

    getCustomers: () => {
      const query = {
        text: "SELECT * FROM customers",
      };
      return db
        .query(query)
        .then((result) => result.rows)
        .catch((err) => err);
    },

  }
}