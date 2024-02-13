//https://sencha.jira.com/browse/EXTJS-28834
//multiselect combobox loses selected values when forceSelection true
Ext.define(null, {
  override: 'Ext.field.ComboBox',
  completeEdit: function () {
    var me = this,
      inputValue = me.getInputValue(),
      value = me.getValue(),
      selection = me.getSelection();
    // Don't want to callParent here, we need custom handling
    if (me.doFilterTask) {
      me.doFilterTask.cancel();
    }
    // Allow the input value to add a new value if configured to do so.
    if (!me.getForceSelection() && me.getMultiSelect()) {
      // If there is input left, then if selectOnTab is set, process it
      // into a new value, otherwise clear the input.
      if (inputValue) {
        if (this.getSelectOnTab()) {
          me.addNewMultiValues();
        } else {
          this.setInputValue('');
        }
      }
    } else {
      // We must not leave an inconsistent state.
      // So if there's a textual value, there must be some
      // selection.
      if (inputValue) {
        // Prevent an issue where we have duplicate display values with
        // different underlying values. If the typed value exactly matches
        // the selection Record, we must not do a syncValue.
        if (
          !selection ||
          selection.get(this.getDisplayField()) !== inputValue
        ) {
          me.syncMode = 'input';
          me.syncValue();
          // If syncValue finds that they quit after typing some non-matchable text,
          // revert to the underlying value.
          if (!me.getValue()) {
            me.setValue(value);
          }
        }
      }
      // They cleared out the text, and are leaving.
      // If there's an underlying value:
      //  If we're required, restore the display
      //  Else clear the selection
      else if (selection) {
        if (me.getRequired()) {
          me.setFieldDisplay(selection);
        } else {
          // OVERRIDE
          // me.setSelection(null);
          if (!this.getMultiSelect()) {
            me.setSelection(null);
          }
          // END OVERRIDE
        }
      }
      if (me.getTypeAhead()) {
        me.select(inputValue ? inputValue.length : 0);
      }
    }
  }
});
