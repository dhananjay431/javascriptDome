printjson(db.txn_organizations.aggregate(
  [
    {
      $match: {
      "directoryId":ObjectId("57189cd924d8bc65f4123bc3"), 
      "root":ObjectId("578db843c19cc73dbcbf24d9")
      }
    },
    {
      $unwind: "$personnel"
    },
    {
      $lookup: {
          "from" : "txn_personnels",
          "localField" : "personnel",
          "foreignField" : "_id",
          "as" : "personnel"
      }
    },
    {
      $unwind: "$personnel"
    },
    { $sort : {"personnel.name.last": 1 } },
    { $sort : { "name" : 1}},
        {
      $project: {
      "_id":1,
      "name":1,
      "classificationCodeName":1,
      "sequenceNo":1,
      "header":1,
      "notes":1,
      "orgIdNumber":1,
      "parentId":1,
      "personnel._id":1,
      "personnel.name.first":1,
      "personnel.name.last":1,
      "personnel.name.middle":1,
      "personnel.religiousOrderInitials":1,
      "personnel.notes.note":1,
      "personnel.notes.italic":1,
      "personnel.notes.bold":1
      }
    },
    {
		$group:
		{
		"_id":"$_id",
		"name":{$first:"$name"},
		"classificationCodeName":{$first:"$classificationCodeName"},
		"sequenceNo":{$first:"$sequenceNo"},
		"header":{$first:"$header"},
		"notes":{$first:"$notes"},
		"orgIdNumber":{$first:"$orgIdNumber"},
		"parentId":{$first:"$parentId"},
		"personnel": { $push:"$personnel" },
		}
	}
	
  ]
).toArray());