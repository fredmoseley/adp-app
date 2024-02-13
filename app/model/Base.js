Ext.define('ADP.model.Base', {
  extend: 'Ext.data.Model',

  schema: {
    namespace: 'ADP.model'
  },
  //https://sencha.jira.com/browse/EXTJS-16732
  getErrors: function () {
    var errors = [],
      validation = this.getValidation();

    if (validation) {
      Ext.iterate(
        validation.getData(),
        function (field, value) {
          if (true !== value)
            this.push({
              field: field,
              message: value
            });
        },
        errors
      );
    }
    return errors;
  }
});
