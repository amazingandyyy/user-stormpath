'use strict'

var app = angular.module('myApp');

app.controller('profileCtrl', function(user, $scope, $http) {
    console.log('profileCtrl loaded');
    console.log('user: ', user);
    $scope.user = user;


    $scope.edit = () => {
        $scope.editting = true;
        $scope.editUser = angular.copy($scope.user)
        $scope.editUser.customData = angular.copy($scope.user.customData)

    }
    $scope.cancel = () => {
        $scope.editting = false;
        $scope.editUser = null;
    }
    $scope.update = () => {
        console.log('eee');
        $http.put('users/edit', $scope.editUser)
            .then(res => {
                console.log('res: ', res);
                $scope.user = res.data;
                var customDataUri = res.data.customData.href;
                console.log('customDataUri: ', customDataUri);
                $scope.cancel();
                // $http.get(`${customDataUri}`)
                // .then(res => {
                //     console.log('ressss from customDataUri: ', res.data);
                //     // $scope.user.customData = res.data;
                // })
                // .catch(err => {
                //     console.log('err: ', err);
                // })
            })
            .catch(err => {
                console.log('err: ', err);
            })
    }


})
