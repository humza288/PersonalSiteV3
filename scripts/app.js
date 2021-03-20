var app = angular.module("portfolio", ["ngRoute", "ngMask"]);

app.config(function($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  });

app.run(function ($rootScope, $timeout, $http) { 

    let request = {
        method: 'GET', 
        url: 'https://api.github.com/repos/humza288/humza288.github.io/commits', 
    }

    $http(request).then(function(response) {
        $rootScope.commitCount = response.data.length;
    });


    $rootScope.lockScroll = true
    $rootScope.isLoading = true
    $rootScope.showBoxShadow = true
    $rootScope.showText = false
    $rootScope.showIcon = false
    $rootScope.showNav = false

    $rootScope.stopLoading = function() {
        $rootScope.isLoading = false
    }

    $timeout(function () {
        $rootScope.isLoading = false
        $rootScope.lockScroll = false

        $timeout(function () {
            $rootScope.showText = true

            $timeout(function () {
                $rootScope.showIcons = true

                $timeout(function () {
                    $rootScope.showNav = true
                }, 300);
            
            }, 300);

        }, 300);

    }, 2500);

    

    $rootScope.showBoxShadow = false

    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos && currentScrollPos > 50) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").classList.add("box-shadow")
    }
    else if (currentScrollPos < 75){
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").classList.remove("box-shadow")
    } 
    else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
    }

})
