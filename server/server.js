//เปิด nodemon : npx nodemon server.js

const app = require('./configs/express');


const listener = app.listen(8080, () => {
  console.log("Server is running on port " + listener.address().port);
});
