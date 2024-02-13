Ext.define('ADP.view.main.SimpleList', {
  extend: 'Ext.grid.Grid',
  xtype: 'simplelist',
  title: 'Simple List',
  store: null,
  columns: [
    {
      text: 'Name',
      dataIndex: 'team',
      width: 100
    },
    {
      text: 'rank',
      dataIndex: 'rank',
      width: 100
    },
    {
      text: 'Position',
      dataIndex: 'position',
      width: 100
    }
  ]
});
