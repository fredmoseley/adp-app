Ext.define('ADP.view.team.Container', {
  extend: 'Ext.panel.Accordion',

  xtype: 'teamcontainer',
  requires: ['ADP.view.team.Grid'],
  controller: 'teamcontainer',
  viewModel: {
    type: 'teamcontainer'
  },
  reference: 'teamcontainer',
  // tabBarPosition: 'top',
  platformConfig: {
    phone: {
      openable: 1
    },
    '!phone': {
      openable: 2
    }
  },
  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  defaults: {
    flex: 1
  },
  defaults: {
    xtype: 'panel',
    bodyPadding: 10,
    flex: 1,
    layout: 'fit'
  },
  items: [
    {
      title: 'Starters',
      items: {
        xtype: 'teamgrid',
        reference: 'startergrid',
        bind: {
          store: '{starterStore}'
        }
      }
    },
    {
      title: 'Reserves',
      items: {
        xtype: 'teamgrid',
        reference: 'reservegrid',
        bind: {
          store: '{reserveStore}'
        }
      }
    }
  ],

  listeners: {}
});
