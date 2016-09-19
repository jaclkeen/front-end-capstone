"use strict"

app.factory('ApiFactory', function($q, $http){

  // let getScores = function(){
  //   return $q(function(resolve, reject){
  //     $http.get('http://www.nfl.com/liveupdate/scorestrip/scorestrip.json',
  //       JSON.stringify())
  //     .success(function(data){
  //       JSON.stringify(data)
  //       resolve(data)
  //     })
  //     .error(function(error){
  //       console.log(error)
  //       reject(error)
  //     })
  //   })
  // }

  let getPlayers = function(){
    return $q(function(resolve, reject){
      $http.get('players.json')
      .success(function(data){
        resolve(data)
      })
      .error(function(error){
        console.log(error)
        reject(error)
      })
    })
  }

  let getPlayerStats = function(){
    return $q(function(resolve, reject){
      $http.get("http://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2016&format=json")
      .success(function(playerStats){
        // console.log(playerStats)
        resolve(playerStats)
      })
      .error(function(error){
        console.log(error)
        reject(error)
      })
    })
  }

  let getNews = function(playerId){
    return $q(function(resolve, reject){
      $http.get(`http://api.fantasy.nfl.com/v1/players/details?playerId=${playerId}&statType=seasonStatsformat=json`)
      .success(function(news){
        resolve(news)
      })
      .error(function(error){
        console.log(error)
        reject(error)
      })
    })
  }

  let getEditorWeekRanks = function(position){
    return $q(function(resolve, reject){
      $http.get(`http://api.fantasy.nfl.com/v1/players/editorweekranks?&count=30&season=2016&week=2&position=${position}&format=json`)
      .success(function(ranks){
        resolve(ranks)
      })
      .error(function(error){
        console.log(error)
        reject(error)
      })
    })
  }

  let getFantasyResearchInfo = function(){
    return $q(function(resolve, reject){
      $http.get("http://api.fantasy.nfl.com/v1/players/researchinfo?&count=200&format=json")
      .success(function(ranks){
        resolve(ranks)
      })
      .error(function(error){
        console.log(error)
        reject(error)
      })
    })
  }

  let getFantasyScoringLeaders = function(position){
    console.log(position)
    return $q(function(resolve, reject){
      $http.get(`http://api.fantasy.nfl.com/v1/players/scoringleaders?&count=30&season=2016&position=${position}&format=json`)
      .success(function(ranks){
        resolve(ranks)
      })
      .error(function(error){
        console.log(error)
        reject(error)
      })
    })
  }

  let getMostRecentPlayerNews = function(){
    return $q(function(resolve, reject){
      $http.get("http://api.fantasy.nfl.com/v1/players/news?&count=50&format=json")
      .success(function(ranks){
        resolve(ranks)
      })
      .error(function(error){
        console.log(error)
        reject(error)
      })
    })
  }

  // let playerScoreTicker = function(YYYYMMDD){
  //   return $q(function(resolve, reject){
  //     $http.get(`https://www.mysportsfeeds.com/api/feed/pull/nfl/2016-2017-regular/scoreboard.json?fordate=${YYYYMMDD}&format=json`)
  //     .success(function(scores){
  //       resolve(scores)
  //     })
  //     .error(function(error){
  //       console.log(error)
  //       reject(error)
  //     })
  //   })
  // }

  return {
    getNews,
    // getScores,
    getPlayers,
    getPlayerStats,
    getEditorWeekRanks,
    getFantasyResearchInfo,
    getMostRecentPlayerNews,
    getFantasyScoringLeaders
  }

})
