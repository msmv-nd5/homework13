'use strict';

angular
    .module('myApp')
    .controller('CreateAccountCtrl', function() {

        var vm = this;
        vm.accountForm = {};
        vm.accountData = {};
        vm.addAccount = function(accountData) {
            vm.accountForm.showData = accountData;
            console.log(accountData);
            vm.accountData = {};
            vm.accountForm.$setPristine();
        };

    });
