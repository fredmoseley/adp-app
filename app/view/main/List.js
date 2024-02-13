Ext.define('ADP.view.main.List', {
  extend: 'Ext.grid.Grid',
  xtype: 'mainlist',

  requires: [
    'ADP.store.Players',
    'ADP.store.PlayersData',
    'ADP.view.main.PlayerForm',
    'Ext.grid.plugin.Editable',
    'Ext.grid.plugin.RowExpander',
    'Ext.grid.filters.Plugin'
  ],
  reference: 'playeradpgrid',
  selectable: { mode: 'single' },
  // scrollable: {
  //   x: false,
  //   y: 'auto',
  //   listeners: {
  //     scroll(me, x, y, deltaX, deltaY, eOpts) {
  //       console.log(me.getTouchAction());
  //       if (deltaY > 0) {
  //         me.setTouchAction({
  //           panX: false
  //         });
  //       } else {
  //         me.setTouchAction({
  //           panY: false
  //         });
  //       }
  //     }
  //   }
  // },
  plugins: [
    {
      type: 'grideditable',
      enableDeleteButton: false,
      formConfig: {
        xtype: 'mainlistform'
      },

      toolbarConfig: {
        xtype: 'titlebar',
        docked: 'top',
        items: [
          {
            xtype: 'button',
            ui: 'alt round',
            text: 'Cancel',
            align: 'left',
            action: 'cancel'
          },
          {
            xtype: 'button',
            ui: 'alt round',
            text: 'Submit',
            align: 'right',
            action: 'submit'
          }
        ]
      }
    },
    { type: 'gridfilters' },
    { type: 'rowexpander' }
  ],

  bind: {
    store: '{playerstore}'
  },
  // store: {
  //   type: 'pstore'
  // },
  items: [
    {
      xtype: 'toolbar',
      docked: 'top',
      // - Double click to edit; Coslumn headers are sortable and filterable. ©Fred Moseley'
      platformConfig: {
        '!phone': {
          title: 'Draft ADP Tool'
        }
      },
      items: [
        {
          xtype: 'togglefield',
          label: 'Show drafted?',
          labelAlign: 'left',
          bind: {
            value: '{showDrafted}'
          },
          listeners: {
            change: 'showDraftedHandler'
          }
        }
      ]
    }
  ],

  itemConfig: {
    body: {
      bind: {
        tpl: '{rowBodyTpl}'
      }
    },
    viewModel: {
      formulas: {
        rowStyles: function (get) {
          const like = get('record.like');
          const drafted = get('record.drafted');
          let styles = [];

          drafted === true ? styles.push('drafted') : false;
          if (like !== 'undefined') {
            like === 'true' ? styles.push('like') : styles.push('dislike');
          }
          return styles.join(' ');
        },
        rowBodyTpl: function (get) {
          //I Envision this as a table
          const selectedRecord = get('record');
          const player = selectedRecord.get('player');
          const playersDataStore = Ext.data.StoreManager.lookup(
            'playersdatastore'
          );
          let tpl = '<div>PLAYER DATA NOT FOUND</div>';

          //find returns the index of the match record

          let match = null;
          let index = 0;

          match = playersDataStore.findRecord('player', player);

          //This is hard coded for now
          //   console.log(count++);
          //   return `<div>${data.get('player')} Last Year Stats </div>
          //   <div>${data.get('player')} Current Year Projections </div>
          //   `;

          if (
            match !== null &&
            match.get('team') === selectedRecord.get('team') &&
            match.get('position') === selectedRecord.get('position')
          ) {
            const threepg = (match.get('threepm') / match.get('games')).toFixed(
              2
            );
            tpl = `<div style='font-weight: bold; font-size: 1.5rem; margin-bottom: .5rem'>MOCK DATA.  CHANGES WILL NOT BE SAVED  </div> <table>
                    <thead>                   
                        <tr>
                            <th>Team</th>
                            <th>Year</th>
                            <th>Games</th>
                            <th>PPG</th>
                            <th>3PG</th>
                            <th>APG</th>
                            <th>RBG</th>
                            <th>BLK</th>
                            <th>FGA</th>
                            <th>FG%</th>
                            <th>FTA</th>
                            <th>FT%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${match.get('team')}</td>
                            <td>2018-19</td>
                            <td>${match.get('games')}</td>
                            <td>${match.get('ppg')}</td>
                            <td>${(
                              match.get('threepm') / match.get('games')
                            ).toFixed(2)}</td>
                            <td>${match.get('apg')}</td>
                            <td>${match.get('rbpg')}</td>
                            <td>${match.get('bpg')}</td>
                            <td>${(
                              match.get('fga') / match.get('games')
                            ).toFixed(1)}</td>
                            <td>${(match.get('fgm') / match.get('fga')).toFixed(
                              3
                            )}</td>
                            <td>${(
                              match.get('fta') / match.get('games')
                            ).toFixed(1)}</td>
                            <td>${(match.get('ftm') / match.get('fta')).toFixed(
                              3
                            )}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>${match.get('year')}</td>
                            <td>${match.get('games')}</td>
                            <td>${match.get('ppg')}</td>
                            <td>${(
                              match.get('threepm') / match.get('games')
                            ).toFixed(2)}</td>
                            <td>${match.get('apg')}</td>
                            <td>${match.get('rbpg')}</td>
                            <td>${match.get('bpg')}</td>
                            <td>${(
                              match.get('fga') / match.get('games')
                            ).toFixed(1)}</td>
                            <td>${(match.get('fgm') / match.get('fga')).toFixed(
                              3
                            )}</td>
                            <td>${(
                              match.get('fta') / match.get('games')
                            ).toFixed(1)}</td>
                            <td>${(match.get('ftm') / match.get('fta')).toFixed(
                              3
                            )}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>projections</td>
                            <td>${match.get('games')}</td>
                            <td>${match.get('ppg')}</td>
                            <td>${(
                              match.get('threepm') / match.get('games')
                            ).toFixed(2)}</td>
                            <td>${match.get('apg')}</td>
                            <td>${match.get('rbpg')}</td>
                            <td>${match.get('bpg')}</td>
                            <td>${(
                              match.get('fga') / match.get('games')
                            ).toFixed(1)}</td>
                            <td>${(match.get('fgm') / match.get('fga')).toFixed(
                              3
                            )}</td>
                            <td>${(
                              match.get('fta') / match.get('games')
                            ).toFixed(1)}</td>
                            <td>${(match.get('ftm') / match.get('fta')).toFixed(
                              3
                            )}</td>
                        </tr>
                    </tbody>
                </table>`;
          } else {
            //This is here for debugging
          }

          return tpl;
        }
      }
    },
    bind: {
      userCls: '{rowStyles}'
    }
  },

  columns: [
    {
      text: 'Rank',
      dataIndex: 'rank',
      width: 55,
      cell: {
        userCls: 'bold'
      }
    },
    {
      text: 'Player',
      dataIndex: 'player',
      width: 165,
      renderer: 'playerNameRenderer'
    },
    {
      text: 'Team',
      dataIndex: 'team',
      width: 65
    },
    { text: 'Pos', dataIndex: 'position', width: 55 },
    { text: 'ADP', dataIndex: 'adp', width: 75 },
    { text: 'Min', dataIndex: 'min', width: 50 },
    { text: 'Max', dataIndex: 'max', width: 50 },
    {
      text: 'Pros',
      dataIndex: 'pros',
      flex: 1,
      // width: 150,
      renderer: 'lookupCategories',
      filter: {
        type: 'string',
        menu: {
          items: {
            like: {
              width: 350,
              placeholder:
                '1=PTS; 2=REB; 3=3PM; 4=AST; 5=STL; 6=BLK; 7=FG%; 8=FT%'
            }
          }
        }
      }
    },
    {
      text: 'Cons',
      dataIndex: 'cons',
      flex: 1,
      //width: 150,
      renderer: 'lookupCategories',
      filter: {
        type: 'string',
        menu: {
          items: {
            like: {
              width: 350,
              placeholder:
                '1=PTS; 2=REB; 3=3PM; 4=AST; 5=STL; 6=BLK; 7=FG%; 8=FT%'
            }
          }
        }
      }
    },
    {
      //tooltip overflow is automatic
      text: 'Notes',
      dataIndex: 'notes',
      flex: 2
    }
  ],
  // onRender: function () {
  //   const me = this;
  //   this.callParent();
  //   Ext.util.Observable.capture(me, function () {
  //     console.log('ADP List', arguments);
  //   });
  // },
  referenceHolder: true,
  listeners: {
    //storechange: 'addObservable',
    childlongpress: 'quickdraftplayer'
  }
});
