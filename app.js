let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main')
    toggle.onclick = function(){
      navigation.classList.toggle('active');
      main.classList.toggle('active');
    }
    /*Add Hovered Class*/
    let list = document.querySelectorAll('.navigation li');
    function activeLink() {
      list.forEach((item) => item.classList.remove('hovered'));
      this.classList.add('hovered');
    }
    list.forEach((item) => 
      item.addEventListener('mouseover',activeLink));

      var routerApp = angular.module('myApp', ['ui.router']);

      routerApp.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');
    
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'assets/pages/home.html',
                controller: 'HomeCtrl'
            })
            .state('task', {
                url: '/task',
                templateUrl: 'assets/pages/task.html',
                controller: 'TasksCtrl'
            })
            .state('request', {
                url: '/request',
                templateUrl: 'assets/pages/request.html',
                controller: 'RequestCtrl'
            })
            .state('charts', {
                url: '/charts',
                templateUrl: 'assets/pages/chart.html',
                controller: 'ChartsCtrl'
            })
    });

  routerApp.controller('HomeCtrl', function ($scope,GetData2,GetData3) {
    GetData2.posts_async().then(function(posts) {
        $scope.row = posts;
    });
    
    GetData3.posts_async().then(function(posts) {
        $scope.extra = posts;
    });   
  });

  routerApp.controller('TasksCtrl', function ($scope,GetData) {
    GetData.posts_async().then(function(posts) {
        $scope.data = posts;
        $(document).ready(function() {
            $('#example').DataTable();
        } );
    });        
  });

  routerApp.controller('RequestCtrl', function ($scope) {
    $("#dateFrom").datepicker({
        format: 'mm/dd/yyyy',
        changeMonth: true,
		changeYear: true,
		onClose:function(selectedDate){
			 $("#dateTo").datepicker("option", "minDate", selectedDate);
		}
    });
    
    $("#dateTo").datepicker({
    	format: 'mm/dd/yyyy',
    	changeMonth: true,
    	changeYear: true
    });
  });

  routerApp.controller('ChartsCtrl', function ($scope) {
    const ctx = document.getElementById('myChart').getContext('2d');
    const ctx1 = document.getElementById('myChart1').getContext('2d');
    const ctx2 = document.getElementById('myChart2').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['In Process', 'Completed', 'Rejected'],
            datasets: [{
                label: 'Requests',
                data: [1293, 1329, 323],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ]
            }]
        },
        options: {
            responsive:true,

        }
    });

    const myChart1 = new Chart(ctx1, {
      type: 'doughnut',
      data: {
          labels: ['In Process', 'Completed', 'Rejected'],
          datasets: [{
              label: 'Requests',
              data: [1293, 1329, 323],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ]
          }]
      },
      options: {
          responsive:true,
      }
  });

  const myChart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['In Process', 'Completed', 'Rejected'],
        datasets: [{
            label: 'Requests',
            data: [1293, 1329, 323],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ]
        }]
    },
    options: {
        responsive:true,

    }
});
  });