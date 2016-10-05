const _ = require('underscore');
const handleFourSquareData = module.exports;

handleFourSquareData.build = (dataArr, selectedCategories) => {
function buildActivitiesArray(dataArray) {
const activities = [];
  for (var i = 0; i < dataArray.length; i++) {
  JSON.parse(dataArray[i]).response.groups[0].items
  .map((item) => {
    return item.venue;
  })
  .forEach((venue) => {
    activities.push({
      name: venue.name,
      category: venue.categories[0].name,
      venue_info: {
        venue_id: venue.id,
        category_id: venue.categories[0].id,
        category_name: venue.categories[0].name,
        location: venue.location,
        photos: venue.photos,
        rating: venue.rating,
        rating_color: venue.ratingColor,
        checkinsCount: venue.stats.checkinsCount,
        featuredPhotos: venue.featuredPhotos,
      },
    });
  });
  }
  return activities.filter(venue => (venue.venue_info.rating > 2));
}

const activitiesSorted = buildActivitiesArray(dataArr).sort((a, b) => {
  return b.venue_info.rating - a.venue_info.rating;
});

const selectedActivities = selectedCategories.slice(2);

const activitiesBundle = activitiesSorted.reduce((a, b) => {
  if (a[b.category]) {
    a[b.category].push(b);
  } else {
    a[b.category] = [b];
  }
  return a;
}, {});

const activitiesBundleArray = _.map(activitiesBundle, (val, key) => {
  return {
    category: key,
    results: val,
  }
});

const activitiesFilter = activitiesBundleArray.filter((activity) => {
  return _.some(selectedActivities, (selected) => {
    return (selected.option === activity.category);
  });
});
return activitiesFilter
}