Ext.define('ADP.view.team.ContainerModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.teamcontainer',
  data: {
    name: 'ADP'
  },
  stores: {
    // Lets use a chained store

    reserveStore: {
      xtype: 'chainedstore',
      source: '{teamstore}',
      filters: [
        {
          id: 'reserve-filter',
          property: 'starter',
          value: false
        }
      ]
    },

    starterStore: {
      xtype: 'chainedstore',
      source: '{teamstore}',
      filters: [
        {
          id: 'reserve-filter',
          property: 'starter',
          value: true
        }
      ]
    }
  }
});
