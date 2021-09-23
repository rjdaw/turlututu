//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();
const names = ['Peter', 'James', 'John'];

router.get('/', (req, res, next) => {
  res.render('pages/ta02.ejs', {
    title: 'Team Activity 02',
    path: '/ta02',
    users: names
  });
});

router.post('/addUser', (req, res, next) => {
  names.push(req.body.username);
  res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {
  const remUser = req.body.remUser;

  // Splice method removes from a const array
  const index = names.indexOf(remUser);
  if (index !== -1) {
    names.splice(index, 1);
  }

  res.redirect('/ta02/');
});

module.exports = router;