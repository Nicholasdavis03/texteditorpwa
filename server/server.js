const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

window.addEventListener('blur', function() {
    // Save content to IndexedDB
  });
  

request.onerror = function(event) {
    console.error('Error opening database', event.target.error);
  };
  
  request.onblocked = function(event) {
    console.warn('Database upgrade blocked by another open connection');
  };
  
  request.onclose = function(event) {
    console.log('Database connection closed');
  };
  

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
