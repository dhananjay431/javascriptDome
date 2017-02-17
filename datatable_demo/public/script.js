angular.module('todoApp', ['ngResource','datatables'])
  .controller('TodoListController', function(DTOptionsBuilder,   DTColumnBuilder,$resource,$scope) {
  var todoList = this;


    todoList.insinit=insinit;
    todoList.dtICOBJ={};

    todoList.initDatatable=initDatatable;
    todoList.initCall=function(){
      initDatatable(x.data);
    }
            function initDatatable(promise) {
                // todoList.dtICOBJ.changeData(promise);
                // todoList.dtICOBJ.reloadData();
                // todoList.dtICOBJ.rerender();
            }
            function insinit(dtInstance)
            {
            todoList.dtICOBJ=dtInstance;
            }
  var x=$resource('/getdata',{}, 
    { 'data':    
        {
        method:'POST',
        url: '/getdata',
        transformRequest :function(data, headersGetter)
              {

                var qr={"dt":data,"qr":{"directoryId":"57189c7024d8bc65f4123bc0"}};
                return JSON.stringify(qr);
              }
		    },
  });

  var x2=$resource('http://localhost:3000/getdata',{}, 
    { 'data':    
        {
        method:'GET',
        isArray:true,
        url: '/getdata'
        }
  });

          todoList.dtColumns = [
              DTColumnBuilder.newColumn('_id')
              .withTitle('_id')
              .withOption('width', '15%'),
              DTColumnBuilder.newColumn('name')
              .withTitle('_id')
              .withOption('width', '15%')
          ];
	
            todoList.dtOptions = DTOptionsBuilder.fromSource(x.data)
                .withPaginationType('full_numbers')
                .withDataProp('data')
                .withOption('aLengthMenu', [10, 50, 100,200])
                .withOption('serverSide',true);
  });