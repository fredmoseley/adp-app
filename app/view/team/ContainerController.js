Ext.define('ADP.view.team.ContainerController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.teamcontainer',

  calculatePerGame(totalStat, games) {
    return totalStat / games;
  },

  categoryRenderer: function (index, rec, category) {
    const games = rec.get('games'),
      categoryData = rec.get(category);

    if (category !== 'fgp' && category !== 'ftp') {
      return this.calculatePerGame(categoryData, games).toFixed(1);
    }

    //handle percentages
    if (category === 'fgp') {
      return (rec.get('fgm') / rec.get('fga')).toFixed(3);
    } else if (category === 'ftp') {
      return (rec.get('ftm') / rec.get('fta')).toFixed(3);
    }
  },
  //Takes an stat
  calcSummaryPerGame(statsArray, category) {
    let gamesCount = 0,
      categoryCount = 0;

    statsArray.forEach(function (rec, index, array) {
      categoryCount += rec.get(category);
      gamesCount += rec.get('games');
    });

    return categoryCount / gamesCount;
  },

  calcSummaryPercentages(statsArray, attCategory, madeCategory) {
    let attempts = 0,
      made = 0;

    statsArray.forEach(function (rec, index, array) {
      made += rec.get(madeCategory);
      attempts += rec.get(attCategory);
    });

    return made / attempts;
  },

  categorySummaryRenderer(_, summaryInfo) {
    let perGame = 0,
      precision = 1;

    console.log('SummaryRenderer');

    if (summaryInfo.records.length === 0) return 0;

    if (summaryInfo.dataIndex !== 'fgp' && summaryInfo.dataIndex !== 'ftp') {
      perGame = this.calcSummaryPerGame(
        summaryInfo.records,
        summaryInfo.dataIndex
      );
    } else {
      precision = 3;
      if (summaryInfo.dataIndex === 'fgp') {
        perGame = this.calcSummaryPercentages(
          summaryInfo.records,
          'fga',
          'fgm'
        );
      } else if (summaryInfo.dataIndex === 'ftp') {
        perGame = this.calcSummaryPercentages(
          summaryInfo.records,
          'fta',
          'ftm'
        );
      }
    }
    return perGame.toFixed(precision);
  }
});
