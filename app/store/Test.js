Ext.define('ADP.store.Test', {
  extend: 'Ext.data.Store',
  alias: 'store.teststore',
  autoLoad: true,
  fields: ['name', 'rank', 'position'],
  data: [
    { rank: 1, team: 'Fred', position: 'position' },
    { rank: 1, team: 'Kevin', position: 'position' },
    { rank: 1, team: 'Bryan', position: 'position' }
  ]
});
