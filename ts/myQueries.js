//split(/[\s,]+/);
//split(/\s/);
//https://thinkster.io/interceptors
//function show(ip) {
//    iparray = ip.split(".");
//    ipnumber = parseInt(iparray[3]) +
//        parseInt(iparray[2]) * 256 +
//        parseInt(iparray[1]) * Math.pow(256, 2) +
//        parseInt(iparray[0]) * Math.pow(256, 3);
//    if (parseInt(ipnumber) > 0)return ipnumber;
//    return 0;
//}

function show(n){
  while(n!=0)
  {
    console.log(Number(n)%10);
	n=n/10;
  }
}

// AAD 57189c7024d8bc65f4123bc0
//db.txn_organizations.find({ 
//  "directoryId": ObjectId("57189c7024d8bc65f4123bc0"), 
//  "artSchool.scholarship": true,
//  "status":{$nin: [ObjectId("57627863c19c919f11f1156a"), ObjectId("57a1c0a07daa42bb9ae8356c")]} }).count()
//i/o=  1342

// AAD 57189c7024d8bc65f4123bc0
//db.txn_organizations.find({ 
//  "directoryId": ObjectId("57189c7024d8bc65f4123bc0"), 
//  "artSchool.fellowships": true,
//  "status":{$nin: [ObjectId("57627863c19c919f11f1156a"), ObjectId("57a1c0a07daa42bb9ae8356c")]} }).count()
//  i/o =103

// AAD 57189c7024d8bc65f4123bc0
//  db.txn_organizations.find({ 
//  "directoryId": ObjectId("57189c7024d8bc65f4123bc0"), 
//  "artSchool.assistantships": true,
//  "status":{$nin: [ObjectId("57627863c19c919f11f1156a"), ObjectId("57a1c0a07daa42bb9ae8356c")]} }).count()
//  i/o = 13

// AAD 57189c7024d8bc65f4123bc0
//  db.txn_organizations.find({ 
//  "directoryId": ObjectId("57189c7024d8bc65f4123bc0"), 
//  "artSchool.grants": true,
//  "status":{$nin: [ObjectId("57627863c19c919f11f1156a"), ObjectId("57a1c0a07daa42bb9ae8356c")]} }).count()
//i/o= 8

//db.txn_organizations.find({ 
//  "directoryId": ObjectId("57189c7024d8bc65f4123bc0"), 
//  "attendance.countNumber":{$gt: 10000},
//  "status":{$nin: [ObjectId("57627863c19c919f11f1156a"), ObjectId("57a1c0a07daa42bb9ae8356c")]} }).count()
//  i/o = 2012

//db.txn_organizations.find({ 
//  "directoryId": ObjectId("57189c7024d8bc65f4123bc0"), 
//  "attendance.countNumber":{$lt: 10000},
//  "status":{$nin: [ObjectId("57627863c19c919f11f1156a"), ObjectId("57a1c0a07daa42bb9ae8356c")]} }).count()
//i/o = 978

//db.txn_organizations.find({ 
//  "directoryId": ObjectId("57189c7024d8bc65f4123bc0"), 
//  "attendance.countNumber":{$eq: 10000},
//  "status":{$nin: [ObjectId("57627863c19c919f11f1156a"), ObjectId("57a1c0a07daa42bb9ae8356c")]} }).count()
//i/o = 188

//db.txn_organizations.find({ 
//  "directoryId": ObjectId("57189c7024d8bc65f4123bc0"), 
//  "attendance.countNumber":{$gt: 25000,$lt:50000},
//  "status":{$nin: [ObjectId("57627863c19c919f11f1156a"), ObjectId("57a1c0a07daa42bb9ae8356c")]} }).count()
//  i/o = 370

//DMMP
//db.txn_organizations.distinct("status",{"directoryId":ObjectId("57189ccf24d8bc65f4123bc2")});
//[
//    ObjectId("57283b4214dde6a43b46a7bc"), Delete
//    ObjectId("57283b4214dde6a43b46a7bb"), Active
//    ObjectId("57283b4214dde6a43b46a7bd")  Hold
//] "57283b4214dde6a43b46a7bc","57283b4214dde6a43b46a7bd"

//AAD
//db.txn_organizations.distinct("status",{"directoryId":ObjectId("57189c7024d8bc65f4123bc0")});
//[
//    ObjectId("57627863c19c919f11f1156a"), K
//    ObjectId("57627863c19c919f11f11569"), A
//    ObjectId("57a1c0a07daa42bb9ae8356c"), H
//    null
//] "57627863c19c919f11f1156a","57a1c0a07daa42bb9ae8356c"

//db.txn_webusers.find({ "ipAddress": "182.72.126.82" });


//db.txn_organizations.find({ "directoryId": ObjectId("57189cc224d8bc65f4123bc1") }).count()

//db.txn_organizations.distinct("status",{ "directoryId": ObjectId("57189cc224d8bc65f4123bc1") });
//[
//    ObjectId("57283b4214dde6a43b46a7bb"), // active
//    ObjectId("57728652c19cb17d6fb7d096"), Inactive
//    null
//]

//db.txn_organizations.distinct("workflowStatus",{ "directoryId": ObjectId("57189cc224d8bc65f4123bc1") });
//[
//    ObjectId("57283b4214dde6a43b46a7bb"), Active
//    ObjectId("57283b4214dde6a43b46a7bc"), Delete
//    ObjectId("57283b4214dde6a43b46a7bd") Hold
//]

//db.txn_organizations.find({ "directoryId": ObjectId("57189cc224d8bc65f4123bc1") ,"workflowStatus":ObjectId("57283b4214dde6a43b46a7bb")}).count()
//2645

//CFS
//db.txn_organizations.aggregate(
//
//  [
//    {
//      $match: {
//      directoryId:ObjectId("57189cc224d8bc65f4123bc1")
//      }
//    },
//    {
//      $unwind: "$chapterSpecification"
//    },
//    {
//      $lookup: {
//          "from" : "txn_chapterspecifications",
//          "localField" : "chapterSpecification",
//          "foreignField" : "_id",
//          "as" : "chapterSpecification"
//      }
//    },
//    {
//      $unwind: "$chapterSpecification"
//    },
//    {
//      $match: {
//      $and:[{"chapterSpecification.name":{$in: ["Agribusiness"]},"chapterSpecification.specificationType":"INDUSTRY PREFERENCE"}]
//      }
//    }
//  ]
//);

//db.txn_organizations.find({ "directoryId": ObjectId("57189cc224d8bc65f4123bc1"), "name": { $ne: null } }).count()
//db.txn_organizations.find({ "directoryId": ObjectId("57189cc224d8bc65f4123bc1")}).count()
//db.txn_chapterspecifications.find({ "directoryId": ObjectId("57189cc224d8bc65f4123bc1")});
//DMMP count match 

//db.txn_organizations.find({ "directoryId": ObjectId("57189ccf24d8bc65f4123bc2"), "listingType.listingName": "Associations, Courses & Events (40-42)", "status": { $nin: [ObjectId('57283b4214dde6a43b46a7bc'),ObjectId('57283b4214dde6a43b46a7bd')] } }).count()

//var arr={"key":"Direct Marketers (1-19)","value":""};

//db.txn_organizations.find({ "directoryId": ObjectId("57189ccf24d8bc65f4123bc2"), "listingType.listingName": arr.key, "status": { $nin: [ObjectId('57283b4214dde6a43b46a7bc'),ObjectId('57283b4214dde6a43b46a7bd')] } }).count()

//db.txn_personnels.find({ "name.first": /^tim$/i, "directoryId": ObjectId("57189ccf24d8bc65f4123bc2") }).count()


//20170209 UAT UPLOAD FILES

//db.mst_menus.update({"_id" : ObjectId("580f483bc2af0b3088c3f63d")},
//{ 
//    "_id" : ObjectId("580f483bc2af0b3088c3f63d"), 
//    "directoryId" : ObjectId("57189c7024d8bc65f4123bc0"), 
//    "direcoryName" : "AAD", 
//    "caption" : "Search Online", 
//    "type" : "link", 
//    "sequenceNo" : NumberInt(8), 
//    "icon" : "fa fa-home home-icon", 
//    "showIcon" : false, 
//    "class" : "page-scroll login-button", 
//    "toolTip" : "Search Online", 
//    "link" : "core.login", 
//    "insideLink" : "core.login", 
//    "parentId" : NumberInt(0), 
//    "privateLink" : "core.search", 
//    "privateInsideLink" : "core.search", 
//    "subMenu" : false, 
//    "subMenus" : [
//
//    ], 
//    "active" : true, 
//    "deleted" : false, 
//    "__v" : NumberInt(0), 
//    "directoryName" : "AAD"
//});

//db.txn_organizations.find({ "directoryId" : ObjectId("57189c7024d8bc65f4123bc0") }).forEach(function(org){
//	if(org.address && org.address.length > 0){
//	  	var phyFlag = false, maiFlag = false, delFlag = false;
//		org.address.forEach(function(address){
//		  	delete address.considerThisAddress;
//		    if(!phyFlag && !address.deleted && address.addressType && address.addressType.equals(ObjectId("576286d0c19cef300bc720e6"))){
//		      	phyFlag = true;
//		      	address.considerThisAddress = true;
//		    }
//		});
//		if(!phyFlag){
//			org.address.forEach(function(address){
//		    	if(!maiFlag && !address.deleted && address.addressType && address.addressType.equals(ObjectId("576286d0c19cef300bc720e5"))){
//		    	  	maiFlag = true;
//		      		address.considerThisAddress = true;
//		    	}
//			});
//			if(!maiFlag){
//			  org.address.forEach(function(address){
//				if(!delFlag && !address.deleted) {
//				  address.considerThisAddress = true;
//				  delFlag = true;
//				}
//			  });
//			}
//		}
//		db.txn_organizations.save(org);
//	}
//});

///Treasured_Works_QA/cms/web/common/controllers/web.home.search.controllerAAD.js
///Treasured_Works_QA/cms/web/common/controllers/web.home.search.controllerDMMP.js
///Treasured_Works_QA/cms/web/common/controllers/web.home.search.controllerCFS.js
///Treasured_Works_QA/cms/web/common/routers/web.router.js
//
//
///Treasured_Works_QA/cms/web/views/search/dmmp-search.html
///Treasured_Works_QA/cms/web/views/search/dmmp-search-view.html
///Treasured_Works_QA/cms/web/views/search/cfs-search.html
///Treasured_Works_QA/cms/web/views/search/cfs-search-view.html
///Treasured_Works_QA/cms/web/views/search/aad-search.html
///Treasured_Works_QA/cms/web/views/search/aad-search-view.html
//
///Treasured_Works_QA/app/modules/organization/organization.controller.js
///Treasured_Works_QA/app/modules/organization/organization.service.js
//
///Treasured_Works_QA/cms/web/common/controllers/web.home.login.controller.js
///Treasured_Works_QA/cms/web/common/factories/DirectoryOrganizationService.js
///Treasured_Works_QA/cms/web/common/controllers/web.browsertitle.controller.js
//  UPLOAD END


//db.txn_organizations.distinct("status",{ "directoryId": ObjectId("57189c7024d8bc65f4123bc0") })
//
//[
//    ObjectId("57627863c19c919f11f1156a"), K
//    ObjectId("57627863c19c919f11f11569"), A
//    ObjectId("57a1c0a07daa42bb9ae8356c"), H
//    null
//]

//db.txn_organizations.find({ "directoryId": ObjectId("57189c7024d8bc65f4123bc0"),status: ObjectId("57627863c19c919f11f11569")}).count()
//7787
//DMMP
//db.txn_organizations.find({ "directoryId": ObjectId("57189c7024d8bc65f4123bc0"),status: ObjectId("57627863c19c919f11f11569")}).count()

//db.txn_organizations.find({ "directoryId": ObjectId("57189c7024d8bc65f4123bc0"),status: ObjectId("57627863c19c919f11f11569")}).count()

//db.txn_organizations.distinct("status",{ "directoryId": ObjectId("57189ccf24d8bc65f4123bc2") })
//    ObjectId("57283b4214dde6a43b46a7bc"), Delete
//    ObjectId("57283b4214dde6a43b46a7bb"), Active
//    ObjectId("57283b4214dde6a43b46a7bd") Hold

//db.txn_organizations.find({ "directoryId": ObjectId("57189ccf24d8bc65f4123bc2"),status: ObjectId("57283b4214dde6a43b46a7bb")}).count()

// 201702091720 DMMP UAT UPLOAD
///Treasured_Works_QA/cms/web/common/controllers/web.home.search.controllerAAD.js
///Treasured_Works_QA/cms/web/common/controllers/web.home.search.controllerDMMP.js
///Treasured_Works_QA/cms/web/views/search/dmmp-search-view.html
///Treasured_Works_QA/cms/web/views/search/dmmp-search.html

//  UPLOAD END



//db.mst_menus.update({"_id" : ObjectId("5810a005c2af0b3088c3f641")},
//{ 
//    "_id" : ObjectId("5810a005c2af0b3088c3f641"), 
//    "directoryId" : ObjectId("57189ccf24d8bc65f4123bc2"), 
//    "direcoryName" : "DMMP", 
//    "caption" : "Search Online", 
//    "type" : "link", 
//    "sequenceNo" : NumberInt(8), 
//    "icon" : "fa fa-home home-icon", 
//    "showIcon" : false, 
//    "class" : "page-scroll login-button", 
//    "toolTip" : "Search Online", 
//    "link" : "core.login", 
//    "insideLink" : "core.login", 
//    "parentId" : NumberInt(0), 
//    "privateLink" : "core.search", 
//    "privateInsideLink" : "core.search", 
//    "subMenu" : false, 
//    "subMenus" : [
//
//    ], 
//    "active" : true, 
//    "deleted" : false, 
//    "__v" : NumberInt(0), 
//    "directoryName" : "DMMP"
//});
//
//db.txn_organizations.find({ "directoryId" : ObjectId("57189ccf24d8bc65f4123bc2") }).forEach(function(org){
//	if(org.address && org.address.length > 0){
//	  	var phyFlag = false, maiFlag = false, delFlag = false;
//		org.address.forEach(function(address){
//		  	delete address.considerThisAddress;
//		    if(!phyFlag && !address.deleted && address.addressType && address.addressType.equals(ObjectId("576be2eac19c425183b9046e"))){
//		      	phyFlag = true;
//		      	address.considerThisAddress = true;
//		    }
//		});
//		if(!phyFlag){
//			org.address.forEach(function(address){
//		    	if(!maiFlag && !address.deleted && address.addressType && address.addressType.equals(ObjectId("576286d0c19cef300bc720e5"))){
//		    	  	maiFlag = true;
//		      		address.considerThisAddress = true;
//		    	}
//			});
//			if(!maiFlag){
//			  org.address.forEach(function(address){
//				if(!delFlag && !address.deleted) {
//				  address.considerThisAddress = true;
//				  delFlag = true;
//				}
//			  });
//			}
//		}
//		db.txn_organizations.save(org);
//	}
//});
//
//db.mst_menus.insert({ 
//    "directoryId" : ObjectId("57189cc224d8bc65f4123bc1"), 
//	"direcoryName" : "CFS", 
//    "caption" : "Search Online", 
//    "type" : "link", 
//    "sequenceNo" : NumberInt(8), 
//    "icon" : "fa fa-home home-icon", 
//    "showIcon" : false, 
//    "class" : "page-scroll login-button", 
//    "toolTip" : "Search Online", 
//    "link" : "core.login", 
//    "insideLink" : "core.login", 
//    "parentId" : NumberInt(0), 
//    "privateLink" : "core.search", 
//    "privateInsideLink" : "core.search", 
//    "subMenu" : false, 
//    "subMenus" : [
//    ], 
//    "active" : true, 
//    "deleted" : false, 
//    "__v" : NumberInt(0), 
//    "directoryName" : "CFS"
//});
//
//{ "directoryId": ObjectId("57189cc224d8bc65f4123bc1") }
//
//
//{ 
//    "_id" : ObjectId("57a49192280d87df688168d4"), 
//    "directoryId" : ObjectId("57189b3e24d8bc65f4123bbf"), 
//    "direcoryName" : "OMD", 
//    "caption" : "Search Museums", 
//    "type" : "link", 
//    "sequenceNo" : NumberInt(8), 
//    "icon" : "fa fa-home home-icon", 
//    "showIcon" : false, 
//    "class" : "page-scroll login-button", 
//    "toolTip" : "Search Museums", 
//    "link" : "core.login", 
//    "insideLink" : "core.login", 
//    "parentId" : NumberInt(0), 
//    "privateLink" : "core.search", 
//    "privateInsideLink" : "core.search", 
//    "subMenu" : false, 
//    "subMenus" : [
//
//    ], 
//    "active" : true, 
//    "deleted" : false, 
//    "__v" : NumberInt(0), 
//    "directoryName" : "OMD"
//}
//
//{ 
//    "_id" : ObjectId("589c6546b3ea65e725a2f723"), 
//    "directoryId" : ObjectId("57189cc224d8bc65f4123bc1"), 
//    "direcoryName" : "CFS", 
//    "caption" : "Search Online", 
//    "type" : "link", 
//    "sequenceNo" : NumberInt(8), 
//    "icon" : "fa fa-home home-icon", 
//    "showIcon" : false, 
//    "class" : "page-scroll login-button", 
//    "toolTip" : "Search Online", 
//    "link" : "core.login", 
//    "insideLink" : "core.login", 
//    "parentId" : NumberInt(0), 
//    "privateLink" : "core.search", 
//    "privateInsideLink" : "core.search", 
//    "subMenu" : false, 
//    "subMenus" : [
//
//    ], 
//    "active" : true, 
//    "deleted" : false, 
//    "__v" : NumberInt(0), 
//    "directoryName" : "CFS"
//}

////////////////////////// CFS script ///////////////////////////////////


//db.mst_menus.insert({ 
//	"directoryId" : ObjectId("57189cc224d8bc65f4123bc1"), 
//    "direcoryName" : "CFS", 
//    "type" : "link", 
//    "sequenceNo" : NumberInt(9), 
//    "icon" : "fa fa-cog home-icon", 
//    "private" : true, 
//    "showIcon" : true, 
//    "subMenu" : true, 
//    "class" : "page-scroll login-button", 
//    "subMenus" : [
//        {
//            "caption" : "My Profile", 
//            "sequenceNo" : NumberInt(1), 
//            "toolTip" : "My Profile", 
//            "disableScroll" : true, 
//            "link" : "core.profile", 
//            "insideLink" : "core.profile", 
//            "class" : "page-scroll", 
//            "active" : true, 
//            "deleted" : false
//        }, 
//        {
//            "caption" : "Log Out", 
//            "sequenceNo" : NumberInt(2), 
//            "toolTip" : "Log Out", 
//            "linkActionLogout" : true, 
//            "class" : "page-scroll", 
//            "active" : true, 
//            "deleted" : false
//        }
//    ], 
//    "active" : true, 
//    "deleted" : false, 
//    "directoryName" : "CFS"
//});
//
//
//db.mst_menus.insert({ 
//    "directoryId" : ObjectId("57189cc224d8bc65f4123bc1"), 
//	"direcoryName" : "CFS", 
//    "caption" : "Search Online", 
//    "type" : "link", 
//    "sequenceNo" : NumberInt(8), 
//    "icon" : "fa fa-home home-icon", 
//    "showIcon" : false, 
//    "class" : "page-scroll login-button", 
//    "toolTip" : "Search Online", 
//    "link" : "core.login", 
//    "insideLink" : "core.login", 
//    "parentId" : NumberInt(0), 
//    "privateLink" : "core.search", 
//    "privateInsideLink" : "core.search", 
//    "subMenu" : false, 
//    "subMenus" : [
//    ], 
//    "active" : true, 
//    "deleted" : false, 
//    "__v" : NumberInt(0), 
//    "directoryName" : "CFS"
//});
