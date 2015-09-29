MAS.factory('Filters', function(){
    var filters = [
        {
            name : "Active Status",
            categories: [
                {
                    name : 'strategyStatus',
                    values : ['Active']
                }
            ]
        },
        {
            name : "Neuberger Strategies",
            categories : [{
                name : 'strategy',
                values : ['Neuberger']
            }]
        },
        {name : "Filter 3"}
    ];
    return filters;
})