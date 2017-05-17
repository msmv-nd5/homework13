'use strict';

angular
    .module('myApp')
    .controller('MenuListCtrl', function() {

        var vm = this;
        vm.menu = [{name: 'Список', link: 'list'},{name: 'Добавить нового', link: 'createNewPokemon'},{name: 'My account', link: 'myaccount'}];

    });
