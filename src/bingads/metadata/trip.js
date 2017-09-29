(function(mod) {
    if (typeof exports == "object" && typeof module == "object") return mod(exports, require("jaydata/core")); // CommonJS
    if (typeof define == "function" && define.amd) return define(["exports", "jaydata/core"], mod); // AMD
    mod($data.generatedContext || ($data.generatedContext = {}), $data); // Plain browser env
})(function(exports, $data) {

    exports.$data = $data;

    var types = {};

    types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.PersonGender"] = $data.createEnum("Microsoft.OData.Service.Sample.TrippinInMemory.Models.PersonGender", [{
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
    ]);

    types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Feature"] = $data.createEnum("Microsoft.OData.Service.Sample.TrippinInMemory.Models.Feature", [{
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
    ]);

    types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Location"] = $data("$data.Entity").extend("Microsoft.OData.Service.Sample.TrippinInMemory.Models.Location", {
        Address: {
            "type": "Edm.String"
        },
        City: {
            "type": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.City"
        }
    });

    types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.City"] = $data("$data.Entity").extend("Microsoft.OData.Service.Sample.TrippinInMemory.Models.City", {
        Name: {
            "type": "Edm.String"
        },
        CountryRegion: {
            "type": "Edm.String"
        },
        Region: {
            "type": "Edm.String"
        }
    });

    types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.AirportLocation"] = types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Location"].extend("Microsoft.OData.Service.Sample.TrippinInMemory.Models.AirportLocation", {
        Loc: {
            "type": "Edm.GeographyPoint"
        }
    });

    types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.EventLocation"] = types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Location"].extend("Microsoft.OData.Service.Sample.TrippinInMemory.Models.EventLocation", {
        BuildingInfo: {
            "type": "Edm.String"
        }
    });

    types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Person"] = $data("$data.Entity").extend("Microsoft.OData.Service.Sample.TrippinInMemory.Models.Person", {
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
            "type": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.PersonGender",
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
            "elementType": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Location"
        },
        HomeAddress: {
            "type": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Location"
        },
        FavoriteFeature: {
            "type": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Feature",
            "nullable": false,
            "required": true
        },
        Features: {
            "type": "Array",
            "elementType": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Feature",
            "nullable": false,
            "required": true
        },
        Friends: {
            "type": "Array",
            "elementType": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Person",
            "inverseProperty": "$$unbound"
        },
        BestFriend: {
            "type": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Person",
            "inverseProperty": "$$unbound"
        },
        Trips: {
            "type": "Array",
            "elementType": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Trip",
            "inverseProperty": "$$unbound"
        },
        ShareTrip: {
            "type": "$data.ServiceAction",
            "namespace": "Microsoft.OData.Service.Sample.TrippinInMemory.Models",
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
            "namespace": "Microsoft.OData.Service.Sample.TrippinInMemory.Models",
            "returnType": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Airline",
            "params": []
        },
        GetFriendsTrips: {
            "type": "$data.ServiceFunction",
            "namespace": "Microsoft.OData.Service.Sample.TrippinInMemory.Models",
            "returnType": "$data.Queryable",
            "params": [{
                "name": "userName",
                "type": "Edm.String"
            }],
            "elementType": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Trip"
        },
        UpdatePersonLastName: {
            "type": "$data.ServiceFunction",
            "namespace": "Microsoft.OData.Service.Sample.TrippinInMemory.Models",
            "returnType": "Edm.Boolean",
            "params": [{
                "name": "lastName",
                "type": "Edm.String"
            }]
        }
    });

    types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Airline"] = $data("$data.Entity").extend("Microsoft.OData.Service.Sample.TrippinInMemory.Models.Airline", {
        AirlineCode: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "key": true
        },
        Name: {
            "type": "Edm.String",
            "concurrencyMode": $data.ConcurrencyMode.Fixed
        }
    });

    types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Airport"] = $data("$data.Entity").extend("Microsoft.OData.Service.Sample.TrippinInMemory.Models.Airport", {
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
            "type": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.AirportLocation"
        }
    });

    types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Trip"] = $data("$data.Entity").extend("Microsoft.OData.Service.Sample.TrippinInMemory.Models.Trip", {
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
            "elementType": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.PlanItem",
            "inverseProperty": "$$unbound"
        },
        GetInvolvedPeople: {
            "type": "$data.ServiceFunction",
            "namespace": "Microsoft.OData.Service.Sample.TrippinInMemory.Models",
            "returnType": "$data.Queryable",
            "params": [],
            "elementType": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Person"
        }
    });

    types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.PlanItem"] = $data("$data.Entity").extend("Microsoft.OData.Service.Sample.TrippinInMemory.Models.PlanItem", {
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
    });

    types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Event"] = types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.PlanItem"].extend("Microsoft.OData.Service.Sample.TrippinInMemory.Models.Event", {
        OccursAt: {
            "type": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.EventLocation"
        },
        Description: {
            "type": "Edm.String"
        }
    });

    types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.PublicTransportation"] = types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.PlanItem"].extend("Microsoft.OData.Service.Sample.TrippinInMemory.Models.PublicTransportation", {
        SeatNumber: {
            "type": "Edm.String"
        }
    });

    types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Flight"] = types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.PublicTransportation"].extend("Microsoft.OData.Service.Sample.TrippinInMemory.Models.Flight", {
        FlightNumber: {
            "type": "Edm.String"
        },
        Airline: {
            "type": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Airline",
            "inverseProperty": "$$unbound"
        },
        From: {
            "type": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Airport",
            "inverseProperty": "$$unbound"
        },
        To: {
            "type": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Airport",
            "inverseProperty": "$$unbound"
        }
    });

    types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Employee"] = types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Person"].extend("Microsoft.OData.Service.Sample.TrippinInMemory.Models.Employee", {
        Cost: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        Peers: {
            "type": "Array",
            "elementType": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Person",
            "inverseProperty": "$$unbound"
        }
    });

    types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Manager"] = types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Person"].extend("Microsoft.OData.Service.Sample.TrippinInMemory.Models.Manager", {
        Budget: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        BossOffice: {
            "type": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Location"
        },
        DirectReports: {
            "type": "Array",
            "elementType": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Person",
            "inverseProperty": "$$unbound"
        }
    });

    exports.type = types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Container"] = $data("$data.EntityContext").extend("Microsoft.OData.Service.Sample.TrippinInMemory.Models.Container", {
        People: {
            "type": "$data.EntitySet",
            "elementType": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Person"
        },
        Airlines: {
            "type": "$data.EntitySet",
            "elementType": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Airline"
        },
        Airports: {
            "type": "$data.EntitySet",
            "elementType": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Airport"
        },
        NewComePeople: {
            "type": "$data.EntitySet",
            "elementType": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Person"
        },
        ResetDataSource: {
            "type": "$data.ServiceAction",
            "returnType": null,
            "params": []
        },
        GetPersonWithMostFriends: {
            "type": "$data.ServiceFunction",
            "returnType": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Person",
            "params": []
        },
        GetNearestAirport: {
            "type": "$data.ServiceFunction",
            "returnType": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Airport",
            "params": [{
                "name": "lat",
                "type": "Edm.Double"
            }, {
                "name": "lon",
                "type": "Edm.Double"
            }]
        }
    });

    exports.Microsoft = {
        "OData": {
            "Service": {
                "Sample": {
                    "TrippinInMemory": {
                        "Models": {
                            "PersonGender": types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.PersonGender"],
                            "Feature": types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Feature"],
                            "Location": types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Location"],
                            "City": types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.City"],
                            "AirportLocation": types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.AirportLocation"],
                            "EventLocation": types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.EventLocation"],
                            "Person": types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Person"],
                            "Airline": types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Airline"],
                            "Airport": types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Airport"],
                            "Trip": types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Trip"],
                            "PlanItem": types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.PlanItem"],
                            "Event": types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Event"],
                            "PublicTransportation": types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.PublicTransportation"],
                            "Flight": types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Flight"],
                            "Employee": types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Employee"],
                            "Manager": types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Manager"],
                            "Container": types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Container"]
                        }
                    }
                }
            }
        }
    };

    var ctxType = exports.type;
    exports.factory = function(config) {
        if (ctxType) {
            var cfg = $data.typeSystem.extend({
                name: "oData",
                oDataServiceHost: "http://services.odata.org/TripPinRESTierService/(S(0jdvke144vkq4qx1il15gnvy))/",
                withCredentials: false,
                maxDataServiceVersion: "4.0"
            }, config);
            return new ctxType(cfg);
        } else {
            return null;
        }
    };

    if (typeof Reflect !== "undefined" && typeof Reflect.defineMetadata === "function") {
        Reflect.defineMetadata("Org.OData.Core.V1.OptimisticConcurrency", ["Name"], types["Microsoft.OData.Service.Sample.TrippinInMemory.Models.Airline"].prototype)
    }

});