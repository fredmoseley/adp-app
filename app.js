/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
  extend: 'ADP.Application',

  name: 'ADP',
  //stores: ['PlayersData'],
  requires: [
    // This will automatically load all classes in the ADP namespace
    // so that application classes do not need to require each other.
    'ADP.*'
  ],
  // The name of the initial view to create.
  mainView: 'ADP.view.main.Main'
});
