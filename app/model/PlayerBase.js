Ext.define('ADP.model.PlayerBase', {
  extend: 'ADP.model.Base',

  fields: [
    //Doncic, Luka
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
    'position'
  ]
});
