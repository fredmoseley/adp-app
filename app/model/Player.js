Ext.define('ADP.model.Player', {
  extend: 'ADP.model.Base',
  idProperty: 'rank',
  // proxy: {
  //   type: 'ajax',
  //   url: 'url'
  // },
  fields: [
    { name: 'rank', type: 'integer' },
    'player',
    {
      name: 'firstName',
      calculate: function (data) {
        return data.rank !== null ? data.player.split(',')[1].trim() : 'NODATA';
      }
    },
    {
      name: 'lastName',
      calculate: function (data) {
        return data.rank !== null ? data.player.split(',')[0].trim() : 'NODATA';
      }
    },
    'team',
    'position',
    { name: 'adp', type: 'number' },
    { name: 'min', type: 'integer' },
    { name: 'max', type: 'integer' },

    //My custom fields from the PlayerForm
    { name: 'like', type: 'string', defaultValue: 'undefined' },
    { name: 'tier', type: 'integer', defaultValue: 0 },
    { name: 'notes', type: 'string', defaultValue: '' },
    { name: 'pros', type: 'string', defaultValue: '' },
    { name: 'cons', type: 'string', defaultValue: '' },
    { name: 'drafted', type: 'boolean', defaultValue: false },
    { name: 'onmyteam', type: 'boolean' },
    { name: 'starter', type: 'boolean' }
  ]
});
