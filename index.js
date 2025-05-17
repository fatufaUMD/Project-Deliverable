const supabaseClient = require('@supabase/supabase-js');
const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/', (req, res) => {
  res.sendFile('public/cityLookup.html', { root: __dirname });
});

app.get('/geoData', async (req, res) => {
  console.log('Getting Data');

  const { data, error } = await supabase.from('geoData').select();

  if (error) {
    console.log('Error');
    res.send(error);
  } else {
    res.send(data);
  }
});

app.post('/geoData', async (req, res) => {
  console.log('Adding City');
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;

  console.log(req.body);
//   var City = req.body.City;
//   var Country = req.body.Country;
//   var state = req.body.state;

//   if (!isValidStateAbbreviation(state)) {
//     console.log(`State ${state} is Invalid`);
//     res.statusCode = 400;
//     res.header('Content-Type', 'application/json');
//     var errorJson = {
//       message: `${state} is not a Valid State`,
//     };
//     res.send(JSON.stringify(errorJson));
//     return;
//   }

  const { data, error } = await supabase
    .from('geoData')
    .insert({
      City: firstName,
      Country: lastName,
    
    })
    .select();

  if (error) {
    console.log('Error');
    res.send(error);
  } else {
    res.send(data);
  }
});

app.listen(port, () => {
  console.log('APP IS ALIVEEE');
});