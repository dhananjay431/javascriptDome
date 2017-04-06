
/*
 var script = document.createElement("script");
              script.setAttribute("type", "text/javascript");
              script.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/angular-datatables/0.6.1/plugins/light-columnfilter/angular-datatables.light-columnfilter.js");
              document.getElementsByTagName("head")[0].appendChild(script);
			  */

angular.module('todoApp', ['ngResource','datatables','datatables.columnfilter','datatables.light-columnfilter'])
 .controller('TodoListController', function(DTOptionsBuilder,DTColumnBuilder,$resource,$scope) {
  var todoList = this;


    todoList.insinit={};
    
	todoList.showdtI=function(){
	debugger;
	console.log(todoList.insinit)
	}
    todoList.initDatatable=initDatatable;
    todoList.initCall=function(){
      initDatatable(x.data);
    }
            function initDatatable(promise) {
                // todoList.dtICOBJ.changeData(promise);
                // todoList.dtICOBJ.reloadData();
                // todoList.dtICOBJ.rerender();
            }
  
			//"directoryId" : ObjectId("57189b3e24d8bc65f4123bbf"), 
			//address.country:'5718d7abca75ca39db934831'
  var x=$resource('/pgetdata',{}, 
    { 'data':    
        {
        method:'POST',
        transformRequest :function(data, headersGetter)
              {
                var qr={"dt":data,"qr":{
				directoryId:{'_eval':'Id',value:'57189cd924d8bc65f4123bc3'}
				}
				};
                return JSON.stringify(qr);
              }
		    },
  });

  var x2=$resource('http://localhost:3000/pgetdata',{}, 
    { 'data':
        {
        method:'GET',
        isArray:true,
        url: '/getdata'
        }
  });

          todoList.dtColumns = [
              DTColumnBuilder
			  .newColumn('_id')
              .withTitle('_id')
              .withOption('width', '15%'),
			  
              DTColumnBuilder.
			  newColumn('PeopleId')
              .withTitle('PeopleId')
              .withOption('width', '15%')
			  
			  DTColumnBuilder.
			  newColumn('address.cityName')
              .withTitle('cityName')
              .withOption('width', '15%')
			  .renderWith(function(data, type, row){
                  return "address.cityName";
              })
			  
          ];
				todoList.dtOptions = DTOptionsBuilder
				.fromSource(x.data)
			
                .withPaginationType('full_numbers')
                .withDataProp('data')
                .withOption('aLengthMenu', [10, 50, 100,200])
                .withOption('serverSide',true)
				.withLightColumnFilter({
					'0' : {
					type : 'text'
					},
					'1' : {
					type : 'text'
					}});
	
			
  });