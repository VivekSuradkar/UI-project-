var ColumnViewProps = (function () {

    var sSelectedReactionName = "";
    var sSelectedDrugName = "";
    var aDrugDataList = [];

    return {

        getDrugDataList: function () {
            return aDrugDataList;
        },

        setDrugDataList: function (_aDrugDataList) {
            aDrugDataList = _aDrugDataList;
        },

        getSelectedReactionName: function () {
            return sSelectedReactionName;
        },

        setSelectedReactionName: function (_sSelectedReactionName) {
            sSelectedReactionName = _sSelectedReactionName;
        },

        getSelectedDrugName: function () {
            return sSelectedDrugName;
        },

        setSelectedDrugName: function (_sSelectedDrugName) {
            sSelectedDrugName = _sSelectedDrugName;
        }

    }
})();
