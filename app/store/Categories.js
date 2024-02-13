Ext.define('ADP.store.Categories', {
  extend: 'Ext.data.Store',
  alias: 'store.categories',
  storeId: 'categoriesstore',

  model: 'ADP.model.Category',
  //1=PTS; 2=REB; 3=3PM; 4=AST; 5=STL; 6=BLK; 7=FG%; 8=FT%
  data: [
    {
      id: 1,
      attribute: 'PTS'
    },
    {
      id: 2,
      attribute: 'REB'
    },
    {
      id: 3,
      attribute: '3PM'
    },
    {
      id: 4,
      attribute: 'AST'
    },
    {
      id: 5,
      attribute: 'STL'
    },
    {
      id: 6,
      attribute: 'BLK'
    },
    {
      id: 7,
      attribute: 'FG%'
    },
    {
      id: 8,
      attribute: 'FT%'
    }
  ]
});
