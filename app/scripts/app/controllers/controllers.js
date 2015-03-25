angular.module('popup')
  .controller('MainController', ['$scope', function($scope) {

      $scope.welcomeMsg = "This is your first chrome extension";

    $scope.show_options = function(){
      chrome.tabs.create({
        url: chrome.extension.getURL("option.html")
      })

    };


      $scope.contribute = function() {
        chrome.tabs.create({
          url: 'https://github.com/flrent/chrome-extension-angular-base'
        })
      }
  }])
;
