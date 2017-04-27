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



///////////////////////////////////////script///////////////////////////////////////

db.mst_refcodevalues.find({ "codeTypeId": ObjectId("5751870eb78ea0d3696066d0"), "level": "D" }).forEach(function(seqNo){
     if(seqNo.sequenceNo){
          seqNo.sequenceNo=(Number(seqNo.sequenceNo) - 100).toString();
 } 
  db.mst_refcodevalues.save(seqNo);
});

///////////////////////////////////////script///////////////////////////////////////

var b=348450;
db.txn_personnels.find({ "directoryId": ObjectId("57189cd924d8bc65f4123bc3"), "PeopleIdNumber": { $gt: 1000000 } }).forEach(function(data){
    data.PeopleIdNumber=Number(b);
    data.PeopleId=b.toString();
    b=b+1;
    db.txn_personnels.save(data);
});

///////////////////////////////////////script///////////////////////////////////////