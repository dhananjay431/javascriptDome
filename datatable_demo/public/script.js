
/*
 var script = document.createElement("script");
              script.setAttribute("type", "text/javascript");
              script.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/angular-datatables/0.6.1/plugins/light-columnfilter/angular-datatables.light-columnfilter.js");
              document.getElementsByTagName("head")[0].appendChild(script);
			  */

angular.module('todoApp', ['ngResource','datatables','datatables.columnfilter','datatables.light-columnfilter'])
 .controller('TodoListController', function(DTOptionsBuilder,DTColumnBuilder,$resource,$scope) {
	var todoList = this;
  $scope.temp1="tpl1";  
  })
     .controller('org',function(DTOptionsBuilder,DTColumnBuilder,$resource,$scope,$compile){
    //////////////////////////////
    var todoList = this;
    todoList.dtData={};
    todoList.temp="org";
    todoList.tempShow=tempShow;
    todoList.insinit={};
    todoList.qr={name:{field:"name",regx:false,val:"",type:"str"},
    dioceseTypeName:{field:"dioceseTypeName",regx:false,val:"",type:"str"},
    orgIdNumber:{field:"orgIdNumber",regx:false,val:"",type:"num"}
    };
    todoList.search=search;
        


    function search(){
        debugger;
      getOrg();
    }
    function tempShow(data){
        todoList.dtData.select=angular.copy(todoList.dtData[data][data]);
        $scope.status.isFirstOpen = !$scope.status.isFirstOpen;
         $("#DataTables_Table_0_wrapper").hide();
         todoList.qr={name:{field:"name",regx:false,val:"",type:"str"},
            dioceseTypeName:{field:"dioceseTypeName",regx:false,val:"",type:"str"},
            orgIdNumber:{field:"orgIdNumber",regx:false,val:"",type:"num"}
            };
    }
  todoList.showdtI=function(){

  }
  
    todoList.initCall=function(){
    
    }

    function getOrg(){
        debugger;        
      todoList.dtData={};
      var arr=Object.keys(todoList.qr);
      var qr={};
      for(var i=0;i<arr.length;i++)
      {
        var key=arr[i];
          if(todoList.qr[key].val!="" && todoList.qr[key].val!=undefined)
          {
            if(todoList.qr[key].type=="num")
                qr[key]=Number(todoList.qr[key].val);
            if(todoList.qr[key].type=="str")
                qr[key]={ "_eval": "regexNoEsc", "value": '^'+ todoList.qr[key].val +'$' };

          }
      }
        if(Object.keys(qr).length > 0 )
        qr.directoryId={'_eval':'Id',value:'57189cd924d8bc65f4123bc3'};
            else
        return ;
          var xgetOrg=$resource(API_PATH+'/ocd_tree/getAdvanceSearchData',{}, 
            { 'data':    
                {
                method:'POST',
                transformRequest :function(data, headersGetter)
                      {
                      var qrr={"dt":data,"qr":qr};
                
                        return JSON.stringify(qrr);
                      }
                },
          });   
          $("#DataTables_Table_0_wrapper").show();
          todoList.insinit.changeData(xgetOrg.data);
          todoList.insinit.rerender();
      }

///ogetdata
  var x=$resource(API_PATH+'/ocd_tree/getAdvanceSearchData',{}, 
    { 'data':    
        {
        method:'POST',
        transformRequest :function(data, headersGetter)
              {
                var qr={"dt":data,"qr":{
                    directoryId:{'_eval':'Id',value:'57189cd924d8bc65f4123bc3'}
                }
                };
                
                $("#DataTables_Table_0_wrapper").hide();
                return JSON.stringify(qr);
              }
        },
  });


            todoList.dtColumns = [
              DTColumnBuilder
                .newColumn('_id')
                .withTitle('_id')
                .withOption('width', '15%').notVisible(),
                DTColumnBuilder
                .newColumn('orgIdNumber')
                .withTitle('Org ID')
                .withOption('width', '15%')
                .renderWith(function(data, type, row){          
                    return (row.orgIdNumber)?row.orgIdNumber:"";
                }),
              DTColumnBuilder
                .newColumn('name')
                .withTitle('Name')
                .withOption('width', '15%')
                .renderWith(function(data, type, row){          
                    return (row.name)?row.name:"";
                }),  
                DTColumnBuilder
                .newColumn('dioceseTypeName')
                .withTitle('Diocese Type Name')
                .withOption('width', '15%')
                .renderWith(function(data, type, row){          
                    return (row.dioceseTypeName)?row.dioceseTypeName:"";
                }),
                DTColumnBuilder
                .newColumn('parentId.name')
                .withTitle('Parent Name')
                .withOption('width', '15%')
                .renderWith(function(data, type, row){          
                    //return (row.dioceseTypeName)?row.dioceseTypeName:"";
                    return ((row.parentId) && (row.parentId.name))?row.parentId.name:"";
                }),
                  DTColumnBuilder
                .newColumn(null)
                .withTitle('Actions')
                .withClass('text-center')
                .withOption('width', '5%')
                .renderWith(function(data, type, row){          
                    var x={};
                    x[row._id]=row;
                    todoList.dtData[row._id]=angular.copy(x);
                    return "<span ng-click=todoList.tempShow('"+row._id+"')><a href='#' style='text-decoration: underline'>Select</a></span>";
                }),
                  DTColumnBuilder
                .newColumn('orgIdNumber')
                .withTitle('orgIdNumber')
                .renderWith(function(data, type, row){       

                    return null;
                }).notVisible(),
              
          ];
            function createdRow(row, data, dataIndex) {
                $compile(angular.element(row).contents())($scope);
            }
        todoList.dtOptions = DTOptionsBuilder
        .fromSource(x.data)
                .withPaginationType('full_numbers')
                .withDataProp('data')
                .withOption('aLengthMenu', [5,10,15,20])
                .withOption('serverSide',true)
                .withOption('createdRow', createdRow);

            $scope.oneAtATime = true; $scope.groups = [{title: 'Dynamic Group Header - 1', content: 'Dynamic Group Body - 1'}, {title: 'Dynamic Group Header - 2', content: 'Dynamic Group Body - 2'} ]; $scope.items = ['Item 1', 'Item 2', 'Item 3']; $scope.addItem = function() {var newItemNo = $scope.items.length + 1; $scope.items.push('Item ' + newItemNo); }; $scope.status = {isCustomHeaderOpen: false, isFirstOpen: false, isFirstDisabled: false }; 
  });