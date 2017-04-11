  //console.log(JSON.stringify(tree, null, " "));

angular.module('todoApp', ['ngResource'])
  .controller('TodoListController', function($resource) {
    var todoList = this;
	todoList.ddiiss=ddiiss;
	function ddiiss(data){
	console.log(data);
	}
	var root="";

	var x2=$resource("/dbData",{},{ 'Data':    {method:'POST',isArray:true}});
	
	
	//var qr={ "parentId": {"_eval":"Id","value":"578db77fc19cc73dbcbd1b40"}, "directoryId": {"_eval":"Id","value":"57189cd924d8bc65f4123bc3"}};
	/*
	var qr={ "parentId": {"_eval":"Id","value":"578db77ec19cc73dbcbd1970"}, "directoryId": {"_eval":"Id","value":"57189cd924d8bc65f4123bc3"}};
	x2.Data(qr).$promise.then(function(resp){
			
	});*/
	todoList.all=[];
	todoList.show=show;
	var tree=$resource("/tree",{},{ 'Data':    {method:'POST',isArray:true}});
	
	
	function show()
	{
		console.log("show",todoList.parent);
		
			tree.Data({ "root": {"_eval":"Id","value":todoList.parent}, "directoryId": {"_eval":"Id","value":"57189cd924d8bc65f4123bc3"},"name": { $ne: null },"active": true,"deleted":false})
			.$promise.then(function(resp){	
				var d =angular.copy(resp);
				
				function bunflatten(nodes){
				var map = {}, _node, roots = [];
				for (var i = 0; i < nodes.length; i += 1) {
					_node = nodes[i];
					_node.children = [];
					map[_node._id] = i; // use map to look-up the parents
					if (_node.parentId !== todoList.parent) {
					_node.children = [];
						nodes[map[_node.parentId]].children.push(_node);
					} else {
						roots.push(_node);
					}
				}
					return roots;
				}
				todoList.td=bunflatten(d);
	});
	
	}
	

  });
  

  
