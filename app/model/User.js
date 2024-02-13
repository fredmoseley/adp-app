Ext.define('ADP.model.User', {
  extend: 'ADP.model.Base',

  //   proxy:{
  //       type: 'ajax',
  //       url: 'url'
  //   }

  fields: [
    { name: 'id' },
    { name: 'username', type: 'string' },
    { name: 'email', type: 'string' },
    { name: 'firstname', type: 'string' },
    { name: 'lastname', type: 'string' },
    { name: 'password', type: 'string' }
  ],

  validators: {
    username: ['presence', { type: 'length', min: 5, max: 15 }],
    email: ['presence', { type: 'email' }],
    password: ['presence', { type: 'length', min: 5, max: 20 }]
  }
});
