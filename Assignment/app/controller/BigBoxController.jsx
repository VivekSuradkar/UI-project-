var BigBox = React.createClass({
    getInitialState: function () {
        //this.getStore().onLoadCallFunction();
        return {
            list: this.getStore().getMainList(),
            aReactionMasterList: this.getStore().getReactionData(),
            aDrugMasterList: this.getStore().getProps().getDrugDataList(),
            inputVal: "",
            sSelectedReactionName: this.getStore().getProps().getSelectedReactionName(),
            sSelectedDrugName: this.getStore().getProps().getSelectedDrugName()

        }
    },
    getStore: function () {
        return this.props.store;
        //should return store
    },
    //stateAdded: function () {
    //    this.setState({
    //        list: UpdatedList,
    //        aReactionMasterList: this.getStore().getReactionData(),
    //        aDrugMasterList: this.getStore().getProps().getDrugDataList(),
    //        inputVal: "",
    //        sSelectedReactionName: this.getStore().getProps().getSelectedReactionName()
    //    });
    //},
    stateChanged: function (e) {
        var inputVal1 = e.target.value;
        var returnList = this.getStore().getMainList();
        var aReactionData = this.getStore().getReactionData();
        var aDrugData = this.getStore().getProps().getDrugDataList();
        var sSelectedReactionName = this.getStore().getProps().getSelectedReactionName();
        var sSelectedDrugName = this.getStore().getProps().getSelectedDrugName();
        this.setState({
            list: returnList,
            aReactionMasterList: aReactionData,
            aDrugMasterList: aDrugData,
            inputVal: inputVal1,
            sSelectedReactionName: sSelectedReactionName,
            sSelectedDrugName: sSelectedDrugName
        });
    },
    //@Bind: Store with state
    componentDidMount: function () {
        $(this.getStore()).bind('change', this.stateChanged);
        //$(this.getStore()).bind('add', this.stateAdded);
        this.props.action1.registerEvent();

    },

    getRowModel: function () {
        var aRowModels = [];
        var aReactionData = this.state.aReactionMasterList;
        var sSelectedReactionName = this.state.sSelectedReactionName;
        var i;
        for (i in aReactionData) {

            var sName = aReactionData[i].term;
            var iWidth = (aReactionData[i].count) / 100; //in pixels
            var iValue = aReactionData[i].count;
            var bSelected = (sSelectedReactionName == sName);
            aRowModels.push(new RowModel(iWidth, sName, iWidth, iValue, bSelected));
        }

        return aRowModels;

    },

    getColumnModel: function () {
        var aRowModels = [];
        var aDrugData = this.state.aDrugMasterList;
        var i;
        var sSelectedDrugName = this.state.sSelectedDrugName;
        for (i in aDrugData) {

            var sName = aDrugData[i].term;
            var iWidth = (aDrugData[i].count) / 100;
            var iValue = aDrugData[i].count;
            var bSelected = (sSelectedDrugName == sName);
            aRowModels.push(new RowModel(iWidth, sName, iWidth, iValue, bSelected));
        }

        return aRowModels;

    },

    render: function () {
        var arrayOfRowModel = this.getRowModel();
        var arrayOfColumnModel = this.getColumnModel();
        var sReactionName = this.state.sSelectedReactionName;
        var oDrugMasterList = this.state.aDrugMasterList;
        var sSelectedDrugName = this.state.sSelectedDrugName;
        var iMalePercent = null;
        if (sSelectedDrugName) {
            for (var i in oDrugMasterList) {
                if (oDrugMasterList[i]["term"] == sSelectedDrugName) {
                    iMalePercent = oDrugMasterList[i]["malePercent"];
                }
            }
        }
        return (<div>
            <ReactionOuterContainer arrayModel={arrayOfRowModel} title="Types of adverse Reactions"/>
            <DrugOuterContainer arrayModel={arrayOfColumnModel} title={"Drug Causing " + sReactionName}/>
            <GenderOuterContainer title={"Gender Distibution for "+ sSelectedDrugName} malePercent={iMalePercent} />
        </div>);
    }
});