MAS.factory('Filters', function() {
  var filters = [{
    name: "Active Status",
    categories: [{
      name: 'strategyStatus',
      values: ['Active', 'Updated']
    }]
  }, {
    name: "Neuberger Strategies",
    categories: [{
      name: 'strategy',
      values: ['Neuberger']
    }]
  }, {
    name: "All Cap Core",
    categories: [{
      name: 'style',
      values: ['All Cap Core']
    }]
  }];
  return filters;
})