/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ADP.view.main.MainModel', {
  extend: 'Ext.app.ViewModel',

  alias: 'viewmodel.main',

  data: {
    name: 'ADP',
    showDrafted: false
  },
  stores: {
    teamstore: {
      model: 'ADP.model.PlayerData',
      storeId: 'teamstore'
    },
    playerstore: {
      type: 'playersadp',
      alias: 'store.pstore'
    },
    categoriesstore: {
      type: 'categories'
    },
    playerStoreCopy: {
      xtype: 'chainedstore',
      source: '{playerstore}',
      filters: [
        {
          property: 'drafted',
          value: true
        },
        {
          property: 'onmyteam',
          value: true
        }
      ]
    }
  }
});
