/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ADP.Application', {
  extend: 'Ext.app.Application',

  name: 'ADP',

  quickTips: true,
  // platformConfig: {
  //   desktop: {
  //     quickTips: true
  //   }
  // },
  init: function () {
    //console.log('Application INIT....');
    //I really don't like this here.  But this needs to load before the playeradpdata
    //Doesn't matter just for local testing.  In the end datacoming from DB
    d3.tsv('resources/data/stats-edited.tsv', function (data) {
      data.player = data.player.replace(/\s/g, '');
      data.position = data.position.replace(/\s/g, '');
      return {
        ...data,
        year: '2019-20'
      };
    }).then(function (data) {
      //columns array on data.columns
      //The app namespace is global 'ADP'

      const playersDataStore = Ext.create('ADP.store.PlayersData', {
        storeId: 'playersdatastore'
      });

      playersDataStore.loadData(data);
    });
  },
  launch: function () {},
  onAppUpdate: function () {
    Ext.Msg.confirm(
      'Application Update',
      'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload();
        }
      }
    );
  }
});
