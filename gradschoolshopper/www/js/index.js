
  angular.module('todoApp', 
    [
    'ngMaterial',
    'ui.router',
    'ngResource',
    'datatables',
    'datatables.bootstrap',
    'ngAnimate', 
    'ngSanitize', 
    'ui.bootstrap'])
  .controller('mainCtrl', function($resource) {
    var todoList = this;
    //$resource(url, [paramDefaults], [actions], options);    
  })
  .controller('search.ctrl', function(DTOptionsBuilder,DTColumnBuilder,$resource,$compile,$scope) {
    var todoList = this;
    $scope.selected = undefined;
    /*accordian */
  $scope.oneAtATime = true;
  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
  
  $scope.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  };
  /*accordian */
    todoList.todos =[{"name":"Search",state:"",stateName:"/index/show"}, {name:"Browse Programs by:", child:[{name:"GRE Requirements"},{"name":"TOEFL requirements"}, {"name":"Admission deadlines"}, {"name":"Financial aid deadlines"}, {"name":"Specialties for degree program"}, {"name":"Departmental research specialties"}, {"name":"Institutional & Department location"}]} ];
    var x =$resource('/data',{},{ 'get':    {method:'GET',isArray:true}});
    //x.get();

    todoList.qr={"schoolName":{"value":""},"minimumQuantitative":{"value":""},"department":{"value":""},"greRequirements":{"value":""},"minimumVerbal":{"value":""},"minimumAnalytical":{"value":""},"grePhysics":{"value":""},"minimumGREPhysics":{"value":""}};
    $scope.typehead={};
    $scope.$watch('todoList.qr', function(newValue, oldValue) {    
      console.log(newValue);
//    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];  
      var typehead =$resource('/typehead',{},{ 'post':    {method:'POST',isArray:true}});
      if(newValue.schoolName.value)
        $scope.typehead.states=typehead.post({qr:{'schoolName': {"_eval":"regex","value":newValue.schoolName.value}},limit:10});
      if(newValue.department.value)
        $scope.typehead.department=typehead.post({qr:{'department': {"_eval":"regex","value":newValue.department.value}},limit:10,select:{'department':1}});
      if(newValue.grePhysics.value)
        $scope.typehead.grePhysics=typehead.post({qr:{'grePhysics': {"_eval":"regex","value":newValue.grePhysics.value}},limit:10,select:{'grePhysics':1}});            
      if(newValue.greRequirements.value)
        $scope.typehead.greRequirements=typehead.post({qr:{'greRequirements': {"_eval":"regex","value":newValue.greRequirements.value}},limit:10,select:{'greRequirements':1}});
      if(newValue.minimumAnalytical.value)
        $scope.typehead.minimumAnalytical=typehead.post({qr:{'minimumAnalytical': {"_eval":"regex","value":newValue.minimumAnalytical.value}},limit:10,select:{'minimumAnalytical':1}});
      if(newValue.minimumGREPhysics.value)
        $scope.typehead.minimumGREPhysics=typehead.post({qr:{'minimumGREPhysics': {"_eval":"regex","value":newValue.minimumGREPhysics.value}},limit:10,select:{'minimumGREPhysics':1}});
      if(newValue.minimumQuantitative.value)
        $scope.typehead.minimumQuantitative=typehead.post({qr:{'minimumQuantitative': {"_eval":"regex","value":newValue.minimumQuantitative.value}},limit:10,select:{'minimumQuantitative':1}});
      if(newValue.minimumVerbal.value)
        $scope.typehead.minimumVerbal=typehead.post({qr:{'minimumVerbal': {"_eval":"regex","value":newValue.minimumVerbal.value}},limit:10,select:{'minimumVerbal':1}});
    },true);
    todoList.showDialog=showDialog;
    function showDialog(){}
    todoList.showDialogFlag=false;
    // function showMap(){
    //   debugger;
    //   setTimeout(function(){
    //     new GMaps({div: '#mapid',lat: -12.043333,lng: -77.028333});
    //   },200);
       
    //   }
    
    function createdRow(row, data, dataIndex) {
        $compile(angular.element(row).contents())($scope);
            }
  var x=$resource('/data2',{}, 
    { 'data':    
        {
        method:'POST',
        transformRequest :function(data, headersGetter)
              {
                var qr={"dt":data,"qr":{},select:['glat','glong']
                };
                return JSON.stringify(qr);
              }
        },
  });
        todoList.dtInstance={};
        todoList.search=search;
        function search(){
          var dataqr={};
          if(todoList.qr.schoolName.value)
          dataqr={schoolName:todoList.qr.schoolName.value};

          var x2=$resource('/data2',{}, 
          { 'data':    
              {
              method:'POST',
              transformRequest :function(data, headersGetter)
                    {var qr={"dt":data,"qr":dataqr,select:['glat','glong']};
                      return JSON.stringify(qr);
                    }
              },
        });
              todoList.dtInstance.changeData(x2.data);
              todoList.dtInstance.rerender();

        }
        todoList.showMap=showMap;
        // function (data){
        //   console.log(data);
        // }
          function showMap (selectedItems) {
            todoList.selectedData=todoList.selected[selectedItems]
  setTimeout(function(){
    map =new GMaps({div: '#mapid',
    lat: todoList.selected[selectedItems].glat,
    lng: todoList.selected[selectedItems].glong
  });
  map.addMarker({
    lat: todoList.selected[selectedItems].glat,
    lng: todoList.selected[selectedItems].glong,
    title: todoList.selected[selectedItems].schoolName,
    click: function(e) {
      alert('You clicked in this marker');
    }
  });
},200);

}
      todoList.selectAll=false;
      todoList.selected=[];
         todoList.dtColumns = [

                DTColumnBuilder
                .newColumn('schoolName')
                .withTitle('School Name')
                .withOption('width', '20%')
                .renderWith(function(data, type, row){          
                    return data;
                }),
                // DTColumnBuilder
                // .newColumn('glat')
                // .withTitle('glat')
                // .withOption('width', '10%')
                // .renderWith(function(data, type, row){          
                //     return "";
                // }).notVisible(),
                // DTColumnBuilder
                // .newColumn('glong')
                // .withTitle('glong')
                // .withOption('width', '10%')
                // .renderWith(function(data, type, row){          
                //     return "";
                // }).notVisible(),
                DTColumnBuilder
                .newColumn('department')
                .withTitle('Department')
                .withOption('width', '20%')
                .renderWith(function(data, type, row){          
                    return data;
                }),
                DTColumnBuilder
                .newColumn('greRequirements')
                .withTitle('GRE Requirements')
                .withOption('width', '10%')
                .renderWith(function(data, type, row){          
                    return data;
                }),
                DTColumnBuilder
                .newColumn('minimumQuantitative')
                .withTitle('Minimum Quantitative')
                .withOption('width', '10%')
                .renderWith(function(data, type, row){          
                    return data;
                }),
                DTColumnBuilder
                .newColumn('minimumVerbal')
                .withTitle('Minimum Verbal')
                .withOption('width', '10%')
                .renderWith(function(data, type, row){          
                    return data;
                }),             DTColumnBuilder
                .newColumn('minimumAnalytical')
                .withTitle('Minimum Analytical')
                .withOption('width', '10%')
                .renderWith(function(data, type, row){          
                    return data;
                }), DTColumnBuilder
                .newColumn('grePhysics')
                .withTitle('grePhysics')
                .withOption('width', '10%')
                .renderWith(function(data, type, row){          
                    return data;
                }),
                DTColumnBuilder
                .newColumn('minimumGREPhysics')
                .withTitle('Minimum GRE Physics')
                .withOption('width', '10%')
                .renderWith(function(data, type, row){          
                    return data;
                }),
                DTColumnBuilder
                .newColumn(null)
                .withTitle('Action')
                .withOption('width', '10%')
                .renderWith(function(data, type, full, meta){      
                debugger; 
                    todoList.selected[data._id]=angular.copy(data);
                    // return '<span class="glyphicon glyphicon-map-marker" ng-click="todoList.showMap('+ data._id +')"></span>'
              return '<span class="glyphicon glyphicon-map-marker" class="btn btn-primary" data-toggle="modal" data-target="#myModal" ng-click="todoList.showMap('+ data._id +')"data-whatever="@mdo"></span>'
                }),

          ];

    todoList.dtOptions = DTOptionsBuilder
        .fromSource(x.data)
                .withPaginationType('full_numbers')
                .withDataProp('data')
                .withOption('aLengthMenu', [10,25,50,100])
                .withOption('serverSide',true)
                .withOption('createdRow', createdRow).withBootstrap();

    //$resource(url, [paramDefaults], [actions], options);    
  })
  .controller('TodoListController', function($resource) {
    var todoList = this;
    //$resource(url, [paramDefaults], [actions], options);    
    }).config(function($stateProvider, $urlRouterProvider,$locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("index");  

        $stateProvider.state('index', {
          url: "/index",
          templateUrl: "/html/main.html",
          controller:'mainCtrl as todoList'
          })
          .state('index.show', {
          url: "/show",
          templateUrl: "/html/main1.html",
          controller:'search.ctrl as todoList'
          })
          .state('index1', {
          url: "/index1",
          templateUrl: "/html/main1.html",
          controller:'TodoListController as todoList'
          });
      });


