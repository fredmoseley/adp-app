Ext.define('ADP.view.main.PlayerForm', {
  extend: 'Ext.form.Panel',
  xtype: 'mainlistform',
  itemId: 'playerform',
  url: 'TEMPFORMURL',
  requires: ['ADP.store.Categories', 'Ext.Toast'],

  controller: 'playerform',
  viewModel: 'playerform',
  scrollable: true,
  layout: {
    type: 'vbox',
    align: 'stretch'
  },

  items: [
    {
      xtype: 'displayfield',
      label: 'Press submit to save changes.'
      // margin: 0
    },
    {
      xtype: 'displayfield',
      reference: 'playerdisplay',
      labelCls: 'player-form-display'
      // margin: '8 0'
    },
    {
      xtype: 'fieldset',
      defaults: {
        store: 'categoriesstore',
        forceSelection: true,
        multiSelect: true,
        picker: 'floated',
        queryMode: 'local',
        displayField: 'attribute',
        valueField: 'id'
      },
      items: [
        {
          xtype: 'combobox',
          name: 'pros',
          label: 'Pros',
          // store: 'categoriesstore',
          // // reference: 'proscombo',
          // forceSelection: true,
          // multiSelect: true,
          // picker: 'floated',
          // queryMode: 'local',
          // displayField: 'attribute',
          // valueField: 'id',
          tooltip: 'Categories where the player is an asset',
          bind: {
            disabled: '{draftedcheckbox.checked}'
          }
        },
        {
          xtype: 'combobox',
          name: 'cons',
          label: 'Cons',
          // store: 'categoriesstore',
          // // reference: 'conscombo',
          // forceSelection: true,
          // multiSelect: true,
          // picker: 'floated',

          // queryMode: 'local',
          // displayField: 'attribute',
          // valueField: 'id',
          tooltip: 'Categories where the player is an liability',
          bind: {
            disabled: '{draftedcheckbox.checked}'
          }
        },
        {
          xtype: 'textareafield',
          name: 'notes',
          label: 'Notess',
          bind: {
            disabled: '{draftedcheckbox.checked}'
          }
        },
        {
          xtype: 'hiddenfield',
          //   margin: '64 0 0 0',
          name: 'like'
          //   bind: {
          //     disabled: '{draftedcheckbox.checked}'
          //   },
          //   //only if displayfield
          //   labelAlign: 'left',
          //   labelWidth: 50,
          //   label: 'Like?',
          //   renderer: function (value) {
          //     return value === 'undefined' ? '' : value;
          //   }
        },

        {
          xtype: 'container',
          margin: '64 0',
          layout: {
            type: 'hbox'
          },
          defaults: {
            bind: {
              disabled: '{draftedcheckbox.checked}'
            }
          },
          items: [
            {
              xtype: 'button',
              iconCls: 'like x-fas fa-thumbs-up fa-2x',
              align: 'left',
              handler: 'onPlayerFormButtonClick',
              flex: 1,
              tooltip: 'Like Player',
              itemId: 'like'
            },
            // {
            //   xtype: 'container',
            //   flex: 0.5
            // },
            {
              xtype: 'button',
              iconCls: 'x-fas fa-ban',
              align: 'center',
              handler: 'onPlayerFormButtonClick',
              flex: 1,
              tooltip: 'Clear',
              itemId: 'clear'
            },
            {
              xtype: 'button',
              iconCls: 'dislike x-fas fa-thumbs-down',
              align: 'right',
              handler: 'onPlayerFormButtonClick',
              flex: 1,
              tooltip: 'He Sucks!',
              itemId: 'dislike'
            }
          ]
        }
      ]
    },
    {
      xtype: 'checkboxfield',
      name: 'drafted',
      reference: 'draftedcheckbox',
      labelWrap: true,
      labelWidth: 150,
      label: 'Draft Player',
      listeners: {
        change: 'onDraftCheckBoxChange'
      }
    },
    {
      //This shows up after.
      xtype: 'checkboxfield',
      name: 'onmyteam',
      reference: 'onmyteamcheckbox',
      labelWrap: true,
      labelWidth: 150,
      bind: {
        hidden: '{!draftedcheckbox.checked}'
      },
      label: 'Add to my team'
    },
    {
      xtype: 'checkboxfield',
      name: 'starter',
      label: 'Starter',
      bind: {
        hidden: '{!onmyteamcheckbox.checked}'
      }
    }
  ],
  listeners: {
    painted: 'onPlayFormPainted'
  }
});
