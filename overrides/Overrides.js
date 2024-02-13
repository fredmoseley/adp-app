// Ext.define(null, {
//   override: 'Ext.grid.plugin.Editable'
// onSubmitTap: function () {
//   let record = null;

//   console.log('onSubmitTap');
//   debugger;
//   this.form.getRecord().set(this.form.getValues());
//   record = this.form.getRecord();

//   this.sheet.hide();
//   if (record.get('onmyteam')) {
//     //look up record in playerdatastore
//     //add record to teamstore
//   } else {
//     //1.  look up reocrd in team store.
//     //2. if there delete record
//   }
// }

//I override this because form changes will be lost
/* onCancelTap: function () {
    const playerForm = Ext.ComponentQuery.query('mainlistform')[0],
      formValues = playerForm.getValues();
    let formEdited = false;
    //check each value
    for (let key in formValues) {
      if (typeof formValues[key] === 'string') {
        if (formValues[key].length > 0 && formValues[key] !== 'undefined') {
          formEdited = true;
        }
      } else if (typeof formValues[key] === 'object') {
        if (formValues[key] !== null) {
          formEdited = true;
        }
      }
    }
    if (formEdited) {
      Ext.Msg.confirm(
        'Confirmation',
        'You made changes to the form.  Are you sure you want to cancel?',
        function (buttonText) {
          if (buttonText.toUpperCase() === 'YES') {
            Ext.ComponentQuery.query('mainlistform')[0].up('sheet').hide();
          }
        }
      );
    } else {
      Ext.ComponentQuery.query('mainlistform')[0].up('sheet').hide();
    }
  },
  onTrigger: function (grid, location) {
    var me = this,
      record = location.record,
      formConfig = me.getFormConfig(),
      toolbarConfig = me.getToolbarConfig(),
      fields,
      form,
      sheet,
      toolbar;

    // Don't want to react to grid headers etc
    if (!record || !location.row) {
      return;
    }

    if (formConfig) {
      me.form = form = Ext.factory(formConfig, Ext.form.Panel);
    } else {
      me.form = form = Ext.factory(me.getDefaultFormConfig());

      fields = me.getEditorFields(grid.getColumns());
      form.down('fieldset').setItems(fields);
      form.clearFields = true;
    }

    toolbar = Ext.factory(toolbarConfig, Ext.form.TitleBar);
    me.submitButton = toolbar.down('button[action=submit]');
    toolbar.down('button[action=cancel]').on('tap', 'onCancelTap', me);
    me.submitButton.on('tap', 'onSubmitTap', me);

    // We sync the enabled state of the submit button with form validity
    form.on({
      change: 'onFieldChange',
      delegate: 'field',
      scope: me
    });
    form.setRecord(record);

    me.sheet = sheet = grid.add({
      xtype: 'sheet',
      items: [toolbar, form],
      hideOnMaskTap: true,
      enter: 'right',
      exit: 'right',
      right: 0,
      width: 320,
      layout: 'fit',
      stretchY: true,
      hidden: true
    });

    if (me.getEnableDeleteButton()) {
      form.add({
        xtype: 'button',
        text: 'Delete',
        ui: 'decline',
        margin: 10,
        handler: function () {
          grid.getStore().remove(record);
          sheet.hide();
        }
      });
    }

    sheet.on('hide', 'onSheetHide', me);

    sheet.show();
  }*/
// });
