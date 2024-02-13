Ext.define('ADP.view.team.Grid', {
  extend: 'Ext.grid.Grid',
  xtype: 'teamgrid',
  requires: ['Ext.grid.plugin.Summary'],

  scrollable: true,
  plugins: {
    gridsummaryrow: true
  },
  columns: [
    {
      text: 'Player',
      dataIndex: 'player',
      width: 175,
      renderer: 'up.playerNameRenderer'
    },
    { text: 'Positon', dataIndex: 'position', width: 100 },
    { text: 'Team', dataIndex: 'team', width: 100 },
    { text: 'Games', dataIndex: 'games', width: 100, summary: 'sum' },
    {
      text: 'Points',
      dataIndex: 'totalpts',
      width: 100,
      renderer: 'categoryRenderer',
      summaryRenderer: 'categorySummaryRenderer'
    },
    {
      text: '3s',
      dataIndex: 'threepm',
      width: 100,
      renderer: 'categoryRenderer',
      summaryRenderer: 'categorySummaryRenderer'
    },
    {
      text: 'Assists',
      dataIndex: 'totalast',
      width: 100,
      renderer: 'categoryRenderer',
      summaryRenderer: 'categorySummaryRenderer'
    },
    {
      text: 'Steals',
      dataIndex: 'totalstls',
      width: 100,
      renderer: 'categoryRenderer',
      summaryRenderer: 'categorySummaryRenderer'
    },
    {
      text: 'Rebounds',
      dataIndex: 'totalrb',
      width: 100,
      renderer: 'categoryRenderer',
      summaryRenderer: 'categorySummaryRenderer'
    },
    {
      text: 'Blocks',
      dataIndex: 'totalblk',
      width: 100,
      renderer: 'categoryRenderer',
      summaryRenderer: 'categorySummaryRenderer'
    },

    {
      text: 'FGA/g',
      dataIndex: 'fga',
      width: 100,
      renderer: 'categoryRenderer',
      summaryRenderer: 'categorySummaryRenderer'
    },
    {
      text: 'FG Made',
      dataIndex: 'fgm',
      width: 100,
      renderer: 'categoryRenderer',
      summaryRenderer: 'categorySummaryRenderer'
    },
    {
      text: 'FG%',
      dataIndex: 'fgp',
      width: 100,
      renderer: 'categoryRenderer',
      summaryRenderer: 'categorySummaryRenderer'
    },

    {
      text: 'FTA/game',
      dataIndex: 'fta',
      width: 100,
      renderer: 'categoryRenderer',
      summaryRenderer: 'categorySummaryRenderer'
    },
    {
      text: 'FT Made',
      dataIndex: 'ftm',
      width: 100,
      renderer: 'categoryRenderer',
      summaryRenderer: 'categorySummaryRenderer'
    },
    {
      text: 'FT%',
      dataIndex: 'ftp',
      width: 100,
      renderer: 'categoryRenderer',
      summaryRenderer: 'categorySummaryRenderer'
    }
  ]
});
