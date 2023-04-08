const mercadopago = require('mercadopago')
let c="APP_USR-2534937450399201-040416-08aace381f8e98556b31ae5149d2d419-1345817554"


mercadopago.configure({
    access_token: c,
    // client_id: process.env.MP_CLIENT_ID,
    // client_secret: process.env.MP_CLIENT_SECRET
})

module.exports = mercadopago