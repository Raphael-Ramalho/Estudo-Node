const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

// Start Server

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App running on port ${port}...`);
});
