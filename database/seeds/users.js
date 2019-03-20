'use strict';

const
  _ = require('lodash'),
  bcrypt = require('bcryptjs'),
  User = require('../../src/models/userModel').User

module.exports = (companies, oauthClients) => (
  [
    new User({
      username: 'marcelo.baltar@vale.com',
      password: bcrypt.hashSync('123', bcrypt.genSaltSync(8), null),
      firstName: 'Marcelo',
      lastName: 'Baltar',
      isAdministrator: true,
      insertDate: new Date(),
      updateDate: new Date(),
      isActive: true,
      companies: companies,
      company: _.find(companies, company => company.fantasyName === 'GAPIP')._id,
      oauthClients: [_.find(oauthClients, oauthClient => oauthClient.clientId === 'site')]
    }),
  ]
)