const nodeCache = require('node-cache');

class globals {
    constructor() {
        this.cache = new nodeCache({
            stdTTL: 100,
            checkperiod: 120
        });
    }

    setCache(key, value) {
        this.cache.set(key, value, 10);
    }

    getCacheByKey(key) {
        if (!!key) {
            return this.cache.get(key);
        }
    }

    deleteCacheByKey(key) {
        if (!!key) {
            this.cache.del(key);
        }
    }
}

module.exports = new globals();