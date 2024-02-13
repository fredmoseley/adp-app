//Should probably use associations with User Model
Ext.extend('ADP.model.UserPlayerNote', {
  extend: 'ADP.base.model',
  fields: [
    { name: 'id', type: 'int' },
    // { name: 'userid', type: 'int', reference: 'User' },
    { name: 'userid', type: 'int' },

    { name: 'playerid' },
    { name: 'pros' },
    { name: 'cons' },
    { name: 'notes', type: 'string' }
  ]
});
