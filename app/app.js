var app = angular.module('searchApp', []);

app.controller('tableCtrl', function ($scope, $http) {

    $scope.inputChange = function() {
        getResult();
    }

    function getResult() {
        var ulr = "https://api.github.com/search/repositories?q=" + $scope.query + "+in%3Aname&type=Repositories";
        $http.get(ulr)
            .then(function (response) {
                $scope.searchResults = response.data.items;
            })
    }
});