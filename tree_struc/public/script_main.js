//console.log(JSON.stringify(tree, null, " "));

angular.module('todoApp', ['ngResource'])
  .controller('TodoListController', function($resource) {
    var todoList = this;
    
	//$resource(url, [paramDefaults], [actions], options);
	/*
	var x=$resource("/db",{},{ 'Data':    {method:'GET',isArray:true}});
	*/
	
	
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
	show({ "parentId": {"_eval":"Id","value":"578db7efc19cc73dbcbe37f9"}, "directoryId": {"_eval":"Id","value":"57189cd924d8bc65f4123bc3"}});
	
	var tree=$resource("/tree",{},{ 'Data':    {method:'POST',isArray:true}});
	
	tree.Data({ "root": {"_eval":"Id","value":"578db7efc19cc73dbcbe37f9"}, "directoryId": {"_eval":"Id","value":"57189cd924d8bc65f4123bc3"}})
	.$promise.then(function(resp){	
			todoList.treeAllData=resp.map(function(data){
				return {id:data._id,title:data.name,parentid:data.parentId};
				})
	console.log(todoList.treeAllData);
	});
	

	
var root="";
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
	
	
	
	
	function parseNodes(nodes) { // takes a nodes array and turns it into a <ol>
    var ol = document.createElement("UL");
    for(var i=0; i<nodes.length; i++) {
        ol.appendChild(parseNode(nodes[i]));
    }
    return ol;
}

	function parseNode(node) { // takes a node object and turns it into a <li>
		var li = document.createElement("LI");
		li.innerHTML = node.title;
		//li.className = node.class;
		li.href=node.id;
		if(node.children) li.appendChild(parseNodes(node.children));
		return li;
	}

	//console.log(parseNodes(tree));
	//document.body.appendChild(parseNodes(tree))
	setTimeout(function(){
	root="578db7efc19cc73dbcbe37f9";
	console.log(todoList.all);
	//var tree = unflatten(todoList.all);
	var tree = unflatten(todoList.all);
	
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
	},30000 )
  });