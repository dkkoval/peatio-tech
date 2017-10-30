var express   = require('express');
var sgMail    = require('@sendgrid/mail');
var app       = express();
var cors      = require('cors');

app.use(express.static('dist'))

app.use(require('body-parser').json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/subscribers', cors(), function(req, res, next) {
  console.log(req.body);
  if (req.body.email) {
    console.log('Processing email: ' + req.body.email);
    sgMail.send({
      to:      'hello@peatio.tech',
      from:    'Peatio@tech',
      subject: 'New contact request',
      text:    req.body.email
    });
    res.status(201).send();
  } else {
    res.status(422).send();
  }
});

app.listen(8080, function () {
  console.log('Peatio-tech listening on port 8080!')
})
