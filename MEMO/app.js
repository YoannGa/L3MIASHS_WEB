angular.module('app', []).controller("MemoController", ["$scope", "$http", function ($scope, $http) {

    $scope.listChampions = [];

    $http.get('champions.json').then(function(championJson) {
         $scope.mesChampions = championJson.data.data;
         $scope.longueurMesChampions = Object.keys($scope.mesChampions).length;

        for (i = 0; i <= 2; i++){
            $scope.listChampions.push(getRandomChampion());
        }
    });

    function getRandomChampion(){
        let championRandom = $scope.mesChampions[Object.keys($scope.mesChampions)[getRandomNumber()]];

        $scope.key = championRandom.key;
        $scope.name = championRandom.name;

        return championRandom;
    };

    function getRandomNumber(){
        return Math.floor((Math.random()*($scope.longueurMesChampions-1))+1);
    };

    $scope.retournerCarte = function () {
    };
}]);
