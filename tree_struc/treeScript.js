function show(qr,broot)
{
		db.txn_organizations.find(qr)
		.forEach(function(data){
			data.root=broot;
			db.txn_organizations.save(data);
			show({ "parentId": data._id,"directoryId":ObjectId("57189cd924d8bc65f4123bc3")},broot)
		});
}
db.txn_organizations.find({ "parentId": null,"directoryId":ObjectId("57189cd924d8bc65f4123bc3")},{_id:1}).forEach(function(root){
	show({ "parentId": root._id,"directoryId":ObjectId("57189cd924d8bc65f4123bc3")},root._id)
})