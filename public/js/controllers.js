'use strict'

var app = angular.module('myApp');

app.controller('profileCtrl', function(user, $scope, $http) {
    console.log('profileCtrl loaded');
    console.log('user: ', user);
    $scope.user = user;
    // $http.get(`${user.href}/customData`)
    // .then(res => {
    //     console.log('ressss: ', res);
    //     $scope.user.customData = res.data;
    // })
    // .catch(err => {
    //     console.log('err: ', err);
    // })
    //
    // $scope.customData = ()=>{
    //
    // }
    // client.getAccount(user.href, function(err, account) {
    //     account.getCustomData(function(err, customData) {
    //         $scope.user.customData = customData;
    //         console.log('my custom property', customData.myCustomProperty);
    //     });
    // });

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
                $scope.cancel();
            })
            .catch(err => {
                console.log('err: ', err);
            })
    }


})
