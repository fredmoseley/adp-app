Ext.define('ADP.view.main.PlayerFormController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.playerform',

  onPlayerFormButtonClick: function (button) {
    const buttonId = button.getItemId().toLowerCase(),
      playerForm = this.getView();

    switch (buttonId) {
      case 'like':
        playerForm.setValues({ like: 'true' });
        playerForm.setBodyCls('like-background');
        break;
      case 'dislike':
        playerForm.setValues({ like: 'false' });
        playerForm.setBodyCls('dislike-background');
        break;
      default:
        playerForm.setValues({ like: 'undefined' });
        playerForm.setBodyCls('');
        break;
    }
  },

  onPlayFormPainted: function () {
    const playerForm = this.getView(),
      prosCombo = playerForm.down('combobox[name="pros"]'),
      consCombo = playerForm.down('combobox[name="cons"]'),
      playerDisplay = this.lookupReference('playerdisplay'),
      selectedRecord = Ext.ComponentQuery.query('mainlist')[0].getSelection(),
      prosValue = selectedRecord.get('pros'),
      consValue = selectedRecord.get('cons'),
      like = selectedRecord.get('like');
    // this broke after adding fieldset
    // const prosCombo = this.lookupReference('proscombo'),
    // consCombo = this.lookupReference('conscombo'),
    //Set player name displayfield
    console.log('PlayerForm playerDisplay', playerDisplay);
    playerDisplay.setLabel(
      `${selectedRecord.get('firstName')} ${selectedRecord.get('lastName')}`
    );

    //prosCombo.setValue([1,2,3]) value must be an array
    if (prosValue) {
      prosCombo.setValue(prosValue.split(','));
    }
    consValue.length > 0 ? consCombo.setValue(consValue.split(',')) : false;
    //force the user to commit or cancel
    Ext.ComponentQuery.query('sheet')[0].setHideOnMaskTap(false);

    //load like/dislike background. this is a string and not bool
    if (like === 'true') {
      playerForm.setBodyCls('like-background');
    } else if (like === 'false') {
      playerForm.setBodyCls('dislike-background');
    } else if (like === 'undefined') {
      playerForm.setBodyCls('');
    }
  },

  onDraftCheckBoxChange: function (checkbox, newValue, oldValue) {
    const formpanel = this.getView(),
      fieldset = formpanel.down('fieldset');
    if (newValue === false) {
      fieldset.unmask();
      //clear onmyteam and starter checkbox
      formpanel.setValues({
        onmyteam: false,
        starter: false
      });
    } else {
      fieldset.mask();
    }
  }
});
