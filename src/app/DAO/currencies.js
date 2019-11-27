'use strict'
const https = require('https');
const globals = require('../util/globals');

class currency {

    constructor() {
        this.global = globals;
    }

    getRates(from, to, amount) {
        return new Promise((resolve, reject) => {
            let base = 'USD';

            this.loadCurrency(base, () => {
                this.getCryptoCoinCurrency(base);
            })
        });
    }

    loadCurrency(base, callback) {
        https.get(`https://api.exchangeratesapi.io/latest?base=${base}`, (response) => {
            let data = '';
            response.on('data', (chunk) => {
                data += chunk
            });
            response.on('end', () => {
                console.log(data);
                if(this.global.setCache('rate', JSON.parse(data))) {
                    console.log(this.global.getCacheByKey('rate'));
                }
                callback();
            });
        });
    }

    getCryptoCoinCurrency(base) {

    }
}

module.exports = new currency();