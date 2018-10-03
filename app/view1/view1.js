'use strict';

angular.module('myApp.view1', ['ngRoute','ngTable']).constant("moment",moment)
    .factory('moment', function ($window) {
    return $window.moment;
})

.config(['$routeProvider', function($routeProvider,) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',

  });
}])
.controller('View1Ctrl',  function($scope, moment, NgTableParams ) {

    $scope.testing = "The test is there";

    let myMomentTest = moment().format("MM-DD-YYYY HH:mm");

    /* Hard code fake data  */

    let myList = [
        {
            name: "Jack Blint",
            email:"jackemail@email.com",
            phone:6044-3333-444,
            lastInteraction:"09-09-2018",
            listInteractions:[
                "09-09-2018",
                "09-07-2018",
                "09-01-2018",
                "09-28-2018",
            ]
        },

        {
            name: "Blake Stevens",
            email:"blakeemail@email.com",
            phone:"614-222-443",
            lastInteraction:"09-09-2018",
            listInteractions:[
                "09-09-2018",
                "09-06-2018",
                "09-02-2018",
                "09-29-2018",
            ]
        },

        {
            name: "Del Cory",
            email:"delemail@email.com",
            phone:"600-233-777",
            lastInteraction:"08-12-2018",
            listInteractions:[
                "08-12-2018",
                "08-07-2018",
                "09-05-2018",
                "07-04-2018"

            ]
        },

        {
            name: "Brant Sutton",
            email:"suttonl@email.com",
            phone:"611-222-555",
            lastInteraction:"07-08-2018",
            listInteractions:[
                "07-08-2018",
                "09-09-2018",
                "08-10-2018",
                "08-08-2018"
            ]
        },

         {
            name: "Herald Stiky",
            email:"heraldl@email.com",
            phone:"630-291-111",
             lastInteraction:"09-09-2018",
             listInteractions:[
                 "09-09-2018",
                 "09-06-2018",
                 "08-07-2018",
                 "06-11-2018"
             ]
         },

    ];
    let test ;

    /* Daterange picker to filter interaction based on selected dates*/
    $('#daterange').daterangepicker({
        "showDropdowns": true,
        "showWeekNumbers": true,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        "startDate":  moment().subtract("7", "days").format('MM-DD-YYYY'),
        "endDate": moment().format('MM-DD-YYYY'),
    }, function(start, end, label) {
        console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    })
    .on('apply.daterangepicker', function(ev, picker) {
        console.log("The start date ",picker.startDate.format('YYYY-MM-DD'));
        console.log("The end date ",picker.endDate.format('YYYY-MM-DD'));
        test = picker.startDate;
    });

    console.log("This is test", test);

    let getDateValue = $(daterange).val();
    let startDateValue = getDateValue.split("-")[0];
    let endDateValue = getDateValue.split("-")[1];

    let lastContact;
    let todaysDate = moment();

    let showHeader = false;

    let personDetail;
    $scope.displayDetails = function (i) {
        showHeader = true;
        console.log(myList[i].listInteractions)
        $scope.selectedPerson ="for " +  myList[i].name;
        $scope.interactionDetails = myList[i].listInteractions;
    }

    /* The dataset to send to the view */
    $scope.listModel = new NgTableParams({count:10}, { dataset: myList});

});