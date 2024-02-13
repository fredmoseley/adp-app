//https://sencha.jira.com/browse/EXTJS-29331
//Modern MultiSelect Combo allows deleting disabled selections
//CSS component of override in List.scss
Ext.define(null, {
  override: 'Ext.field.Select',

  initialize: function () {
    this.on('disabledchange', 'onDisabledChange', this);
    if (this.getReadOnly()) {
      this.toggleCls('disable-close-icon', true);
    }
  },
  onDisabledChange: function (combo, value, oldValue, eOpts) {
    //app css class to disable the close icon
    //see app.css
    this.toggleCls('disable-close-icon', value);
  },
  privates: {
    onChipCloseTap: function (chipView, location) {
      var record = location.record;
      //add condition to prevent close if combo (this) is disabled or readOnly
      if (!this.isDisabled() && !this.getReadOnly()) {
        chipView.getNavigationModel().clearLocation();
        chipView.getSelectable().deselect(record);
        this.getValueCollection().remove(record);

        location.event.stopEvent();
      }
      return false;
    }
  }
});
