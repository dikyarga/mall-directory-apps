require('dotenv').config()
const Store = require('../models/store');

module.exports = {
    webhook: function(req, res, next) {
        console.log('jalan');
        if (req.body.result.action === 'cari_toko') {
            let toko = req.body.result.parameters['toko'];
            console.log('toko : ', toko);
            let regexFormula =
            Store.findOne({
                    "name": {
                        $regex: toko,
                        $options: 'i'
                    }
                },
                function(err, store) {
                    console.log('res : ', store);
                    if (err) {
                        res.status(400).json({
                            status: {
                                code: 400,
                                errorType: 'I failed to look up the city name.'
                            }
                        });
                    } else {
                        res.json({
                            speech: toko + ' di lantai ' + store.floor,
                            displayText: toko + ' di lantai ' + store.floor,
                            source: 'cari_toko'
                        })
                    }
                });
            // Store.findOne({
            //     'name': {
            //         $regex: toko,
            //         $options: "i"
            //     }
            // }).then(function(result) {
            //     if (!result.length) {} else {
            //         console.log('res: ', result);
            //         res.json({
            //             speech: toko + ' di lantai ' + result,
            //             displayText: toko + ' di lantai ' + result,
            //             source: 'cari_toko'
            //         })
            //
            //     }
            // }).catch((err) => {
            //     console.log(err)
            // })

        }
    }
}



// request.get(restUrl, (err, response, body) => {
//   if (!err && response.statusCode == 200) {
//     let json = JSON.parse(body);
//    json.weather[0].description + ' and the temperature is ' + json.main.temp + ' ℉';
//     return res.json({
//       speech: msg,
//       displayText: msg,
//       source: 'weather'});
//   } else {
//     return res.status(400).json({
//       status: {
//         code: 400,
//         errorType: 'I failed to look up the city name.'}});
//   }})
//
// let word
// let floor
// const chatId = msg.chat.id;
// if (/floor/gi.test(msg.text)) {
//     floor = Number(msg.text.match(/\d*/g).join(""))
//     word = 'fkjhfsadhsaj dsajd hsajdhsa djsahdsa hdjsahdsa dsadjsadjsakdjsajdsa jdskaldsajfhasdfd sfhds fdshfdsjafh sdf'
// } else {
//     word = msg.text
// }
//
