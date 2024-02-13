Ext.define('ADP.store.PlayersData', {
  extend: 'Ext.data.Store',

  alias: 'store.playersdata',
  //storeId: 'playersdatastore',
  model: 'ADP.model.PlayerData',
  autoLoad: false,

  proxy: {
    type: 'memory',
    reader: {
      type: 'json',
      rootProperty: 'items'
    }
  }
});
