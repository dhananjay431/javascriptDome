  //console.log(JSON.stringify(tree, null, " "));

angular.module('todoApp', ['ngResource'])
  .controller('TodoListController', function($resource) {
    var todoList = this;
	var root="";

	var x2=$resource("/dbData",{},{ 'Data':    {method:'POST',isArray:true}});
	
	
	//var qr={ "parentId": {"_eval":"Id","value":"578db77fc19cc73dbcbd1b40"}, "directoryId": {"_eval":"Id","value":"57189cd924d8bc65f4123bc3"}};
	/*
	var qr={ "parentId": {"_eval":"Id","value":"578db77ec19cc73dbcbd1970"}, "directoryId": {"_eval":"Id","value":"57189cd924d8bc65f4123bc3"}};
	x2.Data(qr).$promise.then(function(resp){
			
	});*/
	todoList.all=[];
	function show(qr)
	{
		
		var d=x2.Data(qr).$promise.then(function(resp){					
			var temp={};
			temp.parentid=qr.parentId.value;
			
				for(var i=0;i<resp.length;i++)
				{
					temp.id=resp[i]._id;
					temp.title=resp[i].name;
					todoList.all.push(angular.copy(temp));
					show({ "parentId": {"_eval":"Id","value":resp[i]._id}, "directoryId": {"_eval":"Id","value":"57189cd924d8bc65f4123bc3"}});
				}
			
		});
	}
	//show({ "parentId": {"_eval":"Id","value":"578db77ec19cc73dbcbd1970"}, "directoryId": {"_eval":"Id","value":"57189cd924d8bc65f4123bc3"}});
	
	var tree=$resource("/tree",{},{ 'Data':    {method:'POST',isArray:true}});
	
	tree.Data({ "root": {"_eval":"Id","value":"578db78cc19cc73dbcbd3704"}, "directoryId": {"_eval":"Id","value":"57189cd924d8bc65f4123bc3"},"name": { $ne: null } })
	.$promise.then(function(resp){	
			todoList.treeAllData=resp.map(function(data){
				return {id:data._id,title:data.name,parentid:data.parentId};
				})
					root="578db78cc19cc73dbcbd3704";
					console.log(todoList.all);
					//var tree = unflatten(todoList.all);
					var tree = unflatten(todoList.treeAllData);
					console.log(tree);
					document.getElementById("list").appendChild(parseNodes(tree));
						  $('#list').jstree({
						  "core" : {
							"themes" : {
							  "variant" : "large"
							}
						  },
						  "checkbox" : {
							"keep_selected_style" : false
						  },
						});
	});
unflatten = function( array, parent, tree ){
    tree = typeof tree !== 'undefined' ? tree : [];
    parent = typeof parent !== 'undefined' ? parent : { id: root};
    var children = _.filter( array, function(child){ return child.parentid == parent.id; });
    if( !_.isEmpty( children )  ){
        if( parent.id == root ){
           tree = children;   
        }else{
           parent['children'] = children
        }
        _.each( children, function( child ){ unflatten( array, child ) } );                    
    }
    return tree;
}	
	
	function parseNodes(nodes) {
    var ol = document.createElement("UL");
    for(var i=0; i<nodes.length; i++) {
        ol.appendChild(parseNode(nodes[i]));
    }
    return ol;
}

	function parseNode(node) { 
		var li = document.createElement("LI");
		li.innerHTML = node.title;
		li.href=node.id;
		if(node.children) li.appendChild(parseNodes(node.children));
		return li;
	}
  });
  

  
