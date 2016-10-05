exports.createBundles = (transportation, hotels, activities, userData) => {
  var bundles = []
  var budgetDistribution = {transportation: 0.4, lodging: 0.4, activities: 0.2}

  if(transportation && transportation.tripOption.length) {
    transportation.tripOption.forEach(transportation => {
      bundles.push([{'transportation': transportation}])
      })
  }

  if(hotels.length > 0) {
    var addHotel = []
    if(!bundles.length)
        bundles = [[{transportation: 'Travel by car!'}]]

    bundles.forEach(bundle => {
        hotels.forEach(hotel => {
            var bundleCopy = bundle.slice()
            bundleCopy.push({ 'hotel':
              {name: hotel.name,
               address: hotel.address,
               city: hotel.city,
               hotelStarRating: hotel.hotelStarRating,
               hotelGuestRating: hotel.hotelGuestRating,
               pic: hotel.thumbnailUrl,
               lowRate: hotel.lowRate
              }
            })
            addHotel.push(bundleCopy)
        })
      })

    bundles = addHotel
  }

  if(activities && activities.length) {
    var addActivity = []

    if(!bundles.length)
      bundles = [[{'transportation': 'Travel by Car!'}, {'lodging': 'Stay with a Friend!'}]]

    var activity1 = userData.answers[2].option.option
    var activity2 = userData.answers[3].option.option

    bundles.forEach(bundle => {
      activities.forEach(activity => {
        activity.forEach(act => {

          if(act.category === activity1) {
            var bundleCopy = bundle.slice()
            bundleCopy.push({'activity1': {
                category: act.category,
                results: act.results
              }
            })
            addActivity.push(bundleCopy)
          }
        })
      })
    })

    if(addActivity.length)
        bundles = addActivity
    else
      bundles.forEach( bundle => bundle.push({'activity': 'None found'}))

    addActivity = []
    bundles.forEach(bundle => {
      activities.forEach(activity => {
        activity.forEach(act => {

          if(act.category === activity2) {

            var bundleCopy = bundle.slice()
            bundleCopy.push({'activity2': {
                category: act.category,
                results: act.results
              }
            })
            addActivity.push(bundleCopy)
          }
        })

      })
    })

    if(addActivity.length)
        bundles = addActivity
    else
      bundles.forEach( bundle => bundle.push({'activity': 'None found'}))
  }

  if(!bundles.length)
    bundles = [[{'transportation': 'Sorry nothing found'}, {'lodging': 'Sorry nothing found'}, {'activity': 'Sorry nothing found'}]]

  if(bundles.length >= 6)
    return bundles.slice(0,6)
  else return bundles
}
