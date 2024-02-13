Ext.define('ADP.store.Players', {
  extend: 'Ext.data.Store',

  alias: 'store.playersadp',
  storeId: 'playersstore',
  model: 'ADP.model.Player',
  autoLoad: false,
  filters: [
    {
      property: 'drafted',
      id: 'drafted-filter',
      value: false
    }
  ],
  // autoSync: true,
  // proxy: {
  //   type: 'ajax',
  //   url: 'http://playerdatastore'
  // },
  // proxy: {
  //   type: 'memory',
  //   reader: {
  //     type: 'json',
  //     rootProperty: 'items'
  //   }
  // },

  listeners: {}
  // listeners: {
  //   update: function (store, record, operation, modifedFields, details) {
  //     let index = modifedFields.indexOf('onmyteam'),
  //       match = null;
  //     const teamStore = Ext.StoreManager.lookup('teamstore'),
  //       onMyTeam = record.get('onmyteam'),
  //       player = record.get('player');

  //     //Or player on my team
  //     //I have the modified field and value
  //     if (onMyTeam) {
  //       console.log('On my team');
  //       match = teamStore.findRecord('player', player);
  //       if (match) {
  //         //modified fields === starter;
  //         if (!record.get(starter)) {
  //         } else {
  //         }
  //         //clear starter
  //       }
  //     } else if (index >= 0) {
  //       //this just means onmyteam edited
  //       //Find player projected stats in playerdata
  //       //Add record to teamstore as it does not exist
  //       const playersDataStore = Ext.data.StoreManager.lookup(
  //         'playersdatastore'
  //       );
  //       match = null;
  //       match = playersDataStore.findRecord('player', player);

  //       if (
  //         match !== null &&
  //         match.get('team') === record.get('team') &&
  //         match.get('position') === record.get('position')
  //       ) {
  //         //I hope its OK I am adding record from another.
  //         //What about the id
  //         //Need to set starter
  //         match.set({
  //           starter: record.get('starter')
  //           //WHY IS ON MY TEAM AND DRAFTED ON THIS RECORD.
  //           //THIS IS PLAYERDATA NOT PLAYER
  //           // onmyteam: record.get('onmyteam'),
  //           // drafted: record.get('drafted')
  //         });
  //         teamStore.add(match);
  //       }
  //     } else {
  //       //delete record from teamstore
  //       console.log('Check if on my team and remove');

  //       match = teamStore.findRecord('player', player);
  //       if (match !== null) {
  //         teamStore.remove(match);
  //       }
  //     }
  //   }
  // }
});
