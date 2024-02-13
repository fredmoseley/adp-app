Ext.define('ADP.view.main.Main', {
  extend: 'Ext.tab.Panel',
  xtype: 'app-main',

  requires: ['Ext.MessageBox', 'ADP.view.main.SimpleList', 'ADP.store.Test'],
  controller: 'main',
  viewModel: 'main',
  layout: {
    type: 'card',
    // animation: {
    //   type: 'slide'
    // }
    animation: null
  },
  tabBarPosition: 'bottom',

  // onRender: function () {
  //   const me = this;
  //   this.callParent();
  //   Ext.util.Observable.capture(me, function () {
  //     console.log('Team Container', arguments);
  //   });
  // },

  items: [
    {
      // title: 'ADP List',    //tabpanel title
      title: 'ADP List', //when in container  becomes app title
      iconCls: 'x-fas fa-list',
      xtype: 'mainlist'
    },
    {
      title: 'My Team',
      iconCls: 'x-fas fa-users',
      xtype: 'teamcontainer'
    }
  ],
  listeners: {
    activeitemchange: 'onActiveItemChange'
  }
});
