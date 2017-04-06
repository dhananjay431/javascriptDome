//console.log(JSON.stringify(tree, null, " "));

angular.module('todoApp', ['ngResource'])
  .controller('TodoListController', function($resource,$compile) {
    var todoList = this;
	var root="";	
	var tree=$resource("/tree",{},{ 'Data':    {method:'POST',isArray:true}});
	
	todoList.show=show;
	todoList.dis=dis;
	function dis(){
	console.log("dis");
	}
	function show(){
	console.log(todoList.parent);
	//start
	tree.Data({ "root": {"_eval":"Id","value":todoList.parent}, "directoryId": {"_eval":"Id","value":"57189cd924d8bc65f4123bc3"}})
	.$promise.then(function(resp){	
			todoList.treeAllData=resp.map(function(data){
				return {id:data._id,title:data.name,parentid:data.parentId};
				});
							root=todoList.parent;
							todoList.tree = unflatten(todoList.treeAllData);
							console.log(tree);
							//document.getElementById("list").appendChild(parseNodes(tree));
							document.getElementById("list").appendChild(todoList.tree);
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
	
	//end 
	}
	
	
	tree.Data({ "root": {"_eval":"Id","value":"578db77ec19cc73dbcbd1971"}, "directoryId": {"_eval":"Id","value":"57189cd924d8bc65f4123bc3"}})
	.$promise.then(function(resp){	
			todoList.treeAllData=resp.map(function(data){
				return {id:data._id,title:data.name,parentid:data.parentId};
				});
							root="578db77ec19cc73dbcbd1971";
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
			//li.className = node.class;
			li.id=node.id;
			//li.setAttribute('href', "http://www.msn.com");
			li.setAttribute('ng-click', "dis()");
			if(node.children) li.appendChild(parseNodes(node.children));
				return li;
		}
  });
  
