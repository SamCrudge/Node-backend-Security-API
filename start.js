//This is he file you need to actually run to start the app
// run nodemon on this file

// Bringing in the app we created.
const app = require('./app');
// Setting which port to
const port = 3007;

// initialising our application
app.listen(port, () => {
    console.log('Loading Matrix..');
});