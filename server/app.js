const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const rateLimit = require('express-rate-limit');

require('./lib/db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * START OF THE ONLY PART OF THIS PROJECT THAT CANDIDATES ARE NOT ALLOWED TO
 * UPDATE.
 * <----------
 */
const apiLimiter = rateLimit({
  windowMs: 1000,
  max: 10,
  message:
    'Excessive requesting is dangerous for the health; HTTP requests should be consumed with moderation.',
});
app.use('/api/', apiLimiter);
/**
 * <----------
 * END OF THE ONLY PART OF THIS PROJECT THAT CANDIDATES ARE NOT ALLOWED TO
 * UPDATE.
 */

const posts = require('./routes/posts.routes');
app.use('/api/posts', posts);

module.exports = app;
