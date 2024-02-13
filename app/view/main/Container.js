Ext.define('ADP.view.main.Container', {
  extend: 'Ext.panel.Panel',
  xtype: 'main-container',
  requires: ['ADP.view.main.Main'],
  title: 'ADP Draft Tool',
  items: [{ xtype: 'app-main' }]
});
