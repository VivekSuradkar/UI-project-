/**
 * Created by CS29 on 07-07-2015.
 */
var MainList = ["hee", "kee", "lee", "mee", "Bee", "fee", "ree", "tee", "dee", "jee", "xee"];
var UpdatedList = ["hee", "kee", "lee", "mee", "Bee", "fee", "ree", "tee", "dee", "jee", "xee"];
var value = null;

var storeClass = {

    triggerChange : function () {
        $(storeClass).trigger('change');
    },

    getMainList: function () {
        return UpdatedList;
    },

    getReactionData: function () {
        //var xhttp = new XMLHttpRequest();
        //xhttp.onreadystatechange = function() {
        //    if (xhttp.readyState == 4 && xhttp.status == 200) {
        //        //document.getElementById("demo").innerHTML = xhttp.responseText;
        //        console.log(xhttp.responseText);
        //        return xhttp.responseText;
        //    }
        //};
        //var url= "https://api.fda.gov/drug/event.json?count=patient.reaction.reactionmeddrapt.exact&limit=10";
        //xhttp.open("GET", url, true);
        //xhttp.send();

        return aReactionData;
    },
    getProps : function(){
        return ColumnViewProps;
    },

    reactionRowClicked : function(oModel){
        var sReactionName = oModel.getName();
        ColumnViewProps.setSelectedReactionName(sReactionName);
        ColumnViewProps.setDrugDataList(oDrugData[sReactionName]);
        this.triggerChange();
    },

    drugColumnClicked : function(oModel){
        var sDrugName = oModel.getName();
        ColumnViewProps.setSelectedDrugName(sDrugName);
        this.triggerChange();
    }



};

