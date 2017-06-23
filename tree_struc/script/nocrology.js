function show(id)
{
		db.txn_personnels.find({'assignment.orgId':id}).forEach(function(dataData){
			for(var i=0;i<dataData.assignment.length;i++)
			{
			 if(dataData.assignment[i].orgId==id){
			   	dataData.assignment[i].status="57728652c19cb17d6fb7d096";
			   	dataData.assignment[i].status=ObjectId(dataData.assignment[i].st);
			 }
			}
		  db.txn_personnels.save(dataData);
		});
}
db.txn_organizations.find({ "directoryId": ObjectId("57189cd924d8bc65f4123bc3"), "classificationCode": ObjectId("57726c33c19c305dc5b1b36c") }).forEach(function(data){
	show(data._id);
})