import _ from 'lodash';

export default function() {
    var exports = {};
    var types = {};

    types["PersonGender"] = [{
            "name": "Male",
            "index": 0,
            "value": 0
        },
        {
            "name": "Female",
            "index": 1,
            "value": 1
        },
        {
            "name": "Unknow",
            "index": 2,
            "value": 2
        }
    ];

    types["Feature"] = [{
            "name": "Feature1",
            "index": 0,
            "value": 0
        },
        {
            "name": "Feature2",
            "index": 1,
            "value": 1
        },
        {
            "name": "Feature3",
            "index": 2,
            "value": 2
        },
        {
            "name": "Feature4",
            "index": 3,
            "value": 3
        }
    ];

    types["Location"] = {
        Address: {
            "type": "Edm.String"
        },
        City: {
            "type": "City"
        }
    };

    types["City"] = {
        Name: {
            "type": "Edm.String"
        },
        CountryRegion: {
            "type": "Edm.String"
        },
        Region: {
            "type": "Edm.String"
        }
    };

    types["AirportLocation"] = {
        Loc: {
            "type": "Edm.GeographyPoint"
        }
    };

    types["EventLocation"] = {
        BuildingInfo: {
            "type": "Edm.String"
        }
    };

    types["Person"] = {
        UserName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "key": true
        },
        FirstName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true
        },
        LastName: {
            "type": "Edm.String"
        },
        MiddleName: {
            "type": "Edm.String"
        },
        Gender: {
            "type": "PersonGender",
            "nullable": false,
            "required": true
        },
        Age: {
            "type": "Edm.Int64"
        },
        Emails: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        AddressInfo: {
            "type": "Array",
            "elementType": "Location"
        },
        HomeAddress: {
            "type": "Location"
        },
        FavoriteFeature: {
            "type": "Feature",
            "nullable": false,
            "required": true
        },
        Features: {
            "type": "Array",
            "elementType": "Feature",
            "nullable": false,
            "required": true
        },
        Friends: {
            "type": "Array",
            "elementType": "Person",
            "inverseProperty": "$$unbound"
        },
        BestFriend: {
            "type": "Person",
            "inverseProperty": "$$unbound"
        },
        Trips: {
            "type": "Array",
            "elementType": "Trip",
            "inverseProperty": "$$unbound"
        },
        ShareTrip: {
            "type": "$data.ServiceAction",
            "namespace": "Microsoft.OData.Service.Sample.TrippinInMemory",
            "returnType": null,
            "params": [{
                "name": "userName",
                "type": "Edm.String"
            }, {
                "name": "tripId",
                "type": "Edm.Int32"
            }]
        },
        GetFavoriteAirline: {
            "type": "$data.ServiceFunction",
            "namespace": "Microsoft.OData.Service.Sample.TrippinInMemory",
            "returnType": "Airline",
            "params": []
        },
        GetFriendsTrips: {
            "type": "$data.ServiceFunction",
            "namespace": "Microsoft.OData.Service.Sample.TrippinInMemory",
            "returnType": "$data.Queryable",
            "params": [{
                "name": "userName",
                "type": "Edm.String"
            }],
            "elementType": "Trip"
        },
        UpdatePersonLastName: {
            "type": "$data.ServiceFunction",
            "namespace": "Microsoft.OData.Service.Sample.TrippinInMemory",
            "returnType": "Edm.Boolean",
            "params": [{
                "name": "lastName",
                "type": "Edm.String"
            }]
        }
    };

    types["Airline"] = {
        AirlineCode: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "key": true
        },
        Name: {
            "type": "Edm.String",
        }
    };

    types["Airport"] = {
        Name: {
            "type": "Edm.String"
        },
        IcaoCode: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "key": true
        },
        IataCode: {
            "type": "Edm.String"
        },
        Location: {
            "type": "AirportLocation"
        }
    };

    types["Trip"] = {
        TripId: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        ShareId: {
            "type": "Edm.Guid",
            "nullable": false,
            "required": true
        },
        Name: {
            "type": "Edm.String"
        },
        Budget: {
            "type": "Edm.Single",
            "nullable": false,
            "required": true
        },
        Description: {
            "type": "Edm.String"
        },
        Tags: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        StartsAt: {
            "type": "Edm.DateTimeOffset",
            "nullable": false,
            "required": true
        },
        EndsAt: {
            "type": "Edm.DateTimeOffset",
            "nullable": false,
            "required": true
        },
        PlanItems: {
            "type": "Array",
            "elementType": "PlanItem",
            "inverseProperty": "$$unbound"
        },
        GetInvolvedPeople: {
            "type": "$data.ServiceFunction",
            "namespace": "Microsoft.OData.Service.Sample.TrippinInMemory",
            "returnType": "$data.Queryable",
            "params": [],
            "elementType": "Person"
        }
    };

    types["PlanItem"] = {
        PlanItemId: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        ConfirmationCode: {
            "type": "Edm.String"
        },
        StartsAt: {
            "type": "Edm.DateTimeOffset",
            "nullable": false,
            "required": true
        },
        EndsAt: {
            "type": "Edm.DateTimeOffset",
            "nullable": false,
            "required": true
        },
        Duration: {
            "type": "Edm.Duration",
            "nullable": false,
            "required": true
        }
    };

    types["Event"] = {
        OccursAt: {
            "type": "EventLocation"
        },
        Description: {
            "type": "Edm.String"
        }
    };

    types["PublicTransportation"] = _.extend(types["PlanItem"], {
        SeatNumber: {
            "type": "Edm.String"
        }
    });

    types["Flight"] = _.extend(types["PublicTransportation"], {
        FlightNumber: {
            "type": "Edm.String"
        },
        Airline: {
            "type": "Airline",
            "inverseProperty": "$$unbound"
        },
        From: {
            "type": "Airport",
            "inverseProperty": "$$unbound"
        },
        To: {
            "type": "Airport",
            "inverseProperty": "$$unbound"
        }
    });

    types["Employee"] = _.extend(types["Person"], {
        Cost: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        Peers: {
            "type": "Array",
            "elementType": "Person",
            "inverseProperty": "$$unbound"
        }
    });

    types["Manager"] = _.extend(types["Person"], {
        Budget: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        BossOffice: {
            "type": "Location"
        },
        DirectReports: {
            "type": "Array",
            "elementType": "Person",
            "inverseProperty": "$$unbound"
        }
    });

    exports.type = types["Container"] = {
        People: {
            "type": "$data.EntitySet",
            "elementType": "Person"
        },
        Airlines: {
            "type": "$data.EntitySet",
            "elementType": "Airline"
        },
        Airports: {
            "type": "$data.EntitySet",
            "elementType": "Airport"
        },
        NewComePeople: {
            "type": "$data.EntitySet",
            "elementType": "Person"
        },
        ResetDataSource: {
            "type": "$data.ServiceAction",
            "returnType": null,
            "params": []
        },
        GetPersonWithMostFriends: {
            "type": "$data.ServiceFunction",
            "returnType": "Person",
            "params": []
        },
        GetNearestAirport: {
            "type": "$data.ServiceFunction",
            "returnType": "Airport",
            "params": [{
                "name": "lat",
                "type": "Edm.Double"
            }, {
                "name": "lon",
                "type": "Edm.Double"
            }]
        },
    };

    exports.models = {
        "PersonGender" : types["PersonGender"],
        "Feature" : types["Feature"],
        "Location" : types["Location"],
        "City" : types["City"],
        "AirportLocation" : types["AirportLocation"],
        "EventLocation" : types["EventLocation"],
        "Person" : types["Person"],
        "Airline" : types["Airline"],
        "Airport" : types["Airport"],
        "Trip" : types["Trip"],
        "PlanItem" : types["PlanItem"],
        "Event" : types["Event"],
        "PublicTransportation" : types["PublicTransportation"],
        "Flight" : types["Flight"],
        "Employee" : types["Employee"],
        "Manager" : types["Manager"],
        "Container" : types["Container"],
    };

    exports.oDataServiceHost = "http://services.odata.org/TripPinRESTierService/(S(0jdvke144vkq4qx1il15gnvy))/";

    return exports;
};