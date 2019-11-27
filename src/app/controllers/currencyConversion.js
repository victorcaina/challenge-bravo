const currencies = require('../DAO/currencies');
const globals = require('../util/globals');

class currencyConversionController {

    constructor() {
        this.global = globals;
    }

    async convert(req, res) {
        const { from, to, amount } = req.query;
        console.log('oi');
        let curiencie = await currencies.getRates(from, to, amount);

        console.log('lero1', this.global.getCacheByKey('rate'));
    }

}

module.exports = new currencyConversionController();