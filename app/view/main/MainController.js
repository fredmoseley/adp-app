Ext.define('ADP.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.main',

  //INIT IS TOO SOON VMSTORES NOT CREATED YET
  //after initconfig
  // init: function () {
  //   console.log('init');
  // },
  //before init
  init: function () {
    // //load tsv data
    d3.tsv('resources/data/ADPedited.tsv', function (data) {
      data.player = data.player.replace(/\s/g, '');
      data.position = data.position.replace(/\s/g, '');
      return {
        ...data
      };
    }).then(function (data) {
      //columns array on data.columns
      //The app namespace is global 'ADP'
      //const playersStore = ADP.app.getStore('playersstore');
      const mainView = ADP.getApplication().getMainView();
      // const store = mainView.down('grid').getStore();
      const store = mainView.getViewModel().get('playerstore');

      store.loadData(data);
    });
    //create categories store.  I need it to lookup categories for my pros, cons column renderer
    // Ext.create('ADP.store.Categories');
    //Create global teamstore
    // Ext.create('ADP.store.PlayersData', { storeId: 'teamstore' });
  },

  showDraftedHandler: function (toglefield, newValue, oldValue) {
    //Not necessary with binding
    //Scratch that binding does not remove the filter
    const playersStore = this.getStore('playerstore');

    // const playersStore = Ext.getStore('playersstore');
    this.getViewModel().set('showDrafted', newValue);
    if (newValue === true) {
      playersStore.removeFilter('drafted-filter');
    } else {
      playersStore.addFilter({
        id: 'drafted-filter',
        property: 'drafted',
        value: false
      });
    }
  },

  //playerform renderer helper for pros and cons columns in grid
  lookupCategories: function (categoryIds) {
    if (categoryIds.length !== 0) {
      const categoryIdArr = categoryIds.split(',');
      const store = Ext.getStore('categoriesstore');

      let categoryNameArr = categoryIdArr.map((value) => {
        return store.getById(value).get('attribute');
      });
      return categoryNameArr.join(', ');
    }
    return categoryIds;
  },
  playerNameRenderer: function (value, rec) {
    const nameArray = value.split(',');
    return `${nameArray[1]} ${nameArray[0]}`;
  },
  addObservable: function (observable, store) {
    // console.log(observable);
    Ext.util.Observable.capture(store, function () {
      console.log(store.storeId, arguments);
    });
  },
  loadTeamStore: function () {
    const playersStore = this.getStore('playerstore');
    const savedFilters = Ext.clone(playersStore.getFilters().items);
    const teamStore = this.getStore('teamstore');
    let match = null;
    //should I create a chained version of the playerstore? or use origina
    //1. clear all filters
    playersStore.clearFilter();
    //2. get a ref to playersStoreCopy, playerData
    const onMyTeamStore = this.getStore('playerStoreCopy');
    const playersDataStore = Ext.data.StoreManager.lookup('playersdatastore');
    //3.  getData.items()
    const onMyTeamRecords = onMyTeamStore.getData().items;
    //I should stop store listeners durng load
    for (record of onMyTeamRecords) {
      match = playersDataStore.findRecord('player', record.get('player'));
      if (
        match !== null &&
        match.get('team') === record.get('team') &&
        match.get('position') === record.get('position')
      ) {
        match.set({
          onmyteam: record.get('onmyteam'),
          starter: record.get('starter')
        });
        teamStore.add(match);
      } else {
        throw `Could not find ${record.get('player')}`;
      }
    }

    //restore saved filters
    playersStore.setFilters(savedFilters);
  },
  onActiveItemChange: function (tabpanel, activeItem, oldItem) {
    if (activeItem.getReference() === 'teamcontainer') {
      //Load team store
      this.loadTeamStore();
    } else {
      //alternatively I can just clear the store
      this.getStore('teamstore').removeAll();
    }
  },
  quickdraftplayer: function (grid, location) {
    const rec = location.record;
    console.log(rec.getData());
    Ext.Msg.confirm(
      `Are you sure you want to draft ${this.displayPlayerName(
        rec.get('player')
      )}`,
      '',
      function (buttonId) {
        if (buttonId.toUpperCase() === 'YES') {
          rec.set('drafted', true);
        }
      }
    );
    //1. get the selected record
    //2. set drafted to true
  },
  displayPlayerName: function (player) {
    playerNameArr = player.split(',');
    return `${playerNameArr[1]} ${playerNameArr[0]}`;
  }
});
