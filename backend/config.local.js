'use strict';

//
//  Root of the inheritance hierarchy for all configs
//

require('./config').require('default');

module.exports = {
    server: {
       workers: 4
    }
}
