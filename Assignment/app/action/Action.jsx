var ActionFunction = (function () {

    var handleActionFunctionOne = function (e) {
        storeClass.JsCallFunction(e.target);
        //controller ko broadcast
        //$(storeClass).trigger('change');
    };
    var handleActionFunctionAdd = function () {
        storeClass.JsAddFunction();
    };

    var handleRowClicked = function (Event, oModel) {
        storeClass.reactionRowClicked(oModel);
    };
    var handleColumnClicked = function (Event, oModel) {
        storeClass.drugColumnClicked(oModel);
    };


    return {
        registerEvent: function () {
            EventBusClass.addEventListener("ROW_CLICKED", handleRowClicked);
            EventBusClass.addEventListener("COLUMN_CLICKED", handleColumnClicked);
        },
        deregisterEvent: function () {
            EventBusClass.removeEventListener("ROW_CLICKED", handleRowClicked);
            EventBusClass.removeEventListener("COLUMN_CLICKED", handleColumnClicked);
        }

    };
})();
