module.exports = angular
	.module('feeds')
	.controller('FeedsCtrl', function(njrtLog, $previousState, $modal, Feeds, feeds) {

		var logger = njrtLog.getInstance('feeds.FeedsCtrl');

		logger.debug('FeedsCtrl loaded.');

		var vm = this;

		vm.Feeds = Feeds;

		vm.reverse = false;
		vm.predicate = 'lastChecked';
		
	});