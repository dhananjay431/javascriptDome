db.txn_organizations.find({"root":ObjectId("578db77ec19cc73dbcbd1972")},{"parentId":1,"notes":1,"name":1,"classificationCodeName":1,"sequenceNo":1,"header":1,"orgIdNumber":1,"personnel":1}).forEach(function(data){
	  		if(data.personnel.length > 0)
			for(var i=0;i<data.personnel.length;i++)
			{
			  data.personnel[i]=db.txn_personnels.findOne({_id:data.personnel[i]},{"name.first":1,"name.last":1,"name.middle":1,"religiousOrderInitials":1,"notes.note":1,"notes.HeaderItalic":1,"notes.bold":1});
			}
			db.xml.save(data);
})
printjson(db.xml.find({}).toArray());
db.xml.drop();