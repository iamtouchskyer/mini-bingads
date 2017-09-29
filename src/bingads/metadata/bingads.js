(function(mod) {
    if (typeof exports == "object" && typeof module == "object") return mod(exports, require("jaydata/core")); // CommonJS
    if (typeof define == "function" && define.amd) return define(["exports", "jaydata/core"], mod); // AMD
    mod($data.generatedContext || ($data.generatedContext = {}), $data); // Plain browser env
})(function(exports, $data) {

    exports.$data = $data;

    var types = {};

    types["Model.AdsApiError"] = $data("$data.Entity").extend("Model.AdsApiError", {
        Code: {
            "type": "Edm.String"
        },
        Property: {
            "type": "Edm.String"
        },
        Message: {
            "type": "Edm.String"
        }
    });

    types["Model.TotalsWithPerformanceMetrics"] = $data("$data.Entity").extend("Model.TotalsWithPerformanceMetrics", {
        AggregationType: {
            "type": "Enum.AggregationType",
            "nullable": false,
            "required": true
        },
        EntityCount: {
            "type": "Edm.Int32"
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        },
        PeriodPerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        },
        PerformanceMetricsChange: {
            "type": "Model.PerformanceMetrics"
        },
        PerformanceMetricsChangePercentage: {
            "type": "Model.PerformanceChangePercentMetrics"
        }
    });

    types["Model.AccountTotals"] = types["Model.TotalsWithPerformanceMetrics"].extend("Model.AccountTotals", {
        Budget: {
            "type": "Model.AggregateBudget"
        },
        InsertionOrderDetails: {
            "type": "Model.InsertionOrderDetails"
        }
    });

    types["Model.CampaignTotals"] = types["Model.TotalsWithPerformanceMetrics"].extend("Model.CampaignTotals", {
        Budget: {
            "type": "Model.AggregateBudget"
        }
    });

    types["Model.AggregateBudget"] = $data("$data.Entity").extend("Model.AggregateBudget", {
        DailyBudget: {
            "type": "Edm.Double"
        }
    });

    types["Model.PerformanceMetrics"] = $data("$data.Entity").extend("Model.PerformanceMetrics", {
        Impressions: {
            "type": "Edm.Int64"
        },
        Clicks: {
            "type": "Edm.Int64"
        },
        CTR: {
            "type": "Edm.Double"
        },
        Conversions: {
            "type": "Edm.Int64"
        },
        Spend: {
            "type": "Edm.Double"
        },
        AverageCPC: {
            "type": "Edm.Double"
        },
        AveragePosition: {
            "type": "Edm.Double"
        },
        AverageCPM: {
            "type": "Edm.Double"
        },
        CPA: {
            "type": "Edm.Double"
        },
        WebsiteCoverage: {
            "type": "Edm.Double"
        },
        AuctionWonPercent: {
            "type": "Edm.Double"
        },
        AuctionLostToBudgetPercent: {
            "type": "Edm.Double"
        },
        AuctionLostToRankPercent: {
            "type": "Edm.Double"
        },
        AuctionLostToLandingPercent: {
            "type": "Edm.Double"
        },
        AuctionLostToAdQualityPercent: {
            "type": "Edm.Double"
        },
        AuctionLostToBidPercent: {
            "type": "Edm.Double"
        },
        ClickSharePercent: {
            "type": "Edm.Double"
        },
        CustomColumns: {
            "type": "Array",
            "elementType": "Model.CustomColumnOutputValue"
        },
        RevenueOnAdSpend: {
            "type": "Edm.Double"
        },
        AdvertiserReportedRevenue: {
            "type": "Edm.Double"
        },
        ConversionRate: {
            "type": "Edm.Double"
        },
        SegmentedData: {
            "type": "Array",
            "elementType": "Model.SegmentedPerformanceMetrics"
        }
    });

    types["Model.GoalPerformanceMetrics"] = $data("$data.Entity").extend("Model.GoalPerformanceMetrics", {
        Conversions: {
            "type": "Edm.Int64"
        },
        Revenue: {
            "type": "Edm.Double"
        },
        RepeatRate: {
            "type": "Edm.Double"
        }
    });

    types["Model.PerformanceMetricsTotalsByNetworkSplit"] = $data("$data.Entity").extend("Model.PerformanceMetricsTotalsByNetworkSplit", {
        TotalsForContentNonDeletedItems: {
            "type": "Model.PerformanceMetrics"
        },
        TotalsForSearchNonDeletedItems: {
            "type": "Model.PerformanceMetrics"
        },
        TotalsForNativeNonDeletedItems: {
            "type": "Model.PerformanceMetrics"
        },
        TotalsForAllNonDeletedItems: {
            "type": "Model.PerformanceMetrics"
        },
        DeletedItemsTotals: {
            "type": "Model.PerformanceMetrics"
        },
        TotalsOverall: {
            "type": "Model.PerformanceMetrics"
        },
        FilteredTotals: {
            "type": "Model.PerformanceMetrics"
        },
        OverallEntityCount: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        FilteredEntityCount: {
            "type": "Edm.Int32"
        }
    });

    types["Model.InsertionOrder"] = $data("$data.Entity").extend("Model.InsertionOrder", {
        Budget: {
            "type": "Edm.Double"
        },
        RemainingBudget: {
            "type": "Edm.Double"
        },
        StartDate: {
            "type": "Edm.DateTimeOffset"
        },
        EndDate: {
            "type": "Edm.DateTimeOffset"
        },
        PurchaseOrder: {
            "type": "Edm.String"
        }
    });

    types["Model.InsertionOrderDetails"] = $data("$data.Entity").extend("Model.InsertionOrderDetails", {
        CurrentInsertionOrder: {
            "type": "Model.InsertionOrder"
        },
        TotalRemainingBudget: {
            "type": "Edm.Double"
        },
        OverallEndDate: {
            "type": "Edm.DateTimeOffset"
        }
    });

    types["Model.PerformanceTrendItem"] = $data("$data.Entity").extend("Model.PerformanceTrendItem", {
        StartDate: {
            "type": "Edm.DateTimeOffset",
            "nullable": false,
            "required": true
        },
        Data: {
            "type": "Model.PerformanceMetrics"
        }
    });

    types["Model.User"] = $data("$data.Entity").extend("Model.User", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        Name: {
            "type": "Edm.String"
        }
    });

    types["Model.ProductCondition"] = $data("$data.Entity").extend("Model.ProductCondition", {
        Operand: {
            "type": "Edm.String"
        },
        Attribute: {
            "type": "Edm.String"
        }
    });

    types["Model.AttributeStatistic"] = $data("$data.Entity").extend("Model.AttributeStatistic", {
        Name: {
            "type": "Edm.String"
        },
        Count: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        }
    });

    types["Model.BaseExpression"] = $data("$data.Entity").extend("Model.BaseExpression", null);

    types["Model.Filter"] = types["Model.BaseExpression"].extend("Model.Filter", {
        LogicalOperator: {
            "type": "Enum.LogicalOperator",
            "nullable": false,
            "required": true
        },
        Expressions: {
            "type": "Array",
            "elementType": "Model.BaseExpression"
        }
    });

    types["Model.EntityFilter"] = $data("$data.Entity").extend("Model.EntityFilter", {
        EntityType: {
            "type": "Enum.FilterEntityType",
            "nullable": false,
            "required": true
        },
        EntityTypeV2: {
            "type": "Enum.FilterEntityTypeV2",
            "nullable": false,
            "required": true
        },
        AggregateFilter: {
            "type": "Model.AggregateFilter"
        },
        Filter: {
            "type": "Model.Filter"
        }
    });

    types["Model.ChildEntityFilter"] = types["Model.EntityFilter"].extend("Model.ChildEntityFilter", {
        CountOperator: {
            "type": "Enum.Operator",
            "nullable": false,
            "required": true
        },
        Count: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        }
    });

    types["Model.BulkEditAction"] = $data("$data.Entity").extend("Model.BulkEditAction", {
        Property: {
            "type": "Edm.String"
        }
    });

    types["Model.AdGroupAudienceCriterionComplex"] = $data("$data.Entity").extend("Model.AdGroupAudienceCriterionComplex", {
        Id: {
            "type": "Edm.Int64"
        },
        AdGroupId: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        BidType: {
            "type": "Enum.BidType"
        },
        Status: {
            "type": "Enum.AdGroupCriterionStatus"
        },
        Criterion: {
            "type": "Model.AudienceCriterion"
        }
    });

    types["Model.AdExtensionAssociationComplex"] = $data("$data.Entity").extend("Model.AdExtensionAssociationComplex", {
        Type: {
            "type": "Enum.AssociationType",
            "nullable": false,
            "required": true
        },
        CampaignId: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        AdGroupId: {
            "type": "Edm.Int64"
        },
        AdExtensionId: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        }
    });

    types["Model.PerformanceTimeSeries"] = $data("$data.Entity").extend("Model.PerformanceTimeSeries", {
        MetricName: {
            "type": "Edm.String"
        },
        PrimaryDataPoints: {
            "type": "Array",
            "elementType": "Model.PerformanceDataPoint"
        },
        ComparisonDataPoints: {
            "type": "Array",
            "elementType": "Model.PerformanceDataPoint"
        }
    });

    types["Model.Dictionary_2OfString_String"] = $data("$data.Entity").extend("Model.Dictionary_2OfString_String", {
        Keys: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        Values: {
            "type": "Array",
            "elementType": "Edm.String"
        }
    });

    types["Model.Dictionary_2OfString_ImportStatistics"] = $data("$data.Entity").extend("Model.Dictionary_2OfString_ImportStatistics", {
        Keys: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        Values: {
            "type": "Array",
            "elementType": "Model.ImportStatistics"
        }
    });

    types["Model.IEnumerable_1OfPerformanceTrendItem"] = $data("$data.Entity").extend("Model.IEnumerable_1OfPerformanceTrendItem", null);

    types["Model.HttpResponseMessage"] = $data("$data.Entity").extend("Model.HttpResponseMessage", {
        Version: {
            "type": "Model.Version"
        },
        Content: {
            "type": "Model.HttpContent"
        },
        StatusCode: {
            "type": "Enum.HttpStatusCode",
            "nullable": false,
            "required": true
        },
        ReasonPhrase: {
            "type": "Edm.String"
        },
        Headers: {
            "type": "Array",
            "elementType": "Model.KeyValuePair_2OfString_IEnumerable_1OfString"
        },
        RequestMessage: {
            "type": "Model.HttpRequestMessage"
        }
    });

    types["Model.IEnumerable_1OfAttributeStatistic"] = $data("$data.Entity").extend("Model.IEnumerable_1OfAttributeStatistic", null);

    types["Model.Blob"] = $data("$data.Entity").extend("Model.Blob", {
        BlobName: {
            "type": "Edm.String"
        },
        SasUrl: {
            "type": "Edm.String"
        }
    });

    types["Model.NegativeKeywordComplex"] = $data("$data.Entity").extend("Model.NegativeKeywordComplex", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        Text: {
            "type": "Edm.String"
        },
        MatchType: {
            "type": "Enum.MatchType",
            "nullable": false,
            "required": true
        },
        EntityType: {
            "type": "Enum.EntityContextType",
            "nullable": false,
            "required": true
        },
        CampaignId: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        AdGroupId: {
            "type": "Edm.Int64"
        }
    });

    types["Model.IEnumerable_1OfIEnumerable_1OfString"] = $data("$data.Entity").extend("Model.IEnumerable_1OfIEnumerable_1OfString", null);

    types["Model.IEnumerable_1OfPerformanceTimeSeries"] = $data("$data.Entity").extend("Model.IEnumerable_1OfPerformanceTimeSeries", null);

    types["Model.GridDataParameters"] = $data("$data.Entity").extend("Model.GridDataParameters", {
        CustomColumns: {
            "type": "Array",
            "elementType": "Model.CustomColumnDefinition"
        },
        DateRange: {
            "type": "Model.DateRange"
        },
        ComparisonDateRange: {
            "type": "Model.DateRange"
        },
        SegmentationTypes: {
            "type": "Array",
            "elementType": "Enum.SegmentationType",
            "nullable": false,
            "required": true
        }
    });

    types["Model.AccountInactiveReason"] = $data("$data.Entity").extend("Model.AccountInactiveReason", {
        Causes: {
            "type": "Array",
            "elementType": "Enum.AccountInactiveCauseCode",
            "nullable": false,
            "required": true
        },
        Reason: {
            "type": "Enum.AccountInactiveReasonCode"
        }
    });

    types["Model.QualityScoreData"] = $data("$data.Entity").extend("Model.QualityScoreData", {
        OverallQualityScore: {
            "type": "Edm.Int16"
        },
        LandingPageRelevance: {
            "type": "Edm.Int16"
        },
        KeywordRelevance: {
            "type": "Edm.Int16"
        },
        LandingPageQuality: {
            "type": "Edm.Int16"
        }
    });

    types["Model.CustomColumnOutputValue"] = $data("$data.Entity").extend("Model.CustomColumnOutputValue", {
        Value: {
            "type": "Edm.String"
        },
        Id: {
            "type": "Edm.String"
        }
    });

    types["Model.SegmentedPerformanceMetrics"] = $data("$data.Entity").extend("Model.SegmentedPerformanceMetrics", {
        Key: {
            "type": "Array",
            "elementType": "Model.SegmentationKey"
        },
        Data: {
            "type": "Model.PerformanceMetrics"
        }
    });

    types["Model.SegmentationKey"] = $data("$data.Entity").extend("Model.SegmentationKey", {
        SegmentationType: {
            "type": "Enum.SegmentationType",
            "nullable": false,
            "required": true
        },
        StringValue: {
            "type": "Edm.String"
        }
    });

    types["Model.GoalNameSegmentationKey"] = types["Model.SegmentationKey"].extend("Model.GoalNameSegmentationKey", {
        Value: {
            "type": "Edm.String"
        }
    });

    types["Model.GoalTypeSegmentationKey"] = types["Model.SegmentationKey"].extend("Model.GoalTypeSegmentationKey", {
        Value: {
            "type": "Enum.SegmentationGoalType",
            "nullable": false,
            "required": true
        }
    });

    types["Model.AdPositionSegmentationKey"] = types["Model.SegmentationKey"].extend("Model.AdPositionSegmentationKey", {
        Value: {
            "type": "Edm.String"
        }
    });

    types["Model.BiddedMatchTypeSegmentationKey"] = types["Model.SegmentationKey"].extend("Model.BiddedMatchTypeSegmentationKey", {
        Value: {
            "type": "Enum.SegmentationMatchType",
            "nullable": false,
            "required": true
        }
    });

    types["Model.CurrencySegmentationKey"] = types["Model.SegmentationKey"].extend("Model.CurrencySegmentationKey", {
        Value: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        }
    });

    types["Model.DayOfTheWeekSegmentationKey"] = types["Model.SegmentationKey"].extend("Model.DayOfTheWeekSegmentationKey", {
        Value: {
            "type": "Enum.DayOfWeek",
            "nullable": false,
            "required": true
        }
    });

    types["Model.DaySegmentationKey"] = types["Model.SegmentationKey"].extend("Model.DaySegmentationKey", {
        Value: {
            "type": "Edm.DateTimeOffset",
            "nullable": false,
            "required": true
        }
    });

    types["Model.DeliveredMatchTypeSegmentationKey"] = types["Model.SegmentationKey"].extend("Model.DeliveredMatchTypeSegmentationKey", {
        Value: {
            "type": "Enum.SegmentationMatchType",
            "nullable": false,
            "required": true
        }
    });

    types["Model.DeviceOSSegmentationKey"] = types["Model.SegmentationKey"].extend("Model.DeviceOSSegmentationKey", {
        Value: {
            "type": "Enum.SegmentationDeviceOS",
            "nullable": false,
            "required": true
        }
    });

    types["Model.DeviceTypeSegmentationKey"] = types["Model.SegmentationKey"].extend("Model.DeviceTypeSegmentationKey", {
        Value: {
            "type": "Enum.SegmentationDeviceType",
            "nullable": false,
            "required": true
        }
    });

    types["Model.HourOfTheDaySegmentationKey"] = types["Model.SegmentationKey"].extend("Model.HourOfTheDaySegmentationKey", {
        Value: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        }
    });

    types["Model.MediumSegmentationKey"] = types["Model.SegmentationKey"].extend("Model.MediumSegmentationKey", {
        Value: {
            "type": "Enum.SegmentationMedium",
            "nullable": false,
            "required": true
        }
    });

    types["Model.MonthSegmentationKey"] = types["Model.SegmentationKey"].extend("Model.MonthSegmentationKey", {
        Value: {
            "type": "Edm.DateTimeOffset",
            "nullable": false,
            "required": true
        }
    });

    types["Model.NetworkSegmentationKey"] = types["Model.SegmentationKey"].extend("Model.NetworkSegmentationKey", {
        Value: {
            "type": "Enum.SegmentationNetwork2",
            "nullable": false,
            "required": true
        }
    });

    types["Model.QuarterSegmentationKey"] = types["Model.SegmentationKey"].extend("Model.QuarterSegmentationKey", {
        Value: {
            "type": "Edm.DateTimeOffset",
            "nullable": false,
            "required": true
        }
    });

    types["Model.TopVsOtherSegmentationKey"] = types["Model.SegmentationKey"].extend("Model.TopVsOtherSegmentationKey", {
        Value: {
            "type": "Enum.SegmentationPagePosition2",
            "nullable": false,
            "required": true
        }
    });

    types["Model.WeekSegmentationKey"] = types["Model.SegmentationKey"].extend("Model.WeekSegmentationKey", {
        Value: {
            "type": "Edm.DateTimeOffset",
            "nullable": false,
            "required": true
        }
    });

    types["Model.YearSegmentationKey"] = types["Model.SegmentationKey"].extend("Model.YearSegmentationKey", {
        Value: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        }
    });

    types["Model.PhonePerformanceMetrics"] = $data("$data.Entity").extend("Model.PhonePerformanceMetrics", {
        PhoneSpend: {
            "type": "Edm.Double"
        },
        PTR: {
            "type": "Edm.Double"
        },
        ClickAndPhoneSpend: {
            "type": "Edm.Double"
        },
        PhoneCalls: {
            "type": "Edm.Int64"
        },
        PhoneImpressions: {
            "type": "Edm.Int64"
        },
        ManualCalls: {
            "type": "Edm.Int64"
        },
        ClickCalls: {
            "type": "Edm.Int64"
        },
        AverageCPP: {
            "type": "Edm.Double"
        },
        SegmentedData: {
            "type": "Array",
            "elementType": "Model.SegmentedPhonePerformanceMetrics"
        }
    });

    types["Model.SegmentedPhonePerformanceMetrics"] = $data("$data.Entity").extend("Model.SegmentedPhonePerformanceMetrics", {
        Key: {
            "type": "Array",
            "elementType": "Model.SegmentationKey"
        },
        Data: {
            "type": "Model.PhonePerformanceMetrics"
        }
    });

    types["Model.CustomParameter"] = $data("$data.Entity").extend("Model.CustomParameter", {
        Key: {
            "type": "Edm.String"
        },
        Value: {
            "type": "Edm.String"
        }
    });

    types["Model.BiddingScheme"] = $data("$data.Entity").extend("Model.BiddingScheme", {
        Type: {
            "type": "Enum.BiddingStrategyType"
        }
    });

    types["Model.TargetCpaBiddingScheme"] = types["Model.BiddingScheme"].extend("Model.TargetCpaBiddingScheme", {
        MaxCpc: {
            "type": "Model.Bid"
        },
        TargetCpa: {
            "type": "Edm.Double"
        }
    });

    types["Model.MaxConversionsBiddingScheme"] = types["Model.BiddingScheme"].extend("Model.MaxConversionsBiddingScheme", {
        MaxCpc: {
            "type": "Model.Bid"
        }
    });

    types["Model.MaxClicksBiddingScheme"] = types["Model.BiddingScheme"].extend("Model.MaxClicksBiddingScheme", {
        MaxCpc: {
            "type": "Model.Bid"
        }
    });

    types["Model.ManualBiddingScheme"] = types["Model.BiddingScheme"].extend("Model.ManualBiddingScheme", null);

    types["Model.Bid"] = $data("$data.Entity").extend("Model.Bid", {
        Amount: {
            "type": "Edm.Double"
        }
    });

    types["Model.InheritFromParentBiddingScheme"] = types["Model.BiddingScheme"].extend("Model.InheritFromParentBiddingScheme", null);

    types["Model.EnhancedCpcBiddingScheme"] = types["Model.BiddingScheme"].extend("Model.EnhancedCpcBiddingScheme", null);

    types["Model.CampaignSettings"] = $data("$data.Entity").extend("Model.CampaignSettings", null);

    types["Model.ShoppingSettings"] = types["Model.CampaignSettings"].extend("Model.ShoppingSettings", {
        Priority: {
            "type": "Enum.CampaignPriority"
        },
        SalesCountry: {
            "type": "Edm.String"
        },
        ProviderId: {
            "type": "Edm.Int64"
        },
        LocalInventoryAdsEnabled: {
            "type": "Edm.Boolean"
        }
    });

    types["Model.DynamicSearchAdsSetting"] = types["Model.CampaignSettings"].extend("Model.DynamicSearchAdsSetting", {
        DomainName: {
            "type": "Edm.String"
        },
        Language: {
            "type": "Edm.String"
        }
    });

    types["Model.Criterion"] = $data("$data.Entity").extend("Model.Criterion", {
        Type: {
            "type": "Enum.CriterionType",
            "nullable": false,
            "required": true
        },
        DisplayName: {
            "type": "Edm.String"
        }
    });

    types["Model.AudienceCriterion"] = types["Model.Criterion"].extend("Model.AudienceCriterion", {
        AudienceId: {
            "type": "Edm.Int64"
        },
        AudienceType: {
            "type": "Enum.AudienceType",
            "nullable": false,
            "required": true
        },
        AudienceName: {
            "type": "Edm.String"
        },
        BidMultiplier: {
            "type": "Edm.Double"
        }
    });

    types["Model.BidAmountDetail"] = $data("$data.Entity").extend("Model.BidAmountDetail", {
        Amount: {
            "type": "Edm.Double"
        },
        AmountSource: {
            "type": "Enum.BidAmountSource"
        }
    });

    types["Model.BidEstimationData"] = $data("$data.Entity").extend("Model.BidEstimationData", {
        FirstPageBidEstimation: {
            "type": "Edm.Double"
        },
        MainlineBidEstimation: {
            "type": "Edm.Double"
        },
        BestPositionBidEstimation: {
            "type": "Edm.Double"
        }
    });

    types["Model.AppUrl"] = $data("$data.Entity").extend("Model.AppUrl", {
        OsType: {
            "type": "Edm.String"
        },
        Url: {
            "type": "Edm.String"
        }
    });

    types["Model.LabelAssociationCounts"] = $data("$data.Entity").extend("Model.LabelAssociationCounts", {
        CampaignCount: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        AdGroupCount: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        AdCount: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        KeywordCount: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        }
    });

    types["Model.Appeal"] = $data("$data.Entity").extend("Model.Appeal", {
        JustificationText: {
            "type": "Edm.String"
        }
    });

    types["Model.AdRotation"] = $data("$data.Entity").extend("Model.AdRotation", {
        RotationType: {
            "type": "Enum.AdRotationType"
        },
        StartDate: {
            "type": "Edm.DateTimeOffset"
        },
        EndDate: {
            "type": "Model.UpdatableDate"
        }
    });

    types["Model.UpdatableDate"] = $data("$data.Entity").extend("Model.UpdatableDate", {
        Date: {
            "type": "Edm.DateTimeOffset"
        }
    });

    types["Model.Webpage"] = types["Model.Criterion"].extend("Model.Webpage", {
        Parameter: {
            "type": "Model.WebpageParameter"
        }
    });

    types["Model.RadiusCriterion"] = types["Model.Criterion"].extend("Model.RadiusCriterion", {
        Radius: {
            "type": "Edm.Int64"
        },
        RadiusUnit: {
            "type": "Enum.DistanceUnit"
        },
        Name: {
            "type": "Edm.String"
        },
        Latitude: {
            "type": "Edm.Double",
            "nullable": false,
            "required": true
        },
        Longitude: {
            "type": "Edm.Double",
            "nullable": false,
            "required": true
        },
        CountryCode: {
            "type": "Edm.String"
        }
    });

    types["Model.LocationIntentCriterion"] = types["Model.Criterion"].extend("Model.LocationIntentCriterion", {
        IntentOption: {
            "type": "Enum.IntentOptions"
        }
    });

    types["Model.LocationCriterion"] = types["Model.Criterion"].extend("Model.LocationCriterion", {
        LocationId: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        Name: {
            "type": "Edm.String"
        },
        GeoPoint: {
            "type": "Model.GeoPoint"
        },
        CountryCode: {
            "type": "Edm.String"
        },
        EnclosingLocationIds: {
            "type": "Array",
            "elementType": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        LocationType: {
            "type": "Enum.Location2Type",
            "nullable": false,
            "required": true
        }
    });

    types["Model.GenderCriterion"] = types["Model.Criterion"].extend("Model.GenderCriterion", {
        GenderType: {
            "type": "Enum.GenderType"
        }
    });

    types["Model.GeoPoint"] = $data("$data.Entity").extend("Model.GeoPoint", {
        Latitude: {
            "type": "Edm.Double"
        },
        Longitude: {
            "type": "Edm.Double"
        }
    });

    types["Model.DeviceCriterion"] = types["Model.Criterion"].extend("Model.DeviceCriterion", {
        DeviceName: {
            "type": "Edm.String"
        },
        OSName: {
            "type": "Edm.String"
        }
    });

    types["Model.DayTimeCriterion"] = types["Model.Criterion"].extend("Model.DayTimeCriterion", {
        Day: {
            "type": "Enum.Day"
        },
        FromHour: {
            "type": "Edm.Int32"
        },
        FromMinute: {
            "type": "Enum.Minute"
        },
        ToHour: {
            "type": "Edm.Int32"
        },
        ToMinute: {
            "type": "Enum.Minute"
        }
    });

    types["Model.AgeCriterion"] = types["Model.Criterion"].extend("Model.AgeCriterion", {
        AgeRange: {
            "type": "Enum.AgeRange"
        }
    });

    types["Model.WebpageParameter"] = $data("$data.Entity").extend("Model.WebpageParameter", {
        CriterionName: {
            "type": "Edm.String"
        },
        Conditions: {
            "type": "Array",
            "elementType": "Model.WebpageCondition"
        }
    });

    types["Model.WebpageCondition"] = $data("$data.Entity").extend("Model.WebpageCondition", {
        Operand: {
            "type": "Enum.WebpageConditionOperand",
            "nullable": false,
            "required": true
        },
        ArgumentOperand: {
            "type": "Edm.String"
        }
    });

    types["Model.Schedule"] = $data("$data.Entity").extend("Model.Schedule", {
        StartDate: {
            "type": "Edm.DateTimeOffset"
        },
        EndDate: {
            "type": "Edm.DateTimeOffset"
        },
        UseSearcherTimeZone: {
            "type": "Edm.Boolean"
        },
        DayTimeRanges: {
            "type": "Array",
            "elementType": "Model.DayTime"
        }
    });

    types["Model.DayTime"] = $data("$data.Entity").extend("Model.DayTime", {
        Day: {
            "type": "Enum.Day"
        },
        StartHour: {
            "type": "Edm.Int32"
        },
        StartMinute: {
            "type": "Enum.Minute"
        },
        EndHour: {
            "type": "Edm.Int32"
        },
        EndMinute: {
            "type": "Enum.Minute"
        }
    });

    types["Model.KeyValuePair_2OfInt64_CampaignEditorialReasonCollection"] = $data("$data.Entity").extend("Model.KeyValuePair_2OfInt64_CampaignEditorialReasonCollection", null);

    types["Model.PriceTableRow"] = $data("$data.Entity").extend("Model.PriceTableRow", {
        Header: {
            "type": "Edm.String"
        },
        Description: {
            "type": "Edm.String"
        },
        FinalUrls: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        FinalMobileUrls: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        Price: {
            "type": "Edm.Double",
            "nullable": false,
            "required": true
        },
        CurrencyCode: {
            "type": "Edm.String"
        },
        PriceUnit: {
            "type": "Enum.PriceUnit",
            "nullable": false,
            "required": true
        },
        PriceQualifier: {
            "type": "Enum.PriceQualifier",
            "nullable": false,
            "required": true
        }
    });

    types["Model.Address"] = $data("$data.Entity").extend("Model.Address", {
        StreetAddress: {
            "type": "Edm.String"
        },
        StreetAddress2: {
            "type": "Edm.String"
        },
        CityName: {
            "type": "Edm.String"
        },
        ProvinceCode: {
            "type": "Edm.String"
        },
        ProvinceName: {
            "type": "Edm.String"
        },
        PostalCode: {
            "type": "Edm.String"
        },
        CountryCode: {
            "type": "Edm.String"
        }
    });

    types["Model.SiteLink"] = $data("$data.Entity").extend("Model.SiteLink", {
        DisplayText: {
            "type": "Edm.String"
        },
        DestinationUrl: {
            "type": "Edm.String"
        },
        TrackingUrlTemplate: {
            "type": "Edm.String"
        },
        UrlCustomParameters: {
            "type": "Array",
            "elementType": "Model.CustomParameter"
        },
        FinalUrls: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        MobileFinalUrls: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        AppFinalUrls: {
            "type": "Array",
            "elementType": "Model.AppUrl"
        },
        EditorialStatusModifiedDateTime: {
            "type": "Edm.DateTimeOffset"
        },
        DevicePreference: {
            "type": "Enum.DevicePreference"
        },
        Description1: {
            "type": "Edm.String"
        },
        Description2: {
            "type": "Edm.String"
        },
        Scheduling: {
            "type": "Model.Schedule"
        }
    });

    types["Model.CriterionBid"] = $data("$data.Entity").extend("Model.CriterionBid", null);

    types["Model.FixedBid"] = types["Model.CriterionBid"].extend("Model.FixedBid", {
        Bid: {
            "type": "Model.Bid"
        }
    });

    types["Model.BidMultiplier"] = types["Model.CriterionBid"].extend("Model.BidMultiplier", {
        Multiplier: {
            "type": "Edm.Double",
            "nullable": false,
            "required": true
        }
    });

    types["Model.Selection"] = $data("$data.Entity").extend("Model.Selection", {
        QueryString: {
            "type": "Edm.String"
        },
        CampaignId: {
            "type": "Edm.Int64"
        },
        AdGroupId: {
            "type": "Edm.Int64"
        },
        DateRange: {
            "type": "Model.DateRange"
        },
        PeriodComparisonDateRange: {
            "type": "Model.DateRange"
        }
    });

    types["Model.DateRange"] = $data("$data.Entity").extend("Model.DateRange", {
        DateRangePreset: {
            "type": "Enum.DateRangePreset"
        },
        StartDate: {
            "type": "Edm.DateTimeOffset"
        },
        EndDate: {
            "type": "Edm.DateTimeOffset"
        }
    });

    types["Model.AdExtensionSelection"] = types["Model.Selection"].extend("Model.AdExtensionSelection", {
        AssociationType: {
            "type": "Enum.AssociationType",
            "nullable": false,
            "required": true
        },
        AdExtensionType: {
            "type": "Enum.AdExtensionsTypeFilter",
            "nullable": false,
            "required": true
        }
    });

    types["Model.SearchTermSelectionItem"] = $data("$data.Entity").extend("Model.SearchTermSelectionItem", {
        KeywordId: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        BiddedMatchType: {
            "type": "Edm.Byte",
            "nullable": false,
            "required": true
        }
    });

    types["Model.DimensionReportSelection"] = types["Model.Selection"].extend("Model.DimensionReportSelection", {
        Type: {
            "type": "Enum.DimensionReportType",
            "nullable": false,
            "required": true
        },
        Locale: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        }
    });

    types["Model.SearchTermSelection"] = types["Model.Selection"].extend("Model.SearchTermSelection", {
        SearchTermSelectionItems: {
            "type": "Array",
            "elementType": "Model.SearchTermSelectionItem"
        }
    });

    types["Model.BulkEditBatchAction"] = $data("$data.Entity").extend("Model.BulkEditBatchAction", {
        Actions: {
            "type": "Array",
            "elementType": "Model.BulkEditAction"
        },
        EditCopy: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        }
    });

    types["Model.AssociationAction"] = types["Model.BulkEditAction"].extend("Model.AssociationAction", {
        AssociationList: {
            "type": "Array",
            "elementType": "Edm.Int64",
            "nullable": false,
            "required": true
        }
    });

    types["Model.LabelAssociationAction"] = types["Model.AssociationAction"].extend("Model.LabelAssociationAction", null);

    types["Model.LabelDisassociationAction"] = types["Model.AssociationAction"].extend("Model.LabelDisassociationAction", null);

    types["Model.AudienceAssociationAction"] = types["Model.AssociationAction"].extend("Model.AudienceAssociationAction", {
        ExclusionList: {
            "type": "Array",
            "elementType": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        BidMultiplier: {
            "type": "Edm.Double"
        },
        BidType: {
            "type": "Enum.BidType",
            "nullable": false,
            "required": true
        }
    });

    types["Model.ListAction"] = types["Model.BulkEditAction"].extend("Model.ListAction", {
        ActionType: {
            "type": "Enum.ListActionType",
            "nullable": false,
            "required": true
        },
        Value: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        MatchOptions: {
            "type": "Enum.TextActionOptions",
            "nullable": false,
            "required": true
        }
    });

    types["Model.QueryOnlyAction"] = types["Model.BulkEditAction"].extend("Model.QueryOnlyAction", null);

    types["Model.BidEstimateAction"] = types["Model.BulkEditAction"].extend("Model.BidEstimateAction", {
        ActionType: {
            "type": "Enum.BidEstimateType",
            "nullable": false,
            "required": true
        },
        Limit: {
            "type": "Edm.Double"
        }
    });

    types["Model.NumericAction"] = types["Model.BulkEditAction"].extend("Model.NumericAction", {
        ActionType: {
            "type": "Enum.NumericActionType",
            "nullable": false,
            "required": true
        },
        Value: {
            "type": "Edm.Double"
        },
        Limit: {
            "type": "Edm.Double"
        }
    });

    types["Model.TextAction"] = types["Model.BulkEditAction"].extend("Model.TextAction", {
        SearchString: {
            "type": "Edm.String"
        },
        Value: {
            "type": "Edm.String"
        },
        ActionType: {
            "type": "Enum.TextActionType",
            "nullable": false,
            "required": true
        },
        Options: {
            "type": "Enum.TextActionOptions",
            "nullable": false,
            "required": true
        }
    });

    types["Model.CopyAction"] = types["Model.BulkEditAction"].extend("Model.CopyAction", {
        DestinationParentEntityIds: {
            "type": "Array",
            "elementType": "Edm.Int64",
            "nullable": false,
            "required": true
        }
    });

    types["Model.BulkEditItemChange"] = $data("$data.Entity").extend("Model.BulkEditItemChange", {
        Property: {
            "type": "Edm.String"
        },
        NewValue: {
            "type": "Edm.String"
        },
        OriginalValue: {
            "type": "Edm.String"
        }
    });

    types["Model.KeyValuePair_2OfString_String"] = $data("$data.Entity").extend("Model.KeyValuePair_2OfString_String", {
        Key: {
            "type": "Edm.String"
        },
        Value: {
            "type": "Edm.String"
        }
    });

    types["Model.KeyValuePair_2OfString_List_1OfEditorialError"] = $data("$data.Entity").extend("Model.KeyValuePair_2OfString_List_1OfEditorialError", {
        Key: {
            "type": "Edm.String"
        },
        Value: {
            "type": "Array",
            "elementType": "Model.EditorialError"
        }
    });

    types["Model.EditorialError"] = $data("$data.Entity").extend("Model.EditorialError", {
        Error: {
            "type": "Edm.String"
        },
        Field: {
            "type": "Edm.String"
        },
        DisapprovedText: {
            "type": "Edm.String"
        },
        RawEditorialErrorCode: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        IsAppealable: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        }
    });

    types["Model.AudienceExpression"] = $data("$data.Entity").extend("Model.AudienceExpression", {
        Type: {
            "type": "Enum.AudienceExpressionType",
            "nullable": false,
            "required": true
        }
    });

    types["Model.PageVisitorsWhoVisitedAnotherPageExpression"] = types["Model.AudienceExpression"].extend("Model.PageVisitorsWhoVisitedAnotherPageExpression", {
        PageExpressions: {
            "type": "Array",
            "elementType": "Model.PageVisitorsExpression"
        },
        PageExpressionsConditions: {
            "type": "Model.PageVisitorsExpression"
        },
        PageAlsoExpressionsConditions: {
            "type": "Model.PageVisitorsExpression"
        }
    });

    types["Model.Expression"] = $data("$data.Entity").extend("Model.Expression", {
        Operand: {
            "type": "Enum.ExpressionOperand",
            "nullable": false,
            "required": true
        },
        Operator: {
            "type": "Enum.ExpressionOperator",
            "nullable": false,
            "required": true
        },
        Value: {
            "type": "Edm.String"
        }
    });

    types["Model.PageVisitorsWhoDidNotVisitAnotherPageExpression"] = types["Model.AudienceExpression"].extend("Model.PageVisitorsWhoDidNotVisitAnotherPageExpression", {
        Include: {
            "type": "Array",
            "elementType": "Model.PageVisitorsExpression"
        },
        IncludeConditions: {
            "type": "Model.PageVisitorsExpression"
        },
        Exclude: {
            "type": "Array",
            "elementType": "Model.PageVisitorsExpression"
        },
        ExcludeConditions: {
            "type": "Model.PageVisitorsExpression"
        }
    });

    types["Model.ExpressionCollection"] = $data("$data.Entity").extend("Model.ExpressionCollection", {
        ExpressionSet: {
            "type": "Array",
            "elementType": "Model.Expression"
        }
    });

    types["Model.PageVisitorsExpression"] = types["Model.AudienceExpression"].extend("Model.PageVisitorsExpression", {
        Expressions: {
            "type": "Array",
            "elementType": "Model.Expression"
        },
        Conditions: {
            "type": "Array",
            "elementType": "Model.ExpressionCollection"
        }
    });

    types["Model.CustomEventsExpression"] = types["Model.AudienceExpression"].extend("Model.CustomEventsExpression", {
        Expressions: {
            "type": "Array",
            "elementType": "Model.Expression"
        }
    });

    types["Model.GoalStage"] = $data("$data.Entity").extend("Model.GoalStage", {
        Type: {
            "type": "Enum.GoalStageType"
        }
    });

    types["Model.DestinationGoalStage"] = types["Model.GoalStage"].extend("Model.DestinationGoalStage", {
        UrlString: {
            "type": "Edm.String"
        },
        Operator: {
            "type": "Enum.ExpressionOperator"
        }
    });

    types["Model.EventGoalStage"] = types["Model.GoalStage"].extend("Model.EventGoalStage", {
        Category: {
            "type": "Edm.String"
        },
        CategoryOperator: {
            "type": "Enum.ExpressionOperator"
        },
        Action: {
            "type": "Edm.String"
        },
        ActionOperator: {
            "type": "Enum.ExpressionOperator"
        },
        Label: {
            "type": "Edm.String"
        },
        LabelOperator: {
            "type": "Enum.ExpressionOperator"
        },
        Value: {
            "type": "Edm.Decimal"
        },
        ValueOperator: {
            "type": "Enum.ValueOperator"
        }
    });

    types["Model.CloudImportTaskResult"] = $data("$data.Entity").extend("Model.CloudImportTaskResult", {
        ResultFile: {
            "type": "Edm.String"
        },
        ErrorCode: {
            "type": "Edm.Int64"
        },
        EntityDownloadProgress: {
            "type": "Edm.String"
        }
    });

    types["Model.OfflineConversionFile"] = $data("$data.Entity").extend("Model.OfflineConversionFile", {
        Identifier: {
            "type": "Edm.String"
        },
        IsExpired: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        Type: {
            "type": "Enum.OfflineConversionFileType",
            "nullable": false,
            "required": true
        },
        Name: {
            "type": "Edm.String"
        }
    });

    types["Model.KeyValuePair_2OfInt64_IEnumerable_1OfAdsApiError"] = $data("$data.Entity").extend("Model.KeyValuePair_2OfInt64_IEnumerable_1OfAdsApiError", {
        Key: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        Value: {
            "type": "Array",
            "elementType": "Model.AdsApiError"
        }
    });

    types["Model.ApiEditorialError"] = types["Model.AdsApiError"].extend("Model.ApiEditorialError", {
        DisapprovedText: {
            "type": "Edm.String"
        },
        IsAppealable: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        Country: {
            "type": "Edm.String"
        }
    });

    types["Model.ImportStatistics"] = $data("$data.Entity").extend("Model.ImportStatistics", {
        Additions: {
            "type": "Edm.Int32"
        },
        Changes: {
            "type": "Edm.Int32"
        },
        Errors: {
            "type": "Edm.Int32"
        },
        Deletions: {
            "type": "Edm.Int32"
        },
        Total: {
            "type": "Edm.Int32"
        }
    });

    types["Model.KeyValuePair_2OfString_BulkUploadEntityStatistics"] = $data("$data.Entity").extend("Model.KeyValuePair_2OfString_BulkUploadEntityStatistics", {
        Key: {
            "type": "Edm.String"
        },
        Value: {
            "type": "Model.BulkUploadEntityStatistics"
        }
    });

    types["Model.BulkUploadEntityStatistics"] = $data("$data.Entity").extend("Model.BulkUploadEntityStatistics", {
        Added: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        Changed: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        Deleted: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        Errored: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        Total: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        }
    });

    types["Model.BulkFile"] = $data("$data.Entity").extend("Model.BulkFile", {
        Identifier: {
            "type": "Edm.String"
        },
        IsExpired: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        Type: {
            "type": "Enum.BulkFileType",
            "nullable": false,
            "required": true
        },
        Name: {
            "type": "Edm.String"
        }
    });

    types["Model.EntityCount"] = $data("$data.Entity").extend("Model.EntityCount", {
        Entity: {
            "type": "Enum.FilterEntityType",
            "nullable": false,
            "required": true
        },
        EntityV2: {
            "type": "Enum.FilterEntityTypeV2",
            "nullable": false,
            "required": true
        },
        Count: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        }
    });

    types["Model.KeyValuePair_2OfString_IEnumerable_1OfAdsApiError"] = $data("$data.Entity").extend("Model.KeyValuePair_2OfString_IEnumerable_1OfAdsApiError", {
        Key: {
            "type": "Edm.String"
        },
        Value: {
            "type": "Array",
            "elementType": "Model.AdsApiError"
        }
    });

    types["Model.AdWordsImportContext"] = $data("$data.Entity").extend("Model.AdWordsImportContext", {
        SessionId: {
            "type": "Edm.String"
        },
        CustomerId: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        AccountName: {
            "type": "Edm.String"
        },
        CampaignIds: {
            "type": "Array",
            "elementType": "Edm.Int64",
            "nullable": false,
            "required": true
        }
    });

    types["Model.GoogleMyBusinessFilter"] = $data("$data.Entity").extend("Model.GoogleMyBusinessFilter", {
        BusinessName: {
            "type": "Edm.String"
        },
        Categories: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        Labels: {
            "type": "Array",
            "elementType": "Edm.String"
        }
    });

    types["Model.AggregateFilter"] = $data("$data.Entity").extend("Model.AggregateFilter", {
        ParentType: {
            "type": "Enum.FilterEntityType",
            "nullable": false,
            "required": true
        },
        ParentTypeV2: {
            "type": "Enum.FilterEntityTypeV2",
            "nullable": false,
            "required": true
        },
        Predicate: {
            "type": "Model.Predicate"
        }
    });

    types["Model.Predicate"] = types["Model.BaseExpression"].extend("Model.Predicate", {
        PropertyName: {
            "type": "Edm.String"
        },
        Operator: {
            "type": "Enum.Operator",
            "nullable": false,
            "required": true
        },
        Values: {
            "type": "Array",
            "elementType": "Edm.String"
        }
    });

    types["Model.NotificationDeliveryOption"] = $data("$data.Entity").extend("Model.NotificationDeliveryOption", null);

    types["Model.EmailNotificationDeliveryOption"] = types["Model.NotificationDeliveryOption"].extend("Model.EmailNotificationDeliveryOption", {
        EmailOption: {
            "type": "Enum.EmailOption",
            "nullable": false,
            "required": true
        },
        CustomUserIds: {
            "type": "Array",
            "elementType": "Edm.Int32",
            "nullable": false,
            "required": true
        }
    });

    types["Model.ImportUserPreferences"] = $data("$data.Entity").extend("Model.ImportUserPreferences", {
        ImportNewEntities: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        ImportNewOptions: {
            "type": "Enum.ImportNewOption"
        },
        ImportDeletedEntities: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        UpdateEntityPreferences: {
            "type": "Model.ImportUpdateEntityPreference"
        },
        UserSetProperties: {
            "type": "Model.Dictionary_2OfString_String"
        },
        UserSetProperties2: {
            "type": "Array",
            "elementType": "Model.KeyValuePair_2OfString_String"
        },
        DefaultBidsBelowMinToAdCenterMinBid: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        DefaultCampaignBudgetBelowMinToAdCenterMinBudget: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        AppendPrefixTextToCampaignNames: {
            "type": "Model.ImportAppendTextToProperty"
        },
        AppendSuffixTextToCampaignNames: {
            "type": "Model.ImportAppendTextToProperty"
        },
        SearchAndReplaceTextInCampaignNames: {
            "type": "Model.ImportSearchAndReplaceTextInProperty"
        },
        AppendDestUrlPreference: {
            "type": "Model.ImportAppendDestUrlPreference"
        },
        SearcAndReplaceDestUrlPreference: {
            "type": "Model.ImportSearchAndReplaceDestUrlPreference"
        },
        AppendTrackingTemplatePreference: {
            "type": "Model.AppendPreferencesForTrackingTemplate"
        },
        SearchAndReplaceTrackingTemplatePreference: {
            "type": "Model.SearchAndReplacePreferencesForTrackingTemplate"
        },
        ImportAdExtensionsAsLibrary: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        StoreIdForImportedProductAdExtensions: {
            "type": "Edm.Int64"
        }
    });

    types["Model.ImportUpdateEntityPreference"] = $data("$data.Entity").extend("Model.ImportUpdateEntityPreference", {
        ImportUpdatedEntities: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        ImportUpdateOptions: {
            "type": "Enum.ImportUpdateOption",
            "nullable": false,
            "required": true
        }
    });

    types["Model.ImportAppendTextToProperty"] = $data("$data.Entity").extend("Model.ImportAppendTextToProperty", {
        AppendTextToProperty: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        AppendText: {
            "type": "Edm.String"
        }
    });

    types["Model.ImportSearchAndReplaceTextInProperty"] = $data("$data.Entity").extend("Model.ImportSearchAndReplaceTextInProperty", {
        SearchAndReplaceTextInProperty: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        SearchTextInProperty: {
            "type": "Edm.String"
        },
        ReplaceTextInProperty: {
            "type": "Edm.String"
        }
    });

    types["Model.ImportAppendDestUrlPreference"] = $data("$data.Entity").extend("Model.ImportAppendDestUrlPreference", {
        UseAppendString: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        AppendStringForDestinationUrl: {
            "type": "Edm.String"
        }
    });

    types["Model.ImportSearchAndReplaceDestUrlPreference"] = $data("$data.Entity").extend("Model.ImportSearchAndReplaceDestUrlPreference", {
        UseSearchAndReplaceString: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        SearchStringForDestinationUrl: {
            "type": "Edm.String"
        },
        ReplaceStringForDestinationUrl: {
            "type": "Edm.String"
        }
    });

    types["Model.AppendPreferencesForTrackingTemplate"] = $data("$data.Entity").extend("Model.AppendPreferencesForTrackingTemplate", {
        UseAppendString: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        AppendStringForTrackingTemplate: {
            "type": "Edm.String"
        }
    });

    types["Model.SearchAndReplacePreferencesForTrackingTemplate"] = $data("$data.Entity").extend("Model.SearchAndReplacePreferencesForTrackingTemplate", {
        UseSearchAndReplaceString: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        SearchStringForTrackingTemplate: {
            "type": "Edm.String"
        },
        ReplaceStringForTrackingTemplate: {
            "type": "Edm.String"
        }
    });

    types["Model.FileImportContext"] = $data("$data.Entity").extend("Model.FileImportContext", {
        UploadedFileName: {
            "type": "Edm.String"
        },
        FilePath: {
            "type": "Edm.String"
        }
    });

    types["Model.MigrationStatuses"] = $data("$data.Entity").extend("Model.MigrationStatuses", null, {
        openType: {
            "value": true
        }
    });

    types["Model.PerformanceChangePercentMetrics"] = $data("$data.Entity").extend("Model.PerformanceChangePercentMetrics", {
        Impressions: {
            "type": "Edm.Double"
        },
        Clicks: {
            "type": "Edm.Double"
        },
        CTR: {
            "type": "Edm.Double"
        },
        Conversions: {
            "type": "Edm.Double"
        },
        Spend: {
            "type": "Edm.Double"
        },
        AverageCPC: {
            "type": "Edm.Double"
        },
        AveragePosition: {
            "type": "Edm.Double"
        },
        AverageCPM: {
            "type": "Edm.Double"
        },
        CPA: {
            "type": "Edm.Double"
        },
        WebsiteCoverage: {
            "type": "Edm.Double"
        },
        AuctionWonPercent: {
            "type": "Edm.Double"
        },
        AuctionLostToBudgetPercent: {
            "type": "Edm.Double"
        },
        AuctionLostToRankPercent: {
            "type": "Edm.Double"
        },
        AuctionLostToLandingPercent: {
            "type": "Edm.Double"
        },
        AuctionLostToAdQualityPercent: {
            "type": "Edm.Double"
        },
        AuctionLostToBidPercent: {
            "type": "Edm.Double"
        },
        ClickSharePercent: {
            "type": "Edm.Double"
        },
        CustomColumns: {
            "type": "Array",
            "elementType": "Model.CustomColumnOutputValue"
        },
        RevenueOnAdSpend: {
            "type": "Edm.Double"
        },
        AdvertiserReportedRevenue: {
            "type": "Edm.Double"
        },
        ConversionRate: {
            "type": "Edm.Double"
        },
        SegmentedData: {
            "type": "Array",
            "elementType": "Model.SegmentedPerformanceChangePercentMetrics"
        }
    });

    types["Model.SegmentedPerformanceChangePercentMetrics"] = $data("$data.Entity").extend("Model.SegmentedPerformanceChangePercentMetrics", {
        Data: {
            "type": "Model.PerformanceChangePercentMetrics"
        }
    });

    types["Model.PerformanceDataPoint"] = $data("$data.Entity").extend("Model.PerformanceDataPoint", {
        DateTime: {
            "type": "Edm.DateTimeOffset",
            "nullable": false,
            "required": true
        },
        Value: {
            "type": "Edm.Double"
        }
    });

    types["Model.Version"] = $data("$data.Entity").extend("Model.Version", null);

    types["Model.HttpContent"] = $data("$data.Entity").extend("Model.HttpContent", {
        Headers: {
            "type": "Array",
            "elementType": "Model.KeyValuePair_2OfString_IEnumerable_1OfString"
        }
    });

    types["Model.KeyValuePair_2OfString_IEnumerable_1OfString"] = $data("$data.Entity").extend("Model.KeyValuePair_2OfString_IEnumerable_1OfString", {
        Value: {
            "type": "Array",
            "elementType": "Edm.String"
        }
    });

    types["Model.MultipartContent"] = types["Model.HttpContent"].extend("Model.MultipartContent", null);

    types["Model.MultipartFormDataContent"] = types["Model.MultipartContent"].extend("Model.MultipartFormDataContent", null);

    types["Model.ByteArrayContent"] = types["Model.HttpContent"].extend("Model.ByteArrayContent", null);

    types["Model.FormUrlEncodedContent"] = types["Model.ByteArrayContent"].extend("Model.FormUrlEncodedContent", null);

    types["Model.StringContent"] = types["Model.ByteArrayContent"].extend("Model.StringContent", null);

    types["Model.StreamContent"] = types["Model.HttpContent"].extend("Model.StreamContent", null);

    types["Model.ByteRangeStreamContent"] = types["Model.HttpContent"].extend("Model.ByteRangeStreamContent", null);

    types["Model.ObjectContent"] = types["Model.HttpContent"].extend("Model.ObjectContent", null);

    types["Model.ObjectContent_1OfT"] = types["Model.ObjectContent"].extend("Model.ObjectContent_1OfT", null);

    types["Model.PushStreamContent"] = types["Model.HttpContent"].extend("Model.PushStreamContent", null);

    types["Model.HttpMessageContent"] = types["Model.HttpContent"].extend("Model.HttpMessageContent", null);

    types["Model.ODataBatchContent"] = types["Model.HttpContent"].extend("Model.ODataBatchContent", {
        Responses: {
            "type": "Array",
            "elementType": "Model.ODataBatchResponseItem"
        }
    });

    types["Model.ODataBatchResponseItem"] = $data("$data.Entity").extend("Model.ODataBatchResponseItem", null);

    types["Model.OperationResponseItem"] = types["Model.ODataBatchResponseItem"].extend("Model.OperationResponseItem", null);

    types["Model.ChangeSetResponseItem"] = types["Model.ODataBatchResponseItem"].extend("Model.ChangeSetResponseItem", {
        Responses: {
            "type": "Array",
            "elementType": "Model.HttpResponseMessage"
        }
    });

    types["Model.HttpRequestMessage"] = $data("$data.Entity").extend("Model.HttpRequestMessage", {
        Version: {
            "type": "Model.Version"
        },
        Content: {
            "type": "Model.HttpContent"
        },
        Method: {
            "type": "Model.HttpMethod"
        },
        RequestUri: {
            "type": "Model.Uri"
        },
        Headers: {
            "type": "Array",
            "elementType": "Model.KeyValuePair_2OfString_IEnumerable_1OfString"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.HttpMethod"] = $data("$data.Entity").extend("Model.HttpMethod", null);

    types["Model.Uri"] = $data("$data.Entity").extend("Model.Uri", {
        Segments: {
            "type": "Array",
            "elementType": "Edm.String"
        }
    });

    types["Model.RejectAsset"] = types["Model.HttpRequestMessage"].extend("Model.RejectAsset", null, {
        openType: {
            "value": true
        }
    });

    types["Model.ChangeSpecificationConstraints"] = types["Model.HttpRequestMessage"].extend("Model.ChangeSpecificationConstraints", null, {
        openType: {
            "value": true
        }
    });

    types["Model.DeprecateResource"] = types["Model.HttpRequestMessage"].extend("Model.DeprecateResource", null, {
        openType: {
            "value": true
        }
    });

    types["Model.PostResource"] = types["Model.HttpRequestMessage"].extend("Model.PostResource", null, {
        openType: {
            "value": true
        }
    });

    types["Model.CreateVideoRepresentation"] = types["Model.HttpRequestMessage"].extend("Model.CreateVideoRepresentation", null, {
        openType: {
            "value": true
        }
    });

    types["Model.DeleteResource"] = types["Model.HttpRequestMessage"].extend("Model.DeleteResource", null, {
        openType: {
            "value": true
        }
    });

    types["Model.GetResource"] = types["Model.HttpRequestMessage"].extend("Model.GetResource", null, {
        openType: {
            "value": true
        }
    });

    types["Model.ChangeAssetMetadata"] = types["Model.HttpRequestMessage"].extend("Model.ChangeAssetMetadata", null, {
        openType: {
            "value": true
        }
    });

    types["Model.CreateAsset"] = types["Model.HttpRequestMessage"].extend("Model.CreateAsset", null, {
        openType: {
            "value": true
        }
    });

    types["Model.CreateImageRepresentation"] = types["Model.HttpRequestMessage"].extend("Model.CreateImageRepresentation", null, {
        openType: {
            "value": true
        }
    });

    types["Model.CreateSpecification"] = types["Model.HttpRequestMessage"].extend("Model.CreateSpecification", null, {
        openType: {
            "value": true
        }
    });

    types["Model.PutResource"] = types["Model.HttpRequestMessage"].extend("Model.PutResource", null, {
        openType: {
            "value": true
        }
    });

    types["Model.CustomColumnDefinition"] = $data("$data.Entity").extend("Model.CustomColumnDefinition", {
        OutputFormat: {
            "type": "Enum.CustomColumnFormatting",
            "nullable": false,
            "required": true
        },
        Name: {
            "type": "Edm.String"
        },
        Id: {
            "type": "Edm.String"
        },
        CustomColumnExpression: {
            "type": "Edm.String"
        }
    });

    types["Model.AdExtensionAssociationGridDataParameters"] = types["Model.GridDataParameters"].extend("Model.AdExtensionAssociationGridDataParameters", null);

    types["Model.Customer"] = $data("$data.Entity").extend("Model.Customer", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        Accounts: {
            "type": "Array",
            "elementType": "Model.Account",
            "inverseProperty": "$$unbound"
        },
        TaskItems: {
            "type": "Array",
            "elementType": "Model.TaskItem",
            "inverseProperty": "$$unbound"
        },
        TaskItemExecutions: {
            "type": "Array",
            "elementType": "Model.TaskItemExecution",
            "inverseProperty": "$$unbound"
        },
        ProductOfferStores: {
            "type": "Array",
            "elementType": "Model.ProductOfferStore",
            "inverseProperty": "$$unbound"
        },
        ScriptTaskItemExecutions: {
            "type": "Array",
            "elementType": "Model.ScriptTaskItemExecution",
            "inverseProperty": "$$unbound"
        }
    });

    types["Model.Account"] = $data("$data.Entity").extend("Model.Account", {
        Id: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        Name: {
            "type": "Edm.String"
        },
        AccountNumber: {
            "type": "Edm.String"
        },
        CompanyName: {
            "type": "Edm.String"
        },
        Currency: {
            "type": "Edm.String"
        },
        Status: {
            "type": "Enum.AccountStatus",
            "nullable": false,
            "required": true
        },
        AccountInactiveReasonsCount: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        IsAccountDeleted: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        AccountInactiveReasons: {
            "type": "Array",
            "elementType": "Model.AccountInactiveReason"
        },
        BillToCustomerName: {
            "type": "Edm.String"
        },
        QualityScoreData: {
            "type": "Model.QualityScoreData"
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        },
        Budget: {
            "type": "Model.AggregateBudget"
        },
        InsertionOrderDetails: {
            "type": "Model.InsertionOrderDetails"
        },
        TrackingTemplate: {
            "type": "Edm.String"
        },
        MsClickIdTaggingEnabled: {
            "type": "Edm.String"
        },
        AutoTag: {
            "type": "Enum.AutoTagType",
            "nullable": false,
            "required": true
        },
        MigrationStatus: {
            "type": "Model.MigrationStatuses"
        },
        NegativeKeywordLists: {
            "type": "Array",
            "elementType": "Model.NegativeKeywordList",
            "inverseProperty": "$$unbound"
        },
        Campaigns: {
            "type": "Array",
            "elementType": "Model.Campaign",
            "inverseProperty": "$$unbound"
        },
        AdGroups: {
            "type": "Array",
            "elementType": "Model.AdGroup",
            "inverseProperty": "$$unbound"
        },
        Ads: {
            "type": "Array",
            "elementType": "Model.Ad",
            "inverseProperty": "$$unbound"
        },
        Keywords: {
            "type": "Array",
            "elementType": "Model.Keyword",
            "inverseProperty": "$$unbound"
        },
        NegativeKeywords: {
            "type": "Array",
            "elementType": "Model.NegativeKeyword",
            "inverseProperty": "$$unbound"
        },
        BulkEditSessions: {
            "type": "Array",
            "elementType": "Model.BulkEditSession",
            "inverseProperty": "$$unbound"
        },
        RemessagingAudiences: {
            "type": "Array",
            "elementType": "Model.RemessagingAudience",
            "inverseProperty": "$$unbound"
        },
        Audiences: {
            "type": "Array",
            "elementType": "Model.Audience",
            "inverseProperty": "$$unbound"
        },
        Tags: {
            "type": "Array",
            "elementType": "Model.Tag",
            "inverseProperty": "$$unbound"
        },
        AudienceAdGroupCriterions: {
            "type": "Array",
            "elementType": "Model.AudienceAdGroupCriterion",
            "inverseProperty": "$$unbound"
        },
        AdGroupAudienceAssociations: {
            "type": "Array",
            "elementType": "Model.AdGroupAudienceAssociation",
            "inverseProperty": "$$unbound"
        },
        AdGroupAudienceCriterionWithBIs: {
            "type": "Array",
            "elementType": "Model.AdGroupAudienceCriterionWithBI",
            "inverseProperty": "$$unbound"
        },
        AdGroupAudienceCriterions: {
            "type": "Array",
            "elementType": "Model.AdGroupAudienceCriterion",
            "inverseProperty": "$$unbound"
        },
        Preferences: {
            "type": "Array",
            "elementType": "Model.Preference",
            "inverseProperty": "$$unbound"
        },
        Goals: {
            "type": "Array",
            "elementType": "Model.Goal",
            "inverseProperty": "$$unbound"
        },
        Apps: {
            "type": "Array",
            "elementType": "Model.App",
            "inverseProperty": "$$unbound"
        },
        TaskItems: {
            "type": "Array",
            "elementType": "Model.TaskItem",
            "inverseProperty": "$$unbound"
        },
        TaskItemExecutions: {
            "type": "Array",
            "elementType": "Model.TaskItemExecution",
            "inverseProperty": "$$unbound"
        },
        Images: {
            "type": "Array",
            "elementType": "Model.Image",
            "inverseProperty": "$$unbound"
        },
        ImageAdExtensions: {
            "type": "Array",
            "elementType": "Model.ImageAdExtension",
            "inverseProperty": "$$unbound"
        },
        AdExtensions: {
            "type": "Array",
            "elementType": "Model.AdExtension",
            "inverseProperty": "$$unbound"
        },
        AdExtensionAssociations: {
            "type": "Array",
            "elementType": "Model.AdExtensionAssociation",
            "inverseProperty": "$$unbound"
        },
        Labels: {
            "type": "Array",
            "elementType": "Model.Label",
            "inverseProperty": "$$unbound"
        },
        Budgets: {
            "type": "Array",
            "elementType": "Model.Budget",
            "inverseProperty": "$$unbound"
        },
        Locations: {
            "type": "Array",
            "elementType": "Model.Location",
            "inverseProperty": "$$unbound"
        },
        LocationAdExtensions: {
            "type": "Array",
            "elementType": "Model.LocationAdExtension",
            "inverseProperty": "$$unbound"
        },
        CampaignCriterions: {
            "type": "Array",
            "elementType": "Model.CampaignCriterion",
            "inverseProperty": "$$unbound"
        },
        AdGroupCriterions: {
            "type": "Array",
            "elementType": "Model.AdGroupCriterion",
            "inverseProperty": "$$unbound"
        },
        DsaTargets: {
            "type": "Array",
            "elementType": "Model.DsaTarget",
            "inverseProperty": "$$unbound"
        },
        DomainCategorys: {
            "type": "Array",
            "elementType": "Model.DomainCategory",
            "inverseProperty": "$$unbound"
        },
        NegativeAdGroupDsaTargets: {
            "type": "Array",
            "elementType": "Model.NegativeAdGroupDsaTarget",
            "inverseProperty": "$$unbound"
        },
        NegativeCampaignDsaTargets: {
            "type": "Array",
            "elementType": "Model.NegativeCampaignDsaTarget",
            "inverseProperty": "$$unbound"
        },
        DsaSearchTerms: {
            "type": "Array",
            "elementType": "Model.DsaSearchTerm",
            "inverseProperty": "$$unbound"
        },
        Categories: {
            "type": "Array",
            "elementType": "Model.Category",
            "inverseProperty": "$$unbound"
        },
        Tips: {
            "type": "Array",
            "elementType": "Model.Tip",
            "inverseProperty": "$$unbound"
        },
        ScriptTaskItemExecutions: {
            "type": "Array",
            "elementType": "Model.ScriptTaskItemExecution",
            "inverseProperty": "$$unbound"
        },
        BulkUpsert: {
            "type": "$data.ServiceAction",
            "namespace": "Default",
            "returnType": "Model.IEnumerable_1OfIEnumerable_1OfString",
            "params": [{
                "name": "CsvRows",
                "type": "Array",
                "elementType": "Edm.String"
            }, {
                "name": "ReturnAllFields",
                "type": "Edm.Boolean"
            }]
        },
        PerformanceTrend: {
            "type": "$data.ServiceFunction",
            "namespace": "Default",
            "returnType": "Model.IEnumerable_1OfPerformanceTrendItem",
            "params": [{
                "name": "granularity",
                "type": "Enum.Granularity"
            }, {
                "name": "startDate",
                "type": "Edm.DateTimeOffset"
            }, {
                "name": "endDate",
                "type": "Edm.DateTimeOffset"
            }]
        },
        DimensionReport: {
            "type": "$data.ServiceFunction",
            "namespace": "Default",
            "returnType": "$data.Queryable",
            "params": [{
                "name": "ReportType",
                "type": "Enum.DimensionReportType"
            }, {
                "name": "Locale",
                "type": "Edm.Int32"
            }],
            "elementType": "Model.DimensionRow"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.App"] = $data("$data.Entity").extend("Model.App", {
        AppPlatform: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "key": true
        },
        AppStoreId: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "key": true
        },
        AppTitle: {
            "type": "Edm.String"
        },
        AppUrl: {
            "type": "Edm.String"
        },
        IconUrl: {
            "type": "Edm.String"
        },
        DeveloperName: {
            "type": "Edm.String"
        },
        DeviceType: {
            "type": "Enum.DeviceType",
            "nullable": false,
            "required": true
        }
    });

    types["Model.Campaign"] = $data("$data.Entity").extend("Model.Campaign", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        Name: {
            "type": "Edm.String"
        },
        Status: {
            "type": "Enum.CampaignStatus",
            "nullable": false,
            "required": true
        },
        TimeZone: {
            "type": "Enum.TimeZone",
            "nullable": false,
            "required": true
        },
        DeliveryStatus: {
            "type": "Enum.DeliveryStatus",
            "nullable": false,
            "required": true
        },
        CampaignType: {
            "type": "Enum.CampaignType",
            "nullable": false,
            "required": true
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        },
        PhonePerformanceMetrics: {
            "type": "Model.PhonePerformanceMetrics"
        },
        QualityScore: {
            "type": "Model.QualityScoreData"
        },
        UpdatedOnLastImport: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        HasAuctionInsight: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        TrackingUrlTemplate: {
            "type": "Edm.String"
        },
        UrlCustomParameters: {
            "type": "Array",
            "elementType": "Model.CustomParameter"
        },
        BiddingScheme: {
            "type": "Model.BiddingScheme"
        },
        NativeBidAdjustment: {
            "type": "Edm.Int32"
        },
        KeywordVariantMatchEnabled: {
            "type": "Edm.Boolean"
        },
        CampaignSettings: {
            "type": "Array",
            "elementType": "Model.CampaignSettings"
        },
        DisplayBiddingStrategyType: {
            "type": "Enum.BiddingStrategyType",
            "nullable": false,
            "required": true
        },
        DisplayBiddingStrategyMaxCpc: {
            "type": "Edm.Double"
        },
        DisplayBiddingStrategyTargetCpa: {
            "type": "Edm.Double"
        },
        Languages: {
            "type": "Array",
            "elementType": "Enum.Language",
            "nullable": false,
            "required": true
        },
        Budget: {
            "type": "Model.Budget",
            "inverseProperty": "$$unbound"
        },
        AdGroupAudienceAssociations: {
            "type": "Array",
            "elementType": "Model.AdGroupAudienceAssociation",
            "inverseProperty": "$$unbound"
        },
        AdGroupAudienceCriterionWithBIs: {
            "type": "Array",
            "elementType": "Model.AdGroupAudienceCriterionWithBI",
            "inverseProperty": "$$unbound"
        },
        AdGroupAudienceCriterions: {
            "type": "Array",
            "elementType": "Model.AdGroupAudienceCriterion",
            "inverseProperty": "$$unbound"
        },
        AdGroups: {
            "type": "Array",
            "elementType": "Model.AdGroup",
            "inverseProperty": "$$unbound"
        },
        Ads: {
            "type": "Array",
            "elementType": "Model.Ad",
            "inverseProperty": "$$unbound"
        },
        Keywords: {
            "type": "Array",
            "elementType": "Model.Keyword",
            "inverseProperty": "$$unbound"
        },
        ProductOffers: {
            "type": "Array",
            "elementType": "Model.ProductOffer",
            "inverseProperty": "$$unbound"
        },
        AdExtensionAssociations: {
            "type": "Array",
            "elementType": "Model.AdExtensionAssociation",
            "inverseProperty": "$$unbound"
        },
        Labels: {
            "type": "Array",
            "elementType": "Model.Label",
            "inverseProperty": "$$unbound"
        },
        CampaignCriterions: {
            "type": "Array",
            "elementType": "Model.CampaignCriterion",
            "inverseProperty": "$$unbound"
        },
        AdGroupCriterions: {
            "type": "Array",
            "elementType": "Model.AdGroupCriterion",
            "inverseProperty": "$$unbound"
        },
        DsaTargets: {
            "type": "Array",
            "elementType": "Model.DsaTarget",
            "inverseProperty": "$$unbound"
        },
        DomainCategorys: {
            "type": "Array",
            "elementType": "Model.DomainCategory",
            "inverseProperty": "$$unbound"
        },
        NegativeAdGroupDsaTargets: {
            "type": "Array",
            "elementType": "Model.NegativeAdGroupDsaTarget",
            "inverseProperty": "$$unbound"
        },
        NegativeCampaignDsaTargets: {
            "type": "Array",
            "elementType": "Model.NegativeCampaignDsaTarget",
            "inverseProperty": "$$unbound"
        },
        DsaSearchTerms: {
            "type": "Array",
            "elementType": "Model.DsaSearchTerm",
            "inverseProperty": "$$unbound"
        },
        Categories: {
            "type": "Array",
            "elementType": "Model.Category",
            "inverseProperty": "$$unbound"
        },
        DimensionReport: {
            "type": "$data.ServiceFunction",
            "namespace": "Default",
            "returnType": "$data.Queryable",
            "params": [{
                "name": "ReportType",
                "type": "Enum.DimensionReportType"
            }, {
                "name": "Locale",
                "type": "Edm.Int32"
            }],
            "elementType": "Model.DimensionRow"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.AdGroup"] = $data("$data.Entity").extend("Model.AdGroup", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        Name: {
            "type": "Edm.String"
        },
        StartDate: {
            "type": "Edm.DateTimeOffset",
            "nullable": false,
            "required": true
        },
        EndDate: {
            "type": "Edm.DateTimeOffset"
        },
        Status: {
            "type": "Enum.AdGroupStatus",
            "nullable": false,
            "required": true
        },
        SearchBid: {
            "type": "Edm.Double"
        },
        ContentBid: {
            "type": "Edm.Double"
        },
        Medium: {
            "type": "Enum.Medium",
            "nullable": false,
            "required": true
        },
        PricingModel: {
            "type": "Enum.PricingModel",
            "nullable": false,
            "required": true
        },
        Language: {
            "type": "Enum.Language"
        },
        BidTarget: {
            "type": "Enum.BidTargetType",
            "nullable": false,
            "required": true
        },
        DeliveryStatus: {
            "type": "Enum.DeliveryStatus",
            "nullable": false,
            "required": true
        },
        CallTrackingStatus: {
            "type": "Enum.AdGroupCallTrackingStatus",
            "nullable": false,
            "required": true
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        },
        PhonePerformanceMetrics: {
            "type": "Model.PhonePerformanceMetrics"
        },
        QualityScore: {
            "type": "Model.QualityScoreData"
        },
        UpdatedOnLastImport: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        HasAuctionInsight: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        TrackingUrlTemplate: {
            "type": "Edm.String"
        },
        UrlCustomParameters: {
            "type": "Array",
            "elementType": "Model.CustomParameter"
        },
        BiddingScheme: {
            "type": "Model.BiddingScheme"
        },
        NativeBidAdjustment: {
            "type": "Edm.Int32"
        },
        AdRotation: {
            "type": "Model.AdRotation"
        },
        AdDistribution: {
            "type": "Enum.Network",
            "nullable": false,
            "required": true
        },
        DisplayBiddingStrategyType: {
            "type": "Enum.BiddingStrategyType",
            "nullable": false,
            "required": true
        },
        DisplayBiddingStrategyMaxCpc: {
            "type": "Edm.Double"
        },
        DisplayBiddingStrategyTargetCpa: {
            "type": "Edm.Double"
        },
        Keywords: {
            "type": "Array",
            "elementType": "Model.Keyword",
            "inverseProperty": "$$unbound"
        },
        Ads: {
            "type": "Array",
            "elementType": "Model.Ad",
            "inverseProperty": "$$unbound"
        },
        AudienceAdGroupCriterions: {
            "type": "Array",
            "elementType": "Model.AudienceAdGroupCriterion",
            "inverseProperty": "$$unbound"
        },
        AdGroupAudienceAssociations: {
            "type": "Array",
            "elementType": "Model.AdGroupAudienceAssociation",
            "inverseProperty": "$$unbound"
        },
        AdGroupAudienceCriterionWithBIs: {
            "type": "Array",
            "elementType": "Model.AdGroupAudienceCriterionWithBI",
            "inverseProperty": "$$unbound"
        },
        AdGroupAudienceCriterions: {
            "type": "Array",
            "elementType": "Model.AdGroupAudienceCriterion",
            "inverseProperty": "$$unbound"
        },
        Campaign: {
            "type": "Model.Campaign",
            "inverseProperty": "$$unbound"
        },
        ProductPartitions: {
            "type": "Array",
            "elementType": "Model.ProductPartition",
            "inverseProperty": "$$unbound"
        },
        AdExtensionAssociations: {
            "type": "Array",
            "elementType": "Model.AdExtensionAssociation",
            "inverseProperty": "$$unbound"
        },
        Labels: {
            "type": "Array",
            "elementType": "Model.Label",
            "inverseProperty": "$$unbound"
        },
        AdGroupCriterions: {
            "type": "Array",
            "elementType": "Model.AdGroupCriterion",
            "inverseProperty": "$$unbound"
        },
        DsaTargets: {
            "type": "Array",
            "elementType": "Model.DsaTarget",
            "inverseProperty": "$$unbound"
        },
        DomainCategorys: {
            "type": "Array",
            "elementType": "Model.DomainCategory",
            "inverseProperty": "$$unbound"
        },
        NegativeAdGroupDsaTargets: {
            "type": "Array",
            "elementType": "Model.NegativeAdGroupDsaTarget",
            "inverseProperty": "$$unbound"
        },
        Categories: {
            "type": "Array",
            "elementType": "Model.Category",
            "inverseProperty": "$$unbound"
        },
        DsaSearchTerms: {
            "type": "Array",
            "elementType": "Model.DsaSearchTerm",
            "inverseProperty": "$$unbound"
        },
        DimensionReport: {
            "type": "$data.ServiceFunction",
            "namespace": "Default",
            "returnType": "$data.Queryable",
            "params": [{
                "name": "ReportType",
                "type": "Enum.DimensionReportType"
            }, {
                "name": "Locale",
                "type": "Edm.Int32"
            }],
            "elementType": "Model.DimensionRow"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.Keyword"] = $data("$data.Entity").extend("Model.Keyword", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        Text: {
            "type": "Edm.String"
        },
        MatchType: {
            "type": "Enum.MatchType"
        },
        Bid: {
            "type": "Model.BidAmountDetail"
        },
        DestinationUrl: {
            "type": "Edm.String"
        },
        Status: {
            "type": "Enum.OrderItemStatus"
        },
        Param1: {
            "type": "Edm.String"
        },
        Param2: {
            "type": "Edm.String"
        },
        Param3: {
            "type": "Edm.String"
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        },
        QualityScore: {
            "type": "Model.QualityScoreData"
        },
        DeliveryStatus: {
            "type": "Enum.DeliveryStatus",
            "nullable": false,
            "required": true
        },
        BidEstimate: {
            "type": "Model.BidEstimationData"
        },
        UpdatedOnLastImport: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        HasAuctionInsight: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        TrackingUrlTemplate: {
            "type": "Edm.String"
        },
        UrlCustomParameters: {
            "type": "Array",
            "elementType": "Model.CustomParameter"
        },
        FinalUrls: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        MobileFinalUrls: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        AppFinalUrls: {
            "type": "Array",
            "elementType": "Model.AppUrl"
        },
        BiddingScheme: {
            "type": "Model.BiddingScheme"
        },
        DisplayBiddingStrategyType: {
            "type": "Enum.BiddingStrategyType",
            "nullable": false,
            "required": true
        },
        DisplayBiddingStrategyMaxCpc: {
            "type": "Edm.Double"
        },
        DisplayBiddingStrategyTargetCpa: {
            "type": "Edm.Double"
        },
        Campaign: {
            "type": "Model.Campaign",
            "inverseProperty": "$$unbound"
        },
        AdGroup: {
            "type": "Model.AdGroup",
            "inverseProperty": "$$unbound"
        },
        Labels: {
            "type": "Array",
            "elementType": "Model.Label",
            "inverseProperty": "$$unbound"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.Ad"] = $data("$data.Entity").extend("Model.Ad", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        Text: {
            "type": "Edm.String"
        },
        Title: {
            "type": "Edm.String"
        },
        DisplayUrl: {
            "type": "Edm.String"
        },
        DestinationUrl: {
            "type": "Edm.String"
        },
        Type: {
            "type": "Enum.AdType",
            "nullable": false,
            "required": true
        },
        DevicePreference: {
            "type": "Enum.DevicePreference"
        },
        Status: {
            "type": "Enum.AdStatus",
            "nullable": false,
            "required": true
        },
        DeliveryStatus: {
            "type": "Enum.DeliveryStatus",
            "nullable": false,
            "required": true
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        },
        UpdatedOnLastImport: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        TrackingUrlTemplate: {
            "type": "Edm.String"
        },
        UrlCustomParameters: {
            "type": "Array",
            "elementType": "Model.CustomParameter"
        },
        FinalUrls: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        MobileFinalUrls: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        AppFinalUrls: {
            "type": "Array",
            "elementType": "Model.AppUrl"
        },
        Appeal: {
            "type": "Model.Appeal"
        },
        NativePreference: {
            "type": "Enum.AdPreference"
        },
        TitlePart1: {
            "type": "Edm.String"
        },
        TitlePart2: {
            "type": "Edm.String"
        },
        Path1: {
            "type": "Edm.String"
        },
        Path2: {
            "type": "Edm.String"
        },
        Campaign: {
            "type": "Model.Campaign",
            "inverseProperty": "$$unbound"
        },
        AdGroup: {
            "type": "Model.AdGroup",
            "inverseProperty": "$$unbound"
        },
        Labels: {
            "type": "Array",
            "elementType": "Model.Label",
            "inverseProperty": "$$unbound"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.NegativeKeywordList"] = $data("$data.Entity").extend("Model.NegativeKeywordList", {
        CampaignAssociationCount: {
            "type": "Edm.Int32"
        },
        Count: {
            "type": "Edm.Int32"
        },
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        Name: {
            "type": "Edm.String"
        },
        NegativeKeywords: {
            "type": "Array",
            "elementType": "Model.NegativeKeyword",
            "inverseProperty": "$$unbound"
        }
    });

    types["Model.NegativeKeyword"] = $data("$data.Entity").extend("Model.NegativeKeyword", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        MatchType: {
            "type": "Enum.MatchType",
            "nullable": false,
            "required": true
        },
        Text: {
            "type": "Edm.String"
        }
    });

    types["Model.BulkEditSession"] = $data("$data.Entity").extend("Model.BulkEditSession", {
        Id: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "key": true
        },
        Selection: {
            "type": "Model.Selection"
        },
        Entity: {
            "type": "Edm.String"
        },
        BatchAction: {
            "type": "Model.BulkEditBatchAction"
        },
        Description: {
            "type": "Edm.String"
        },
        PreviewEntityIds: {
            "type": "Array",
            "elementType": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        TotalRowCount: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        SuccessRowCount: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        ErrorRowCount: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        Status: {
            "type": "Edm.String"
        },
        CreationTime: {
            "type": "Edm.DateTimeOffset",
            "nullable": false,
            "required": true
        },
        ExecutionStartTime: {
            "type": "Edm.DateTimeOffset"
        },
        CompletionTime: {
            "type": "Edm.DateTimeOffset"
        },
        CreatedBy: {
            "type": "Edm.String"
        },
        BulkEditResults: {
            "type": "Array",
            "elementType": "Model.BulkEditResult",
            "inverseProperty": "$$unbound"
        }
    });

    types["Model.BulkEditResult"] = $data("$data.Entity").extend("Model.BulkEditResult", {
        Id: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "key": true
        },
        Changes: {
            "type": "Array",
            "elementType": "Model.BulkEditItemChange"
        },
        EntityKey: {
            "type": "Array",
            "elementType": "Model.KeyValuePair_2OfString_String"
        },
        Errors: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        EditorialErrors: {
            "type": "Array",
            "elementType": "Model.KeyValuePair_2OfString_List_1OfEditorialError"
        },
        HasError: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        }
    });

    types["Model.Audience"] = $data("$data.Entity").extend("Model.Audience", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        Name: {
            "type": "Edm.String"
        },
        Description: {
            "type": "Edm.String"
        },
        Type: {
            "type": "Enum.AudienceType",
            "nullable": false,
            "required": true
        },
        Status: {
            "type": "Enum.AudienceStatus",
            "nullable": false,
            "required": true
        },
        MembershipDuration: {
            "type": "Edm.Int32"
        },
        Reach: {
            "type": "Edm.Int32"
        },
        IsAccountLevel: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        TagId: {
            "type": "Edm.Int64"
        },
        AssociationsCount: {
            "type": "Edm.Int32"
        },
        TrackingStatus: {
            "type": "Enum.TagTrackingStatus"
        }
    });

    types["Model.RemessagingAudience"] = types["Model.Audience"].extend("Model.RemessagingAudience", {
        Constraints: {
            "type": "Model.AudienceExpression"
        },
        IsEditable: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        }
    });

    types["Model.Tag"] = $data("$data.Entity").extend("Model.Tag", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        Name: {
            "type": "Edm.String"
        },
        Description: {
            "type": "Edm.String"
        },
        TrackingCode: {
            "type": "Edm.String"
        },
        Status: {
            "type": "Enum.TagStatus",
            "nullable": false,
            "required": true
        },
        TrackingStatus: {
            "type": "Enum.TagTrackingStatus",
            "nullable": false,
            "required": true
        },
        IsMigrated: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        GoalsCount: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        AudiencesCount: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        Goals: {
            "type": "Array",
            "elementType": "Model.Goal",
            "inverseProperty": "$$unbound"
        }
    });

    types["Model.TaskItem"] = $data("$data.Entity").extend("Model.TaskItem", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        Name: {
            "type": "Edm.String"
        },
        Type: {
            "type": "Enum.TaskItemType",
            "nullable": false,
            "required": true
        },
        State: {
            "type": "Enum.TaskItemState",
            "nullable": false,
            "required": true
        },
        Cron: {
            "type": "Edm.String"
        },
        NotificationType: {
            "type": "Enum.NotificationType",
            "nullable": false,
            "required": true
        },
        NotificationMedium: {
            "type": "Enum.NotificationMedium",
            "nullable": false,
            "required": true
        },
        ModifiedBy: {
            "type": "Model.User"
        },
        ModifiedAt: {
            "type": "Edm.DateTimeOffset"
        },
        TimeZoneId: {
            "type": "Edm.Int32"
        },
        TaskItemExecutions: {
            "type": "Array",
            "elementType": "Model.TaskItemExecution",
            "inverseProperty": "$$unbound"
        }
    });

    types["Model.Goal"] = $data("$data.Entity").extend("Model.Goal", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        Name: {
            "type": "Edm.String"
        },
        Type: {
            "type": "Enum.GoalEntityType",
            "nullable": false,
            "required": true
        },
        Status: {
            "type": "Enum.GoalStatus",
            "nullable": false,
            "required": true
        },
        TrackingStatus: {
            "type": "Enum.GoalTrackingStatus",
            "nullable": false,
            "required": true
        },
        LookbackWindowInMinutes: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        GoalPerformanceMetrics: {
            "type": "Model.GoalPerformanceMetrics"
        },
        IsAccountLevel: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        ConversionCountType: {
            "type": "Enum.ConversionCountType"
        },
        GoalValue: {
            "type": "Edm.Decimal"
        },
        CurrencyCode: {
            "type": "Edm.String"
        },
        GoalValueType: {
            "type": "Enum.GoalValueType",
            "nullable": false,
            "required": true
        },
        Tag: {
            "type": "Model.Tag",
            "inverseProperty": "$$unbound"
        }
    });

    types["Model.TaskItemExecution"] = $data("$data.Entity").extend("Model.TaskItemExecution", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        Status: {
            "type": "Enum.RunResultState",
            "nullable": false,
            "required": true
        },
        StartedAt: {
            "type": "Edm.DateTimeOffset",
            "nullable": false,
            "required": true
        },
        TimeSpan: {
            "type": "Edm.Int32"
        },
        ResultId: {
            "type": "Edm.String"
        },
        SuccessCount: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        ErrorCount: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        TotalCount: {
            "type": "Edm.Int64"
        },
        TaskItem: {
            "type": "Model.TaskItem",
            "inverseProperty": "$$unbound"
        }
    });

    types["Model.AdGroupCriterion"] = $data("$data.Entity").extend("Model.AdGroupCriterion", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        AdGroupId: {
            "type": "Edm.Int64"
        },
        Status: {
            "type": "Enum.AdGroupCriterionStatus"
        },
        Criterion: {
            "type": "Model.Criterion"
        },
        Campaign: {
            "type": "Model.Campaign",
            "inverseProperty": "$$unbound"
        },
        AdGroup: {
            "type": "Model.AdGroup",
            "inverseProperty": "$$unbound"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.AudienceAdGroupCriterion"] = types["Model.AdGroupCriterion"].extend("Model.AudienceAdGroupCriterion", {
        BidType: {
            "type": "Enum.BidType"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.AdGroupAudienceAssociation"] = $data("$data.Entity").extend("Model.AdGroupAudienceAssociation", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        AudienceCriterion: {
            "type": "Model.AudienceCriterion"
        },
        Status: {
            "type": "Enum.AdGroupCriterionStatus"
        },
        BidType: {
            "type": "Enum.BidType"
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        },
        DeliveryStatus: {
            "type": "Enum.DeliveryStatus"
        },
        DeliveryStatusDetails: {
            "type": "Array",
            "elementType": "Enum.DeliveryStatus",
            "nullable": false,
            "required": true
        },
        Campaign: {
            "type": "Model.Campaign",
            "inverseProperty": "$$unbound"
        },
        AdGroup: {
            "type": "Model.AdGroup",
            "inverseProperty": "$$unbound"
        }
    });

    types["Model.AdGroupAudienceCriterionWithBI"] = $data("$data.Entity").extend("Model.AdGroupAudienceCriterionWithBI", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        AudienceCriterion: {
            "type": "Model.AudienceCriterion"
        },
        Status: {
            "type": "Enum.AdGroupCriterionStatus"
        },
        BidType: {
            "type": "Enum.BidType"
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        },
        DeliveryStatus: {
            "type": "Enum.DeliveryStatus"
        },
        DeliveryStatusDetails: {
            "type": "Array",
            "elementType": "Enum.DeliveryStatus",
            "nullable": false,
            "required": true
        },
        Campaign: {
            "type": "Model.Campaign",
            "inverseProperty": "$$unbound"
        },
        AdGroup: {
            "type": "Model.AdGroup",
            "inverseProperty": "$$unbound"
        }
    });

    types["Model.AdGroupAudienceCriterion"] = types["Model.AdGroupCriterion"].extend("Model.AdGroupAudienceCriterion", {
        BidType: {
            "type": "Enum.BidType"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.ProductOffer"] = $data("$data.Entity").extend("Model.ProductOffer", {
        UniqueId: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        SellerName: {
            "type": "Edm.String"
        },
        Id: {
            "type": "Edm.String"
        },
        Title: {
            "type": "Edm.String"
        },
        Condition: {
            "type": "Edm.String"
        },
        Brand: {
            "type": "Edm.String"
        },
        CustomLabel0: {
            "type": "Edm.String"
        },
        CustomLabel1: {
            "type": "Edm.String"
        },
        CustomLabel2: {
            "type": "Edm.String"
        },
        CustomLabel3: {
            "type": "Edm.String"
        },
        CustomLabel4: {
            "type": "Edm.String"
        },
        ProductType1: {
            "type": "Edm.String"
        },
        ProductType2: {
            "type": "Edm.String"
        },
        ProductType3: {
            "type": "Edm.String"
        },
        ProductType4: {
            "type": "Edm.String"
        },
        ProductType5: {
            "type": "Edm.String"
        },
        CategoryL1: {
            "type": "Edm.String"
        },
        CategoryL2: {
            "type": "Edm.String"
        },
        CategoryL3: {
            "type": "Edm.String"
        },
        CategoryL4: {
            "type": "Edm.String"
        },
        CategoryL5: {
            "type": "Edm.String"
        },
        CountryOfSale: {
            "type": "Edm.String"
        },
        Language: {
            "type": "Edm.String"
        },
        Price: {
            "type": "Edm.Double"
        }
    });

    types["Model.ProductPartition"] = $data("$data.Entity").extend("Model.ProductPartition", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        ParentId: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        BidAmount: {
            "type": "Edm.Double",
            "nullable": false,
            "required": true
        },
        IsLeaf: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        IsExcluded: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        IsBidLandscapeEnabled: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        Condition: {
            "type": "Model.ProductCondition"
        },
        DestinationUrl: {
            "type": "Edm.String"
        },
        UrlParam1: {
            "type": "Edm.String"
        },
        UrlParam2: {
            "type": "Edm.String"
        },
        UrlParam3: {
            "type": "Edm.String"
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        },
        TrackingTemplate: {
            "type": "Edm.String"
        },
        UrlCustomParameters: {
            "type": "Array",
            "elementType": "Model.CustomParameter"
        },
        ProductOffers: {
            "type": "Array",
            "elementType": "Model.ProductOffer",
            "inverseProperty": "$$unbound"
        },
        ProductPropertyStatistics: {
            "type": "$data.ServiceFunction",
            "namespace": "Default",
            "returnType": "Model.IEnumerable_1OfAttributeStatistic",
            "params": [{
                "name": "operand",
                "type": "Edm.String"
            }]
        }
    });

    types["Model.Preference"] = $data("$data.Entity").extend("Model.Preference", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        Name: {
            "type": "Edm.String"
        },
        Data: {
            "type": "Edm.String"
        },
        Type: {
            "type": "Edm.String"
        },
        Version: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        }
    });

    types["Model.ProductOfferStore"] = $data("$data.Entity").extend("Model.ProductOfferStore", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        ProductOffers: {
            "type": "Array",
            "elementType": "Model.ProductOffer",
            "inverseProperty": "$$unbound"
        }
    });

    types["Model.Image"] = $data("$data.Entity").extend("Model.Image", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        ThumbnailUrl: {
            "type": "Edm.String"
        },
        Url: {
            "type": "Edm.String"
        },
        Data: {
            "type": "Edm.String"
        },
        Type: {
            "type": "Enum.AssetType",
            "nullable": false,
            "required": true
        }
    });

    types["Model.AdExtension"] = $data("$data.Entity").extend("Model.AdExtension", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        Status: {
            "type": "Enum.AdExtensionStatus"
        },
        Version: {
            "type": "Edm.Int32"
        },
        Scheduling: {
            "type": "Model.Schedule"
        },
        Delivery: {
            "type": "Enum.DeliveryStatus",
            "nullable": false,
            "required": true
        },
        ModifiedAt: {
            "type": "Edm.DateTimeOffset"
        },
        AdExtensionItemIdToEditorialReasonCollection: {
            "type": "Array",
            "elementType": "Model.KeyValuePair_2OfInt64_CampaignEditorialReasonCollection"
        },
        ItemId: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.ImageAdExtension"] = types["Model.AdExtension"].extend("Model.ImageAdExtension", {
        AltText: {
            "type": "Edm.String"
        },
        Description: {
            "type": "Edm.String"
        },
        DestinationUrl: {
            "type": "Edm.String"
        },
        ImageIds: {
            "type": "Array",
            "elementType": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        TrackingUrlTemplate: {
            "type": "Edm.String"
        },
        UrlCustomParameters: {
            "type": "Array",
            "elementType": "Model.CustomParameter"
        },
        FinalUrls: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        MobileFinalUrls: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        AppFinalUrls: {
            "type": "Array",
            "elementType": "Model.AppUrl"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.LocationAdExtension"] = types["Model.AdExtension"].extend("Model.LocationAdExtension", {
        CompanyName: {
            "type": "Edm.String"
        },
        Address: {
            "type": "Model.Address"
        },
        GeoPoint: {
            "type": "Model.GeoPoint"
        },
        PhoneNumber: {
            "type": "Edm.String"
        },
        IconMediaId: {
            "type": "Edm.Int64"
        },
        ImageMediaId: {
            "type": "Edm.Int64"
        },
        IconMediaUrl: {
            "type": "Edm.String"
        },
        ImageMediaUrl: {
            "type": "Edm.String"
        },
        GeoCodeStatus: {
            "type": "Enum.GeoCodeStatus"
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        },
        GoogleIdentifier: {
            "type": "Edm.String"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.AdExtensionAssociation"] = $data("$data.Entity").extend("Model.AdExtensionAssociation", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        Type: {
            "type": "Enum.AssociationType",
            "nullable": false,
            "required": true
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        },
        Campaign: {
            "type": "Model.Campaign",
            "inverseProperty": "$$unbound"
        },
        AdGroup: {
            "type": "Model.AdGroup",
            "inverseProperty": "$$unbound"
        },
        AdExtension: {
            "type": "Model.AdExtension",
            "inverseProperty": "$$unbound"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.Label"] = $data("$data.Entity").extend("Model.Label", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        Name: {
            "type": "Edm.String",
            "nullable": false,
            "required": true
        },
        Description: {
            "type": "Edm.String"
        },
        ColorCode: {
            "type": "Edm.Int32"
        },
        AssociationCounts: {
            "type": "Model.LabelAssociationCounts"
        }
    });

    types["Model.Budget"] = $data("$data.Entity").extend("Model.Budget", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        Name: {
            "type": "Edm.String"
        },
        Type: {
            "type": "Enum.BudgetType"
        },
        Amount: {
            "type": "Edm.Decimal"
        },
        Status: {
            "type": "Enum.BudgetStatus",
            "nullable": false,
            "required": true
        },
        AssociationCount: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        },
        Campaigns: {
            "type": "Array",
            "elementType": "Model.Campaign",
            "inverseProperty": "$$unbound"
        }
    });

    types["Model.Location"] = $data("$data.Entity").extend("Model.Location", {
        Id: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        ExpandedName: {
            "type": "Edm.String"
        },
        Type: {
            "type": "Edm.String"
        },
        GeoPoint: {
            "type": "Model.GeoPoint"
        },
        CountryCode: {
            "type": "Edm.String"
        },
        ParentLocations: {
            "type": "Array",
            "elementType": "Model.Location",
            "inverseProperty": "$$unbound"
        }
    });

    types["Model.CampaignCriterion"] = $data("$data.Entity").extend("Model.CampaignCriterion", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        Status: {
            "type": "Enum.CampaignCriterionStatus"
        },
        Criterion: {
            "type": "Model.Criterion"
        },
        Campaign: {
            "type": "Model.Campaign",
            "inverseProperty": "$$unbound"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.BiddableAdGroupCriterion"] = types["Model.AdGroupCriterion"].extend("Model.BiddableAdGroupCriterion", {
        CriterionBid: {
            "type": "Model.CriterionBid"
        },
        BiddingScheme: {
            "type": "Model.BiddingScheme"
        },
        DisplayBiddingStrategyType: {
            "type": "Enum.BiddingStrategyType",
            "nullable": false,
            "required": true
        },
        TrackingTemplate: {
            "type": "Edm.String"
        },
        UrlCustomParameters: {
            "type": "Array",
            "elementType": "Model.CustomParameter"
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        },
        BidInfo: {
            "type": "Model.OrderItemBidInfo",
            "inverseProperty": "$$unbound"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.DsaTarget"] = types["Model.BiddableAdGroupCriterion"].extend("Model.DsaTarget", {
        Argument1: {
            "type": "Edm.String"
        },
        Argument2: {
            "type": "Edm.String"
        },
        Argument3: {
            "type": "Edm.String"
        },
        Operand1: {
            "type": "Edm.String"
        },
        Operand2: {
            "type": "Edm.String"
        },
        Operand3: {
            "type": "Edm.String"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.DomainCategory"] = $data("$data.Entity").extend("Model.DomainCategory", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        CategoryText: {
            "type": "Edm.String"
        },
        Level1Name: {
            "type": "Edm.String"
        },
        Level2Name: {
            "type": "Edm.String"
        },
        Level3Name: {
            "type": "Edm.String"
        },
        CategoryLevel: {
            "type": "Edm.String"
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        },
        Campaign: {
            "type": "Model.Campaign",
            "inverseProperty": "$$unbound"
        },
        AdGroup: {
            "type": "Model.AdGroup",
            "inverseProperty": "$$unbound"
        }
    });

    types["Model.NegativeAdGroupCriterion"] = types["Model.AdGroupCriterion"].extend("Model.NegativeAdGroupCriterion", null, {
        openType: {
            "value": true
        }
    });

    types["Model.NegativeAdGroupDsaTarget"] = types["Model.NegativeAdGroupCriterion"].extend("Model.NegativeAdGroupDsaTarget", {
        Argument1: {
            "type": "Edm.String"
        },
        Argument2: {
            "type": "Edm.String"
        },
        Argument3: {
            "type": "Edm.String"
        },
        Operand1: {
            "type": "Edm.String"
        },
        Operand2: {
            "type": "Edm.String"
        },
        Operand3: {
            "type": "Edm.String"
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.NegativeCampaignCriterion"] = types["Model.CampaignCriterion"].extend("Model.NegativeCampaignCriterion", null, {
        openType: {
            "value": true
        }
    });

    types["Model.NegativeCampaignDsaTarget"] = types["Model.NegativeCampaignCriterion"].extend("Model.NegativeCampaignDsaTarget", {
        Argument1: {
            "type": "Edm.String"
        },
        Argument2: {
            "type": "Edm.String"
        },
        Argument3: {
            "type": "Edm.String"
        },
        Operand1: {
            "type": "Edm.String"
        },
        Operand2: {
            "type": "Edm.String"
        },
        Operand3: {
            "type": "Edm.String"
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.DsaSearchTerm"] = $data("$data.Entity").extend("Model.DsaSearchTerm", {
        Text: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "key": true
        },
        CategoryList: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        CategoryListStr: {
            "type": "Edm.String"
        },
        HeadLine: {
            "type": "Edm.String"
        },
        LandingPageTitle: {
            "type": "Edm.String"
        },
        FinalUrl: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "key": true
        },
        DsaTargetId: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        },
        Campaign: {
            "type": "Model.Campaign",
            "inverseProperty": "$$unbound"
        },
        AdGroup: {
            "type": "Model.AdGroup",
            "inverseProperty": "$$unbound"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.Category"] = $data("$data.Entity").extend("Model.Category", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        CategoryText: {
            "type": "Edm.String"
        },
        Level1Name: {
            "type": "Edm.String"
        },
        Level2Name: {
            "type": "Edm.String"
        },
        Level3Name: {
            "type": "Edm.String"
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        },
        Campaign: {
            "type": "Model.Campaign",
            "inverseProperty": "$$unbound"
        },
        AdGroup: {
            "type": "Model.AdGroup",
            "inverseProperty": "$$unbound"
        }
    });

    types["Model.NegativeKeywordConflict"] = $data("$data.Entity").extend("Model.NegativeKeywordConflict", {
        RowId: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        CampaignName: {
            "type": "Edm.String"
        },
        AdGroupName: {
            "type": "Edm.String"
        },
        KeywordText: {
            "type": "Edm.String"
        },
        NegativeKeywordText: {
            "type": "Edm.String"
        },
        ConflictLevel: {
            "type": "Edm.String"
        }
    });

    types["Model.SearchTerm"] = $data("$data.Entity").extend("Model.SearchTerm", {
        Text: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "key": true
        },
        Added: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        DeliveredMatchType: {
            "type": "Enum.MatchType",
            "nullable": false,
            "required": true
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        },
        Keyword: {
            "type": "Model.Keyword",
            "inverseProperty": "$$unbound"
        },
        AdGroup: {
            "type": "Model.AdGroup",
            "inverseProperty": "$$unbound"
        },
        Campaign: {
            "type": "Model.Campaign",
            "inverseProperty": "$$unbound"
        }
    });

    types["Model.DimensionRow"] = $data("$data.Entity").extend("Model.DimensionRow", {
        RowId: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        RowType: {
            "type": "Enum.DimensionRowType",
            "nullable": false,
            "required": true
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.ResponsiveAd"] = types["Model.Ad"].extend("Model.ResponsiveAd", {
        LandscapeImageMediaId: {
            "type": "Edm.Int64"
        },
        SquareImageMediaId: {
            "type": "Edm.Int64"
        },
        LandscapeLogoMediaId: {
            "type": "Edm.Int64"
        },
        SquareLogoMediaId: {
            "type": "Edm.Int64"
        },
        Headline: {
            "type": "Edm.String"
        },
        LongHeadline: {
            "type": "Edm.String"
        },
        BusinessName: {
            "type": "Edm.String"
        },
        CallToAction: {
            "type": "Enum.CallToAction"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.ExpandedTextAd"] = types["Model.Ad"].extend("Model.ExpandedTextAd", null, {
        openType: {
            "value": true
        }
    });

    types["Model.DynamicSearchAd"] = types["Model.Ad"].extend("Model.DynamicSearchAd", null, {
        openType: {
            "value": true
        }
    });

    types["Model.MobileAd"] = types["Model.Ad"].extend("Model.MobileAd", null, {
        openType: {
            "value": true
        }
    });

    types["Model.AppInstallAd"] = types["Model.Ad"].extend("Model.AppInstallAd", {
        AppPlatform: {
            "type": "Edm.String"
        },
        AppStoreId: {
            "type": "Edm.String"
        },
        MediaUrl: {
            "type": "Edm.String"
        },
        IsAppInstallTrackingEnabled: {
            "type": "Edm.Boolean"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.ProductAd"] = types["Model.Ad"].extend("Model.ProductAd", {
        PromotionalText: {
            "type": "Edm.String"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.TextAd"] = types["Model.Ad"].extend("Model.TextAd", null, {
        openType: {
            "value": true
        }
    });

    types["Model.PriceAdExtension"] = types["Model.AdExtension"].extend("Model.PriceAdExtension", {
        PriceExtensionType: {
            "type": "Enum.PriceExtensionType",
            "nullable": false,
            "required": true
        },
        TrackingUrlTemplate: {
            "type": "Edm.String"
        },
        UrlCustomParameters: {
            "type": "Array",
            "elementType": "Model.CustomParameter"
        },
        Language: {
            "type": "Edm.String"
        },
        TableRows: {
            "type": "Array",
            "elementType": "Model.PriceTableRow"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.StructuredSnippetAdExtension"] = types["Model.AdExtension"].extend("Model.StructuredSnippetAdExtension", {
        Category: {
            "type": "Edm.String"
        },
        Texts: {
            "type": "Array",
            "elementType": "Edm.String"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.ActionLinkAdExtension"] = types["Model.AdExtension"].extend("Model.ActionLinkAdExtension", {
        ActionText: {
            "type": "Edm.String"
        },
        ActionLinkUrl: {
            "type": "Edm.String"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.AppAdExtension"] = types["Model.AdExtension"].extend("Model.AppAdExtension", {
        AppPlatform: {
            "type": "Edm.String"
        },
        AppStoreId: {
            "type": "Edm.String"
        },
        DisplayText: {
            "type": "Edm.String"
        },
        DestinationUrl: {
            "type": "Edm.String"
        },
        IsAppInstallTrackingEnabled: {
            "type": "Edm.Boolean"
        },
        DevicePreference: {
            "type": "Enum.DevicePreference"
        },
        AppVersion: {
            "type": "Edm.String"
        },
        Description: {
            "type": "Edm.String"
        },
        MediaUrl: {
            "type": "Edm.String"
        },
        OriginalMediaHeight: {
            "type": "Edm.Int32"
        },
        OriginalMediaWidth: {
            "type": "Edm.Int32"
        },
        AltText: {
            "type": "Edm.String"
        },
        UserRating: {
            "type": "Edm.String"
        },
        MaturityRating: {
            "type": "Edm.String"
        },
        MediaLastModifiedUtc: {
            "type": "Edm.DateTimeOffset"
        },
        DeviceType: {
            "type": "Enum.DeviceType"
        },
        MetadataSynchronizationStatus: {
            "type": "Edm.String"
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.CallAdExtension"] = types["Model.AdExtension"].extend("Model.CallAdExtension", {
        PhoneNumber: {
            "type": "Edm.String"
        },
        CountryCode: {
            "type": "Edm.String"
        },
        IsCallOnly: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        IsCallTrackingEnabled: {
            "type": "Edm.Boolean"
        },
        RequireTollFreeTrackingNumber: {
            "type": "Edm.Boolean"
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.CalloutAdExtension"] = types["Model.AdExtension"].extend("Model.CalloutAdExtension", {
        Text: {
            "type": "Edm.String"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.ReviewAdExtension"] = types["Model.AdExtension"].extend("Model.ReviewAdExtension", {
        IsExact: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        Text: {
            "type": "Edm.String"
        },
        Source: {
            "type": "Edm.String"
        },
        Url: {
            "type": "Edm.String"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.SiteLinksAdExtension"] = types["Model.AdExtension"].extend("Model.SiteLinksAdExtension", {
        SiteLinks: {
            "type": "Array",
            "elementType": "Model.SiteLink"
        },
        PerformanceMetrics: {
            "type": "Model.PerformanceMetrics"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.Sitelink2AdExtension"] = types["Model.AdExtension"].extend("Model.Sitelink2AdExtension", {
        DisplayText: {
            "type": "Edm.String"
        },
        DestinationUrl: {
            "type": "Edm.String"
        },
        DevicePreference: {
            "type": "Enum.DevicePreference"
        },
        Description1: {
            "type": "Edm.String"
        },
        Description2: {
            "type": "Edm.String"
        },
        FinalAppUrls: {
            "type": "Array",
            "elementType": "Model.AppUrl"
        },
        FinalMobileUrls: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        FinalUrls: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        TrackingUrlTemplate: {
            "type": "Edm.String"
        },
        UrlCustomParameters: {
            "type": "Array",
            "elementType": "Model.CustomParameter"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.OrderItemBidInfo"] = $data("$data.Entity").extend("Model.OrderItemBidInfo", {
        Id: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true,
            "key": true
        },
        MatchType: {
            "type": "Enum.MatchType",
            "nullable": false,
            "required": true
        },
        EffectiveBid: {
            "type": "Edm.Double",
            "nullable": false,
            "required": true
        },
        OrderItemBid: {
            "type": "Edm.Double"
        },
        AdGroupBid: {
            "type": "Edm.Double",
            "nullable": false,
            "required": true
        },
        AdGroupPricingModel: {
            "type": "Enum.PricingModel",
            "nullable": false,
            "required": true
        },
        EditorialStatus: {
            "type": "Enum.EditorialStatus",
            "nullable": false,
            "required": true
        },
        LifeCycleStatus: {
            "type": "Enum.KeywordStatus",
            "nullable": false,
            "required": true
        },
        Campaign: {
            "type": "Model.Campaign",
            "inverseProperty": "$$unbound"
        },
        AdGroup: {
            "type": "Model.AdGroup",
            "inverseProperty": "$$unbound"
        }
    });

    types["Model.BiddableCampaignCriterion"] = types["Model.CampaignCriterion"].extend("Model.BiddableCampaignCriterion", {
        CriterionBid: {
            "type": "Model.CriterionBid"
        }
    }, {
        openType: {
            "value": true
        }
    });

    types["Model.CustomAudience"] = types["Model.Audience"].extend("Model.CustomAudience", {
        SegmentId: {
            "type": "Edm.Int32"
        },
        PartnerName: {
            "type": "Enum.PartnerName"
        }
    });

    types["Model.InMarketAudience"] = types["Model.Audience"].extend("Model.InMarketAudience", null);

    types["Model.InStoreTransactionGoal"] = types["Model.Goal"].extend("Model.InStoreTransactionGoal", null);

    types["Model.MultiStageGoal"] = types["Model.Goal"].extend("Model.MultiStageGoal", {
        Stages: {
            "type": "Array",
            "elementType": "Model.GoalStage"
        }
    });

    types["Model.ApplicationInstallGoal"] = types["Model.Goal"].extend("Model.ApplicationInstallGoal", {
        ApplicationPlatform: {
            "type": "Edm.String"
        },
        ApplicationStoreId: {
            "type": "Edm.String"
        }
    });

    types["Model.DestinationGoal"] = types["Model.Goal"].extend("Model.DestinationGoal", {
        UrlString: {
            "type": "Edm.String"
        },
        Operator: {
            "type": "Enum.ExpressionOperator",
            "nullable": false,
            "required": true
        }
    });

    types["Model.DurationGoal"] = types["Model.Goal"].extend("Model.DurationGoal", {
        Operator: {
            "type": "Enum.ValueOperator",
            "nullable": false,
            "required": true
        },
        Duration: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        }
    });

    types["Model.EventGoal"] = types["Model.Goal"].extend("Model.EventGoal", {
        Category: {
            "type": "Edm.String"
        },
        CategoryOperator: {
            "type": "Enum.ExpressionOperator",
            "nullable": false,
            "required": true
        },
        Action: {
            "type": "Edm.String"
        },
        ActionOperator: {
            "type": "Enum.ExpressionOperator",
            "nullable": false,
            "required": true
        },
        Label: {
            "type": "Edm.String"
        },
        LabelOperator: {
            "type": "Enum.ExpressionOperator",
            "nullable": false,
            "required": true
        },
        Value: {
            "type": "Edm.Decimal"
        },
        ValueOperator: {
            "type": "Enum.ValueOperator",
            "nullable": false,
            "required": true
        },
        FlexTagScript: {
            "type": "Edm.String"
        },
        CampaignAnalyticsGoalName: {
            "type": "Edm.String"
        }
    });

    types["Model.OfflineConversionGoal"] = types["Model.Goal"].extend("Model.OfflineConversionGoal", null);

    types["Model.PageViewsPerVisitGoal"] = types["Model.Goal"].extend("Model.PageViewsPerVisitGoal", {
        Operator: {
            "type": "Enum.ValueOperator",
            "nullable": false,
            "required": true
        },
        PageViews: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        }
    });

    types["Model.CloudImportResult"] = types["Model.TaskItemExecution"].extend("Model.CloudImportResult", {
        CloudImportTaskCheckPoint: {
            "type": "Model.CloudImportTaskResult"
        },
        CloudImportTaskStatus: {
            "type": "Enum.CloudImportStatus",
            "nullable": false,
            "required": true
        }
    });

    types["Model.OfflineConversionUploadTaskItemExecution"] = types["Model.TaskItemExecution"].extend("Model.OfflineConversionUploadTaskItemExecution", {
        OfflineConversionFiles: {
            "type": "Array",
            "elementType": "Model.OfflineConversionFile"
        },
        ErrorsByAccountId: {
            "type": "Array",
            "elementType": "Model.KeyValuePair_2OfInt64_IEnumerable_1OfAdsApiError"
        },
        RowsProcessed: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        TotalRows: {
            "type": "Edm.Int64"
        },
        SessionId: {
            "type": "Edm.String"
        },
        UserName: {
            "type": "Edm.String"
        },
        Errors: {
            "type": "Array",
            "elementType": "Model.AdsApiError"
        }
    });

    types["Model.ImportResult"] = types["Model.TaskItemExecution"].extend("Model.ImportResult", {
        UploadFileIdentifier: {
            "type": "Edm.String"
        },
        UploadFileName: {
            "type": "Edm.String"
        },
        GoogleCustomerId: {
            "type": "Edm.Int64"
        },
        GoogleAccountName: {
            "type": "Edm.String"
        },
        ErrorFileIdentifier: {
            "type": "Edm.String"
        },
        ImportStatus: {
            "type": "Enum.ImportStatus",
            "nullable": false,
            "required": true
        },
        ImportId: {
            "type": "Edm.Int64"
        },
        Type: {
            "type": "Enum.ImportType"
        },
        ImportAction: {
            "type": "Enum.ImportAction"
        },
        IsAutomated: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        EntityStatistics: {
            "type": "Model.Dictionary_2OfString_ImportStatistics"
        },
        Errors: {
            "type": "Array",
            "elementType": "Model.AdsApiError"
        },
        StartDateTime: {
            "type": "Edm.DateTimeOffset",
            "nullable": false,
            "required": true
        },
        ErrorCode: {
            "type": "Edm.Int32"
        },
        ImportName: {
            "type": "Edm.String"
        },
        TaskId: {
            "type": "Edm.Int64"
        },
        ErrorDetail: {
            "type": "Edm.String"
        }
    });

    types["Model.BulkUploadTaskItemExecution"] = types["Model.TaskItemExecution"].extend("Model.BulkUploadTaskItemExecution", {
        EntityStatsPerType: {
            "type": "Array",
            "elementType": "Model.KeyValuePair_2OfString_BulkUploadEntityStatistics"
        },
        BulkFiles: {
            "type": "Array",
            "elementType": "Model.BulkFile"
        },
        ErrorsByAccountId: {
            "type": "Array",
            "elementType": "Model.KeyValuePair_2OfInt64_IEnumerable_1OfAdsApiError"
        },
        RowsProcessed: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        TotalRows: {
            "type": "Edm.Int64"
        },
        SessionId: {
            "type": "Edm.String"
        },
        UserName: {
            "type": "Edm.String"
        },
        Errors: {
            "type": "Array",
            "elementType": "Model.AdsApiError"
        }
    });

    types["Model.MultiAccountDownloadResult"] = types["Model.TaskItemExecution"].extend("Model.MultiAccountDownloadResult", {
        ResultFile: {
            "type": "Edm.String"
        },
        FileSizeInBytes: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        EntityCounts: {
            "type": "Array",
            "elementType": "Model.EntityCount"
        },
        Errors: {
            "type": "Array",
            "elementType": "Model.KeyValuePair_2OfString_IEnumerable_1OfAdsApiError"
        },
        AccountIdsProcessed: {
            "type": "Array",
            "elementType": "Edm.Int64",
            "nullable": false,
            "required": true
        }
    });

    types["Model.ScriptTaskItemExecution"] = types["Model.TaskItemExecution"].extend("Model.ScriptTaskItemExecution", {
        JobExecutionId: {
            "type": "Edm.String"
        },
        LogsBlobName: {
            "type": "Edm.String"
        },
        ChangesBlobName: {
            "type": "Edm.String"
        },
        Errors: {
            "type": "Array",
            "elementType": "Model.AdsApiError"
        },
        Error: {
            "type": "Edm.String"
        },
        ErrorsByAccountNumber: {
            "type": "Array",
            "elementType": "Model.KeyValuePair_2OfString_IEnumerable_1OfAdsApiError"
        },
        ScriptItemChanges: {
            "type": "Array",
            "elementType": "Model.ScriptItemChange",
            "inverseProperty": "$$unbound"
        }
    });

    types["Model.ScriptItemChange"] = $data("$data.Entity").extend("Model.ScriptItemChange", {
        Id: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "key": true
        },
        AccountId: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        CustomerId: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        AccountNumber: {
            "type": "Edm.String"
        },
        EntityKey: {
            "type": "Array",
            "elementType": "Model.KeyValuePair_2OfString_String"
        },
        Entity: {
            "type": "Edm.String"
        },
        Property: {
            "type": "Edm.String"
        },
        ChangeType: {
            "type": "Edm.String"
        },
        NewValue: {
            "type": "Edm.String"
        },
        OriginalValue: {
            "type": "Edm.String"
        },
        IsSuccessful: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        Errors: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        EditorialErrors: {
            "type": "Array",
            "elementType": "Model.KeyValuePair_2OfString_List_1OfEditorialError"
        }
    });

    types["Model.CloudImportTaskItem"] = types["Model.TaskItem"].extend("Model.CloudImportTaskItem", {
        AccountId: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        AdWordsImportContext: {
            "type": "Model.AdWordsImportContext"
        },
        EntityTypeFilter: {
            "type": "Array",
            "elementType": "Enum.EntityType",
            "nullable": false,
            "required": true
        },
        CloudImportVersion: {
            "type": "Enum.CloudImportVersion",
            "nullable": false,
            "required": true
        },
        DownloadFileFormat: {
            "type": "Enum.FileFormatEnum",
            "nullable": false,
            "required": true
        }
    });

    types["Model.GoogleMyBusinessTaskItem"] = types["Model.TaskItem"].extend("Model.GoogleMyBusinessTaskItem", {
        AccountId: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        GoogleAccountName: {
            "type": "Edm.String"
        },
        GoogleMyBusinessSessionId: {
            "type": "Edm.String"
        },
        GoogleMyBusinessAccountName: {
            "type": "Edm.String"
        },
        GoogleMyBusinessDisplayName: {
            "type": "Edm.String"
        },
        Filter: {
            "type": "Model.GoogleMyBusinessFilter"
        }
    });

    types["Model.OfflineConversionUploadTaskItem"] = types["Model.TaskItem"].extend("Model.OfflineConversionUploadTaskItem", {
        FileIdentifier: {
            "type": "Edm.String"
        },
        SessionId: {
            "type": "Edm.String"
        }
    });

    types["Model.MultiAccountBulkUploadTaskItem"] = types["Model.TaskItem"].extend("Model.MultiAccountBulkUploadTaskItem", {
        FileIdentifier: {
            "type": "Edm.String"
        },
        SessionId: {
            "type": "Edm.String"
        }
    });

    types["Model.MultiAccountDownloadTaskItem"] = types["Model.TaskItem"].extend("Model.MultiAccountDownloadTaskItem", {
        DownloadEntityTypes: {
            "type": "Enum.FilterEntityType",
            "nullable": false,
            "required": true
        },
        DownloadEntityTypesV2: {
            "type": "Array",
            "elementType": "Enum.FilterEntityTypeV2",
            "nullable": false,
            "required": true
        },
        DateRange: {
            "type": "Model.DateRange"
        },
        AccountSearchCriteria: {
            "type": "Edm.String"
        },
        ExcludePerformanceData: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        FormatVersion: {
            "type": "Edm.String"
        },
        AccountNumbers: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        CustomerIds: {
            "type": "Array",
            "elementType": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        Filters: {
            "type": "Array",
            "elementType": "Model.EntityFilter"
        }
    });

    types["Model.ReportRule"] = types["Model.TaskItem"].extend("Model.ReportRule", {
        Entity: {
            "type": "Edm.String"
        },
        Selection: {
            "type": "Model.Selection"
        },
        Headers: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        Format: {
            "type": "Enum.DownloadFormat",
            "nullable": false,
            "required": true
        },
        SegmentationTypes: {
            "type": "Array",
            "elementType": "Enum.SegmentationType",
            "nullable": false,
            "required": true
        },
        SaveReport: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        IncludeEditableColumns: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        NotificationDeliveryOption: {
            "type": "Model.NotificationDeliveryOption"
        }
    });

    types["Model.ImportTaskItem"] = types["Model.TaskItem"].extend("Model.ImportTaskItem", {
        AccountId: {
            "type": "Edm.Int64",
            "nullable": false,
            "required": true
        },
        CampaignTimeZone: {
            "type": "Edm.String"
        },
        ImportUserPreferences: {
            "type": "Model.ImportUserPreferences"
        },
        CultureName: {
            "type": "Edm.String"
        },
        LCID: {
            "type": "Edm.Int32"
        },
        AdGroupMedium: {
            "type": "Enum.Medium",
            "nullable": false,
            "required": true
        },
        Language: {
            "type": "Edm.String"
        },
        CustomerMarket: {
            "type": "Edm.String"
        },
        ImportType: {
            "type": "Edm.String"
        },
        ImportAction: {
            "type": "Edm.String"
        },
        AdWordsImportContext: {
            "type": "Model.AdWordsImportContext"
        },
        UserName: {
            "type": "Edm.String"
        },
        AccountName: {
            "type": "Edm.String"
        },
        AccountNumber: {
            "type": "Edm.String"
        },
        ImportColToAdCenterMapField: {
            "type": "Array",
            "elementType": "Edm.String"
        },
        ImportId: {
            "type": "Edm.Int64"
        },
        FileImportContext: {
            "type": "Model.FileImportContext"
        }
    });

    types["Model.ScriptTaskItem"] = types["Model.TaskItem"].extend("Model.ScriptTaskItem", {
        BlobName: {
            "type": "Edm.String"
        },
        Save: {
            "type": "Edm.Boolean",
            "nullable": false,
            "required": true
        },
        OneDriveAuthSessionId: {
            "type": "Edm.String"
        },
        Parameters: {
            "type": "Edm.String"
        },
        CustomerIds: {
            "type": "Array",
            "elementType": "Edm.Int64",
            "nullable": false,
            "required": true
        }
    });

    types["Model.AdvertiserRule"] = types["Model.TaskItem"].extend("Model.AdvertiserRule", {
        Entity: {
            "type": "Edm.String"
        },
        Selection: {
            "type": "Model.Selection"
        },
        BatchAction: {
            "type": "Model.BulkEditBatchAction"
        },
        Description: {
            "type": "Edm.String"
        },
        DateRangePreset: {
            "type": "Enum.DateRangePreset",
            "nullable": false,
            "required": true
        }
    });

    types["Model.Tip"] = $data("$data.Entity").extend("Model.Tip", {
        TipId: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true,
            "key": true
        },
        Status: {
            "type": "Enum.TipStatus",
            "nullable": false,
            "required": true
        },
        DismissalExpirationDateTime: {
            "type": "Edm.DateTimeOffset"
        }
    });

    types["Enum.Granularity"] = $data.createEnum("Enum.Granularity", [{
            "name": "Hour",
            "index": 0,
            "value": 0
        },
        {
            "name": "Day",
            "index": 1,
            "value": 1
        },
        {
            "name": "Week",
            "index": 2,
            "value": 2
        },
        {
            "name": "Month",
            "index": 3,
            "value": 3
        },
        {
            "name": "Quarter",
            "index": 4,
            "value": 4
        },
        {
            "name": "Year",
            "index": 5,
            "value": 5
        }
    ]);

    types["Enum.BulkFileType"] = $data.createEnum("Enum.BulkFileType", [{
            "name": "None",
            "index": 0,
            "value": 0
        },
        {
            "name": "InputFile",
            "index": 1,
            "value": 1
        },
        {
            "name": "ErrorOnlyResultFile",
            "index": 2,
            "value": 2
        },
        {
            "name": "AllRecordsResultFile",
            "index": 3,
            "value": 3
        },
        {
            "name": "MultiAccountDownloadResultFile",
            "index": 4,
            "value": 4
        },
        {
            "name": "ImportFile",
            "index": 5,
            "value": 6
        },
        {
            "name": "ImportErrorFile",
            "index": 6,
            "value": 7
        },
        {
            "name": "Scripts",
            "index": 7,
            "value": 8
        },
        {
            "name": "OfflineConversionInputFile",
            "index": 8,
            "value": 9
        },
        {
            "name": "OfflineConversionAllResultFile",
            "index": 9,
            "value": 10
        },
        {
            "name": "OfflineConversionErrorResultFile",
            "index": 10,
            "value": 11
        },
        {
            "name": "ScriptsLog",
            "index": 11,
            "value": 12
        },
        {
            "name": "ScriptsChanges",
            "index": 12,
            "value": 13
        }
    ]);

    types["Enum.DimensionReportType"] = $data.createEnum("Enum.DimensionReportType", [{
            "name": "TimeHourOfDay",
            "index": 0,
            "value": 0
        },
        {
            "name": "TimeDate",
            "index": 1,
            "value": 1
        },
        {
            "name": "TimeDayOfWeek",
            "index": 2,
            "value": 2
        },
        {
            "name": "TimeWeek",
            "index": 3,
            "value": 3
        },
        {
            "name": "TimeMonth",
            "index": 4,
            "value": 4
        },
        {
            "name": "TimeQuarter",
            "index": 5,
            "value": 5
        },
        {
            "name": "TimeYear",
            "index": 6,
            "value": 6
        },
        {
            "name": "ShoppingCategory",
            "index": 7,
            "value": 7
        },
        {
            "name": "ShoppingProductType",
            "index": 8,
            "value": 8
        },
        {
            "name": "ShoppingBrand",
            "index": 9,
            "value": 9
        },
        {
            "name": "ShoppingItemId",
            "index": 10,
            "value": 10
        },
        {
            "name": "ShoppingStoreId",
            "index": 11,
            "value": 11
        },
        {
            "name": "SearchTerms",
            "index": 12,
            "value": 12
        },
        {
            "name": "UserLocations",
            "index": 13,
            "value": 13
        },
        {
            "name": "PublisherWebsite",
            "index": 14,
            "value": 14
        },
        {
            "name": "DestinationUrl",
            "index": 15,
            "value": 15
        },
        {
            "name": "CallForwardingDetail",
            "index": 16,
            "value": 16
        },
        {
            "name": "TopMovers",
            "index": 17,
            "value": 17
        },
        {
            "name": "Label",
            "index": 18,
            "value": 18
        },
        {
            "name": "AgeAndGender",
            "index": 19,
            "value": 19
        },
        {
            "name": "Geographic",
            "index": 20,
            "value": 20
        },
        {
            "name": "VerticalPerformance",
            "index": 21,
            "value": 21
        },
        {
            "name": "CampaignLabelReport",
            "index": 22,
            "value": 22
        },
        {
            "name": "AdGroupLabelReport",
            "index": 23,
            "value": 23
        },
        {
            "name": "AdLabelReport",
            "index": 24,
            "value": 24
        },
        {
            "name": "KeywordLabelReport",
            "index": 25,
            "value": 25
        }
    ]);

    types["Enum.AccountStatus"] = $data.createEnum("Enum.AccountStatus", [{
            "name": "Blocked",
            "index": 0,
            "value": 28
        },
        {
            "name": "Pending",
            "index": 1,
            "value": 29
        },
        {
            "name": "Draft",
            "index": 2,
            "value": 30
        },
        {
            "name": "Active",
            "index": 3,
            "value": 31
        },
        {
            "name": "Inactive",
            "index": 4,
            "value": 32
        },
        {
            "name": "Deleted",
            "index": 5,
            "value": 33
        },
        {
            "name": "Pause",
            "index": 6,
            "value": 42
        },
        {
            "name": "Suspended",
            "index": 7,
            "value": 43
        },
        {
            "name": "BudgetPaused",
            "index": 8,
            "value": 234
        }
    ]);

    types["Enum.AccountInactiveCauseCode"] = $data.createEnum("Enum.AccountInactiveCauseCode", [{
            "name": "NotSet",
            "index": 0,
            "value": 0
        },
        {
            "name": "PausedDueToSystemIssue",
            "index": 1,
            "value": 1
        },
        {
            "name": "PausedZeroBalance",
            "index": 2,
            "value": 2
        },
        {
            "name": "PausedNoValidIO",
            "index": 3,
            "value": 3
        },
        {
            "name": "Processing",
            "index": 4,
            "value": 4
        },
        {
            "name": "PendingPaymentMethod",
            "index": 5,
            "value": 5
        },
        {
            "name": "PendingNewCustomer",
            "index": 6,
            "value": 6
        },
        {
            "name": "Inactive",
            "index": 7,
            "value": 7
        },
        {
            "name": "Hold",
            "index": 8,
            "value": 8
        },
        {
            "name": "AccountLifecycleStatusSuspended",
            "index": 9,
            "value": 9
        },
        {
            "name": "AccountLifecycleStatusDraft",
            "index": 10,
            "value": 10
        },
        {
            "name": "AccountLifecycleStatusDeleted",
            "index": 11,
            "value": 11
        },
        {
            "name": "AccountLifecycleStatusUserPause",
            "index": 12,
            "value": 12
        },
        {
            "name": "AccountFinancialStatusProposed",
            "index": 13,
            "value": 13
        },
        {
            "name": "AccountFinancialStatusWriteOff",
            "index": 14,
            "value": 14
        },
        {
            "name": "AccountFinancialStatusTaxOnHold",
            "index": 15,
            "value": 15
        },
        {
            "name": "AccountFinancialStatusUserHold",
            "index": 16,
            "value": 16
        },
        {
            "name": "AccountFinancialStatusPendingCreditCheck",
            "index": 17,
            "value": 17
        },
        {
            "name": "AccountFinancialStatusSoldToOnly",
            "index": 18,
            "value": 18
        },
        {
            "name": "AdvertiserCustomerLifecycleStatusDraft",
            "index": 19,
            "value": 19
        },
        {
            "name": "AdvertiserCustomerLifecycleStatusInactive",
            "index": 20,
            "value": 20
        },
        {
            "name": "AdvertiserCustomerLifecycleStatusDeleted",
            "index": 21,
            "value": 21
        },
        {
            "name": "AdvertiserCustomerFraudStatusFraud",
            "index": 22,
            "value": 22
        },
        {
            "name": "BillToCustomerLifecycleStatusDraft",
            "index": 23,
            "value": 23
        },
        {
            "name": "BillToCustomerLifecycleStatusInactive",
            "index": 24,
            "value": 24
        },
        {
            "name": "BillToCustomerLifecycleStatusDeleted",
            "index": 25,
            "value": 25
        },
        {
            "name": "BillToCustomerFinancialStatusProposalsOnly",
            "index": 26,
            "value": 26
        },
        {
            "name": "BillToCustomerFinancialStatusSoldToOnly",
            "index": 27,
            "value": 27
        },
        {
            "name": "BillToCustomerFraudStatusFraud",
            "index": 28,
            "value": 28
        },
        {
            "name": "AccountLifecycleStatusNotSet",
            "index": 29,
            "value": 29
        },
        {
            "name": "AccountFinancialStatusNotSet",
            "index": 30,
            "value": 30
        },
        {
            "name": "AdvertiserCustomerLifecycleStatusNotSet",
            "index": 31,
            "value": 31
        },
        {
            "name": "AdvertiserCustomerFraudStatusNotSet",
            "index": 32,
            "value": 32
        },
        {
            "name": "BillToCustomerLifecycleStatusNotSet",
            "index": 33,
            "value": 33
        },
        {
            "name": "BillToCustomerFinancialStatusNotSet",
            "index": 34,
            "value": 34
        },
        {
            "name": "BillToCustomerFraudStatusNotSet",
            "index": 35,
            "value": 35
        },
        {
            "name": "UserDeleted",
            "index": 36,
            "value": 36
        }
    ]);

    types["Enum.AccountInactiveReasonCode"] = $data.createEnum("Enum.AccountInactiveReasonCode", [{
            "name": "NotSet",
            "index": 0,
            "value": 0
        },
        {
            "name": "PausedDueToSystemIssue",
            "index": 1,
            "value": 1
        },
        {
            "name": "PausedZeroBalance",
            "index": 2,
            "value": 2
        },
        {
            "name": "PausedNoValidIO",
            "index": 3,
            "value": 3
        },
        {
            "name": "Processing",
            "index": 4,
            "value": 4
        },
        {
            "name": "PendingPaymentMethod",
            "index": 5,
            "value": 5
        },
        {
            "name": "PendingNewCustomer",
            "index": 6,
            "value": 6
        },
        {
            "name": "Inactive",
            "index": 7,
            "value": 7
        },
        {
            "name": "Hold",
            "index": 8,
            "value": 8
        },
        {
            "name": "Deleted",
            "index": 9,
            "value": 9
        }
    ]);

    types["Enum.SegmentationType"] = $data.createEnum("Enum.SegmentationType", [{
            "name": "Day",
            "index": 0,
            "value": 0
        },
        {
            "name": "Week",
            "index": 1,
            "value": 1
        },
        {
            "name": "Month",
            "index": 2,
            "value": 2
        },
        {
            "name": "Quarter",
            "index": 3,
            "value": 3
        },
        {
            "name": "Year",
            "index": 4,
            "value": 4
        },
        {
            "name": "DayOfTheWeek",
            "index": 5,
            "value": 5
        },
        {
            "name": "HourOfTheDay",
            "index": 6,
            "value": 6
        },
        {
            "name": "DeviceType",
            "index": 7,
            "value": 7
        },
        {
            "name": "Network",
            "index": 8,
            "value": 8
        },
        {
            "name": "TopVsOther",
            "index": 9,
            "value": 9
        },
        {
            "name": "DeliveredMatchType",
            "index": 10,
            "value": 10
        },
        {
            "name": "BiddedMatchType",
            "index": 11,
            "value": 11
        },
        {
            "name": "Medium",
            "index": 12,
            "value": 12
        },
        {
            "name": "Currency",
            "index": 13,
            "value": 13
        },
        {
            "name": "DeviceOS",
            "index": 14,
            "value": 14
        },
        {
            "name": "AdPosition",
            "index": 15,
            "value": 15
        },
        {
            "name": "DomainType",
            "index": 16,
            "value": 16
        },
        {
            "name": "GoalType",
            "index": 17,
            "value": 17
        },
        {
            "name": "GoalName",
            "index": 18,
            "value": 18
        }
    ]);

    types["Enum.SegmentationGoalType"] = $data.createEnum("Enum.SegmentationGoalType", [{
            "name": "DestinationURL",
            "index": 0,
            "value": 0
        },
        {
            "name": "Duration",
            "index": 1,
            "value": 1
        },
        {
            "name": "PageVisit",
            "index": 2,
            "value": 2
        },
        {
            "name": "Custom",
            "index": 3,
            "value": 3
        },
        {
            "name": "TagSpecific",
            "index": 4,
            "value": 4
        },
        {
            "name": "AppInstall",
            "index": 5,
            "value": 5
        },
        {
            "name": "MultiStage",
            "index": 6,
            "value": 6
        },
        {
            "name": "OfflineConversion",
            "index": 7,
            "value": 7
        },
        {
            "name": "InStoreTransaction",
            "index": 8,
            "value": 8
        },
        {
            "name": "Unknown",
            "index": 9,
            "value": 255
        }
    ]);

    types["Enum.SegmentationMatchType"] = $data.createEnum("Enum.SegmentationMatchType", [{
            "name": "Unknown",
            "index": 0,
            "value": 0
        },
        {
            "name": "Exact",
            "index": 1,
            "value": 1
        },
        {
            "name": "Phrase",
            "index": 2,
            "value": 2
        },
        {
            "name": "Broad",
            "index": 3,
            "value": 3
        },
        {
            "name": "RegularExpression",
            "index": 4,
            "value": 4
        },
        {
            "name": "Content",
            "index": 5,
            "value": 5
        }
    ]);

    types["Enum.DayOfWeek"] = $data.createEnum("Enum.DayOfWeek", [{
            "name": "Sunday",
            "index": 0,
            "value": 0
        },
        {
            "name": "Monday",
            "index": 1,
            "value": 1
        },
        {
            "name": "Tuesday",
            "index": 2,
            "value": 2
        },
        {
            "name": "Wednesday",
            "index": 3,
            "value": 3
        },
        {
            "name": "Thursday",
            "index": 4,
            "value": 4
        },
        {
            "name": "Friday",
            "index": 5,
            "value": 5
        },
        {
            "name": "Saturday",
            "index": 6,
            "value": 6
        }
    ]);

    types["Enum.SegmentationDeviceOS"] = $data.createEnum("Enum.SegmentationDeviceOS", [{
            "name": "Unknown",
            "index": 0,
            "value": 0
        },
        {
            "name": "Other",
            "index": 1,
            "value": 201
        },
        {
            "name": "Windows",
            "index": 2,
            "value": 202
        },
        {
            "name": "iOS",
            "index": 3,
            "value": 203
        },
        {
            "name": "Android",
            "index": 4,
            "value": 204
        },
        {
            "name": "BlackBerry",
            "index": 5,
            "value": 205
        }
    ]);

    types["Enum.SegmentationDeviceType"] = $data.createEnum("Enum.SegmentationDeviceType", [{
            "name": "Unknown",
            "index": 0,
            "value": 0
        },
        {
            "name": "Computer",
            "index": 1,
            "value": 1
        },
        {
            "name": "SmartPhone",
            "index": 2,
            "value": 2
        },
        {
            "name": "NonsmartPhone",
            "index": 3,
            "value": 3
        },
        {
            "name": "Tablet",
            "index": 4,
            "value": 4
        }
    ]);

    types["Enum.SegmentationMedium"] = $data.createEnum("Enum.SegmentationMedium", [{
            "name": "Unknown",
            "index": 0,
            "value": 0
        },
        {
            "name": "PaidSearch",
            "index": 1,
            "value": 1
        },
        {
            "name": "Contextual",
            "index": 2,
            "value": 2
        },
        {
            "name": "MobilePaidSearch",
            "index": 3,
            "value": 3
        },
        {
            "name": "MobileContextual",
            "index": 4,
            "value": 4
        },
        {
            "name": "Display",
            "index": 5,
            "value": 5
        },
        {
            "name": "WindowsApp",
            "index": 6,
            "value": 6
        },
        {
            "name": "XBOXOne",
            "index": 7,
            "value": 7
        },
        {
            "name": "XBOX360",
            "index": 8,
            "value": 8
        },
        {
            "name": "PaidSearchDisplay",
            "index": 9,
            "value": 9
        },
        {
            "name": "Native",
            "index": 10,
            "value": 10
        }
    ]);

    types["Enum.SegmentationNetwork2"] = $data.createEnum("Enum.SegmentationNetwork2", [{
            "name": "Unknown",
            "index": 0,
            "value": 0
        },
        {
            "name": "BingAndYahooSearch",
            "index": 1,
            "value": 1
        },
        {
            "name": "SyndicatedSearchPartners",
            "index": 2,
            "value": 2
        },
        {
            "name": "AOLSearch",
            "index": 3,
            "value": 3
        },
        {
            "name": "Content",
            "index": 4,
            "value": 4
        }
    ]);

    types["Enum.SegmentationPagePosition2"] = $data.createEnum("Enum.SegmentationPagePosition2", [{
            "name": "Unknown",
            "index": 0,
            "value": 0
        },
        {
            "name": "BingAndYahooSearchTop",
            "index": 1,
            "value": 11
        },
        {
            "name": "BingAndYahooSearchOther",
            "index": 2,
            "value": 12
        },
        {
            "name": "SyndicatedSearchPartnersTop",
            "index": 3,
            "value": 21
        },
        {
            "name": "SyndicatedSearchPartnersOther",
            "index": 4,
            "value": 22
        },
        {
            "name": "AOLSearchTop",
            "index": 5,
            "value": 31
        },
        {
            "name": "AOLSearchOther",
            "index": 6,
            "value": 32
        },
        {
            "name": "ContentNetwork",
            "index": 7,
            "value": 40
        },
        {
            "name": "ImpressionShare",
            "index": 8,
            "value": 255
        }
    ]);

    types["Enum.MatchType"] = $data.createEnum("Enum.MatchType", [{
            "name": "Exact",
            "index": 0,
            "value": 1
        },
        {
            "name": "Phrase",
            "index": 1,
            "value": 2
        },
        {
            "name": "Broad",
            "index": 2,
            "value": 3
        },
        {
            "name": "Content",
            "index": 3,
            "value": 5
        }
    ]);

    types["Enum.CampaignStatus"] = $data.createEnum("Enum.CampaignStatus", [{
            "name": "Suspended",
            "index": 0,
            "value": 8
        },
        {
            "name": "Active",
            "index": 1,
            "value": 121
        },
        {
            "name": "Deleted",
            "index": 2,
            "value": 123
        },
        {
            "name": "UserPaused",
            "index": 3,
            "value": 124
        },
        {
            "name": "BudgetPaused",
            "index": 4,
            "value": 126
        },
        {
            "name": "BudgetUserPaused",
            "index": 5,
            "value": 127
        }
    ]);

    types["Enum.TimeZone"] = $data.createEnum("Enum.TimeZone", [{
            "name": "Nukualofa",
            "index": 0,
            "value": 1
        },
        {
            "name": "FijiKamchatkaMarshallIsland",
            "index": 1,
            "value": 2
        },
        {
            "name": "AucklandWellington",
            "index": 2,
            "value": 3
        },
        {
            "name": "MagadanSolomonIslandNewCaledonia",
            "index": 3,
            "value": 4
        },
        {
            "name": "Vladivostok",
            "index": 4,
            "value": 5
        },
        {
            "name": "Hobart",
            "index": 5,
            "value": 6
        },
        {
            "name": "GuamPortMoresby",
            "index": 6,
            "value": 7
        },
        {
            "name": "CanberraMelbourneSydney",
            "index": 7,
            "value": 8
        },
        {
            "name": "Brisbane",
            "index": 8,
            "value": 9
        },
        {
            "name": "Darwin",
            "index": 9,
            "value": 10
        },
        {
            "name": "Adelaide",
            "index": 10,
            "value": 11
        },
        {
            "name": "Yakutsk",
            "index": 11,
            "value": 12
        },
        {
            "name": "Seoul",
            "index": 12,
            "value": 13
        },
        {
            "name": "OsakaSapporoTokyo",
            "index": 13,
            "value": 14
        },
        {
            "name": "Taipei",
            "index": 14,
            "value": 15
        },
        {
            "name": "Perth",
            "index": 15,
            "value": 16
        },
        {
            "name": "KualaLumpurSingapore",
            "index": 16,
            "value": 17
        },
        {
            "name": "IrkutskUlaanBataar",
            "index": 17,
            "value": 18
        },
        {
            "name": "BeijingChongqingHongKongUrumqi",
            "index": 18,
            "value": 19
        },
        {
            "name": "Krasnoyarsk",
            "index": 19,
            "value": 20
        },
        {
            "name": "BangkokHanoiJakarta",
            "index": 20,
            "value": 21
        },
        {
            "name": "Rangoon",
            "index": 21,
            "value": 22
        },
        {
            "name": "SriJayawardenepura",
            "index": 22,
            "value": 23
        },
        {
            "name": "AstanaDhaka",
            "index": 23,
            "value": 24
        },
        {
            "name": "Almaty_Novosibirsk",
            "index": 24,
            "value": 25
        },
        {
            "name": "Kathmandu",
            "index": 25,
            "value": 26
        },
        {
            "name": "ChennaiKolkataMumbaiNewDelhi",
            "index": 26,
            "value": 27
        },
        {
            "name": "IslandamabadKarachiTashkent",
            "index": 27,
            "value": 28
        },
        {
            "name": "Ekaterinburg",
            "index": 28,
            "value": 29
        },
        {
            "name": "Kabul",
            "index": 29,
            "value": 30
        },
        {
            "name": "BakuTbilisiYerevan",
            "index": 30,
            "value": 31
        },
        {
            "name": "AbuDhabiMuscat",
            "index": 31,
            "value": 32
        },
        {
            "name": "Tehran",
            "index": 32,
            "value": 33
        },
        {
            "name": "Nairobi",
            "index": 33,
            "value": 34
        },
        {
            "name": "MoscowStPetersburgVolgograd",
            "index": 34,
            "value": 35
        },
        {
            "name": "KuwaitRiyadh",
            "index": 35,
            "value": 36
        },
        {
            "name": "Baghdad",
            "index": 36,
            "value": 37
        },
        {
            "name": "Jerusalem",
            "index": 37,
            "value": 38
        },
        {
            "name": "HelsinkiKyivRigaSofiaTallinnVilnius",
            "index": 38,
            "value": 39
        },
        {
            "name": "HararePretoria",
            "index": 39,
            "value": 40
        },
        {
            "name": "Cairo",
            "index": 40,
            "value": 41
        },
        {
            "name": "Bucharest",
            "index": 41,
            "value": 42
        },
        {
            "name": "AthensIslandanbulMinsk",
            "index": 42,
            "value": 43
        },
        {
            "name": "WestCentralAfrica",
            "index": 43,
            "value": 44
        },
        {
            "name": "SarajevoSkopjeWarsawZagreb",
            "index": 44,
            "value": 45
        },
        {
            "name": "BrusselsCopenhagenMadridParis",
            "index": 45,
            "value": 46
        },
        {
            "name": "BelgradeBratislavaBudapestLjubljanaPrague",
            "index": 46,
            "value": 47
        },
        {
            "name": "AmsterdamBerlinBernRomeStockholmVienna",
            "index": 47,
            "value": 48
        },
        {
            "name": "CasablancaMonrovia",
            "index": 48,
            "value": 49
        },
        {
            "name": "GreenwichMeanTimeDublinEdinburghLisbonLondon",
            "index": 49,
            "value": 50
        },
        {
            "name": "Azores",
            "index": 50,
            "value": 51
        },
        {
            "name": "CapeVerdeIsland",
            "index": 51,
            "value": 52
        },
        {
            "name": "MidAtlantic",
            "index": 52,
            "value": 53
        },
        {
            "name": "Brasilia",
            "index": 53,
            "value": 54
        },
        {
            "name": "BuenosAiresGeorgetown",
            "index": 54,
            "value": 55
        },
        {
            "name": "Greenland",
            "index": 55,
            "value": 56
        },
        {
            "name": "Newfoundland",
            "index": 56,
            "value": 57
        },
        {
            "name": "AtlanticTimeCanada",
            "index": 57,
            "value": 58
        },
        {
            "name": "CaracasLaPaz",
            "index": 58,
            "value": 59
        },
        {
            "name": "Santiago",
            "index": 59,
            "value": 60
        },
        {
            "name": "BogotaLimaQuito",
            "index": 60,
            "value": 61
        },
        {
            "name": "EasternTimeUSCanada",
            "index": 61,
            "value": 62
        },
        {
            "name": "IndianaEast",
            "index": 62,
            "value": 63
        },
        {
            "name": "CentralAmerica",
            "index": 63,
            "value": 64
        },
        {
            "name": "CentralTimeUSCanada",
            "index": 64,
            "value": 65
        },
        {
            "name": "GuadalajaraMexicoCityMonterrey",
            "index": 65,
            "value": 66
        },
        {
            "name": "Saskatchewan",
            "index": 66,
            "value": 67
        },
        {
            "name": "Arizona",
            "index": 67,
            "value": 68
        },
        {
            "name": "ChihuahuaLaPazMazatlan",
            "index": 68,
            "value": 69
        },
        {
            "name": "MountainTime_US_Canada",
            "index": 69,
            "value": 70
        },
        {
            "name": "PacificTimeUSCanadaTijuana",
            "index": 70,
            "value": 71
        },
        {
            "name": "Alaska",
            "index": 71,
            "value": 72
        },
        {
            "name": "Hawaii",
            "index": 72,
            "value": 73
        },
        {
            "name": "MidwayIslandand_Samoa",
            "index": 73,
            "value": 74
        },
        {
            "name": "InternationalDateLineWest",
            "index": 74,
            "value": 75
        }
    ]);

    types["Enum.DeliveryStatus"] = $data.createEnum("Enum.DeliveryStatus", [{
            "name": "CreditCardExpired",
            "index": 0,
            "value": 10
        },
        {
            "name": "IOExceeded",
            "index": 1,
            "value": 20
        },
        {
            "name": "PaymentInformationMissing",
            "index": 2,
            "value": 30
        },
        {
            "name": "InvalidFinancialStatusOther",
            "index": 3,
            "value": 40
        },
        {
            "name": "MigrationPaused",
            "index": 4,
            "value": 45
        },
        {
            "name": "CampaignDeleted",
            "index": 5,
            "value": 48
        },
        {
            "name": "CampaignSuspended",
            "index": 6,
            "value": 49
        },
        {
            "name": "CampaignBudgetPaused",
            "index": 7,
            "value": 50
        },
        {
            "name": "DomainLanguageNotSupported",
            "index": 8,
            "value": 51
        },
        {
            "name": "ShoppingCampaignStoreNotFound",
            "index": 9,
            "value": 55
        },
        {
            "name": "ShoppingCampaignNoOffersPresent",
            "index": 10,
            "value": 56
        },
        {
            "name": "AdGroupExpired",
            "index": 11,
            "value": 60
        },
        {
            "name": "AdGroupDraft",
            "index": 12,
            "value": 62
        },
        {
            "name": "AdGroupDeleted",
            "index": 13,
            "value": 63
        },
        {
            "name": "CamAssetRejected",
            "index": 14,
            "value": 64
        },
        {
            "name": "CamAssetDeleted",
            "index": 15,
            "value": 66
        },
        {
            "name": "EditorialRejected",
            "index": 16,
            "value": 70
        },
        {
            "name": "EditorialUnderAppeal",
            "index": 17,
            "value": 75
        },
        {
            "name": "UrlInvalid",
            "index": 18,
            "value": 76
        },
        {
            "name": "ApplicationNotFound",
            "index": 19,
            "value": 77
        },
        {
            "name": "ApplicationDestinationUrlMismatch",
            "index": 20,
            "value": 78
        },
        {
            "name": "PendingMetadataSync",
            "index": 21,
            "value": 79
        },
        {
            "name": "EditorialPending",
            "index": 22,
            "value": 80
        },
        {
            "name": "AssociationDeleted",
            "index": 23,
            "value": 85
        },
        {
            "name": "CampaignUserPaused",
            "index": 24,
            "value": 90
        },
        {
            "name": "AdGroupUserPaused",
            "index": 25,
            "value": 100
        },
        {
            "name": "AdUserPaused",
            "index": 26,
            "value": 110
        },
        {
            "name": "KeywordMatchTypeAdGroupMediumCombinationInvalid",
            "index": 27,
            "value": 115
        },
        {
            "name": "KeywordUserPaused",
            "index": 28,
            "value": 120
        },
        {
            "name": "NegativeKeywordConflicts",
            "index": 29,
            "value": 130
        },
        {
            "name": "EditorialApprovedLimited",
            "index": 30,
            "value": 200
        },
        {
            "name": "LowSupply",
            "index": 31,
            "value": 300
        },
        {
            "name": "LowQuality",
            "index": 32,
            "value": 400
        },
        {
            "name": "BidBelowFirstPageBid",
            "index": 33,
            "value": 500
        },
        {
            "name": "Incomplete",
            "index": 34,
            "value": 1000
        },
        {
            "name": "BudgetSuggestions",
            "index": 35,
            "value": 1001
        },
        {
            "name": "InlineOpportunity",
            "index": 36,
            "value": 1060
        },
        {
            "name": "GeoCodingIncomplete",
            "index": 37,
            "value": 1101
        },
        {
            "name": "ProductTargetUserPaused",
            "index": 38,
            "value": 1102
        },
        {
            "name": "AdExtensionNotPresent",
            "index": 39,
            "value": 1103
        },
        {
            "name": "AdExtensionDeleted",
            "index": 40,
            "value": 1104
        },
        {
            "name": "AdExtensionAssociationDeleted",
            "index": 41,
            "value": 1105
        },
        {
            "name": "StoreIdNotAssociated",
            "index": 42,
            "value": 1106
        },
        {
            "name": "AdGroupAudienceAssociationPaused",
            "index": 43,
            "value": 1107
        },
        {
            "name": "AdGroupAudienceAssociationExcluded",
            "index": 44,
            "value": 1108
        },
        {
            "name": "AdNotPresent",
            "index": 45,
            "value": 1200
        },
        {
            "name": "AdNotActive",
            "index": 46,
            "value": 1201
        },
        {
            "name": "ApplicationDestinationUrlValidationIncomplete",
            "index": 47,
            "value": 1252
        },
        {
            "name": "Eligible",
            "index": 48,
            "value": 2147483647
        }
    ]);

    types["Enum.CampaignType"] = $data.createEnum("Enum.CampaignType", [{
            "name": "Default",
            "index": 0,
            "value": 1
        },
        {
            "name": "Shopping",
            "index": 1,
            "value": 2
        },
        {
            "name": "DynamicSearchAds",
            "index": 2,
            "value": 4
        },
        {
            "name": "Audience",
            "index": 3,
            "value": 8
        }
    ]);

    types["Enum.BiddingStrategyType"] = $data.createEnum("Enum.BiddingStrategyType", [{
            "name": "InheritFromParent",
            "index": 0,
            "value": 0
        },
        {
            "name": "ManualCpc",
            "index": 1,
            "value": 1
        },
        {
            "name": "MaxClicks",
            "index": 2,
            "value": 2
        },
        {
            "name": "MaxConversions",
            "index": 3,
            "value": 3
        },
        {
            "name": "TargetCpa",
            "index": 4,
            "value": 4
        },
        {
            "name": "EnhancedCpc",
            "index": 5,
            "value": 5
        }
    ]);

    types["Enum.CampaignPriority"] = $data.createEnum("Enum.CampaignPriority", [{
            "name": "Low",
            "index": 0,
            "value": 0
        },
        {
            "name": "Medium",
            "index": 1,
            "value": 1
        },
        {
            "name": "High",
            "index": 2,
            "value": 2
        }
    ]);

    types["Enum.Language"] = $data.createEnum("Enum.Language", [{
            "name": "Arabic",
            "index": 0,
            "value": 7
        },
        {
            "name": "TraditionalChinese",
            "index": 1,
            "value": 24
        },
        {
            "name": "Danish",
            "index": 2,
            "value": 28
        },
        {
            "name": "Dutch",
            "index": 3,
            "value": 29
        },
        {
            "name": "English",
            "index": 4,
            "value": 30
        },
        {
            "name": "Finnish",
            "index": 5,
            "value": 35
        },
        {
            "name": "French",
            "index": 6,
            "value": 36
        },
        {
            "name": "German",
            "index": 7,
            "value": 40
        },
        {
            "name": "Italian",
            "index": 8,
            "value": 55
        },
        {
            "name": "Norwegian",
            "index": 9,
            "value": 82
        },
        {
            "name": "Portuguese",
            "index": 10,
            "value": 88
        },
        {
            "name": "Spanish",
            "index": 11,
            "value": 109
        },
        {
            "name": "Swedish",
            "index": 12,
            "value": 112
        },
        {
            "name": "SimplifiedChinese",
            "index": 13,
            "value": 137
        },
        {
            "name": "All",
            "index": 14,
            "value": 1000
        }
    ]);

    types["Enum.BudgetType"] = $data.createEnum("Enum.BudgetType", [{
            "name": "Monthly",
            "index": 0,
            "value": 0
        },
        {
            "name": "DailyStandard",
            "index": 1,
            "value": 1
        },
        {
            "name": "DailyAccelerated",
            "index": 2,
            "value": 2
        }
    ]);

    types["Enum.BudgetStatus"] = $data.createEnum("Enum.BudgetStatus", [{
            "name": "Private",
            "index": 0,
            "value": 0
        },
        {
            "name": "Sufficient",
            "index": 1,
            "value": 1
        },
        {
            "name": "Limited",
            "index": 2,
            "value": 2
        },
        {
            "name": "BudgetPaused",
            "index": 3,
            "value": 3
        }
    ]);

    types["Enum.AudienceType"] = $data.createEnum("Enum.AudienceType", [{
            "name": "Remessaging",
            "index": 0,
            "value": 0
        },
        {
            "name": "Custom",
            "index": 1,
            "value": 1
        },
        {
            "name": "InMarket",
            "index": 2,
            "value": 2
        }
    ]);

    types["Enum.CriterionType"] = $data.createEnum("Enum.CriterionType", [{
            "name": "Product",
            "index": 0,
            "value": 17
        },
        {
            "name": "ProductPartition",
            "index": 1,
            "value": 21
        },
        {
            "name": "Age",
            "index": 2,
            "value": 32
        },
        {
            "name": "DayTime",
            "index": 3,
            "value": 64
        },
        {
            "name": "Gender",
            "index": 4,
            "value": 128
        },
        {
            "name": "Location",
            "index": 5,
            "value": 256
        },
        {
            "name": "Radius",
            "index": 6,
            "value": 512
        },
        {
            "name": "Device",
            "index": 7,
            "value": 1024
        },
        {
            "name": "LocationIntentOption",
            "index": 8,
            "value": 2048
        },
        {
            "name": "Webpage",
            "index": 9,
            "value": 4096
        },
        {
            "name": "Audience",
            "index": 10,
            "value": 8192
        },
        {
            "name": "DMP",
            "index": 11,
            "value": 16384
        },
        {
            "name": "InMarket",
            "index": 12,
            "value": 32768
        }
    ]);

    types["Enum.AdGroupCriterionStatus"] = $data.createEnum("Enum.AdGroupCriterionStatus", [{
            "name": "Active",
            "index": 0,
            "value": 161
        },
        {
            "name": "Paused",
            "index": 1,
            "value": 162
        },
        {
            "name": "Deleted",
            "index": 2,
            "value": 163
        },
        {
            "name": "InterimDeleted",
            "index": 3,
            "value": 164
        },
        {
            "name": "Excluded",
            "index": 4,
            "value": 165
        }
    ]);

    types["Enum.BidType"] = $data.createEnum("Enum.BidType", [{
            "name": "BidOnly",
            "index": 0,
            "value": 0
        },
        {
            "name": "TargetAndBid",
            "index": 1,
            "value": 1
        }
    ]);

    types["Enum.AdGroupStatus"] = $data.createEnum("Enum.AdGroupStatus", [{
            "name": "CampaignUserPaused",
            "index": 0,
            "value": 124
        },
        {
            "name": "CampaignBudgetPaused",
            "index": 1,
            "value": 126
        },
        {
            "name": "CampaignBudgetUserPaused",
            "index": 2,
            "value": 127
        },
        {
            "name": "Draft",
            "index": 3,
            "value": 140
        },
        {
            "name": "Active",
            "index": 4,
            "value": 141
        },
        {
            "name": "Deleted",
            "index": 5,
            "value": 143
        },
        {
            "name": "Paused",
            "index": 6,
            "value": 144
        },
        {
            "name": "Expired",
            "index": 7,
            "value": 150
        }
    ]);

    types["Enum.Medium"] = $data.createEnum("Enum.Medium", [{
            "name": "Search",
            "index": 0,
            "value": 1
        },
        {
            "name": "Content",
            "index": 1,
            "value": 2
        },
        {
            "name": "SearchAndContent",
            "index": 2,
            "value": 3
        }
    ]);

    types["Enum.PricingModel"] = $data.createEnum("Enum.PricingModel", [{
            "name": "CPC",
            "index": 0,
            "value": 1
        },
        {
            "name": "CPM",
            "index": 1,
            "value": 2
        }
    ]);

    types["Enum.BidTargetType"] = $data.createEnum("Enum.BidTargetType", [{
            "name": "Keyword",
            "index": 0,
            "value": 0
        },
        {
            "name": "BehaviorSegment",
            "index": 1,
            "value": 11
        },
        {
            "name": "Site",
            "index": 2,
            "value": 12
        }
    ]);

    types["Enum.AdGroupCallTrackingStatus"] = $data.createEnum("Enum.AdGroupCallTrackingStatus", [{
            "name": "NotApplicable",
            "index": 0,
            "value": 0
        },
        {
            "name": "Eligible",
            "index": 1,
            "value": 1
        },
        {
            "name": "NotEligible",
            "index": 2,
            "value": 2
        },
        {
            "name": "ProvisioningPending",
            "index": 3,
            "value": 3
        },
        {
            "name": "Provisioned",
            "index": 4,
            "value": 4
        }
    ]);

    types["Enum.BidAmountSource"] = $data.createEnum("Enum.BidAmountSource", [{
            "name": "UseFromOrderItem",
            "index": 0,
            "value": 1
        },
        {
            "name": "UseFromAdGroup",
            "index": 1,
            "value": 2
        }
    ]);

    types["Enum.OrderItemStatus"] = $data.createEnum("Enum.OrderItemStatus", [{
            "name": "Active",
            "index": 0,
            "value": 161
        },
        {
            "name": "Paused",
            "index": 1,
            "value": 162
        },
        {
            "name": "Deleted",
            "index": 2,
            "value": 163
        }
    ]);

    types["Enum.AdType"] = $data.createEnum("Enum.AdType", [{
            "name": "Text",
            "index": 0,
            "value": 1
        },
        {
            "name": "Mobile",
            "index": 1,
            "value": 2
        },
        {
            "name": "Product",
            "index": 2,
            "value": 128
        },
        {
            "name": "AppInstall",
            "index": 3,
            "value": 256
        },
        {
            "name": "DynamicSearch",
            "index": 4,
            "value": 512
        },
        {
            "name": "ExpandedText",
            "index": 5,
            "value": 1024
        },
        {
            "name": "Responsive",
            "index": 6,
            "value": 2048
        }
    ]);

    types["Enum.DevicePreference"] = $data.createEnum("Enum.DevicePreference", [{
            "name": "All",
            "index": 0,
            "value": 0
        },
        {
            "name": "Mobile",
            "index": 1,
            "value": 2
        }
    ]);

    types["Enum.AdStatus"] = $data.createEnum("Enum.AdStatus", [{
            "name": "Inactive",
            "index": 0,
            "value": 0
        },
        {
            "name": "Active",
            "index": 1,
            "value": 1
        },
        {
            "name": "Paused",
            "index": 2,
            "value": 2
        },
        {
            "name": "Deleted",
            "index": 3,
            "value": 3
        }
    ]);

    types["Enum.AdPreference"] = $data.createEnum("Enum.AdPreference", [{
            "name": "None",
            "index": 0,
            "value": 0
        },
        {
            "name": "NativePreference",
            "index": 1,
            "value": 128
        }
    ]);

    types["Enum.CallToAction"] = $data.createEnum("Enum.CallToAction", [{
        "name": "Default",
        "index": 0,
        "value": 0
    }]);

    types["Enum.AdRotationType"] = $data.createEnum("Enum.AdRotationType", [{
            "name": "OptimizeForClicks",
            "index": 0,
            "value": 1
        },
        {
            "name": "RotateAdsEvenly",
            "index": 1,
            "value": 2
        }
    ]);

    types["Enum.Network"] = $data.createEnum("Enum.Network", [{
            "name": "BingYahooAndSearchPartners",
            "index": 0,
            "value": 0
        },
        {
            "name": "BingYahooOnly",
            "index": 1,
            "value": 1
        },
        {
            "name": "SearchPartnersOnly",
            "index": 2,
            "value": 2
        }
    ]);

    types["Enum.AgeRange"] = $data.createEnum("Enum.AgeRange", [{
            "name": "EighteenToTwentyFive",
            "index": 0,
            "value": 0
        },
        {
            "name": "TwentyFiveToThirtyFive",
            "index": 1,
            "value": 1
        },
        {
            "name": "ThirtyFiveToFifty",
            "index": 2,
            "value": 2
        },
        {
            "name": "FiftyToSixtyFive",
            "index": 3,
            "value": 3
        },
        {
            "name": "SixtyFiveAndAbove",
            "index": 4,
            "value": 4
        },
        {
            "name": "ZeroToSeventeen",
            "index": 5,
            "value": 5
        },
        {
            "name": "ThirteenToSeventeen",
            "index": 6,
            "value": 6
        }
    ]);

    types["Enum.Day"] = $data.createEnum("Enum.Day", [{
            "name": "Sunday",
            "index": 0,
            "value": 0
        },
        {
            "name": "Monday",
            "index": 1,
            "value": 1
        },
        {
            "name": "Tuesday",
            "index": 2,
            "value": 2
        },
        {
            "name": "Wednesday",
            "index": 3,
            "value": 3
        },
        {
            "name": "Thursday",
            "index": 4,
            "value": 4
        },
        {
            "name": "Friday",
            "index": 5,
            "value": 5
        },
        {
            "name": "Saturday",
            "index": 6,
            "value": 6
        }
    ]);

    types["Enum.Minute"] = $data.createEnum("Enum.Minute", [{
            "name": "ZERO",
            "index": 0,
            "value": 0
        },
        {
            "name": "FIFTEEN",
            "index": 1,
            "value": 15
        },
        {
            "name": "THIRTY",
            "index": 2,
            "value": 30
        },
        {
            "name": "FORTY_FIVE",
            "index": 3,
            "value": 45
        }
    ]);

    types["Enum.GenderType"] = $data.createEnum("Enum.GenderType", [{
            "name": "Male",
            "index": 0,
            "value": 0
        },
        {
            "name": "Female",
            "index": 1,
            "value": 1
        }
    ]);

    types["Enum.Location2Type"] = $data.createEnum("Enum.Location2Type", [{
            "name": "Country",
            "index": 0,
            "value": 1
        },
        {
            "name": "SubGeography",
            "index": 1,
            "value": 2
        },
        {
            "name": "MetroArea",
            "index": 2,
            "value": 4
        },
        {
            "name": "City",
            "index": 3,
            "value": 8
        },
        {
            "name": "PostalCode",
            "index": 4,
            "value": 16
        },
        {
            "name": "County",
            "index": 5,
            "value": 32
        }
    ]);

    types["Enum.IntentOptions"] = $data.createEnum("Enum.IntentOptions", [{
            "name": "PeopleInOrSearchingForOrViewingPages",
            "index": 0,
            "value": 0
        },
        {
            "name": "PeopleIn",
            "index": 1,
            "value": 1
        },
        {
            "name": "PeopleSearchingForOrViewingPages",
            "index": 2,
            "value": 2
        }
    ]);

    types["Enum.DistanceUnit"] = $data.createEnum("Enum.DistanceUnit", [{
            "name": "Miles",
            "index": 0,
            "value": 0
        },
        {
            "name": "Kilometers",
            "index": 1,
            "value": 1
        }
    ]);

    types["Enum.WebpageConditionOperand"] = $data.createEnum("Enum.WebpageConditionOperand", [{
            "name": "Unknown",
            "index": 0,
            "value": 0
        },
        {
            "name": "Url",
            "index": 1,
            "value": 1
        },
        {
            "name": "Category",
            "index": 2,
            "value": 2
        },
        {
            "name": "PageTitle",
            "index": 3,
            "value": 3
        },
        {
            "name": "PageContent",
            "index": 4,
            "value": 4
        }
    ]);

    types["Enum.AssociationType"] = $data.createEnum("Enum.AssociationType", [{
            "name": "All",
            "index": 0,
            "value": 0
        },
        {
            "name": "Campaign",
            "index": 1,
            "value": 1
        },
        {
            "name": "AdGroup",
            "index": 2,
            "value": 2
        },
        {
            "name": "Account",
            "index": 3,
            "value": 3
        }
    ]);

    types["Enum.AdExtensionStatus"] = $data.createEnum("Enum.AdExtensionStatus", [{
            "name": "Active",
            "index": 0,
            "value": 108
        },
        {
            "name": "Inactive",
            "index": 1,
            "value": 109
        },
        {
            "name": "Deleted",
            "index": 2,
            "value": 110
        }
    ]);

    types["Enum.PriceExtensionType"] = $data.createEnum("Enum.PriceExtensionType", [{
            "name": "Unknown",
            "index": 0,
            "value": 0
        },
        {
            "name": "Brands",
            "index": 1,
            "value": 1
        },
        {
            "name": "Events",
            "index": 2,
            "value": 2
        },
        {
            "name": "Locations",
            "index": 3,
            "value": 3
        },
        {
            "name": "Neighborhoods",
            "index": 4,
            "value": 4
        },
        {
            "name": "ProductCategories",
            "index": 5,
            "value": 5
        },
        {
            "name": "ProductTiers",
            "index": 6,
            "value": 6
        },
        {
            "name": "Services",
            "index": 7,
            "value": 7
        },
        {
            "name": "ServiceCategories",
            "index": 8,
            "value": 8
        },
        {
            "name": "ServiceTiers",
            "index": 9,
            "value": 9
        }
    ]);

    types["Enum.PriceUnit"] = $data.createEnum("Enum.PriceUnit", [{
            "name": "Unknown",
            "index": 0,
            "value": 0
        },
        {
            "name": "PerHour",
            "index": 1,
            "value": 1
        },
        {
            "name": "PerDay",
            "index": 2,
            "value": 2
        },
        {
            "name": "PerWeek",
            "index": 3,
            "value": 3
        },
        {
            "name": "PerMonth",
            "index": 4,
            "value": 4
        },
        {
            "name": "PerYear",
            "index": 5,
            "value": 5
        },
        {
            "name": "None",
            "index": 6,
            "value": 6
        },
        {
            "name": "PerNight",
            "index": 7,
            "value": 7
        }
    ]);

    types["Enum.PriceQualifier"] = $data.createEnum("Enum.PriceQualifier", [{
            "name": "Unknown",
            "index": 0,
            "value": 0
        },
        {
            "name": "From",
            "index": 1,
            "value": 1
        },
        {
            "name": "UpTo",
            "index": 2,
            "value": 2
        },
        {
            "name": "None",
            "index": 3,
            "value": 3
        },
        {
            "name": "Average",
            "index": 4,
            "value": 4
        }
    ]);

    types["Enum.DeviceType"] = $data.createEnum("Enum.DeviceType", [{
            "name": "None",
            "index": 0,
            "value": 0
        },
        {
            "name": "Computers",
            "index": 1,
            "value": 1
        },
        {
            "name": "Smartphones",
            "index": 2,
            "value": 2
        },
        {
            "name": "Tablets",
            "index": 3,
            "value": 4
        },
        {
            "name": "All",
            "index": 4,
            "value": 7
        }
    ]);

    types["Enum.GeoCodeStatus"] = $data.createEnum("Enum.GeoCodeStatus", [{
            "name": "Pending",
            "index": 0,
            "value": 0
        },
        {
            "name": "Complete",
            "index": 1,
            "value": 1
        },
        {
            "name": "Invalid",
            "index": 2,
            "value": 2
        },
        {
            "name": "Failed",
            "index": 3,
            "value": 3
        }
    ]);

    types["Enum.EditorialStatus"] = $data.createEnum("Enum.EditorialStatus", [{
            "name": "Approved",
            "index": 0,
            "value": 1
        },
        {
            "name": "ApprovedLimited",
            "index": 1,
            "value": 2
        },
        {
            "name": "Rejected",
            "index": 2,
            "value": 3
        },
        {
            "name": "Pending",
            "index": 3,
            "value": 4
        }
    ]);

    types["Enum.KeywordStatus"] = $data.createEnum("Enum.KeywordStatus", [{
            "name": "Active",
            "index": 0,
            "value": 161
        },
        {
            "name": "Paused",
            "index": 1,
            "value": 162
        },
        {
            "name": "Deleted",
            "index": 2,
            "value": 163
        },
        {
            "name": "Temporary",
            "index": 3,
            "value": 164
        }
    ]);

    types["Enum.CampaignCriterionStatus"] = $data.createEnum("Enum.CampaignCriterionStatus", [{
            "name": "Active",
            "index": 0,
            "value": 121
        },
        {
            "name": "Deleted",
            "index": 1,
            "value": 123
        }
    ]);

    types["Enum.DateRangePreset"] = $data.createEnum("Enum.DateRangePreset", [{
            "name": "Yesterday",
            "index": 0,
            "value": 1
        },
        {
            "name": "LastSevenDays",
            "index": 1,
            "value": 2
        },
        {
            "name": "Today",
            "index": 2,
            "value": 3
        },
        {
            "name": "LastThirtyDays",
            "index": 3,
            "value": 4
        },
        {
            "name": "LastFourteenDays",
            "index": 4,
            "value": 5
        },
        {
            "name": "ThisMonth",
            "index": 5,
            "value": 6
        },
        {
            "name": "LastMonth",
            "index": 6,
            "value": 7
        },
        {
            "name": "LastThreeMonths",
            "index": 7,
            "value": 8
        },
        {
            "name": "LastSixMonths",
            "index": 8,
            "value": 9
        },
        {
            "name": "ThisYear",
            "index": 9,
            "value": 10
        },
        {
            "name": "LastYear",
            "index": 10,
            "value": 11
        },
        {
            "name": "AllTime",
            "index": 11,
            "value": 12
        },
        {
            "name": "ThisWeekFromSun",
            "index": 12,
            "value": 13
        },
        {
            "name": "ThisWeekFromMon",
            "index": 13,
            "value": 14
        },
        {
            "name": "LastWeekStartingSun",
            "index": 14,
            "value": 15
        },
        {
            "name": "LastWeekStartingMon",
            "index": 15,
            "value": 16
        },
        {
            "name": "LastBusinessWeek",
            "index": 16,
            "value": 17
        }
    ]);

    types["Enum.AdExtensionsTypeFilter"] = $data.createEnum("Enum.AdExtensionsTypeFilter", [{
            "name": "None",
            "index": 0,
            "value": 0
        },
        {
            "name": "SiteLinksAdExtension",
            "index": 1,
            "value": 1
        },
        {
            "name": "LocationAdExtension",
            "index": 2,
            "value": 2
        },
        {
            "name": "CallAdExtension",
            "index": 3,
            "value": 4
        },
        {
            "name": "ProductAdExtension",
            "index": 4,
            "value": 8
        },
        {
            "name": "ImageAdExtension",
            "index": 5,
            "value": 16
        },
        {
            "name": "AppAdExtension",
            "index": 6,
            "value": 32
        },
        {
            "name": "NewsAdExtension",
            "index": 7,
            "value": 64
        },
        {
            "name": "ReviewAdExtension",
            "index": 8,
            "value": 128
        },
        {
            "name": "DataTableAdExtension",
            "index": 9,
            "value": 256
        },
        {
            "name": "CalloutAdExtension",
            "index": 10,
            "value": 512
        },
        {
            "name": "Sitelink2AdExtension",
            "index": 11,
            "value": 1024
        },
        {
            "name": "ActionLinkAdExtension",
            "index": 12,
            "value": 2048
        },
        {
            "name": "StructuredSnippetAdExtension",
            "index": 13,
            "value": 4096
        },
        {
            "name": "PriceAdExtension",
            "index": 14,
            "value": 8192
        }
    ]);

    types["Enum.ListActionType"] = $data.createEnum("Enum.ListActionType", [{
            "name": "Add",
            "index": 0,
            "value": 0
        },
        {
            "name": "Remove",
            "index": 1,
            "value": 1
        },
        {
            "name": "Set",
            "index": 2,
            "value": 2
        }
    ]);

    types["Enum.TextActionOptions"] = $data.createEnum("Enum.TextActionOptions", [{
            "name": "None",
            "index": 0,
            "value": 0
        },
        {
            "name": "MatchCase",
            "index": 1,
            "value": 1
        },
        {
            "name": "MatchWholeWord",
            "index": 2,
            "value": 2
        },
        {
            "name": "PreserveCapitalization",
            "index": 3,
            "value": 4
        }
    ]);

    types["Enum.BidEstimateType"] = $data.createEnum("Enum.BidEstimateType", [{
            "name": "RaiseToTopOfPage",
            "index": 0,
            "value": 0
        },
        {
            "name": "RaiseToFirstPage",
            "index": 1,
            "value": 1
        }
    ]);

    types["Enum.NumericActionType"] = $data.createEnum("Enum.NumericActionType", [{
            "name": "ChangeByPercent",
            "index": 0,
            "value": 0
        },
        {
            "name": "ChangeByAmount",
            "index": 1,
            "value": 1
        },
        {
            "name": "SetToAmount",
            "index": 2,
            "value": 2
        }
    ]);

    types["Enum.TextActionType"] = $data.createEnum("Enum.TextActionType", [{
            "name": "Set",
            "index": 0,
            "value": 0
        },
        {
            "name": "FindReplace",
            "index": 1,
            "value": 1
        },
        {
            "name": "Append",
            "index": 2,
            "value": 2
        },
        {
            "name": "Prepend",
            "index": 3,
            "value": 3
        },
        {
            "name": "ToTitleCase",
            "index": 4,
            "value": 4
        },
        {
            "name": "ToLowerCase",
            "index": 5,
            "value": 5
        },
        {
            "name": "ToSentenceCase",
            "index": 6,
            "value": 6
        }
    ]);

    types["Enum.AudienceExpressionType"] = $data.createEnum("Enum.AudienceExpressionType", [{
            "name": "PageVisitors",
            "index": 0,
            "value": 0
        },
        {
            "name": "PageVisitorsWhoVisitedAnotherPage",
            "index": 1,
            "value": 1
        },
        {
            "name": "PageVisitorsWhoDidNotVisitAnotherPage",
            "index": 2,
            "value": 2
        },
        {
            "name": "CustomEvents",
            "index": 3,
            "value": 3
        }
    ]);

    types["Enum.ExpressionOperand"] = $data.createEnum("Enum.ExpressionOperand", [{
            "name": "None",
            "index": 0,
            "value": 0
        },
        {
            "name": "Url",
            "index": 1,
            "value": 1
        },
        {
            "name": "ReferrerUrl",
            "index": 2,
            "value": 2
        },
        {
            "name": "EventCategory",
            "index": 3,
            "value": 3
        },
        {
            "name": "EventAction",
            "index": 4,
            "value": 4
        },
        {
            "name": "EventLabel",
            "index": 5,
            "value": 5
        },
        {
            "name": "EventValue",
            "index": 6,
            "value": 6
        }
    ]);

    types["Enum.ExpressionOperator"] = $data.createEnum("Enum.ExpressionOperator", [{
            "name": "None",
            "index": 0,
            "value": 0
        },
        {
            "name": "Equals",
            "index": 1,
            "value": 1
        },
        {
            "name": "Contains",
            "index": 2,
            "value": 2
        },
        {
            "name": "StartsWith",
            "index": 3,
            "value": 3
        },
        {
            "name": "EndsWith",
            "index": 4,
            "value": 4
        },
        {
            "name": "NotEquals",
            "index": 5,
            "value": 5
        },
        {
            "name": "DoesNotContain",
            "index": 6,
            "value": 6
        },
        {
            "name": "DoesNotStartWith",
            "index": 7,
            "value": 7
        },
        {
            "name": "DoesNotEndWith",
            "index": 8,
            "value": 8
        },
        {
            "name": "GreaterThan",
            "index": 9,
            "value": 9
        },
        {
            "name": "LessThan",
            "index": 10,
            "value": 10
        },
        {
            "name": "GreaterThanEqualTo",
            "index": 11,
            "value": 11
        },
        {
            "name": "LessThanEqualTo",
            "index": 12,
            "value": 12
        }
    ]);

    types["Enum.AudienceStatus"] = $data.createEnum("Enum.AudienceStatus", [{
            "name": "Active",
            "index": 0,
            "value": 1
        },
        {
            "name": "Paused",
            "index": 1,
            "value": 2
        },
        {
            "name": "Deleted",
            "index": 2,
            "value": 3
        }
    ]);

    types["Enum.TagTrackingStatus"] = $data.createEnum("Enum.TagTrackingStatus", [{
            "name": "Unverified",
            "index": 0,
            "value": 0
        },
        {
            "name": "Active",
            "index": 1,
            "value": 1
        },
        {
            "name": "Inactive",
            "index": 2,
            "value": 2
        }
    ]);

    types["Enum.PartnerName"] = $data.createEnum("Enum.PartnerName", [{
            "name": "BlueKai",
            "index": 0,
            "value": 110
        },
        {
            "name": "AdId",
            "index": 1,
            "value": 130
        },
        {
            "name": "Adobe",
            "index": 2,
            "value": 132
        }
    ]);

    types["Enum.TagStatus"] = $data.createEnum("Enum.TagStatus", [{
            "name": "Active",
            "index": 0,
            "value": 1
        },
        {
            "name": "UnVerified",
            "index": 1,
            "value": 2
        }
    ]);

    types["Enum.GoalEntityType"] = $data.createEnum("Enum.GoalEntityType", [{
            "name": "DestinationGoal",
            "index": 0,
            "value": 0
        },
        {
            "name": "DurationGoal",
            "index": 1,
            "value": 1
        },
        {
            "name": "PageViewsPerVisitGoal",
            "index": 2,
            "value": 2
        },
        {
            "name": "EventGoal",
            "index": 3,
            "value": 3
        },
        {
            "name": "GoalFromTag",
            "index": 4,
            "value": 4
        },
        {
            "name": "ApplicationInstallGoal",
            "index": 5,
            "value": 5
        },
        {
            "name": "MultiStageGoal",
            "index": 6,
            "value": 6
        },
        {
            "name": "OfflineConversionGoal",
            "index": 7,
            "value": 7
        },
        {
            "name": "InStoreTransactionGoal",
            "index": 8,
            "value": 8
        }
    ]);

    types["Enum.GoalStatus"] = $data.createEnum("Enum.GoalStatus", [{
            "name": "Active",
            "index": 0,
            "value": 1
        },
        {
            "name": "Paused",
            "index": 1,
            "value": 2
        }
    ]);

    types["Enum.GoalTrackingStatus"] = $data.createEnum("Enum.GoalTrackingStatus", [{
            "name": "Unverified",
            "index": 0,
            "value": 0
        },
        {
            "name": "NoRecentConversion",
            "index": 1,
            "value": 1
        },
        {
            "name": "RecordingConversions",
            "index": 2,
            "value": 2
        },
        {
            "name": "TagInactive",
            "index": 3,
            "value": 3
        }
    ]);

    types["Enum.ConversionCountType"] = $data.createEnum("Enum.ConversionCountType", [{
            "name": "All",
            "index": 0,
            "value": 0
        },
        {
            "name": "Unique",
            "index": 1,
            "value": 1
        }
    ]);

    types["Enum.GoalValueType"] = $data.createEnum("Enum.GoalValueType", [{
            "name": "FixedValue",
            "index": 0,
            "value": 1
        },
        {
            "name": "VariantValue",
            "index": 1,
            "value": 2
        },
        {
            "name": "NoValue",
            "index": 2,
            "value": 3
        }
    ]);

    types["Enum.GoalStageType"] = $data.createEnum("Enum.GoalStageType", [{
            "name": "EventGoal",
            "index": 0,
            "value": 1
        },
        {
            "name": "DestinationGoal",
            "index": 1,
            "value": 2
        }
    ]);

    types["Enum.ExpressionOperator"] = $data.createEnum("Enum.ExpressionOperator", [{
            "name": "NoExpression",
            "index": 0,
            "value": 0
        },
        {
            "name": "EqualsTo",
            "index": 1,
            "value": 1
        },
        {
            "name": "BeginsWith",
            "index": 2,
            "value": 2
        },
        {
            "name": "RegularExpression",
            "index": 3,
            "value": 3
        },
        {
            "name": "Contains",
            "index": 4,
            "value": 4
        }
    ]);

    types["Enum.ValueOperator"] = $data.createEnum("Enum.ValueOperator", [{
            "name": "NoValue",
            "index": 0,
            "value": 0
        },
        {
            "name": "EqualTo",
            "index": 1,
            "value": 1
        },
        {
            "name": "LessThan",
            "index": 2,
            "value": 2
        },
        {
            "name": "GreaterThan",
            "index": 3,
            "value": 3
        }
    ]);

    types["Enum.AutoTagType"] = $data.createEnum("Enum.AutoTagType", [{
            "name": "Off",
            "index": 0,
            "value": 0
        },
        {
            "name": "CustomerOverride",
            "index": 1,
            "value": 1
        },
        {
            "name": "BingAdsOverride",
            "index": 2,
            "value": 2
        }
    ]);

    types["Enum.TaskItemType"] = $data.createEnum("Enum.TaskItemType", [{
            "name": "ClickToCallProvisioning",
            "index": 0,
            "value": 1
        },
        {
            "name": "AdvertiserSearch",
            "index": 1,
            "value": 2
        },
        {
            "name": "Report",
            "index": 2,
            "value": 3
        },
        {
            "name": "MultiAccountDownload",
            "index": 3,
            "value": 4
        },
        {
            "name": "MultiAccountUploadPreview",
            "index": 4,
            "value": 5
        },
        {
            "name": "MultiAccountUploadCommit",
            "index": 5,
            "value": 6
        },
        {
            "name": "MultiAccountDownloadTest",
            "index": 6,
            "value": 8
        },
        {
            "name": "MultiAccountUploadPreviewTest",
            "index": 7,
            "value": 9
        },
        {
            "name": "MultiAccountUploadCommitTest",
            "index": 8,
            "value": 10
        },
        {
            "name": "ReportTest",
            "index": 9,
            "value": 11
        },
        {
            "name": "BulkDownloadProdLDC1",
            "index": 10,
            "value": 12
        },
        {
            "name": "BulkDownloadProdLDC2",
            "index": 11,
            "value": 13
        },
        {
            "name": "BulkDownloadTest",
            "index": 12,
            "value": 14
        },
        {
            "name": "BulkUploadProdLDC1",
            "index": 13,
            "value": 15
        },
        {
            "name": "BulkUploadProdLDC2",
            "index": 14,
            "value": 16
        },
        {
            "name": "BulkUploadTest",
            "index": 15,
            "value": 17
        },
        {
            "name": "BulkEditProdLDC1",
            "index": 16,
            "value": 18
        },
        {
            "name": "BulkEditProdLDC2",
            "index": 17,
            "value": 19
        },
        {
            "name": "BulkEditTest",
            "index": 18,
            "value": 20
        },
        {
            "name": "UpdateGeoLocationStatusProdLDC1",
            "index": 19,
            "value": 21
        },
        {
            "name": "UpdateGeoLocationStatusProdLDC2",
            "index": 20,
            "value": 22
        },
        {
            "name": "UpdateGeoLocationStatusTest",
            "index": 21,
            "value": 23
        },
        {
            "name": "Import",
            "index": 22,
            "value": 24
        },
        {
            "name": "BulkEditCustomerThrottleProdLDC1",
            "index": 23,
            "value": 25
        },
        {
            "name": "BulkEditCustomerThrottleProdLDC2",
            "index": 24,
            "value": 26
        },
        {
            "name": "BulkEditCustomerThrottleTest",
            "index": 25,
            "value": 27
        },
        {
            "name": "OfflineConversionUploadPreviewLDC1",
            "index": 26,
            "value": 28
        },
        {
            "name": "OfflineConversionUploadPreviewLDC2",
            "index": 27,
            "value": 29
        },
        {
            "name": "OfflineConversionUploadPreviewTest",
            "index": 28,
            "value": 30
        },
        {
            "name": "OfflineConversionUploadCommitLDC1",
            "index": 29,
            "value": 31
        },
        {
            "name": "OfflineConversionUploadCommitLDC2",
            "index": 30,
            "value": 32
        },
        {
            "name": "OfflineConversionUploadCommitTest",
            "index": 31,
            "value": 33
        },
        {
            "name": "ReverseGeoCodeRadiusTargetLDC1",
            "index": 32,
            "value": 35
        },
        {
            "name": "ReverseGeoCodeRadiusTargetLDC2",
            "index": 33,
            "value": 36
        },
        {
            "name": "ReverseGeoCodeRadiusTargetTest",
            "index": 34,
            "value": 37
        },
        {
            "name": "Script",
            "index": 35,
            "value": 38
        },
        {
            "name": "ScriptPreview",
            "index": 36,
            "value": 39
        },
        {
            "name": "ImportTest",
            "index": 37,
            "value": 40
        },
        {
            "name": "GoogleMyBusinessImport",
            "index": 38,
            "value": 41
        },
        {
            "name": "ClickToCallBISync",
            "index": 39,
            "value": 42
        },
        {
            "name": "CloudImport",
            "index": 40,
            "value": 43
        },
        {
            "name": "CloudImportTest",
            "index": 41,
            "value": 44
        },
        {
            "name": "BulkAction",
            "index": 42,
            "value": 45
        },
        {
            "name": "BulkActionPreview",
            "index": 43,
            "value": 46
        },
        {
            "name": "DimensionTabReport",
            "index": 44,
            "value": 47
        },
        {
            "name": "DimensionTabReportTest",
            "index": 45,
            "value": 48
        }
    ]);

    types["Enum.TaskItemState"] = $data.createEnum("Enum.TaskItemState", [{
            "name": "Deleted",
            "index": 0,
            "value": 0
        },
        {
            "name": "Active",
            "index": 1,
            "value": 1
        },
        {
            "name": "Paused",
            "index": 2,
            "value": 2
        }
    ]);

    types["Enum.NotificationType"] = $data.createEnum("Enum.NotificationType", [{
            "name": "None",
            "index": 0,
            "value": 0
        },
        {
            "name": "OnChange",
            "index": 1,
            "value": 1
        },
        {
            "name": "OnError",
            "index": 2,
            "value": 2
        },
        {
            "name": "Always",
            "index": 3,
            "value": 255
        }
    ]);

    types["Enum.NotificationMedium"] = $data.createEnum("Enum.NotificationMedium", [{
        "name": "Email",
        "index": 0,
        "value": 1
    }]);

    types["Enum.RunResultState"] = $data.createEnum("Enum.RunResultState", [{
            "name": "InProgress",
            "index": 0,
            "value": 0
        },
        {
            "name": "Completed",
            "index": 1,
            "value": 1
        },
        {
            "name": "Failed",
            "index": 2,
            "value": 2
        },
        {
            "name": "RetryNeeded",
            "index": 3,
            "value": 3
        },
        {
            "name": "PendingExecution",
            "index": 4,
            "value": 4
        },
        {
            "name": "AccessDenied",
            "index": 5,
            "value": 5
        },
        {
            "name": "UserError",
            "index": 6,
            "value": 6
        }
    ]);

    types["Enum.CloudImportStatus"] = $data.createEnum("Enum.CloudImportStatus", [{
            "name": "NotStarted",
            "index": 0,
            "value": 0
        },
        {
            "name": "InProgress",
            "index": 1,
            "value": 1
        },
        {
            "name": "Complete",
            "index": 2,
            "value": 2
        },
        {
            "name": "Failed",
            "index": 3,
            "value": 3
        }
    ]);

    types["Enum.OfflineConversionFileType"] = $data.createEnum("Enum.OfflineConversionFileType", [{
            "name": "None",
            "index": 0,
            "value": 0
        },
        {
            "name": "InputFile",
            "index": 1,
            "value": 1
        },
        {
            "name": "AllRecordsResultFile",
            "index": 2,
            "value": 2
        },
        {
            "name": "ErrorOnlyResultFile",
            "index": 3,
            "value": 3
        }
    ]);

    types["Enum.ImportStatus"] = $data.createEnum("Enum.ImportStatus", [{
            "name": "Unknown",
            "index": 0,
            "value": 0
        },
        {
            "name": "NotStarted",
            "index": 1,
            "value": 1
        },
        {
            "name": "UploadInProgress",
            "index": 2,
            "value": 2
        },
        {
            "name": "ValidationInProgress",
            "index": 3,
            "value": 3
        },
        {
            "name": "ValidationCompleted",
            "index": 4,
            "value": 4
        },
        {
            "name": "SubmitInProgress",
            "index": 5,
            "value": 5
        },
        {
            "name": "Complete",
            "index": 6,
            "value": 6
        },
        {
            "name": "Cancelled",
            "index": 7,
            "value": 7
        },
        {
            "name": "Failed",
            "index": 8,
            "value": 8
        },
        {
            "name": "ColumnMapping",
            "index": 9,
            "value": 9
        },
        {
            "name": "Resolve",
            "index": 10,
            "value": 10
        },
        {
            "name": "Review",
            "index": 11,
            "value": 11
        },
        {
            "name": "BulkFileGenerateInProgress",
            "index": 12,
            "value": 12
        }
    ]);

    types["Enum.ImportType"] = $data.createEnum("Enum.ImportType", [{
            "name": "GoogleAPIImport",
            "index": 0,
            "value": 1
        },
        {
            "name": "FileBasedImport",
            "index": 1,
            "value": 2
        },
        {
            "name": "GoogleMyBusinessImport",
            "index": 2,
            "value": 3
        },
        {
            "name": "CloudImport",
            "index": 3,
            "value": 4
        }
    ]);

    types["Enum.ImportAction"] = $data.createEnum("Enum.ImportAction", [{
            "name": "Preview",
            "index": 0,
            "value": 0
        },
        {
            "name": "Commit",
            "index": 1,
            "value": 1
        }
    ]);

    types["Enum.FilterEntityType"] = $data.createEnum("Enum.FilterEntityType", [{
            "name": "CampaignNegativeKeywords",
            "index": 0,
            "value": 1
        },
        {
            "name": "AdGroupNegativeKeywords",
            "index": 1,
            "value": 2
        },
        {
            "name": "CampaignTargets",
            "index": 2,
            "value": 4
        },
        {
            "name": "AdGroupTargets",
            "index": 3,
            "value": 8
        },
        {
            "name": "CampaignNegativeSites",
            "index": 4,
            "value": 16
        },
        {
            "name": "AdGroupNegativeSites",
            "index": 5,
            "value": 32
        },
        {
            "name": "AdEditorialRejectionReasons",
            "index": 6,
            "value": 64
        },
        {
            "name": "KeywordEditorialRejectionReasons",
            "index": 7,
            "value": 128
        },
        {
            "name": "CampaignSiteLinksAdExtensions",
            "index": 8,
            "value": 256
        },
        {
            "name": "CampaignLocationAdExtensions",
            "index": 9,
            "value": 1024
        },
        {
            "name": "CampaignCallAdExtensions",
            "index": 10,
            "value": 2048
        },
        {
            "name": "AdGroupProductTargets",
            "index": 11,
            "value": 4096
        },
        {
            "name": "ProductTargetEditorialRejectionReasons",
            "index": 12,
            "value": 8192
        },
        {
            "name": "AdGroupSiteLinksAdExtensions",
            "index": 13,
            "value": 16384
        },
        {
            "name": "Campaigns",
            "index": 14,
            "value": 32768
        },
        {
            "name": "AdGroups",
            "index": 15,
            "value": 65536
        },
        {
            "name": "Ads",
            "index": 16,
            "value": 131072
        },
        {
            "name": "Keywords",
            "index": 17,
            "value": 262144
        },
        {
            "name": "LocationAdExtensions",
            "index": 18,
            "value": 524288
        },
        {
            "name": "CallAdExtensions",
            "index": 19,
            "value": 1048576
        },
        {
            "name": "SiteLinksAdExtensions",
            "index": 20,
            "value": 2097152
        },
        {
            "name": "ImageAdExtensions",
            "index": 21,
            "value": 8388608
        },
        {
            "name": "CampaignImageAdExtensions",
            "index": 22,
            "value": 16777216
        },
        {
            "name": "AdGroupImageAdExtensions",
            "index": 23,
            "value": 33554432
        },
        {
            "name": "NegativeKeywordsList",
            "index": 24,
            "value": 536870912
        },
        {
            "name": "NegativeKeyword",
            "index": 25,
            "value": 1073741824
        },
        {
            "name": "CampaignNegativeKeywordList",
            "index": 26,
            "value": 2147483648
        },
        {
            "name": "AppAdExtensions",
            "index": 27,
            "value": 4294967296
        },
        {
            "name": "CampaignAppAdExtensions",
            "index": 28,
            "value": 8589934592
        },
        {
            "name": "AdGroupAppAdExtensions",
            "index": 29,
            "value": 17179869184
        },
        {
            "name": "PriceAdExtensions",
            "index": 30,
            "value": 34359738368
        },
        {
            "name": "CampaignPriceAdExtensions",
            "index": 31,
            "value": 68719476736
        },
        {
            "name": "AdGroupPriceAdExtensions",
            "index": 32,
            "value": 137438953472
        },
        {
            "name": "ReviewAdExtensions",
            "index": 33,
            "value": 274877906944
        },
        {
            "name": "CampaignReviewAdExtensions",
            "index": 34,
            "value": 549755813888
        },
        {
            "name": "AdGroupReviewAdExtensions",
            "index": 35,
            "value": 1099511627776
        },
        {
            "name": "CampaignNegativeDynamicSearchAdTargets",
            "index": 36,
            "value": 2199023255552
        },
        {
            "name": "AdGroupDynamicSearchAdTargets",
            "index": 37,
            "value": 4398046511104
        },
        {
            "name": "AdGroupNegativeDynamicSearchAdTargets",
            "index": 38,
            "value": 8796093022208
        },
        {
            "name": "AdGroupProductPartitions",
            "index": 39,
            "value": 17592186044416
        },
        {
            "name": "CampaignProductScopes",
            "index": 40,
            "value": 35184372088832
        },
        {
            "name": "CalloutAdExtensions",
            "index": 41,
            "value": 70368744177664
        },
        {
            "name": "CampaignCalloutAdExtensions",
            "index": 42,
            "value": 140737488355328
        },
        {
            "name": "AdGroupCalloutAdExtensions",
            "index": 43,
            "value": 281474976710656
        },
        {
            "name": "ActionLinkAdExtensions",
            "index": 44,
            "value": 2251799813685248
        },
        {
            "name": "CampaignActionLinkAdExtensions",
            "index": 45,
            "value": 4503599627370496
        },
        {
            "name": "AdGroupActionLinkAdExtensions",
            "index": 46,
            "value": 9007199254740992
        },
        {
            "name": "StructuredSnippetAdExtensions",
            "index": 47,
            "value": 18014398509481984
        },
        {
            "name": "CampaignStructuredSnippetAdExtensions",
            "index": 48,
            "value": 36028797018963970
        },
        {
            "name": "AdGroupStructuredSnippetAdExtensions",
            "index": 49,
            "value": 72057594037927940
        },
        {
            "name": "Sitelink2AdExtensions",
            "index": 50,
            "value": 144115188075855870
        },
        {
            "name": "CampaignSitelink2AdExtensions",
            "index": 51,
            "value": 288230376151711740
        },
        {
            "name": "AdGroupSitelink2AdExtensions",
            "index": 52,
            "value": 576460752303423500
        },
        {
            "name": "Budgets",
            "index": 53,
            "value": 1152921504606847000
        }
    ]);

    types["Enum.FilterEntityTypeV2"] = $data.createEnum("Enum.FilterEntityTypeV2", [{
            "name": "Unknown",
            "index": 0,
            "value": 0
        },
        {
            "name": "CampaignNegativeKeywords",
            "index": 1,
            "value": 1
        },
        {
            "name": "AdGroupNegativeKeywords",
            "index": 2,
            "value": 2
        },
        {
            "name": "CampaignTargets",
            "index": 3,
            "value": 3
        },
        {
            "name": "AdGroupTargets",
            "index": 4,
            "value": 4
        },
        {
            "name": "CampaignNegativeSites",
            "index": 5,
            "value": 5
        },
        {
            "name": "AdGroupNegativeSites",
            "index": 6,
            "value": 6
        },
        {
            "name": "AdEditorialRejectionReasons",
            "index": 7,
            "value": 7
        },
        {
            "name": "KeywordEditorialRejectionReasons",
            "index": 8,
            "value": 8
        },
        {
            "name": "CampaignSiteLinksAdExtensions",
            "index": 9,
            "value": 9
        },
        {
            "name": "CampaignLocationAdExtensions",
            "index": 10,
            "value": 11
        },
        {
            "name": "CampaignCallAdExtensions",
            "index": 11,
            "value": 12
        },
        {
            "name": "AdGroupProductTargets",
            "index": 12,
            "value": 13
        },
        {
            "name": "ProductTargetEditorialRejectionReasons",
            "index": 13,
            "value": 14
        },
        {
            "name": "AdGroupSiteLinksAdExtensions",
            "index": 14,
            "value": 15
        },
        {
            "name": "Campaigns",
            "index": 15,
            "value": 16
        },
        {
            "name": "AdGroups",
            "index": 16,
            "value": 17
        },
        {
            "name": "Ads",
            "index": 17,
            "value": 18
        },
        {
            "name": "Keywords",
            "index": 18,
            "value": 19
        },
        {
            "name": "LocationAdExtensions",
            "index": 19,
            "value": 20
        },
        {
            "name": "CallAdExtensions",
            "index": 20,
            "value": 21
        },
        {
            "name": "SiteLinksAdExtensions",
            "index": 21,
            "value": 22
        },
        {
            "name": "ImageAdExtensions",
            "index": 22,
            "value": 24
        },
        {
            "name": "CampaignImageAdExtensions",
            "index": 23,
            "value": 25
        },
        {
            "name": "AdGroupImageAdExtensions",
            "index": 24,
            "value": 26
        },
        {
            "name": "NegativeKeywordsList",
            "index": 25,
            "value": 29
        },
        {
            "name": "NegativeKeyword",
            "index": 26,
            "value": 30
        },
        {
            "name": "CampaignNegativeKeywordList",
            "index": 27,
            "value": 31
        },
        {
            "name": "AppAdExtensions",
            "index": 28,
            "value": 32
        },
        {
            "name": "CampaignAppAdExtensions",
            "index": 29,
            "value": 33
        },
        {
            "name": "AdGroupAppAdExtensions",
            "index": 30,
            "value": 34
        },
        {
            "name": "PriceAdExtensions",
            "index": 31,
            "value": 35
        },
        {
            "name": "CampaignPriceAdExtensions",
            "index": 32,
            "value": 36
        },
        {
            "name": "AdGroupPriceAdExtensions",
            "index": 33,
            "value": 37
        },
        {
            "name": "ReviewAdExtensions",
            "index": 34,
            "value": 38
        },
        {
            "name": "CampaignReviewAdExtensions",
            "index": 35,
            "value": 39
        },
        {
            "name": "AdGroupReviewAdExtensions",
            "index": 36,
            "value": 40
        },
        {
            "name": "CampaignNegativeDynamicSearchAdTargets",
            "index": 37,
            "value": 41
        },
        {
            "name": "AdGroupDynamicSearchAdTargets",
            "index": 38,
            "value": 42
        },
        {
            "name": "AdGroupNegativeDynamicSearchAdTargets",
            "index": 39,
            "value": 43
        },
        {
            "name": "AdGroupProductPartitions",
            "index": 40,
            "value": 44
        },
        {
            "name": "CampaignProductScopes",
            "index": 41,
            "value": 45
        },
        {
            "name": "CalloutAdExtensions",
            "index": 42,
            "value": 46
        },
        {
            "name": "CampaignCalloutAdExtensions",
            "index": 43,
            "value": 47
        },
        {
            "name": "AdGroupCalloutAdExtensions",
            "index": 44,
            "value": 48
        },
        {
            "name": "RemarketingLists",
            "index": 45,
            "value": 49
        },
        {
            "name": "CustomAudiences",
            "index": 46,
            "value": 50
        },
        {
            "name": "ActionLinkAdExtensions",
            "index": 47,
            "value": 51
        },
        {
            "name": "CampaignActionLinkAdExtensions",
            "index": 48,
            "value": 52
        },
        {
            "name": "AdGroupActionLinkAdExtensions",
            "index": 49,
            "value": 53
        },
        {
            "name": "StructuredSnippetAdExtensions",
            "index": 50,
            "value": 54
        },
        {
            "name": "CampaignStructuredSnippetAdExtensions",
            "index": 51,
            "value": 55
        },
        {
            "name": "AdGroupStructuredSnippetAdExtensions",
            "index": 52,
            "value": 56
        },
        {
            "name": "Sitelink2AdExtensions",
            "index": 53,
            "value": 57
        },
        {
            "name": "CampaignSitelink2AdExtensions",
            "index": 54,
            "value": 58
        },
        {
            "name": "AdGroupSitelink2AdExtensions",
            "index": 55,
            "value": 59
        },
        {
            "name": "Budgets",
            "index": 56,
            "value": 60
        },
        {
            "name": "AccountLocationAdExtensions",
            "index": 57,
            "value": 61
        },
        {
            "name": "AccountImageAdExtensions",
            "index": 58,
            "value": 62
        },
        {
            "name": "AccountAppAdExtensions",
            "index": 59,
            "value": 63
        },
        {
            "name": "AccountPriceAdExtensions",
            "index": 60,
            "value": 64
        },
        {
            "name": "AccountReviewAdExtensions",
            "index": 61,
            "value": 65
        },
        {
            "name": "AccountCalloutAdExtensions",
            "index": 62,
            "value": 66
        },
        {
            "name": "AccountActionLinkAdExtensions",
            "index": 63,
            "value": 67
        },
        {
            "name": "AccountStructuredSnippetAdExtensions",
            "index": 64,
            "value": 68
        },
        {
            "name": "AccountSitelink2AdExtensions",
            "index": 65,
            "value": 69
        },
        {
            "name": "LabelCampaign",
            "index": 66,
            "value": 70
        },
        {
            "name": "LabelAdGroup",
            "index": 67,
            "value": 71
        },
        {
            "name": "LabelAd",
            "index": 68,
            "value": 72
        },
        {
            "name": "LabelKeyword",
            "index": 69,
            "value": 73
        },
        {
            "name": "InMarketAudiences",
            "index": 70,
            "value": 74
        },
        {
            "name": "Label",
            "index": 71,
            "value": 75
        },
        {
            "name": "Accounts",
            "index": 72,
            "value": 76
        }
    ]);

    types["Enum.EntityType"] = $data.createEnum("Enum.EntityType", [{
            "name": "Customer",
            "index": 0,
            "value": 0
        },
        {
            "name": "Account",
            "index": 1,
            "value": 1
        },
        {
            "name": "Campaign",
            "index": 2,
            "value": 2
        },
        {
            "name": "Adgroup",
            "index": 3,
            "value": 3
        },
        {
            "name": "Keyword",
            "index": 4,
            "value": 4
        },
        {
            "name": "TextAd",
            "index": 5,
            "value": 5
        },
        {
            "name": "ImageAd",
            "index": 6,
            "value": 7
        },
        {
            "name": "VideoAd",
            "index": 7,
            "value": 8
        },
        {
            "name": "Favorite",
            "index": 8,
            "value": 9
        },
        {
            "name": "CampaignNegativeSite",
            "index": 9,
            "value": 10
        },
        {
            "name": "AdGroupNegativeSite",
            "index": 10,
            "value": 11
        },
        {
            "name": "CampaignNegativeKeyword",
            "index": 11,
            "value": 12
        },
        {
            "name": "AdGroupNegativeKeyword",
            "index": 12,
            "value": 13
        },
        {
            "name": "KeywordNegativeKeyword",
            "index": 13,
            "value": 14
        },
        {
            "name": "CampaignLocationTarget",
            "index": 14,
            "value": 15
        },
        {
            "name": "AdGroupLocationTarget",
            "index": 15,
            "value": 16
        },
        {
            "name": "CampaignSitelinkAdExtension",
            "index": 16,
            "value": 20
        },
        {
            "name": "CampaignLocationAdExtension",
            "index": 17,
            "value": 23
        },
        {
            "name": "CampaignCallAdExtension",
            "index": 18,
            "value": 24
        },
        {
            "name": "ProductAd",
            "index": 19,
            "value": 25
        },
        {
            "name": "AdGroupProductTarget",
            "index": 20,
            "value": 26
        },
        {
            "name": "CampaignProductAdExtension",
            "index": 21,
            "value": 27
        },
        {
            "name": "CampaignTarget",
            "index": 22,
            "value": 28
        },
        {
            "name": "AdGroupSitelinkAdExtension",
            "index": 23,
            "value": 31
        },
        {
            "name": "AppAdExtension",
            "index": 24,
            "value": 65
        },
        {
            "name": "AdGroupAppAdExtension",
            "index": 25,
            "value": 66
        },
        {
            "name": "CampaignAppAdExtension",
            "index": 26,
            "value": 67
        },
        {
            "name": "AdGroupProductGroup",
            "index": 27,
            "value": 69
        },
        {
            "name": "CampaignProductScope",
            "index": 28,
            "value": 70
        },
        {
            "name": "TemplateAd",
            "index": 29,
            "value": 71
        },
        {
            "name": "DynamicSearchAd",
            "index": 30,
            "value": 72
        },
        {
            "name": "DynamicAdTarget",
            "index": 31,
            "value": 73
        },
        {
            "name": "ExpandedDynamicSearchAd",
            "index": 32,
            "value": 74
        },
        {
            "name": "CampaignCalloutAdExtension",
            "index": 33,
            "value": 75
        },
        {
            "name": "AdGroupCalloutAdExtension",
            "index": 34,
            "value": 76
        },
        {
            "name": "CampaignReviewAdExtension",
            "index": 35,
            "value": 77
        },
        {
            "name": "AdGroupReviewAdExtension",
            "index": 36,
            "value": 78
        },
        {
            "name": "CampaignStructuredSnippetAdExtension",
            "index": 37,
            "value": 79
        },
        {
            "name": "AdGroupStructuredSnippetAdExtension",
            "index": 38,
            "value": 80
        },
        {
            "name": "ExpandedTextAd",
            "index": 39,
            "value": 81
        },
        {
            "name": "Budget",
            "index": 40,
            "value": 82
        },
        {
            "name": "BidStrategyType",
            "index": 41,
            "value": 83
        },
        {
            "name": "CampaignPriceAdExtension",
            "index": 42,
            "value": 84
        },
        {
            "name": "AdGroupPriceAdExtension",
            "index": 43,
            "value": 85
        },
        {
            "name": "AccountLevelAdExtensionAssociation",
            "index": 44,
            "value": 86
        },
        {
            "name": "CampaignLevelAdExtensionAssociation",
            "index": 45,
            "value": 87
        },
        {
            "name": "AdGroupLevelAdExtensionAssociation",
            "index": 46,
            "value": 88
        },
        {
            "name": "Label",
            "index": 47,
            "value": 89
        },
        {
            "name": "NegativeKeywordList",
            "index": 48,
            "value": 90
        },
        {
            "name": "SharedNegativeKeyword",
            "index": 49,
            "value": 91
        },
        {
            "name": "CampaignNegativeKeywordListAssociation",
            "index": 50,
            "value": 92
        },
        {
            "name": "AccountLocationAdExtension",
            "index": 51,
            "value": 93
        },
        {
            "name": "AccountCalloutAdExtension",
            "index": 52,
            "value": 94
        },
        {
            "name": "AccountReviewAdExtension",
            "index": 53,
            "value": 95
        },
        {
            "name": "AccountStructuredSnippetAdExtension",
            "index": 54,
            "value": 96
        },
        {
            "name": "AccountPriceAdExtension",
            "index": 55,
            "value": 97
        },
        {
            "name": "AccountSitelinkAdExtension",
            "index": 56,
            "value": 98
        },
        {
            "name": "CampaignDeviceTarget",
            "index": 57,
            "value": 99
        },
        {
            "name": "AdGroupDeviceTarget",
            "index": 58,
            "value": 100
        },
        {
            "name": "CampaignRadiusTarget",
            "index": 59,
            "value": 101
        },
        {
            "name": "AdGroupRadiusTarget",
            "index": 60,
            "value": 102
        },
        {
            "name": "CampaignDayTimeTarget",
            "index": 61,
            "value": 103
        },
        {
            "name": "CampaignLocationIntentTarget",
            "index": 62,
            "value": 104
        },
        {
            "name": "Target",
            "index": 63,
            "value": 1000
        },
        {
            "name": "SearchQuery",
            "index": 64,
            "value": 1001
        },
        {
            "name": "AdExtensionReport",
            "index": 65,
            "value": 1002
        },
        {
            "name": "None",
            "index": 66,
            "value": 2000
        }
    ]);

    types["Enum.CloudImportVersion"] = $data.createEnum("Enum.CloudImportVersion", [{
        "name": "BAECloudImportPhase1",
        "index": 0,
        "value": 1
    }]);

    types["Enum.FileFormatEnum"] = $data.createEnum("Enum.FileFormatEnum", [{
            "name": "Default",
            "index": 0,
            "value": 0
        },
        {
            "name": "ExtendedV1",
            "index": 1,
            "value": 1
        }
    ]);

    types["Enum.Operator"] = $data.createEnum("Enum.Operator", [{
            "name": "Equals",
            "index": 0,
            "value": 0
        },
        {
            "name": "DoesNotEqual",
            "index": 1,
            "value": 1
        },
        {
            "name": "Contains",
            "index": 2,
            "value": 2
        },
        {
            "name": "DoesNotContain",
            "index": 3,
            "value": 3
        },
        {
            "name": "BeginsWith",
            "index": 4,
            "value": 4
        },
        {
            "name": "DoesNotBeginWith",
            "index": 5,
            "value": 5
        },
        {
            "name": "EndsWith",
            "index": 6,
            "value": 6
        },
        {
            "name": "DoesNotEndWith",
            "index": 7,
            "value": 7
        },
        {
            "name": "IsEmpty",
            "index": 8,
            "value": 8
        },
        {
            "name": "IsNotEmpty",
            "index": 9,
            "value": 9
        },
        {
            "name": "GreaterThan",
            "index": 10,
            "value": 10
        },
        {
            "name": "LessThan",
            "index": 11,
            "value": 11
        },
        {
            "name": "GreaterThanEqual",
            "index": 12,
            "value": 12
        },
        {
            "name": "LessThanEqual",
            "index": 13,
            "value": 13
        }
    ]);

    types["Enum.LogicalOperator"] = $data.createEnum("Enum.LogicalOperator", [{
            "name": "AND",
            "index": 0,
            "value": 0
        },
        {
            "name": "OR",
            "index": 1,
            "value": 1
        }
    ]);

    types["Enum.DownloadFormat"] = $data.createEnum("Enum.DownloadFormat", [{
            "name": "Csv",
            "index": 0,
            "value": 0
        },
        {
            "name": "Tsv",
            "index": 1,
            "value": 1
        },
        {
            "name": "Xlsx",
            "index": 2,
            "value": 2
        },
        {
            "name": "Csvzip",
            "index": 3,
            "value": 3
        }
    ]);

    types["Enum.EmailOption"] = $data.createEnum("Enum.EmailOption", [{
            "name": "OnlyCurrentUser",
            "index": 0,
            "value": 0
        },
        {
            "name": "AllAccountUsers",
            "index": 1,
            "value": 1
        },
        {
            "name": "Custom",
            "index": 2,
            "value": 2
        }
    ]);

    types["Enum.ImportNewOption"] = $data.createEnum("Enum.ImportNewOption", [{
            "name": "None",
            "index": 0,
            "value": 0
        },
        {
            "name": "ImportNewActiveEntitiesOnly",
            "index": 1,
            "value": 1
        },
        {
            "name": "ImportNewCampaignsAndMarkAsPaused",
            "index": 2,
            "value": 2
        },
        {
            "name": "ImportNewCampaignsAndChildEntities",
            "index": 3,
            "value": 4
        },
        {
            "name": "ImportNewAdGroupsAndChildEntitiesForExistingCampaigns",
            "index": 4,
            "value": 8
        },
        {
            "name": "ImportNewAdsForExistingAdGroups",
            "index": 5,
            "value": 16
        },
        {
            "name": "ImportNewKeywordsForExistingAdGroups",
            "index": 6,
            "value": 32
        },
        {
            "name": "ImportNewNegativeKeywordsForExistingParents",
            "index": 7,
            "value": 64
        },
        {
            "name": "ImportNewNegativeKeywordList",
            "index": 8,
            "value": 128
        }
    ]);

    types["Enum.ImportUpdateOption"] = $data.createEnum("Enum.ImportUpdateOption", [{
            "name": "None",
            "index": 0,
            "value": 0
        },
        {
            "name": "UpdateCampaignBudget",
            "index": 1,
            "value": 1
        },
        {
            "name": "UpdateAdGroupAndKeywordBids",
            "index": 2,
            "value": 2
        },
        {
            "name": "UpdateNegativeKeywords",
            "index": 3,
            "value": 4
        },
        {
            "name": "UpdateNegativeSites",
            "index": 4,
            "value": 8
        },
        {
            "name": "UpdateLocationTargets",
            "index": 5,
            "value": 16
        },
        {
            "name": "UpdateAdDestinationUrl",
            "index": 6,
            "value": 32
        },
        {
            "name": "UpdateAdExtensions",
            "index": 7,
            "value": 64
        },
        {
            "name": "UpdateKeywordDestinationUrl",
            "index": 8,
            "value": 128
        },
        {
            "name": "UpdateTrackingTemplateAndCustomParams",
            "index": 9,
            "value": 256
        },
        {
            "name": "UpdateStatusForExistingCampaigns",
            "index": 10,
            "value": 512
        },
        {
            "name": "UpdateNameForExistingCampaigns",
            "index": 11,
            "value": 1024
        },
        {
            "name": "UpdateExistingAdGroupsAndChildEntities",
            "index": 12,
            "value": 2048
        },
        {
            "name": "UpdateExistingAds",
            "index": 13,
            "value": 4096
        },
        {
            "name": "UpdateStatusForExistingAds",
            "index": 14,
            "value": 8192
        },
        {
            "name": "UpdateExistingKeywords",
            "index": 15,
            "value": 16384
        },
        {
            "name": "UpdateStatusForExistingKeywords",
            "index": 16,
            "value": 32768
        },
        {
            "name": "UpdateExistingNegativeKeywordList",
            "index": 17,
            "value": 65536
        }
    ]);

    types["Enum.AssetType"] = $data.createEnum("Enum.AssetType", [{
            "name": "Image",
            "index": 0,
            "value": 1
        },
        {
            "name": "Icon",
            "index": 1,
            "value": 2
        },
        {
            "name": "Image16x9",
            "index": 2,
            "value": 4
        },
        {
            "name": "Image15x10",
            "index": 3,
            "value": 8
        },
        {
            "name": "Image4x3",
            "index": 4,
            "value": 16
        },
        {
            "name": "Image12x10",
            "index": 5,
            "value": 32
        }
    ]);

    types["Enum.TipStatus"] = $data.createEnum("Enum.TipStatus", [{
            "name": "Active",
            "index": 0,
            "value": 0
        },
        {
            "name": "Clicked",
            "index": 1,
            "value": 1
        },
        {
            "name": "Dismissed",
            "index": 2,
            "value": 2
        }
    ]);

    types["Enum.DimensionRowType"] = $data.createEnum("Enum.DimensionRowType", [{
            "name": "Normal",
            "index": 0,
            "value": 0
        },
        {
            "name": "AggregatedOthers",
            "index": 1,
            "value": 1
        }
    ]);

    types["Enum.AggregationType"] = $data.createEnum("Enum.AggregationType", [{
            "name": "Overall",
            "index": 0,
            "value": 0
        },
        {
            "name": "Filtered",
            "index": 1,
            "value": 1
        },
        {
            "name": "Deleted",
            "index": 2,
            "value": 2
        },
        {
            "name": "NonDeleted",
            "index": 3,
            "value": 3
        },
        {
            "name": "ContentNonDeleted",
            "index": 4,
            "value": 4
        },
        {
            "name": "SearchNonDeleted",
            "index": 5,
            "value": 5
        },
        {
            "name": "NativeNonDeleted",
            "index": 6,
            "value": 6
        }
    ]);

    types["Enum.HttpStatusCode"] = $data.createEnum("Enum.HttpStatusCode", [{
            "name": "Continue",
            "index": 0,
            "value": 100
        },
        {
            "name": "SwitchingProtocols",
            "index": 1,
            "value": 101
        },
        {
            "name": "OK",
            "index": 2,
            "value": 200
        },
        {
            "name": "Created",
            "index": 3,
            "value": 201
        },
        {
            "name": "Accepted",
            "index": 4,
            "value": 202
        },
        {
            "name": "NonAuthoritativeInformation",
            "index": 5,
            "value": 203
        },
        {
            "name": "NoContent",
            "index": 6,
            "value": 204
        },
        {
            "name": "ResetContent",
            "index": 7,
            "value": 205
        },
        {
            "name": "PartialContent",
            "index": 8,
            "value": 206
        },
        {
            "name": "MultipleChoices",
            "index": 9,
            "value": 300
        },
        {
            "name": "MovedPermanently",
            "index": 10,
            "value": 301
        },
        {
            "name": "Redirect",
            "index": 11,
            "value": 302
        },
        {
            "name": "SeeOther",
            "index": 12,
            "value": 303
        },
        {
            "name": "NotModified",
            "index": 13,
            "value": 304
        },
        {
            "name": "UseProxy",
            "index": 14,
            "value": 305
        },
        {
            "name": "Unused",
            "index": 15,
            "value": 306
        },
        {
            "name": "TemporaryRedirect",
            "index": 16,
            "value": 307
        },
        {
            "name": "BadRequest",
            "index": 17,
            "value": 400
        },
        {
            "name": "Unauthorized",
            "index": 18,
            "value": 401
        },
        {
            "name": "PaymentRequired",
            "index": 19,
            "value": 402
        },
        {
            "name": "Forbidden",
            "index": 20,
            "value": 403
        },
        {
            "name": "NotFound",
            "index": 21,
            "value": 404
        },
        {
            "name": "MethodNotAllowed",
            "index": 22,
            "value": 405
        },
        {
            "name": "NotAcceptable",
            "index": 23,
            "value": 406
        },
        {
            "name": "ProxyAuthenticationRequired",
            "index": 24,
            "value": 407
        },
        {
            "name": "RequestTimeout",
            "index": 25,
            "value": 408
        },
        {
            "name": "Conflict",
            "index": 26,
            "value": 409
        },
        {
            "name": "Gone",
            "index": 27,
            "value": 410
        },
        {
            "name": "LengthRequired",
            "index": 28,
            "value": 411
        },
        {
            "name": "PreconditionFailed",
            "index": 29,
            "value": 412
        },
        {
            "name": "RequestEntityTooLarge",
            "index": 30,
            "value": 413
        },
        {
            "name": "RequestUriTooLong",
            "index": 31,
            "value": 414
        },
        {
            "name": "UnsupportedMediaType",
            "index": 32,
            "value": 415
        },
        {
            "name": "RequestedRangeNotSatisfiable",
            "index": 33,
            "value": 416
        },
        {
            "name": "ExpectationFailed",
            "index": 34,
            "value": 417
        },
        {
            "name": "UpgradeRequired",
            "index": 35,
            "value": 426
        },
        {
            "name": "InternalServerError",
            "index": 36,
            "value": 500
        },
        {
            "name": "NotImplemented",
            "index": 37,
            "value": 501
        },
        {
            "name": "BadGateway",
            "index": 38,
            "value": 502
        },
        {
            "name": "ServiceUnavailable",
            "index": 39,
            "value": 503
        },
        {
            "name": "GatewayTimeout",
            "index": 40,
            "value": 504
        },
        {
            "name": "HttpVersionNotSupported",
            "index": 41,
            "value": 505
        }
    ]);

    types["Enum.EntityContextType"] = $data.createEnum("Enum.EntityContextType", [{
            "name": "Account",
            "index": 0,
            "value": 0
        },
        {
            "name": "Campaign",
            "index": 1,
            "value": 1
        },
        {
            "name": "AdGroup",
            "index": 2,
            "value": 2
        }
    ]);

    types["Enum.CustomColumnFormatting"] = $data.createEnum("Enum.CustomColumnFormatting", [{
            "name": "Currency",
            "index": 0,
            "value": 0
        },
        {
            "name": "Number",
            "index": 1,
            "value": 1
        },
        {
            "name": "Percentage",
            "index": 2,
            "value": 2
        }
    ]);

    exports.type = types["Default.Container"] = $data("$data.EntityContext").extend("Default.Container", {
        Customers: {
            "type": "$data.EntitySet",
            "elementType": "Model.Customer"
        },
        Accounts: {
            "type": "$data.EntitySet",
            "elementType": "Model.Account",
            "actions": {
                "GetAggregatedBudget": {
                    "type": "$data.ServiceAction",
                    "namespace": "Default",
                    "returnType": "$data.Queryable",
                    "params": [{
                        "name": "accountIds",
                        "type": "Array",
                        "elementType": "Edm.Int64"
                    }],
                    "elementType": "Model.Account"
                },
                "GridData": {
                    "type": "$data.ServiceAction",
                    "namespace": "Default",
                    "returnType": "$data.Queryable",
                    "params": [{
                        "name": "gridDataParameters",
                        "type": "Model.GridDataParameters"
                    }],
                    "elementType": "Model.Account"
                },
                "PerformanceTimeSeries": {
                    "type": "$data.ServiceFunction",
                    "namespace": "Default",
                    "returnType": "Model.IEnumerable_1OfPerformanceTimeSeries",
                    "params": [{
                        "name": "granularity",
                        "type": "Enum.Granularity"
                    }, {
                        "name": "startDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "endDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "comparisonStartDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "comparisonEndDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "metrics",
                        "type": "Edm.String"
                    }, {
                        "name": "movingAverage",
                        "type": "Edm.Boolean"
                    }]
                }
            }
        },
        Apps: {
            "type": "$data.EntitySet",
            "elementType": "Model.App"
        },
        Campaigns: {
            "type": "$data.EntitySet",
            "elementType": "Model.Campaign",
            "actions": {
                "GridData": {
                    "type": "$data.ServiceAction",
                    "namespace": "Default",
                    "returnType": "$data.Queryable",
                    "params": [{
                        "name": "gridDataParameters",
                        "type": "Model.GridDataParameters"
                    }],
                    "elementType": "Model.Campaign"
                },
                "PerformanceTimeSeries": {
                    "type": "$data.ServiceFunction",
                    "namespace": "Default",
                    "returnType": "Model.IEnumerable_1OfPerformanceTimeSeries",
                    "params": [{
                        "name": "granularity",
                        "type": "Enum.Granularity"
                    }, {
                        "name": "startDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "endDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "comparisonStartDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "comparisonEndDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "metrics",
                        "type": "Edm.String"
                    }, {
                        "name": "movingAverage",
                        "type": "Edm.Boolean"
                    }]
                }
            }
        },
        AdGroups: {
            "type": "$data.EntitySet",
            "elementType": "Model.AdGroup",
            "actions": {
                "GridData": {
                    "type": "$data.ServiceAction",
                    "namespace": "Default",
                    "returnType": "$data.Queryable",
                    "params": [{
                        "name": "gridDataParameters",
                        "type": "Model.GridDataParameters"
                    }],
                    "elementType": "Model.AdGroup"
                },
                "PerformanceTimeSeries": {
                    "type": "$data.ServiceFunction",
                    "namespace": "Default",
                    "returnType": "Model.IEnumerable_1OfPerformanceTimeSeries",
                    "params": [{
                        "name": "granularity",
                        "type": "Enum.Granularity"
                    }, {
                        "name": "startDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "endDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "comparisonStartDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "comparisonEndDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "metrics",
                        "type": "Edm.String"
                    }, {
                        "name": "movingAverage",
                        "type": "Edm.Boolean"
                    }]
                }
            }
        },
        Keywords: {
            "type": "$data.EntitySet",
            "elementType": "Model.Keyword",
            "actions": {
                "PerformanceTimeSeries": {
                    "type": "$data.ServiceFunction",
                    "namespace": "Default",
                    "returnType": "Model.IEnumerable_1OfPerformanceTimeSeries",
                    "params": [{
                        "name": "granularity",
                        "type": "Enum.Granularity"
                    }, {
                        "name": "startDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "endDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "comparisonStartDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "comparisonEndDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "metrics",
                        "type": "Edm.String"
                    }, {
                        "name": "movingAverage",
                        "type": "Edm.Boolean"
                    }]
                }
            }
        },
        Ads: {
            "type": "$data.EntitySet",
            "elementType": "Model.Ad",
            "actions": {
                "PerformanceTimeSeries": {
                    "type": "$data.ServiceFunction",
                    "namespace": "Default",
                    "returnType": "Model.IEnumerable_1OfPerformanceTimeSeries",
                    "params": [{
                        "name": "granularity",
                        "type": "Enum.Granularity"
                    }, {
                        "name": "startDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "endDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "comparisonStartDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "comparisonEndDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "metrics",
                        "type": "Edm.String"
                    }, {
                        "name": "movingAverage",
                        "type": "Edm.Boolean"
                    }]
                }
            }
        },
        NegativeKeywordLists: {
            "type": "$data.EntitySet",
            "elementType": "Model.NegativeKeywordList"
        },
        NegativeKeywords: {
            "type": "$data.EntitySet",
            "elementType": "Model.NegativeKeyword",
            "actions": {
                "PostNegativeKeywords": {
                    "type": "$data.ServiceAction",
                    "namespace": "Default",
                    "returnType": "Model.HttpResponseMessage",
                    "params": [{
                        "name": "ParamNegativeKeywords",
                        "type": "Array",
                        "elementType": "Model.NegativeKeywordComplex"
                    }]
                }
            }
        },
        BulkEditSessions: {
            "type": "$data.EntitySet",
            "elementType": "Model.BulkEditSession"
        },
        BulkEditResults: {
            "type": "$data.EntitySet",
            "elementType": "Model.BulkEditResult"
        },
        RemessagingAudiences: {
            "type": "$data.EntitySet",
            "elementType": "Model.RemessagingAudience",
            "actions": {
                "Delete": {
                    "type": "$data.ServiceAction",
                    "namespace": "Default",
                    "returnType": "Model.HttpResponseMessage",
                    "params": [{
                        "name": "audienceIds",
                        "type": "Array",
                        "elementType": "Edm.Int64"
                    }]
                }
            }
        },
        Audiences: {
            "type": "$data.EntitySet",
            "elementType": "Model.Audience",
            "actions": {
                "Delete": {
                    "type": "$data.ServiceAction",
                    "namespace": "Default",
                    "returnType": "Model.HttpResponseMessage",
                    "params": [{
                        "name": "audienceIds",
                        "type": "Array",
                        "elementType": "Edm.Int64"
                    }]
                }
            }
        },
        Tags: {
            "type": "$data.EntitySet",
            "elementType": "Model.Tag"
        },
        TaskItems: {
            "type": "$data.EntitySet",
            "elementType": "Model.TaskItem"
        },
        Goals: {
            "type": "$data.EntitySet",
            "elementType": "Model.Goal"
        },
        TaskItemExecutions: {
            "type": "$data.EntitySet",
            "elementType": "Model.TaskItemExecution"
        },
        AudienceAdGroupCriterions: {
            "type": "$data.EntitySet",
            "elementType": "Model.AudienceAdGroupCriterion"
        },
        AdGroupAudienceAssociations: {
            "type": "$data.EntitySet",
            "elementType": "Model.AdGroupAudienceAssociation"
        },
        AdGroupAudienceCriterionWithBIs: {
            "type": "$data.EntitySet",
            "elementType": "Model.AdGroupAudienceCriterionWithBI"
        },
        AdGroupAudienceCriterions: {
            "type": "$data.EntitySet",
            "elementType": "Model.AdGroupAudienceCriterion"
        },
        ProductOffers: {
            "type": "$data.EntitySet",
            "elementType": "Model.ProductOffer"
        },
        ProductPartitions: {
            "type": "$data.EntitySet",
            "elementType": "Model.ProductPartition"
        },
        Preferences: {
            "type": "$data.EntitySet",
            "elementType": "Model.Preference"
        },
        ProductOfferStores: {
            "type": "$data.EntitySet",
            "elementType": "Model.ProductOfferStore"
        },
        Images: {
            "type": "$data.EntitySet",
            "elementType": "Model.Image"
        },
        ImageAdExtensions: {
            "type": "$data.EntitySet",
            "elementType": "Model.ImageAdExtension"
        },
        LocationAdExtensions: {
            "type": "$data.EntitySet",
            "elementType": "Model.LocationAdExtension"
        },
        AdExtensions: {
            "type": "$data.EntitySet",
            "elementType": "Model.AdExtension"
        },
        AdExtensionAssociations: {
            "type": "$data.EntitySet",
            "elementType": "Model.AdExtensionAssociation",
            "actions": {
                "Disassociate": {
                    "type": "$data.ServiceAction",
                    "namespace": "Default",
                    "returnType": "Model.HttpResponseMessage",
                    "params": [{
                        "name": "adExtensionAssociations",
                        "type": "Array",
                        "elementType": "Model.AdExtensionAssociationComplex"
                    }]
                },
                "Associate": {
                    "type": "$data.ServiceAction",
                    "namespace": "Default",
                    "returnType": "Model.HttpResponseMessage",
                    "params": [{
                        "name": "adExtensionAssociations",
                        "type": "Array",
                        "elementType": "Model.AdExtensionAssociationComplex"
                    }]
                }
            }
        },
        Labels: {
            "type": "$data.EntitySet",
            "elementType": "Model.Label"
        },
        Budgets: {
            "type": "$data.EntitySet",
            "elementType": "Model.Budget"
        },
        Locations: {
            "type": "$data.EntitySet",
            "elementType": "Model.Location"
        },
        AdGroupCriterions: {
            "type": "$data.EntitySet",
            "elementType": "Model.AdGroupCriterion"
        },
        CampaignCriterions: {
            "type": "$data.EntitySet",
            "elementType": "Model.CampaignCriterion",
            "actions": {
                "GridData": {
                    "type": "$data.ServiceAction",
                    "namespace": "Default",
                    "returnType": "$data.Queryable",
                    "params": [{
                        "name": "gridDataParameters",
                        "type": "Model.GridDataParameters"
                    }],
                    "elementType": "Model.CampaignCriterion"
                }
            }
        },
        DsaTargets: {
            "type": "$data.EntitySet",
            "elementType": "Model.DsaTarget",
            "actions": {
                "PostDsaTargets": {
                    "type": "$data.ServiceAction",
                    "namespace": "Default",
                    "returnType": "Model.HttpResponseMessage",
                    "params": [{
                        "name": "ParamDsaTargets",
                        "type": "Array",
                        "elementType": "Model.DsaTarget"
                    }]
                },
                "PerformanceTimeSeries": {
                    "type": "$data.ServiceFunction",
                    "namespace": "Default",
                    "returnType": "Model.IEnumerable_1OfPerformanceTimeSeries",
                    "params": [{
                        "name": "granularity",
                        "type": "Enum.Granularity"
                    }, {
                        "name": "startDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "endDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "comparisonStartDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "comparisonEndDate",
                        "type": "Edm.DateTimeOffset"
                    }, {
                        "name": "metrics",
                        "type": "Edm.String"
                    }, {
                        "name": "movingAverage",
                        "type": "Edm.Boolean"
                    }]
                }
            }
        },
        DomainCategorys: {
            "type": "$data.EntitySet",
            "elementType": "Model.DomainCategory"
        },
        NegativeAdGroupDsaTargets: {
            "type": "$data.EntitySet",
            "elementType": "Model.NegativeAdGroupDsaTarget",
            "actions": {
                "PostNegativeAdGroupDsaTargets": {
                    "type": "$data.ServiceAction",
                    "namespace": "Default",
                    "returnType": "Model.HttpResponseMessage",
                    "params": [{
                        "name": "ParamNegativeAdGroupDsaTargets",
                        "type": "Array",
                        "elementType": "Model.NegativeAdGroupDsaTarget"
                    }]
                }
            }
        },
        NegativeCampaignDsaTargets: {
            "type": "$data.EntitySet",
            "elementType": "Model.NegativeCampaignDsaTarget"
        },
        DsaSearchTerms: {
            "type": "$data.EntitySet",
            "elementType": "Model.DsaSearchTerm"
        },
        Categorys: {
            "type": "$data.EntitySet",
            "elementType": "Model.Category"
        },
        NegativeKeywordConflicts: {
            "type": "$data.EntitySet",
            "elementType": "Model.NegativeKeywordConflict"
        },
        SearchTerms: {
            "type": "$data.EntitySet",
            "elementType": "Model.SearchTerm"
        },
        DimensionRow: {
            "type": "$data.EntitySet",
            "elementType": "Model.DimensionRow"
        },
        GetTokenForUpload: {
            "type": "$data.ServiceFunction",
            "returnType": "Edm.String",
            "params": [{
                "name": "customerId",
                "type": "Edm.Int64"
            }]
        },
        GetBulkFileUrl: {
            "type": "$data.ServiceFunction",
            "returnType": "Edm.String",
            "params": [{
                "name": "customerId",
                "type": "Edm.Int64"
            }, {
                "name": "fileIdentifier",
                "type": "Edm.String"
            }, {
                "name": "fileType",
                "type": "Enum.BulkFileType"
            }]
        },
        GetBlobUploadUrl: {
            "type": "$data.ServiceFunction",
            "returnType": "Model.Blob",
            "params": [{
                "name": "customerId",
                "type": "Edm.Int64"
            }, {
                "name": "fileType",
                "type": "Enum.BulkFileType"
            }, {
                "name": "fileExtension",
                "type": "Edm.String"
            }]
        }
    });

    exports.Model = {
        "AdsApiError": types["Model.AdsApiError"],
        "TotalsWithPerformanceMetrics": types["Model.TotalsWithPerformanceMetrics"],
        "AccountTotals": types["Model.AccountTotals"],
        "CampaignTotals": types["Model.CampaignTotals"],
        "AggregateBudget": types["Model.AggregateBudget"],
        "PerformanceMetrics": types["Model.PerformanceMetrics"],
        "GoalPerformanceMetrics": types["Model.GoalPerformanceMetrics"],
        "PerformanceMetricsTotalsByNetworkSplit": types["Model.PerformanceMetricsTotalsByNetworkSplit"],
        "InsertionOrder": types["Model.InsertionOrder"],
        "InsertionOrderDetails": types["Model.InsertionOrderDetails"],
        "PerformanceTrendItem": types["Model.PerformanceTrendItem"],
        "User": types["Model.User"],
        "ProductCondition": types["Model.ProductCondition"],
        "AttributeStatistic": types["Model.AttributeStatistic"],
        "BaseExpression": types["Model.BaseExpression"],
        "Filter": types["Model.Filter"],
        "EntityFilter": types["Model.EntityFilter"],
        "ChildEntityFilter": types["Model.ChildEntityFilter"],
        "BulkEditAction": types["Model.BulkEditAction"],
        "AdGroupAudienceCriterionComplex": types["Model.AdGroupAudienceCriterionComplex"],
        "AdExtensionAssociationComplex": types["Model.AdExtensionAssociationComplex"],
        "PerformanceTimeSeries": types["Model.PerformanceTimeSeries"],
        "Dictionary_2OfString_String": types["Model.Dictionary_2OfString_String"],
        "Dictionary_2OfString_ImportStatistics": types["Model.Dictionary_2OfString_ImportStatistics"],
        "IEnumerable_1OfPerformanceTrendItem": types["Model.IEnumerable_1OfPerformanceTrendItem"],
        "HttpResponseMessage": types["Model.HttpResponseMessage"],
        "IEnumerable_1OfAttributeStatistic": types["Model.IEnumerable_1OfAttributeStatistic"],
        "Blob": types["Model.Blob"],
        "NegativeKeywordComplex": types["Model.NegativeKeywordComplex"],
        "IEnumerable_1OfIEnumerable_1OfString": types["Model.IEnumerable_1OfIEnumerable_1OfString"],
        "IEnumerable_1OfPerformanceTimeSeries": types["Model.IEnumerable_1OfPerformanceTimeSeries"],
        "GridDataParameters": types["Model.GridDataParameters"],
        "AccountInactiveReason": types["Model.AccountInactiveReason"],
        "QualityScoreData": types["Model.QualityScoreData"],
        "CustomColumnOutputValue": types["Model.CustomColumnOutputValue"],
        "SegmentedPerformanceMetrics": types["Model.SegmentedPerformanceMetrics"],
        "SegmentationKey": types["Model.SegmentationKey"],
        "GoalNameSegmentationKey": types["Model.GoalNameSegmentationKey"],
        "GoalTypeSegmentationKey": types["Model.GoalTypeSegmentationKey"],
        "AdPositionSegmentationKey": types["Model.AdPositionSegmentationKey"],
        "BiddedMatchTypeSegmentationKey": types["Model.BiddedMatchTypeSegmentationKey"],
        "CurrencySegmentationKey": types["Model.CurrencySegmentationKey"],
        "DayOfTheWeekSegmentationKey": types["Model.DayOfTheWeekSegmentationKey"],
        "DaySegmentationKey": types["Model.DaySegmentationKey"],
        "DeliveredMatchTypeSegmentationKey": types["Model.DeliveredMatchTypeSegmentationKey"],
        "DeviceOSSegmentationKey": types["Model.DeviceOSSegmentationKey"],
        "DeviceTypeSegmentationKey": types["Model.DeviceTypeSegmentationKey"],
        "HourOfTheDaySegmentationKey": types["Model.HourOfTheDaySegmentationKey"],
        "MediumSegmentationKey": types["Model.MediumSegmentationKey"],
        "MonthSegmentationKey": types["Model.MonthSegmentationKey"],
        "NetworkSegmentationKey": types["Model.NetworkSegmentationKey"],
        "QuarterSegmentationKey": types["Model.QuarterSegmentationKey"],
        "TopVsOtherSegmentationKey": types["Model.TopVsOtherSegmentationKey"],
        "WeekSegmentationKey": types["Model.WeekSegmentationKey"],
        "YearSegmentationKey": types["Model.YearSegmentationKey"],
        "PhonePerformanceMetrics": types["Model.PhonePerformanceMetrics"],
        "SegmentedPhonePerformanceMetrics": types["Model.SegmentedPhonePerformanceMetrics"],
        "CustomParameter": types["Model.CustomParameter"],
        "BiddingScheme": types["Model.BiddingScheme"],
        "TargetCpaBiddingScheme": types["Model.TargetCpaBiddingScheme"],
        "MaxConversionsBiddingScheme": types["Model.MaxConversionsBiddingScheme"],
        "MaxClicksBiddingScheme": types["Model.MaxClicksBiddingScheme"],
        "ManualBiddingScheme": types["Model.ManualBiddingScheme"],
        "Bid": types["Model.Bid"],
        "InheritFromParentBiddingScheme": types["Model.InheritFromParentBiddingScheme"],
        "EnhancedCpcBiddingScheme": types["Model.EnhancedCpcBiddingScheme"],
        "CampaignSettings": types["Model.CampaignSettings"],
        "ShoppingSettings": types["Model.ShoppingSettings"],
        "DynamicSearchAdsSetting": types["Model.DynamicSearchAdsSetting"],
        "Criterion": types["Model.Criterion"],
        "AudienceCriterion": types["Model.AudienceCriterion"],
        "BidAmountDetail": types["Model.BidAmountDetail"],
        "BidEstimationData": types["Model.BidEstimationData"],
        "AppUrl": types["Model.AppUrl"],
        "LabelAssociationCounts": types["Model.LabelAssociationCounts"],
        "Appeal": types["Model.Appeal"],
        "AdRotation": types["Model.AdRotation"],
        "UpdatableDate": types["Model.UpdatableDate"],
        "Webpage": types["Model.Webpage"],
        "RadiusCriterion": types["Model.RadiusCriterion"],
        "LocationIntentCriterion": types["Model.LocationIntentCriterion"],
        "LocationCriterion": types["Model.LocationCriterion"],
        "GenderCriterion": types["Model.GenderCriterion"],
        "GeoPoint": types["Model.GeoPoint"],
        "DeviceCriterion": types["Model.DeviceCriterion"],
        "DayTimeCriterion": types["Model.DayTimeCriterion"],
        "AgeCriterion": types["Model.AgeCriterion"],
        "WebpageParameter": types["Model.WebpageParameter"],
        "WebpageCondition": types["Model.WebpageCondition"],
        "Schedule": types["Model.Schedule"],
        "DayTime": types["Model.DayTime"],
        "KeyValuePair_2OfInt64_CampaignEditorialReasonCollection": types["Model.KeyValuePair_2OfInt64_CampaignEditorialReasonCollection"],
        "PriceTableRow": types["Model.PriceTableRow"],
        "Address": types["Model.Address"],
        "SiteLink": types["Model.SiteLink"],
        "CriterionBid": types["Model.CriterionBid"],
        "FixedBid": types["Model.FixedBid"],
        "BidMultiplier": types["Model.BidMultiplier"],
        "Selection": types["Model.Selection"],
        "DateRange": types["Model.DateRange"],
        "AdExtensionSelection": types["Model.AdExtensionSelection"],
        "SearchTermSelectionItem": types["Model.SearchTermSelectionItem"],
        "DimensionReportSelection": types["Model.DimensionReportSelection"],
        "SearchTermSelection": types["Model.SearchTermSelection"],
        "BulkEditBatchAction": types["Model.BulkEditBatchAction"],
        "AssociationAction": types["Model.AssociationAction"],
        "LabelAssociationAction": types["Model.LabelAssociationAction"],
        "LabelDisassociationAction": types["Model.LabelDisassociationAction"],
        "AudienceAssociationAction": types["Model.AudienceAssociationAction"],
        "ListAction": types["Model.ListAction"],
        "QueryOnlyAction": types["Model.QueryOnlyAction"],
        "BidEstimateAction": types["Model.BidEstimateAction"],
        "NumericAction": types["Model.NumericAction"],
        "TextAction": types["Model.TextAction"],
        "CopyAction": types["Model.CopyAction"],
        "BulkEditItemChange": types["Model.BulkEditItemChange"],
        "KeyValuePair_2OfString_String": types["Model.KeyValuePair_2OfString_String"],
        "KeyValuePair_2OfString_List_1OfEditorialError": types["Model.KeyValuePair_2OfString_List_1OfEditorialError"],
        "EditorialError": types["Model.EditorialError"],
        "AudienceExpression": types["Model.AudienceExpression"],
        "PageVisitorsWhoVisitedAnotherPageExpression": types["Model.PageVisitorsWhoVisitedAnotherPageExpression"],
        "Expression": types["Model.Expression"],
        "PageVisitorsWhoDidNotVisitAnotherPageExpression": types["Model.PageVisitorsWhoDidNotVisitAnotherPageExpression"],
        "ExpressionCollection": types["Model.ExpressionCollection"],
        "PageVisitorsExpression": types["Model.PageVisitorsExpression"],
        "CustomEventsExpression": types["Model.CustomEventsExpression"],
        "GoalStage": types["Model.GoalStage"],
        "DestinationGoalStage": types["Model.DestinationGoalStage"],
        "EventGoalStage": types["Model.EventGoalStage"],
        "CloudImportTaskResult": types["Model.CloudImportTaskResult"],
        "OfflineConversionFile": types["Model.OfflineConversionFile"],
        "KeyValuePair_2OfInt64_IEnumerable_1OfAdsApiError": types["Model.KeyValuePair_2OfInt64_IEnumerable_1OfAdsApiError"],
        "ApiEditorialError": types["Model.ApiEditorialError"],
        "ImportStatistics": types["Model.ImportStatistics"],
        "KeyValuePair_2OfString_BulkUploadEntityStatistics": types["Model.KeyValuePair_2OfString_BulkUploadEntityStatistics"],
        "BulkUploadEntityStatistics": types["Model.BulkUploadEntityStatistics"],
        "BulkFile": types["Model.BulkFile"],
        "EntityCount": types["Model.EntityCount"],
        "KeyValuePair_2OfString_IEnumerable_1OfAdsApiError": types["Model.KeyValuePair_2OfString_IEnumerable_1OfAdsApiError"],
        "AdWordsImportContext": types["Model.AdWordsImportContext"],
        "GoogleMyBusinessFilter": types["Model.GoogleMyBusinessFilter"],
        "AggregateFilter": types["Model.AggregateFilter"],
        "Predicate": types["Model.Predicate"],
        "NotificationDeliveryOption": types["Model.NotificationDeliveryOption"],
        "EmailNotificationDeliveryOption": types["Model.EmailNotificationDeliveryOption"],
        "ImportUserPreferences": types["Model.ImportUserPreferences"],
        "ImportUpdateEntityPreference": types["Model.ImportUpdateEntityPreference"],
        "ImportAppendTextToProperty": types["Model.ImportAppendTextToProperty"],
        "ImportSearchAndReplaceTextInProperty": types["Model.ImportSearchAndReplaceTextInProperty"],
        "ImportAppendDestUrlPreference": types["Model.ImportAppendDestUrlPreference"],
        "ImportSearchAndReplaceDestUrlPreference": types["Model.ImportSearchAndReplaceDestUrlPreference"],
        "AppendPreferencesForTrackingTemplate": types["Model.AppendPreferencesForTrackingTemplate"],
        "SearchAndReplacePreferencesForTrackingTemplate": types["Model.SearchAndReplacePreferencesForTrackingTemplate"],
        "FileImportContext": types["Model.FileImportContext"],
        "MigrationStatuses": types["Model.MigrationStatuses"],
        "PerformanceChangePercentMetrics": types["Model.PerformanceChangePercentMetrics"],
        "SegmentedPerformanceChangePercentMetrics": types["Model.SegmentedPerformanceChangePercentMetrics"],
        "PerformanceDataPoint": types["Model.PerformanceDataPoint"],
        "Version": types["Model.Version"],
        "HttpContent": types["Model.HttpContent"],
        "KeyValuePair_2OfString_IEnumerable_1OfString": types["Model.KeyValuePair_2OfString_IEnumerable_1OfString"],
        "MultipartContent": types["Model.MultipartContent"],
        "MultipartFormDataContent": types["Model.MultipartFormDataContent"],
        "ByteArrayContent": types["Model.ByteArrayContent"],
        "FormUrlEncodedContent": types["Model.FormUrlEncodedContent"],
        "StringContent": types["Model.StringContent"],
        "StreamContent": types["Model.StreamContent"],
        "ByteRangeStreamContent": types["Model.ByteRangeStreamContent"],
        "ObjectContent": types["Model.ObjectContent"],
        "ObjectContent_1OfT": types["Model.ObjectContent_1OfT"],
        "PushStreamContent": types["Model.PushStreamContent"],
        "HttpMessageContent": types["Model.HttpMessageContent"],
        "ODataBatchContent": types["Model.ODataBatchContent"],
        "ODataBatchResponseItem": types["Model.ODataBatchResponseItem"],
        "OperationResponseItem": types["Model.OperationResponseItem"],
        "ChangeSetResponseItem": types["Model.ChangeSetResponseItem"],
        "HttpRequestMessage": types["Model.HttpRequestMessage"],
        "HttpMethod": types["Model.HttpMethod"],
        "Uri": types["Model.Uri"],
        "RejectAsset": types["Model.RejectAsset"],
        "ChangeSpecificationConstraints": types["Model.ChangeSpecificationConstraints"],
        "DeprecateResource": types["Model.DeprecateResource"],
        "PostResource": types["Model.PostResource"],
        "CreateVideoRepresentation": types["Model.CreateVideoRepresentation"],
        "DeleteResource": types["Model.DeleteResource"],
        "GetResource": types["Model.GetResource"],
        "ChangeAssetMetadata": types["Model.ChangeAssetMetadata"],
        "CreateAsset": types["Model.CreateAsset"],
        "CreateImageRepresentation": types["Model.CreateImageRepresentation"],
        "CreateSpecification": types["Model.CreateSpecification"],
        "PutResource": types["Model.PutResource"],
        "CustomColumnDefinition": types["Model.CustomColumnDefinition"],
        "AdExtensionAssociationGridDataParameters": types["Model.AdExtensionAssociationGridDataParameters"],
        "Customer": types["Model.Customer"],
        "Account": types["Model.Account"],
        "App": types["Model.App"],
        "Campaign": types["Model.Campaign"],
        "AdGroup": types["Model.AdGroup"],
        "Keyword": types["Model.Keyword"],
        "Ad": types["Model.Ad"],
        "NegativeKeywordList": types["Model.NegativeKeywordList"],
        "NegativeKeyword": types["Model.NegativeKeyword"],
        "BulkEditSession": types["Model.BulkEditSession"],
        "BulkEditResult": types["Model.BulkEditResult"],
        "Audience": types["Model.Audience"],
        "RemessagingAudience": types["Model.RemessagingAudience"],
        "Tag": types["Model.Tag"],
        "TaskItem": types["Model.TaskItem"],
        "Goal": types["Model.Goal"],
        "TaskItemExecution": types["Model.TaskItemExecution"],
        "AdGroupCriterion": types["Model.AdGroupCriterion"],
        "AudienceAdGroupCriterion": types["Model.AudienceAdGroupCriterion"],
        "AdGroupAudienceAssociation": types["Model.AdGroupAudienceAssociation"],
        "AdGroupAudienceCriterionWithBI": types["Model.AdGroupAudienceCriterionWithBI"],
        "AdGroupAudienceCriterion": types["Model.AdGroupAudienceCriterion"],
        "ProductOffer": types["Model.ProductOffer"],
        "ProductPartition": types["Model.ProductPartition"],
        "Preference": types["Model.Preference"],
        "ProductOfferStore": types["Model.ProductOfferStore"],
        "Image": types["Model.Image"],
        "AdExtension": types["Model.AdExtension"],
        "ImageAdExtension": types["Model.ImageAdExtension"],
        "LocationAdExtension": types["Model.LocationAdExtension"],
        "AdExtensionAssociation": types["Model.AdExtensionAssociation"],
        "Label": types["Model.Label"],
        "Budget": types["Model.Budget"],
        "Location": types["Model.Location"],
        "CampaignCriterion": types["Model.CampaignCriterion"],
        "BiddableAdGroupCriterion": types["Model.BiddableAdGroupCriterion"],
        "DsaTarget": types["Model.DsaTarget"],
        "DomainCategory": types["Model.DomainCategory"],
        "NegativeAdGroupCriterion": types["Model.NegativeAdGroupCriterion"],
        "NegativeAdGroupDsaTarget": types["Model.NegativeAdGroupDsaTarget"],
        "NegativeCampaignCriterion": types["Model.NegativeCampaignCriterion"],
        "NegativeCampaignDsaTarget": types["Model.NegativeCampaignDsaTarget"],
        "DsaSearchTerm": types["Model.DsaSearchTerm"],
        "Category": types["Model.Category"],
        "NegativeKeywordConflict": types["Model.NegativeKeywordConflict"],
        "SearchTerm": types["Model.SearchTerm"],
        "DimensionRow": types["Model.DimensionRow"],
        "ResponsiveAd": types["Model.ResponsiveAd"],
        "ExpandedTextAd": types["Model.ExpandedTextAd"],
        "DynamicSearchAd": types["Model.DynamicSearchAd"],
        "MobileAd": types["Model.MobileAd"],
        "AppInstallAd": types["Model.AppInstallAd"],
        "ProductAd": types["Model.ProductAd"],
        "TextAd": types["Model.TextAd"],
        "PriceAdExtension": types["Model.PriceAdExtension"],
        "StructuredSnippetAdExtension": types["Model.StructuredSnippetAdExtension"],
        "ActionLinkAdExtension": types["Model.ActionLinkAdExtension"],
        "AppAdExtension": types["Model.AppAdExtension"],
        "CallAdExtension": types["Model.CallAdExtension"],
        "CalloutAdExtension": types["Model.CalloutAdExtension"],
        "ReviewAdExtension": types["Model.ReviewAdExtension"],
        "SiteLinksAdExtension": types["Model.SiteLinksAdExtension"],
        "Sitelink2AdExtension": types["Model.Sitelink2AdExtension"],
        "OrderItemBidInfo": types["Model.OrderItemBidInfo"],
        "BiddableCampaignCriterion": types["Model.BiddableCampaignCriterion"],
        "CustomAudience": types["Model.CustomAudience"],
        "InMarketAudience": types["Model.InMarketAudience"],
        "InStoreTransactionGoal": types["Model.InStoreTransactionGoal"],
        "MultiStageGoal": types["Model.MultiStageGoal"],
        "ApplicationInstallGoal": types["Model.ApplicationInstallGoal"],
        "DestinationGoal": types["Model.DestinationGoal"],
        "DurationGoal": types["Model.DurationGoal"],
        "EventGoal": types["Model.EventGoal"],
        "OfflineConversionGoal": types["Model.OfflineConversionGoal"],
        "PageViewsPerVisitGoal": types["Model.PageViewsPerVisitGoal"],
        "CloudImportResult": types["Model.CloudImportResult"],
        "OfflineConversionUploadTaskItemExecution": types["Model.OfflineConversionUploadTaskItemExecution"],
        "ImportResult": types["Model.ImportResult"],
        "BulkUploadTaskItemExecution": types["Model.BulkUploadTaskItemExecution"],
        "MultiAccountDownloadResult": types["Model.MultiAccountDownloadResult"],
        "ScriptTaskItemExecution": types["Model.ScriptTaskItemExecution"],
        "ScriptItemChange": types["Model.ScriptItemChange"],
        "CloudImportTaskItem": types["Model.CloudImportTaskItem"],
        "GoogleMyBusinessTaskItem": types["Model.GoogleMyBusinessTaskItem"],
        "OfflineConversionUploadTaskItem": types["Model.OfflineConversionUploadTaskItem"],
        "MultiAccountBulkUploadTaskItem": types["Model.MultiAccountBulkUploadTaskItem"],
        "MultiAccountDownloadTaskItem": types["Model.MultiAccountDownloadTaskItem"],
        "ReportRule": types["Model.ReportRule"],
        "ImportTaskItem": types["Model.ImportTaskItem"],
        "ScriptTaskItem": types["Model.ScriptTaskItem"],
        "AdvertiserRule": types["Model.AdvertiserRule"],
        "Tip": types["Model.Tip"]
    };

    exports.Enum = {
        "Granularity": types["Enum.Granularity"],
        "BulkFileType": types["Enum.BulkFileType"],
        "DimensionReportType": types["Enum.DimensionReportType"],
        "AccountStatus": types["Enum.AccountStatus"],
        "AccountInactiveCauseCode": types["Enum.AccountInactiveCauseCode"],
        "AccountInactiveReasonCode": types["Enum.AccountInactiveReasonCode"],
        "SegmentationType": types["Enum.SegmentationType"],
        "SegmentationGoalType": types["Enum.SegmentationGoalType"],
        "SegmentationMatchType": types["Enum.SegmentationMatchType"],
        "DayOfWeek": types["Enum.DayOfWeek"],
        "SegmentationDeviceOS": types["Enum.SegmentationDeviceOS"],
        "SegmentationDeviceType": types["Enum.SegmentationDeviceType"],
        "SegmentationMedium": types["Enum.SegmentationMedium"],
        "SegmentationNetwork2": types["Enum.SegmentationNetwork2"],
        "SegmentationPagePosition2": types["Enum.SegmentationPagePosition2"],
        "MatchType": types["Enum.MatchType"],
        "CampaignStatus": types["Enum.CampaignStatus"],
        "TimeZone": types["Enum.TimeZone"],
        "DeliveryStatus": types["Enum.DeliveryStatus"],
        "CampaignType": types["Enum.CampaignType"],
        "BiddingStrategyType": types["Enum.BiddingStrategyType"],
        "CampaignPriority": types["Enum.CampaignPriority"],
        "Language": types["Enum.Language"],
        "BudgetType": types["Enum.BudgetType"],
        "BudgetStatus": types["Enum.BudgetStatus"],
        "AudienceType": types["Enum.AudienceType"],
        "CriterionType": types["Enum.CriterionType"],
        "AdGroupCriterionStatus": types["Enum.AdGroupCriterionStatus"],
        "BidType": types["Enum.BidType"],
        "AdGroupStatus": types["Enum.AdGroupStatus"],
        "Medium": types["Enum.Medium"],
        "PricingModel": types["Enum.PricingModel"],
        "BidTargetType": types["Enum.BidTargetType"],
        "AdGroupCallTrackingStatus": types["Enum.AdGroupCallTrackingStatus"],
        "BidAmountSource": types["Enum.BidAmountSource"],
        "OrderItemStatus": types["Enum.OrderItemStatus"],
        "AdType": types["Enum.AdType"],
        "DevicePreference": types["Enum.DevicePreference"],
        "AdStatus": types["Enum.AdStatus"],
        "AdPreference": types["Enum.AdPreference"],
        "CallToAction": types["Enum.CallToAction"],
        "AdRotationType": types["Enum.AdRotationType"],
        "Network": types["Enum.Network"],
        "AgeRange": types["Enum.AgeRange"],
        "Day": types["Enum.Day"],
        "Minute": types["Enum.Minute"],
        "GenderType": types["Enum.GenderType"],
        "Location2Type": types["Enum.Location2Type"],
        "IntentOptions": types["Enum.IntentOptions"],
        "DistanceUnit": types["Enum.DistanceUnit"],
        "WebpageConditionOperand": types["Enum.WebpageConditionOperand"],
        "AssociationType": types["Enum.AssociationType"],
        "AdExtensionStatus": types["Enum.AdExtensionStatus"],
        "PriceExtensionType": types["Enum.PriceExtensionType"],
        "PriceUnit": types["Enum.PriceUnit"],
        "PriceQualifier": types["Enum.PriceQualifier"],
        "DeviceType": types["Enum.DeviceType"],
        "GeoCodeStatus": types["Enum.GeoCodeStatus"],
        "EditorialStatus": types["Enum.EditorialStatus"],
        "KeywordStatus": types["Enum.KeywordStatus"],
        "CampaignCriterionStatus": types["Enum.CampaignCriterionStatus"],
        "DateRangePreset": types["Enum.DateRangePreset"],
        "AdExtensionsTypeFilter": types["Enum.AdExtensionsTypeFilter"],
        "ListActionType": types["Enum.ListActionType"],
        "TextActionOptions": types["Enum.TextActionOptions"],
        "BidEstimateType": types["Enum.BidEstimateType"],
        "NumericActionType": types["Enum.NumericActionType"],
        "TextActionType": types["Enum.TextActionType"],
        "AudienceExpressionType": types["Enum.AudienceExpressionType"],
        "ExpressionOperand": types["Enum.ExpressionOperand"],
        "ExpressionOperator": types["Enum.ExpressionOperator"],
        "AudienceStatus": types["Enum.AudienceStatus"],
        "TagTrackingStatus": types["Enum.TagTrackingStatus"],
        "PartnerName": types["Enum.PartnerName"],
        "TagStatus": types["Enum.TagStatus"],
        "GoalEntityType": types["Enum.GoalEntityType"],
        "GoalStatus": types["Enum.GoalStatus"],
        "GoalTrackingStatus": types["Enum.GoalTrackingStatus"],
        "ConversionCountType": types["Enum.ConversionCountType"],
        "GoalValueType": types["Enum.GoalValueType"],
        "GoalStageType": types["Enum.GoalStageType"],
        "ValueOperator": types["Enum.ValueOperator"],
        "AutoTagType": types["Enum.AutoTagType"],
        "TaskItemType": types["Enum.TaskItemType"],
        "TaskItemState": types["Enum.TaskItemState"],
        "NotificationType": types["Enum.NotificationType"],
        "NotificationMedium": types["Enum.NotificationMedium"],
        "RunResultState": types["Enum.RunResultState"],
        "CloudImportStatus": types["Enum.CloudImportStatus"],
        "OfflineConversionFileType": types["Enum.OfflineConversionFileType"],
        "ImportStatus": types["Enum.ImportStatus"],
        "ImportType": types["Enum.ImportType"],
        "ImportAction": types["Enum.ImportAction"],
        "FilterEntityType": types["Enum.FilterEntityType"],
        "FilterEntityTypeV2": types["Enum.FilterEntityTypeV2"],
        "EntityType": types["Enum.EntityType"],
        "CloudImportVersion": types["Enum.CloudImportVersion"],
        "FileFormatEnum": types["Enum.FileFormatEnum"],
        "Operator": types["Enum.Operator"],
        "LogicalOperator": types["Enum.LogicalOperator"],
        "DownloadFormat": types["Enum.DownloadFormat"],
        "EmailOption": types["Enum.EmailOption"],
        "ImportNewOption": types["Enum.ImportNewOption"],
        "ImportUpdateOption": types["Enum.ImportUpdateOption"],
        "AssetType": types["Enum.AssetType"],
        "TipStatus": types["Enum.TipStatus"],
        "DimensionRowType": types["Enum.DimensionRowType"],
        "AggregationType": types["Enum.AggregationType"],
        "HttpStatusCode": types["Enum.HttpStatusCode"],
        "EntityContextType": types["Enum.EntityContextType"],
        "CustomColumnFormatting": types["Enum.CustomColumnFormatting"]
    };

    exports.Default = {
        "Container": types["Default.Container"]
    };

    var ctxType = exports.type;
    exports.factory = function(config) {
        if (ctxType) {
            var cfg = $data.typeSystem.extend({
                name: "oData",
                oDataServiceHost: "https://ui.bingads.microsoft.com/ODataApi/Advertiser/V2",
                withCredentials: false,
                maxDataServiceVersion: "4.0"
            }, config);
            return new ctxType(cfg);
        } else {
            return null;
        }
    };

    if (typeof Reflect !== "undefined" && typeof Reflect.defineMetadata === "function") {
        Reflect.defineMetadata("Org.OData.Capabilities.V1.FilterRestrictions", undefined, types["Model.Budget"].prototype)
    }

});