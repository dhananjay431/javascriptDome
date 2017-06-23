printjson(db.txn_personnels.aggregate(
    [{
        $match: {
            "directoryId": ObjectId("57189cd924d8bc65f4123bc3"),
            'ocdContact.assignId': { $ne: null },
            'ocdContact.orgId': { $ne: null }
        }
    }, {
        $project: {
            PeopleId: 1,
            name: 1,
            ocdContact: 1,
            assignment: 1,
            homeDiocese: 1
        }
    }, {
        $unwind: {
            path: "$ocdContact",
            includeArrayIndex: "ocdContact.idx",
            preserveNullAndEmptyArrays: true
        }
    }, {
        $match: {
            'ocdContact.idx': { $ne: null }
        }
    }, {
        $lookup: {
            "from": "txn_organizations",
            "localField": "ocdContact.orgId",
            "foreignField": "_id",
            "as": "ocdContact.org"
        }
    }, {
        $unwind: {
            path: "$ocdContact.org",
            preserveNullAndEmptyArrays: true
        }
    }, {
        $unwind: {
            path: "$assignment",
            preserveNullAndEmptyArrays: true
        }
    }, {
        $lookup: {
            "from": "txn_organizations",
            "localField": "assignment.orgId",
            "foreignField": "_id",
            "as": "assignment.org"
        }
    }, {
        $unwind: {
            path: "$assignment.org",
            preserveNullAndEmptyArrays: true
        }
    }, {
        $lookup: {
            "from": "mst_refcodevalues",
            "localField": "assignment.status",
            "foreignField": "_id",
            "as": "assignment.status"
        }
    }, {
        $unwind: {
            path: "$assignment.status",
            preserveNullAndEmptyArrays: true
        }
    }, {
        $match: {
            'assignment.status.codeValue': "Active"
        }
    }, {
        $project: {
            PeopleId: 1,
            name: 1,
            homeDiocese: 1,
            ocdContact: {
                assignId: 1,
                sequenceNo: 1,
                contactTypeName: 1,
                contactDetails: 1,
                orgId: '$ocdContact.org.org_id',
                idx: 1
            },
            assignment: {
                assignId: 1,
                assignType: 1,
                orgId: '$assignment.org.org_id',
                orgName: '$assignment.org.name',
                status: '$assignment.status.codeValue'
            }
        }
    }, {
        $group: {
            _id: { id: '$_id', PeopleId: '$PeopleId', name: '$name', homeDiocese: '$homeDiocese' },
            ocdContact: { $addToSet: '$ocdContact' },
            assignment: { $addToSet: '$assignment' }
        }
    }, {
        $sort: {
            _id: 1
        }
    } ], {
        allowDiskUse: true
    }
).toArray());
