'use strict';

require('./config').require(/*'libversion', '?buildinfo','sitedefaults'*/);

module.exports = {

    httpPort: 3010,

    server: {
       workers: 2
    },

    galette: {
        persist: 365*24*60*60 // 1 year of inactivity
    },

    redis: {
        ttl: {
            //KEY: TTL
        },

        maxUpdateCollisions:    10,
        collisionRetryDelay:    100,    // ms

        queueSamplingInterval:  200,    // ms
        infoSamplingInterval:   1000,   // ms
        loggingInterval:        60000,  // ms

        options: {
            socket_keepalive:   true,
            retry_max_delay:    3000    // ms
        },

        shutdownOnNoConnection: 3000    // ms
    },

    appHealth: {
        activeRequestSamplingInterval:  200,    // ms
        loggingInterval:                60000   // ms
    },


    gigya: {
        apiKey: '3_5E7ejDp2K8LJiC7z2bqdAb-woOUmr7x9Dvh-lTrKNE9vDyjR6Ux2OGlOfIeuddyt',
        secretKey: 'dF3BgKrGtBJdijmSc/2jvmYboOeeBRE0vgb8Kd7HMKU=',
        staticUrl: 'https://cdns.gigya.com/JS/gigya.js'
    },

    logger: {
        console: {
            level:  "info",
            colorize: true,
            timestamp: true
        }
    }
};
