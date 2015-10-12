var RowView= React.createClass({

    propTypes: {
        rowModel: React.PropTypes.instanceOf(RowModel).isRequired
    },

    RowClicked : function(oModel) {
      EventBusClass.dispatch("ROW_CLICKED",this,oModel);
    },

    render: function () {
            var oModel=this.props.rowModel;
            var sName = oModel.getName();
            //var iId = oModel.getId();
            var iWidth = oModel.getWidth();
            var iValue = oModel.getValue();
            var Style={
                width: iWidth + "px"
            };
        var sRowContainerClassName = oModel.isSelected() ? "selectedRowContainer" : "rowContainer" ;
        return (
            <div className={sRowContainerClassName} onClick={this.RowClicked.bind(this,oModel)}>
                <div className="nameContainer">{sName}</div>
                <div className="valueBarContainer" style={Style}></div>
                <div className="valueContainer">{iValue}</div>
            </div>);
    }
});