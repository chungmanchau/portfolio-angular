(function() {
	'use strict';

	angular.module('blueCloud')
	.controller('MainController', MainController);

	MainController.$inject = ['$scope', '$timeout'];

	/* @ngInject */
	function MainController(scope, timeout) {
		var vm = this;
		vm.initialState = true;
		vm.openMenu = false;
		vm.active = false;
		vm.showContent = false;
		vm.close = false;
		vm.openLayer = false;
		vm.openLayer1 = false;
		vm.openLayer2 = false;
		vm.openLayer3 = false;
		vm.openLayer4 = false;
		////////////////

		function initialise() {

		}

		scope.toggleMenu = function() {
			// When nothing is open
			if(whenNothingIsOpen()) {
				openMenu();
			} else
			// When menu is open
			if(whenMenuIsOpen()) {
				closeMenu();
			}
			// When panel is open
			if(whenPanelIsOpen()) {
				openMenu();
				resetPanels();
			}
		};

		scope.openPanel = function(layer){
			if(whenMenuIsOpen()) {
				vm.openMenu = false;
				if(layer == 1) {
					vm.openLayer = true;
					vm.openLayer1 = true;
					vm.openMenu = false;
				}
				if(layer == 2) {
					vm.openLayer = true;
					vm.openLayer2 = true;
					vm.openMenu = false;
				}
				if(layer == 3) {
					vm.openLayer = true;
					vm.openLayer3 = true;
					vm.openMenu = false;
				}
				if(layer == 4) {
					vm.openLayer = true;
					vm.openLayer4 = true;
					vm.openMenu = false;
				}
			}
		};

		function whenNothingIsOpen() {
			return vm.openLayer === false && vm.openMenu === false;
		}

		function whenMenuIsOpen() {
			return vm.openLayer === false && vm.openMenu === true;
		}

		function whenPanelIsOpen() {
			return vm.openLayer === true;
		}

		function openMenu() {
			vm.openMenu = true;
			vm.initialState = false;
		}

		function closeMenu() {
			vm.openMenu = false;
			vm.initialState = true;
		}

		function resetPanels() {
			vm.openLayer = false;
			vm.openLayer1 = false;
			vm.openLayer2 = false;
			vm.openLayer3 = false;
			vm.openLayer4 = false;
		}
	}
})();
