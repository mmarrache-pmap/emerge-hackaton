import request from 'request';
import fs from 'fs';
import Firebase from 'firebase';
import crypto from 'crypto';

let firebase = new Firebase('https://fundinghope.firebaseio.com/');
let users = firebase.child('users');

function hash (password) {
  return crypto.createHash('sha512').update(password).digest('hex');
}

let router = require('express').Router();

// let data = JSON.stringify({
//     "systemsTraceAuditNumber" : "451001",
//     "retrievalReferenceNumber" : "330000550000",
//     "localTransactionDateTime" : new Date().toJSON().slice(0,19),
//     "acquiringBin" : "408999",
//     "acquirerCountryCode" : "840",
//     "senderPrimaryAccountNumber" : "4895142232120006",
//     "senderCardExpiryDate" : "2015-10",
//     "senderCurrencyCode" : "USD",
//     "amount" : "124.02",
//     "businessApplicationId" : "AA",
//     "surcharge" : "11.99",
//     "foreignExchangeFeeTransaction" : "11.99",
//     "cavv" : "0700100038238906000013405823891061668252",
//     "cardAcceptor" : {
//         "name" : "Visa Inc. USA-Foster City",
//         "terminalId" : "ABCD1234",
//         "idCode" : "ABCD1234ABCD123",
//         "address" : {
//             "state" : "CA",
//             "county" : "San Mateo",
//             "country" : "USA",
//             "zipCode" : "94404"
//         }
//     }
// });

let genData = JSON.stringify({
  // "primaryAccountNumber": "4856200001123821",
  // "primaryAccountNumber": "4856200001332831",
  // "primaryAccountNumber": "4856200001332871"
  // "primaryAccountNumber": "485620000121"
  "primaryAccountNumber": "4895142232120006"
});

let defReq = request.defaults();

let userId = 'PSE4BDV0EUJ8RDLUWHSW211zcYis2bGBOyZbrkkGPOjyrimxA';
let password = 'BHwTOVToO5XQ8JAze33wHDr0B0oBOdsuzig';
let keyFile = './key_BatTest.pem';
let certificateFile ='./cert.pem';

// req.post({
//     uri : "https://sandbox.api.visa.com/visadirect/fundstransfer/v1/pullfundstransactions",
//     key: fs.readFileSync(keyFile),
//     cert: fs.readFileSync(certificateFile),
//     headers: {
//       'Content-Type' : 'application/json',
//       'Accept' : 'application/json',
//       'Authorization' : 'Basic ' + new Buffer(userId + ':' + password).toString('base64')
//     },
//     body: data
// }, (error, response, body) => {
//     if (!error) {
//       console.log("Response Code: " + response.statusCode);
//       console.log("Headers:");
//       for(var item in response.headers) {
//         console.log(item + ": " + response.headers[item]);
//       }
//       console.log("Body: "+ body);
//     } else {
//       console.log("Got error: " + error.message);
//     }
//   }
// );

router.use(require('body-parser').json());
router.use(require('cookie-parser')());
router.use(require('express-session')({
    resave: false,
    saveUninitialized: true,
    secret: 'asldkjf;alskdfj;alsdkjfa;lsdkfja;lskdfja;lskdjfa;lsdkfja;lsdkfj'
}));

router.post('/api/signup', (req, res) => {
    var username = req.body.username,
        password = req.body.password;

    if (!username || !password)
        return res.json({ signedIn: false, message: 'no username or password' });

    users.child(username).once('value', (snapshot) => {
        if (snapshot.exists())
            return res.json({ signedIn: false, message: 'username already in use' });

        var userObj = {
            username: username,
            passwordHash: hash(password)
        };

        users.child(username).set(userObj);
        req.session.user = userObj;

        res.json({
            signedIn: true,
            user: userObj
        });
    });
});

router.post('/api/signin', (req, res) => {
    let username = req.body.username,
        password = req.body.password;

    if (!username || !password)
        return res.json({ signedIn: false, message: 'no username or password' });

    users.child(username).once('value', function (snapshot) {
        if (!snapshot.exists() || snapshot.child('passwordHash').val() !== hash(password))
            return res.json({ signedIn: false, message: 'wrong username or password' });

        let user = snapshot.exportVal();

        req.session.user = user;
        res.json({
            signedIn: true,
            user: user
        });
    });
});

router.post('/api/signout', (req, res) => {
    delete req.session.user;
    res.json({
        signedIn: false,
        message: 'You have been signed out'
    });
});

 // app.get('/api/0/hope', api.getHope);
 router.get('/api/items/hope', (req, res) => {
    let items = firebase.once('value').then(data => {
      return data.val();
    });
 });

// req.post({
//   uri: "https://sandbox.api.visa.com/paai/generalattinq/v1/cardattributes/generalinquiry",
//   key: fs.readFileSync(keyFile),
//   cert: fs.readFileSync(certificateFile),
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'Authorization' : 'Basic ' + new Buffer(userId + ':' + password).toString('base64')
//   },
//   body: genData
// }, (error, response, body) => {
//     if(!error) {
//       console.log("STATUS CODE: " + response.statusCode);
//       console.log("HEADERS: ");
//       for(var item in response.headers) {
//         console.log(item + ": " + response.headers[item]);
//       }
//       console.log("Body: "+ body);
//     } else {
//       console.log("ERROR: "+ error.messagae);
//     }
//   }
// );
module.exports = router;
