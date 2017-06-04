/**
 * Created by s156386 on 2-6-2017.
 */
angular.module('global')
.controller('HomeCtrl', function ($scope, $interval) {
    // Heart rate stuff
    var dataPoints = 8;
    function generateHeartRateLabels () {
        var time = moment().subtract(1, 'h');
        var labels = [];
        for(var i = 0; i < dataPoints; i++){
            labels.push(time.format("kk:mm"));
            time.add(60/dataPoints, 'm');
        }
        return labels;
    }
    function generateHeartRateData () {
        var data = [];
        for(var i = 0; i < $scope.labels.length; i++){
            data.push(180 - parseInt(Math.random() * 120));
        }
        return data;
    }
    $scope.labels = generateHeartRateLabels();
    $scope.data = generateHeartRateData();
    $scope.heartRate = $scope.data[$scope.data.length - 1];
    $scope.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    };

    // Time stuff
    $scope.time = moment();
    $interval(function () {
        $scope.time = moment();
    }, 1000);

    // Location stuff
    $scope.coordinates = {
        latitude: '51°26\'53.9"N',
        longitude: '5°29\'25.3"E'
    };

    // Blood pressure stuff
    $scope.bloodPressure = 67;

    // Fitness goal stuff
    function generateFitnessGoalLabels(){
        var day = moment().subtract(1, "week");
        var labels = [];
        for(var i = 0; i < 7; i++){
            day.add(1, 'day');
            labels.push(day.format('dddd'));
        }
        return labels;
    }
    
    function generateFitnessGoalData() {
        var data = [];
        for(var i = 0; i < 7; i++){
            data.push(parseInt(Math.random() * 150));
        }
        return data;
    }
    $scope.fitnessGoalData = generateFitnessGoalData();
    $scope.fitnessGoalLabels = generateFitnessGoalLabels();
})
.controller('HealthCtrl', function ($scope) {
    // Temperature stuff
    $scope.bodyTemperature = 37.3;
    $scope.ambientTemperature = 28.9;

    // Heart rate stuff
    var dataPoints = 8;
    function generateLabels () {
        var time = moment().subtract(1, 'h');
        var labels = [];
        for(var i = 0; i < dataPoints; i++){
            labels.push(time.format("kk:mm"));
            time.add(60/dataPoints, 'm');
        }
        return labels;
    }
    function generateData (start, range) {
        var data = [];
        for(var i = 0; i < $scope.heartRateLabels.length; i++){
            data.push(start - parseInt(Math.random() * range));
        }
        return data;
    }
    $scope.heartRateLabels = generateLabels();
    $scope.heartRateData = generateData(140, 60);
    $scope.heartRate = $scope.heartRateData[$scope.heartRateData.length - 1];
    $scope.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    };

    // Blood pressure stuff
    $scope.bloodPressureLabels = generateLabels();
    $scope.bloodPressureData = generateData(80, 30);
    $scope.bloodPressure = $scope.bloodPressureData[$scope.bloodPressureData.length - 1];

    // Skin conductivity stuff
    $scope.skinConductivity = 0.05;
})
.controller('TrackingCtrl', function ($scope) {
    // Kilometers walked stuff

    function generateWalkedLabels(){
        var day = moment().subtract(1, "week");
        var labels = [];
        for(var i = 0; i < 7; i++){
            day.add(1, 'day');
            labels.push(day.format('dddd'));
        }
        return labels;
    }

    function generateWalkedData() {
        var data = [];
        for(var i = 0; i < 7; i++){
            data.push(15 - parseInt(Math.random() * 12));
        }
        return data;
    }
    $scope.walkedData = generateWalkedData();
    $scope.walkedLabels = generateWalkedLabels();
    $scope.kilometersWalked = $scope.walkedData[$scope.walkedData.length - 1];
    $scope.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    };
})
.controller('SettingsCtrl', function ($scope) {
    // The things we should set default intervals for
    $scope.columns = ["Heart rate", "Skin conductivity", "Blood pressure", "Walking speed", "Walking distance"];

});