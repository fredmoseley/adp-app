Ext.define('ADP.model.PlayerData', {
  extend: 'ADP.model.Player',

  //   proxy: {
  //     type: 'ajax',
  //     url: 'url'
  //   }

  fields: [
    { name: 'id', type: 'int' },
    // { name: 'playerID', type: 'int', reference: 'Player' },
    { name: 'playerID', type: 'int' },
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

    'injury',
    { name: 'apg', type: 'number' },
    { name: 'bpg', type: 'number' },
    { name: 'fg', type: 'integer' },
    { name: 'fga', type: 'integer' },
    { name: 'fgm', type: 'integer' },
    { name: 'fgp', type: 'number' },
    { name: 'fta', type: 'integer' },
    { name: 'ftm', type: 'integer' },
    { name: 'ftp', type: 'number' },
    { name: 'games', type: 'integer' },
    { name: 'mpg', type: 'number' },
    { name: 'ppg', type: 'number' },
    { name: 'rbpg', type: 'number' },
    { name: 'spg', type: 'number' },
    { name: 'threepm', type: 'number' },
    { name: 'year', type: 'string' },
    { name: 'totalpts', type: 'integer' },
    { name: 'totalast', type: 'integer' },
    { name: 'totalrb', type: 'integer' },
    { name: 'totalstls', type: 'integer' },
    { name: 'totalblk', type: 'integer' },
    { name: 'totalmin', type: 'integer' }
  ]
});
