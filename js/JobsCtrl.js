app.controller('JobsCtrl',function($rootScope, $scope,$location,PagerService) {

        $scope.dummyItems = _.range(1, 151); // dummy array of items to be paged
        $scope.pager = {};
        $scope.setPage = $scope.setPage;

         $scope.setPage=function(page) {
            if (page < 1 || page > $scope.pager.totalPages) {
                return;
            }
			// get pager object from service
            $scope.pager = PagerService.GetPager($scope.dummyItems.length, page);

            // get current page of items
            $scope.items = $scope.dummyItems.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
            console.log($scope.items);
        }

        $scope.initController=function() {
            // initialize to page 1
            $scope.setPage(1);
        }
        $scope.initController();
        

});