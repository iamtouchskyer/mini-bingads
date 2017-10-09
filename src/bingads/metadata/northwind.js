import _ from 'lodash';

export default function() {
    var exports = {};
    var types = {};

    types["Category"] = {
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
            "elementType": "Product",
            "inverseProperty": "Category"
        }
    };

    types["CustomerDemographic"] = {
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
            "elementType": "Customer",
            "inverseProperty": "CustomerDemographics"
        }
    };

    types["Customer"] = {
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
            "elementType": "Order",
            "inverseProperty": "Customer"
        },
        CustomerDemographics: {
            "type": "Array",
            "elementType": "CustomerDemographic",
            "inverseProperty": "Customers"
        }
    };

    types["Employee"] = {
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
            "elementType": "Employee",
            "inverseProperty": "Employee1"
        },
        Employee1: {
            "type": "Employee",
            "inverseProperty": "Employees1"
        },
        Orders: {
            "type": "Array",
            "elementType": "Order",
            "inverseProperty": "Employee"
        },
        Territories: {
            "type": "Array",
            "elementType": "Territory",
            "inverseProperty": "Employees"
        }
    };

    types["Order_Detail"] = {
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
            "type": "Order",
            "nullable": false,
            "required": true,
            "inverseProperty": "Order_Details"
        },
        Product: {
            "type": "Product",
            "nullable": false,
            "required": true,
            "inverseProperty": "Order_Details"
        }
    };

    types["Order"] = {
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
            "type": "Customer",
            "inverseProperty": "Orders"
        },
        Employee: {
            "type": "Employee",
            "inverseProperty": "Orders"
        },
        Order_Details: {
            "type": "Array",
            "elementType": "Order_Detail",
            "inverseProperty": "Order"
        },
        Shipper: {
            "type": "Shipper",
            "inverseProperty": "Orders"
        }
    };

    types["Product"] = {
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
            "type": "Category",
            "inverseProperty": "Products"
        },
        Order_Details: {
            "type": "Array",
            "elementType": "Order_Detail",
            "inverseProperty": "Product"
        },
        Supplier: {
            "type": "Supplier",
            "inverseProperty": "Products"
        }
    };

    types["Region"] = {
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
            "elementType": "Territory",
            "inverseProperty": "Region"
        }
    };

    types["Shipper"] = {
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
            "elementType": "Order",
            "inverseProperty": "Shipper"
        }
    };

    types["Supplier"] = {
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
            "elementType": "Product",
            "inverseProperty": "Supplier"
        }
    };

    types["Territory"] = {
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
            "type": "Region",
            "nullable": false,
            "required": true,
            "inverseProperty": "Territories"
        },
        Employees: {
            "type": "Array",
            "elementType": "Employee",
            "inverseProperty": "Territories"
        }
    };

    types["Alphabetical_list_of_product"] = {
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
    };

    types["Category_Sales_for_1997"] = {
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
    };

    types["Current_Product_List"] = {
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
    };

    types["Customer_and_Suppliers_by_City"] = {
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
    };

    types["Invoice"] = {
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
    };

    types["Order_Details_Extended"] = {
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
    };

    types["Order_Subtotal"] = {
        OrderID: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        Subtotal: {
            "type": "Edm.Decimal"
        }
    };

    types["Orders_Qry"] = {
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
    };

    types["Product_Sales_for_1997"] = {
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
    };

    types["Products_Above_Average_Price"] = {
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
    };

    types["Products_by_Category"] = {
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
    };

    types["Sales_by_Category"] = {
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
    };

    types["Sales_Totals_by_Amount"] = {
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
    };

    types["Summary_of_Sales_by_Quarter"] = {
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
    };

    types["Summary_of_Sales_by_Year"] = {
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
    };

    exports.type = types["ODataWebExperimental.Northwind.Model.NorthwindEntities"] = {
        Categories: {
            "type": "$data.EntitySet",
            "elementType": "Category"
        },
        CustomerDemographics: {
            "type": "$data.EntitySet",
            "elementType": "CustomerDemographic"
        },
        Customers: {
            "type": "$data.EntitySet",
            "elementType": "Customer"
        },
        Employees: {
            "type": "$data.EntitySet",
            "elementType": "Employee"
        },
        Order_Details: {
            "type": "$data.EntitySet",
            "elementType": "Order_Detail"
        },
        Orders: {
            "type": "$data.EntitySet",
            "elementType": "Order"
        },
        Products: {
            "type": "$data.EntitySet",
            "elementType": "Product"
        },
        Regions: {
            "type": "$data.EntitySet",
            "elementType": "Region"
        },
        Shippers: {
            "type": "$data.EntitySet",
            "elementType": "Shipper"
        },
        Suppliers: {
            "type": "$data.EntitySet",
            "elementType": "Supplier"
        },
        Territories: {
            "type": "$data.EntitySet",
            "elementType": "Territory"
        },
        Alphabetical_list_of_products: {
            "type": "$data.EntitySet",
            "elementType": "Alphabetical_list_of_product"
        },
        Category_Sales_for_1997: {
            "type": "$data.EntitySet",
            "elementType": "Category_Sales_for_1997"
        },
        Current_Product_Lists: {
            "type": "$data.EntitySet",
            "elementType": "Current_Product_List"
        },
        Customer_and_Suppliers_by_Cities: {
            "type": "$data.EntitySet",
            "elementType": "Customer_and_Suppliers_by_City"
        },
        Invoices: {
            "type": "$data.EntitySet",
            "elementType": "Invoice"
        },
        Order_Details_Extendeds: {
            "type": "$data.EntitySet",
            "elementType": "Order_Details_Extended"
        },
        Order_Subtotals: {
            "type": "$data.EntitySet",
            "elementType": "Order_Subtotal"
        },
        Orders_Qries: {
            "type": "$data.EntitySet",
            "elementType": "Orders_Qry"
        },
        Product_Sales_for_1997: {
            "type": "$data.EntitySet",
            "elementType": "Product_Sales_for_1997"
        },
        Products_Above_Average_Prices: {
            "type": "$data.EntitySet",
            "elementType": "Products_Above_Average_Price"
        },
        Products_by_Categories: {
            "type": "$data.EntitySet",
            "elementType": "Products_by_Category"
        },
        Sales_by_Categories: {
            "type": "$data.EntitySet",
            "elementType": "Sales_by_Category"
        },
        Sales_Totals_by_Amounts: {
            "type": "$data.EntitySet",
            "elementType": "Sales_Totals_by_Amount"
        },
        Summary_of_Sales_by_Quarters: {
            "type": "$data.EntitySet",
            "elementType": "Summary_of_Sales_by_Quarter"
        },
        Summary_of_Sales_by_Years: {
            "type": "$data.EntitySet",
            "elementType": "Summary_of_Sales_by_Year"
        }
    };

    exports.models = {
        "Category": types["Category"],
        "CustomerDemographic": types["CustomerDemographic"],
        "Customer": types["Customer"],
        "Employee": types["Employee"],
        "Order_Detail": types["Order_Detail"],
        "Order": types["Order"],
        "Product": types["Product"],
        "Region": types["Region"],
        "Shipper": types["Shipper"],
        "Supplier": types["Supplier"],
        "Territory": types["Territory"],
        "Alphabetical_list_of_product": types["Alphabetical_list_of_product"],
        "Category_Sales_for_1997": types["Category_Sales_for_1997"],
        "Current_Product_List": types["Current_Product_List"],
        "Customer_and_Suppliers_by_City": types["Customer_and_Suppliers_by_City"],
        "Invoice": types["Invoice"],
        "Order_Details_Extended": types["Order_Details_Extended"],
        "Order_Subtotal": types["Order_Subtotal"],
        "Orders_Qry": types["Orders_Qry"],
        "Product_Sales_for_1997": types["Product_Sales_for_1997"],
        "Products_Above_Average_Price": types["Products_Above_Average_Price"],
        "Products_by_Category": types["Products_by_Category"],
        "Sales_by_Category": types["Sales_by_Category"],
        "Sales_Totals_by_Amount": types["Sales_Totals_by_Amount"],
        "Summary_of_Sales_by_Quarter": types["Summary_of_Sales_by_Quarter"],
        "Summary_of_Sales_by_Year": types["Summary_of_Sales_by_Year"]
    };

    exports.oDataServiceHost= "http://services.odata.org/V4/Northwind/Northwind.svc";

    return exports;
}