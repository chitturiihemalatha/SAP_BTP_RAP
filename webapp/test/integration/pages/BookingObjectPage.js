sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'trav.ust.h.travelproc',
            componentId: 'BookingObjectPage',
            contextPath: '/Travel/_booking'
        },
        CustomPageDefinitions
    );
});