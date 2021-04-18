import {formConfig} from './formConfig';
import {formData} from './formData';

import express from 'express';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/getForm', (req, res) => {
  return res.json(formConfig);
});

app.get('/getData', (req, res) => {
  return res.json(formData);
});

app.listen(3000, () => console.log('App is listening on port 3000!'));
