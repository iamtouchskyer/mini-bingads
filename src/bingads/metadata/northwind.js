(function(mod) {
    if (typeof exports == "object" && typeof module == "object") return mod(exports, require("jaydata/core")); // CommonJS
    if (typeof define == "function" && define.amd) return define(["exports", "jaydata/core"], mod); // AMD
    mod($data.generatedContext || ($data.generatedContext = {}), $data); // Plain browser env
})(function(exports, $data) {

    exports.$data = $data;

    var types = {};

    types["NorthwindModel.Category"] = $data("$data.Entity").extend("NorthwindModel.Category", {
        CategoryID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        CategoryName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 15
        },
        Description: {
            "type": "Edm.String",
            "maxLength": 1.7976931348623157e+308
        },
        Picture: {
            "type": "Edm.Binary",
            "maxLength": 1.7976931348623157e+308
        },
        Products: {
            "type": "Array",
            "elementType": "NorthwindModel.Product",
            "inverseProperty": "Category"
        }
    });

    types["NorthwindModel.CustomerDemographic"] = $data("$data.Entity").extend("NorthwindModel.CustomerDemographic", {
        CustomerTypeID: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 10,
            "key": true
        },
        CustomerDesc: {
            "type": "Edm.String",
            "maxLength": 1.7976931348623157e+308
        },
        Customers: {
            "type": "Array",
            "elementType": "NorthwindModel.Customer",
            "inverseProperty": "CustomerDemographics"
        }
    });

    types["NorthwindModel.Customer"] = $data("$data.Entity").extend("NorthwindModel.Customer", {
        CustomerID: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 5,
            "key": true
        },
        CompanyName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 40
        },
        ContactName: {
            "type": "Edm.String",
            "maxLength": 30
        },
        ContactTitle: {
            "type": "Edm.String",
            "maxLength": 30
        },
        Address: {
            "type": "Edm.String",
            "maxLength": 60
        },
        City: {
            "type": "Edm.String",
            "maxLength": 15
        },
        Region: {
            "type": "Edm.String",
            "maxLength": 15
        },
        PostalCode: {
            "type": "Edm.String",
            "maxLength": 10
        },
        Country: {
            "type": "Edm.String",
            "maxLength": 15
        },
        Phone: {
            "type": "Edm.String",
            "maxLength": 24
        },
        Fax: {
            "type": "Edm.String",
            "maxLength": 24
        },
        Orders: {
            "type": "Array",
            "elementType": "NorthwindModel.Order",
            "inverseProperty": "Customer"
        },
        CustomerDemographics: {
            "type": "Array",
            "elementType": "NorthwindModel.CustomerDemographic",
            "inverseProperty": "Customers"
        }
    });

    types["NorthwindModel.Employee"] = $data("$data.Entity").extend("NorthwindModel.Employee", {
        EmployeeID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        LastName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 20
        },
        FirstName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 10
        },
        Title: {
            "type": "Edm.String",
            "maxLength": 30
        },
        TitleOfCourtesy: {
            "type": "Edm.String",
            "maxLength": 25
        },
        BirthDate: {
            "type": "Edm.DateTimeOffset"
        },
        HireDate: {
            "type": "Edm.DateTimeOffset"
        },
        Address: {
            "type": "Edm.String",
            "maxLength": 60
        },
        City: {
            "type": "Edm.String",
            "maxLength": 15
        },
        Region: {
            "type": "Edm.String",
            "maxLength": 15
        },
        PostalCode: {
            "type": "Edm.String",
            "maxLength": 10
        },
        Country: {
            "type": "Edm.String",
            "maxLength": 15
        },
        HomePhone: {
            "type": "Edm.String",
            "maxLength": 24
        },
        Extension: {
            "type": "Edm.String",
            "maxLength": 4
        },
        Photo: {
            "type": "Edm.Binary",
            "maxLength": 1.7976931348623157e+308
        },
        Notes: {
            "type": "Edm.String",
            "maxLength": 1.7976931348623157e+308
        },
        ReportsTo: {
            "type": "Edm.Int32"
        },
        PhotoPath: {
            "type": "Edm.String",
            "maxLength": 255
        },
        Employees1: {
            "type": "Array",
            "elementType": "NorthwindModel.Employee",
            "inverseProperty": "Employee1"
        },
        Employee1: {
            "type": "NorthwindModel.Employee",
            "inverseProperty": "Employees1"
        },
        Orders: {
            "type": "Array",
            "elementType": "NorthwindModel.Order",
            "inverseProperty": "Employee"
        },
        Territories: {
            "type": "Array",
            "elementType": "NorthwindModel.Territory",
            "inverseProperty": "Employees"
        }
    });

    types["NorthwindModel.Order_Detail"] = $data("$data.Entity").extend("NorthwindModel.Order_Detail", {
        OrderID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        ProductID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        UnitPrice: {
            "type": "Edm.Decimal",
            "nullable": false,
            "required": true
        },
        Quantity: {
            "type": "Edm.Int16",
            "nullable": false,
            "required": true
        },
        Discount: {
            "type": "Edm.Single",
            "nullable": false,
            "required": true
        },
        Order: {
            "type": "NorthwindModel.Order",
            "nullable": false,
            "required": true,
            "inverseProperty": "Order_Details"
        },
        Product: {
            "type": "NorthwindModel.Product",
            "nullable": false,
            "required": true,
            "inverseProperty": "Order_Details"
        }
    });

    types["NorthwindModel.Order"] = $data("$data.Entity").extend("NorthwindModel.Order", {
        OrderID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        CustomerID: {
            "type": "Edm.String",
            "maxLength": 5
        },
        EmployeeID: {
            "type": "Edm.Int32"
        },
        OrderDate: {
            "type": "Edm.DateTimeOffset"
        },
        RequiredDate: {
            "type": "Edm.DateTimeOffset"
        },
        ShippedDate: {
            "type": "Edm.DateTimeOffset"
        },
        ShipVia: {
            "type": "Edm.Int32"
        },
        Freight: {
            "type": "Edm.Decimal"
        },
        ShipName: {
            "type": "Edm.String",
            "maxLength": 40
        },
        ShipAddress: {
            "type": "Edm.String",
            "maxLength": 60
        },
        ShipCity: {
            "type": "Edm.String",
            "maxLength": 15
        },
        ShipRegion: {
            "type": "Edm.String",
            "maxLength": 15
        },
        ShipPostalCode: {
            "type": "Edm.String",
            "maxLength": 10
        },
        ShipCountry: {
            "type": "Edm.String",
            "maxLength": 15
        },
        Customer: {
            "type": "NorthwindModel.Customer",
            "inverseProperty": "Orders"
        },
        Employee: {
            "type": "NorthwindModel.Employee",
            "inverseProperty": "Orders"
        },
        Order_Details: {
            "type": "Array",
            "elementType": "NorthwindModel.Order_Detail",
            "inverseProperty": "Order"
        },
        Shipper: {
            "type": "NorthwindModel.Shipper",
            "inverseProperty": "Orders"
        }
    });

    types["NorthwindModel.Product"] = $data("$data.Entity").extend("NorthwindModel.Product", {
        ProductID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        ProductName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 40
        },
        SupplierID: {
            "type": "Edm.Int32"
        },
        CategoryID: {
            "type": "Edm.Int32"
        },
        QuantityPerUnit: {
            "type": "Edm.String",
            "maxLength": 20
        },
        UnitPrice: {
            "type": "Edm.Decimal"
        },
        UnitsInStock: {
            "type": "Edm.Int16"
        },
        UnitsOnOrder: {
            "type": "Edm.Int16"
        },
        ReorderLevel: {
            "type": "Edm.Int16"
        },
        Discontinued: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        Category: {
            "type": "NorthwindModel.Category",
            "inverseProperty": "Products"
        },
        Order_Details: {
            "type": "Array",
            "elementType": "NorthwindModel.Order_Detail",
            "inverseProperty": "Product"
        },
        Supplier: {
            "type": "NorthwindModel.Supplier",
            "inverseProperty": "Products"
        }
    });

    types["NorthwindModel.Region"] = $data("$data.Entity").extend("NorthwindModel.Region", {
        RegionID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        RegionDescription: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 50
        },
        Territories: {
            "type": "Array",
            "elementType": "NorthwindModel.Territory",
            "inverseProperty": "Region"
        }
    });

    types["NorthwindModel.Shipper"] = $data("$data.Entity").extend("NorthwindModel.Shipper", {
        ShipperID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        CompanyName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 40
        },
        Phone: {
            "type": "Edm.String",
            "maxLength": 24
        },
        Orders: {
            "type": "Array",
            "elementType": "NorthwindModel.Order",
            "inverseProperty": "Shipper"
        }
    });

    types["NorthwindModel.Supplier"] = $data("$data.Entity").extend("NorthwindModel.Supplier", {
        SupplierID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        CompanyName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 40
        },
        ContactName: {
            "type": "Edm.String",
            "maxLength": 30
        },
        ContactTitle: {
            "type": "Edm.String",
            "maxLength": 30
        },
        Address: {
            "type": "Edm.String",
            "maxLength": 60
        },
        City: {
            "type": "Edm.String",
            "maxLength": 15
        },
        Region: {
            "type": "Edm.String",
            "maxLength": 15
        },
        PostalCode: {
            "type": "Edm.String",
            "maxLength": 10
        },
        Country: {
            "type": "Edm.String",
            "maxLength": 15
        },
        Phone: {
            "type": "Edm.String",
            "maxLength": 24
        },
        Fax: {
            "type": "Edm.String",
            "maxLength": 24
        },
        HomePage: {
            "type": "Edm.String",
            "maxLength": 1.7976931348623157e+308
        },
        Products: {
            "type": "Array",
            "elementType": "NorthwindModel.Product",
            "inverseProperty": "Supplier"
        }
    });

    types["NorthwindModel.Territory"] = $data("$data.Entity").extend("NorthwindModel.Territory", {
        TerritoryID: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 20,
            "key": true
        },
        TerritoryDescription: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 50
        },
        RegionID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        Region: {
            "type": "NorthwindModel.Region",
            "nullable": false,
            "required": true,
            "inverseProperty": "Territories"
        },
        Employees: {
            "type": "Array",
            "elementType": "NorthwindModel.Employee",
            "inverseProperty": "Territories"
        }
    });

    types["NorthwindModel.Alphabetical_list_of_product"] = $data("$data.Entity").extend("NorthwindModel.Alphabetical_list_of_product", {
        ProductID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        ProductName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 40,
            "key": true
        },
        SupplierID: {
            "type": "Edm.Int32"
        },
        CategoryID: {
            "type": "Edm.Int32"
        },
        QuantityPerUnit: {
            "type": "Edm.String",
            "maxLength": 20
        },
        UnitPrice: {
            "type": "Edm.Decimal"
        },
        UnitsInStock: {
            "type": "Edm.Int16"
        },
        UnitsOnOrder: {
            "type": "Edm.Int16"
        },
        ReorderLevel: {
            "type": "Edm.Int16"
        },
        Discontinued: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true,
            "key": true
        },
        CategoryName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 15,
            "key": true
        }
    });

    types["NorthwindModel.Category_Sales_for_1997"] = $data("$data.Entity").extend("NorthwindModel.Category_Sales_for_1997", {
        CategoryName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 15,
            "key": true
        },
        CategorySales: {
            "type": "Edm.Decimal"
        }
    });

    types["NorthwindModel.Current_Product_List"] = $data("$data.Entity").extend("NorthwindModel.Current_Product_List", {
        ProductID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        ProductName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 40,
            "key": true
        }
    });

    types["NorthwindModel.Customer_and_Suppliers_by_City"] = $data("$data.Entity").extend("NorthwindModel.Customer_and_Suppliers_by_City", {
        City: {
            "type": "Edm.String",
            "maxLength": 15
        },
        CompanyName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 40,
            "key": true
        },
        ContactName: {
            "type": "Edm.String",
            "maxLength": 30
        },
        Relationship: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 9,
            "key": true
        }
    });

    types["NorthwindModel.Invoice"] = $data("$data.Entity").extend("NorthwindModel.Invoice", {
        ShipName: {
            "type": "Edm.String",
            "maxLength": 40
        },
        ShipAddress: {
            "type": "Edm.String",
            "maxLength": 60
        },
        ShipCity: {
            "type": "Edm.String",
            "maxLength": 15
        },
        ShipRegion: {
            "type": "Edm.String",
            "maxLength": 15
        },
        ShipPostalCode: {
            "type": "Edm.String",
            "maxLength": 10
        },
        ShipCountry: {
            "type": "Edm.String",
            "maxLength": 15
        },
        CustomerID: {
            "type": "Edm.String",
            "maxLength": 5
        },
        CustomerName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 40,
            "key": true
        },
        Address: {
            "type": "Edm.String",
            "maxLength": 60
        },
        City: {
            "type": "Edm.String",
            "maxLength": 15
        },
        Region: {
            "type": "Edm.String",
            "maxLength": 15
        },
        PostalCode: {
            "type": "Edm.String",
            "maxLength": 10
        },
        Country: {
            "type": "Edm.String",
            "maxLength": 15
        },
        Salesperson: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 31,
            "key": true
        },
        OrderID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        OrderDate: {
            "type": "Edm.DateTimeOffset"
        },
        RequiredDate: {
            "type": "Edm.DateTimeOffset"
        },
        ShippedDate: {
            "type": "Edm.DateTimeOffset"
        },
        ShipperName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 40,
            "key": true
        },
        ProductID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        ProductName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 40,
            "key": true
        },
        UnitPrice: {
            "type": "Edm.Decimal",
            "nullable": false,
            "required": true,
            "key": true
        },
        Quantity: {
            "type": "Edm.Int16",
            "nullable": false,
            "required": true,
            "key": true
        },
        Discount: {
            "type": "Edm.Single",
            "nullable": false,
            "required": true,
            "key": true
        },
        ExtendedPrice: {
            "type": "Edm.Decimal"
        },
        Freight: {
            "type": "Edm.Decimal"
        }
    });

    types["NorthwindModel.Order_Details_Extended"] = $data("$data.Entity").extend("NorthwindModel.Order_Details_Extended", {
        OrderID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        ProductID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        ProductName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 40,
            "key": true
        },
        UnitPrice: {
            "type": "Edm.Decimal",
            "nullable": false,
            "required": true,
            "key": true
        },
        Quantity: {
            "type": "Edm.Int16",
            "nullable": false,
            "required": true,
            "key": true
        },
        Discount: {
            "type": "Edm.Single",
            "nullable": false,
            "required": true,
            "key": true
        },
        ExtendedPrice: {
            "type": "Edm.Decimal"
        }
    });

    types["NorthwindModel.Order_Subtotal"] = $data("$data.Entity").extend("NorthwindModel.Order_Subtotal", {
        OrderID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        Subtotal: {
            "type": "Edm.Decimal"
        }
    });

    types["NorthwindModel.Orders_Qry"] = $data("$data.Entity").extend("NorthwindModel.Orders_Qry", {
        OrderID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        CustomerID: {
            "type": "Edm.String",
            "maxLength": 5
        },
        EmployeeID: {
            "type": "Edm.Int32"
        },
        OrderDate: {
            "type": "Edm.DateTimeOffset"
        },
        RequiredDate: {
            "type": "Edm.DateTimeOffset"
        },
        ShippedDate: {
            "type": "Edm.DateTimeOffset"
        },
        ShipVia: {
            "type": "Edm.Int32"
        },
        Freight: {
            "type": "Edm.Decimal"
        },
        ShipName: {
            "type": "Edm.String",
            "maxLength": 40
        },
        ShipAddress: {
            "type": "Edm.String",
            "maxLength": 60
        },
        ShipCity: {
            "type": "Edm.String",
            "maxLength": 15
        },
        ShipRegion: {
            "type": "Edm.String",
            "maxLength": 15
        },
        ShipPostalCode: {
            "type": "Edm.String",
            "maxLength": 10
        },
        ShipCountry: {
            "type": "Edm.String",
            "maxLength": 15
        },
        CompanyName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 40,
            "key": true
        },
        Address: {
            "type": "Edm.String",
            "maxLength": 60
        },
        City: {
            "type": "Edm.String",
            "maxLength": 15
        },
        Region: {
            "type": "Edm.String",
            "maxLength": 15
        },
        PostalCode: {
            "type": "Edm.String",
            "maxLength": 10
        },
        Country: {
            "type": "Edm.String",
            "maxLength": 15
        }
    });

    types["NorthwindModel.Product_Sales_for_1997"] = $data("$data.Entity").extend("NorthwindModel.Product_Sales_for_1997", {
        CategoryName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 15,
            "key": true
        },
        ProductName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 40,
            "key": true
        },
        ProductSales: {
            "type": "Edm.Decimal"
        }
    });

    types["NorthwindModel.Products_Above_Average_Price"] = $data("$data.Entity").extend("NorthwindModel.Products_Above_Average_Price", {
        ProductName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 40,
            "key": true
        },
        UnitPrice: {
            "type": "Edm.Decimal"
        }
    });

    types["NorthwindModel.Products_by_Category"] = $data("$data.Entity").extend("NorthwindModel.Products_by_Category", {
        CategoryName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 15,
            "key": true
        },
        ProductName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 40,
            "key": true
        },
        QuantityPerUnit: {
            "type": "Edm.String",
            "maxLength": 20
        },
        UnitsInStock: {
            "type": "Edm.Int16"
        },
        Discontinued: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true,
            "key": true
        }
    });

    types["NorthwindModel.Sales_by_Category"] = $data("$data.Entity").extend("NorthwindModel.Sales_by_Category", {
        CategoryID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        CategoryName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 15,
            "key": true
        },
        ProductName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 40,
            "key": true
        },
        ProductSales: {
            "type": "Edm.Decimal"
        }
    });

    types["NorthwindModel.Sales_Totals_by_Amount"] = $data("$data.Entity").extend("NorthwindModel.Sales_Totals_by_Amount", {
        SaleAmount: {
            "type": "Edm.Decimal"
        },
        OrderID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        CompanyName: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 40,
            "key": true
        },
        ShippedDate: {
            "type": "Edm.DateTimeOffset"
        }
    });

    types["NorthwindModel.Summary_of_Sales_by_Quarter"] = $data("$data.Entity").extend("NorthwindModel.Summary_of_Sales_by_Quarter", {
        ShippedDate: {
            "type": "Edm.DateTimeOffset"
        },
        OrderID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        Subtotal: {
            "type": "Edm.Decimal"
        }
    });

    types["NorthwindModel.Summary_of_Sales_by_Year"] = $data("$data.Entity").extend("NorthwindModel.Summary_of_Sales_by_Year", {
        ShippedDate: {
            "type": "Edm.DateTimeOffset"
        },
        OrderID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        Subtotal: {
            "type": "Edm.Decimal"
        }
    });

    exports.type = types["ODataWebExperimental.Northwind.Model.NorthwindEntities"] = $data("$data.EntityContext").extend("ODataWebExperimental.Northwind.Model.NorthwindEntities", {
        Categories: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Category"
        },
        CustomerDemographics: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.CustomerDemographic"
        },
        Customers: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Customer"
        },
        Employees: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Employee"
        },
        Order_Details: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Order_Detail"
        },
        Orders: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Order"
        },
        Products: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Product"
        },
        Regions: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Region"
        },
        Shippers: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Shipper"
        },
        Suppliers: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Supplier"
        },
        Territories: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Territory"
        },
        Alphabetical_list_of_products: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Alphabetical_list_of_product"
        },
        Category_Sales_for_1997: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Category_Sales_for_1997"
        },
        Current_Product_Lists: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Current_Product_List"
        },
        Customer_and_Suppliers_by_Cities: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Customer_and_Suppliers_by_City"
        },
        Invoices: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Invoice"
        },
        Order_Details_Extendeds: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Order_Details_Extended"
        },
        Order_Subtotals: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Order_Subtotal"
        },
        Orders_Qries: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Orders_Qry"
        },
        Product_Sales_for_1997: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Product_Sales_for_1997"
        },
        Products_Above_Average_Prices: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Products_Above_Average_Price"
        },
        Products_by_Categories: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Products_by_Category"
        },
        Sales_by_Categories: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Sales_by_Category"
        },
        Sales_Totals_by_Amounts: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Sales_Totals_by_Amount"
        },
        Summary_of_Sales_by_Quarters: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Summary_of_Sales_by_Quarter"
        },
        Summary_of_Sales_by_Years: {
            "type": "$data.EntitySet",
            "elementType": "NorthwindModel.Summary_of_Sales_by_Year"
        }
    });

    exports.NorthwindModel = {
        "Category": types["NorthwindModel.Category"],
        "CustomerDemographic": types["NorthwindModel.CustomerDemographic"],
        "Customer": types["NorthwindModel.Customer"],
        "Employee": types["NorthwindModel.Employee"],
        "Order_Detail": types["NorthwindModel.Order_Detail"],
        "Order": types["NorthwindModel.Order"],
        "Product": types["NorthwindModel.Product"],
        "Region": types["NorthwindModel.Region"],
        "Shipper": types["NorthwindModel.Shipper"],
        "Supplier": types["NorthwindModel.Supplier"],
        "Territory": types["NorthwindModel.Territory"],
        "Alphabetical_list_of_product": types["NorthwindModel.Alphabetical_list_of_product"],
        "Category_Sales_for_1997": types["NorthwindModel.Category_Sales_for_1997"],
        "Current_Product_List": types["NorthwindModel.Current_Product_List"],
        "Customer_and_Suppliers_by_City": types["NorthwindModel.Customer_and_Suppliers_by_City"],
        "Invoice": types["NorthwindModel.Invoice"],
        "Order_Details_Extended": types["NorthwindModel.Order_Details_Extended"],
        "Order_Subtotal": types["NorthwindModel.Order_Subtotal"],
        "Orders_Qry": types["NorthwindModel.Orders_Qry"],
        "Product_Sales_for_1997": types["NorthwindModel.Product_Sales_for_1997"],
        "Products_Above_Average_Price": types["NorthwindModel.Products_Above_Average_Price"],
        "Products_by_Category": types["NorthwindModel.Products_by_Category"],
        "Sales_by_Category": types["NorthwindModel.Sales_by_Category"],
        "Sales_Totals_by_Amount": types["NorthwindModel.Sales_Totals_by_Amount"],
        "Summary_of_Sales_by_Quarter": types["NorthwindModel.Summary_of_Sales_by_Quarter"],
        "Summary_of_Sales_by_Year": types["NorthwindModel.Summary_of_Sales_by_Year"]
    };

    exports.ODataWebExperimental = {
        "Northwind": {
            "Model": {
                "NorthwindEntities": types["ODataWebExperimental.Northwind.Model.NorthwindEntities"]
            }
        }
    };

    var ctxType = exports.type;
    exports.factory = function(config) {
        if (ctxType) {
            var cfg = $data.typeSystem.extend({
                name: "oData",
                oDataServiceHost: "http://services.odata.org/V4/Northwind/Northwind.svc",
                withCredentials: false,
                maxDataServiceVersion: "4.0"
            }, config);
            return new ctxType(cfg);
        } else {
            return null;
        }
    };

    if (typeof Reflect !== "undefined" && typeof Reflect.defineMetadata === "function") {}

});