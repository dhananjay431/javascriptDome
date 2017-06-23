function show(qr,broot)
{
		db.txn_organizations.find(qr,{"parentId":1,"notes":1,"name":1,"classificationCodeName":1,"sequenceNo":1,"header":1,"orgIdNumber":1,"personnel":1})
		.forEach(function(data){
		if(data.personnel.length > 0)
			for(var i=0;i<data.personnel.length;i++)
			{
			  data.personnel[i]=db.txn_personnels.findOne({_id:data.personnel[i]},{"title":1,"name.first":1,"name.last":1,"name.middle":1,"religiousOrderInitials":1,"notes.note":1,"notes.HeaderItalic":1,"notes.bold":1});
			}
			if(data.classificationCodeName=="Header"){
			data.header.HeaderName=data.name;
			}else{
				data.OrganizationName=data.name
				data.HeaderId=data.orgIdNumber;
			}
			if(data.notes==null)
			{
				delete data.notes;
			}
			delete data.name;
			delete data.classificationCodeName;
			db.xml.save(data);
			show({ "parentId": data._id,"directoryId":ObjectId("57189cd924d8bc65f4123bc3")},broot)
		});
}
db.txn_organizations.find({ "parentId": ObjectId("578db77ec19cc73dbcbd1972"),"directoryId":ObjectId("57189cd924d8bc65f4123bc3")},{"name":1,"notes":1,"classificationCodeName":1,"sequenceNo":1,"header":1,"orgIdNumber":1,"parentId":1,"personnel":1}).forEach(function(root){
	show({ "parentId": root._id,"directoryId":ObjectId("57189cd924d8bc65f4123bc3")},root._id)
})
printjson(db.xml.find({}).toArray());
db.xml.drop();
//mongo 10.0.1.131/tw-new-migrated nestedTree.js > xmldata.json