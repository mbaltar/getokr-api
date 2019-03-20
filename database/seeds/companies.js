'use strict';

const
    _ = require('lodash'),
    Company = require('../../src/models/companyModel').Company

module.exports = () => (

    [
        new Company({
            fantasyName: 'GAPIP',
            plan: {
                name: 'Business'
            },
            phone: '(31) 98456-3747',
            isActive: true
        })
    ]

)