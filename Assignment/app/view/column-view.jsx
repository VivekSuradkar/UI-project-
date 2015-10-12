var ColumnView= React.createClass({

    propTypes: {
        rowModel: React.PropTypes.instanceOf(RowModel).isRequired
    },

    handleColumnClicked : function(oModel) {
        EventBusClass.dispatch("COLUMN_CLICKED",this,oModel);
    },

    render: function () {
var oModel= this.props.rowModel;
        var sName = oModel.getName();
        var iId = oModel.getId();
        var iWidth = oModel.getWidth();
        var iValue = oModel.getValue();
        var Style={
            height: iWidth + "px"
        };
        var sColumnContainerClassName = oModel.isSelected() ? "selectedColumnContainer" : "columnContainer" ;
        return (
            <div className={sColumnContainerClassName} onClick={this.handleColumnClicked.bind(this,oModel)}>
                <div className="columnValueBarContainer" style={Style}></div>
                <div className="columnNameContainer">{sName}</div>
                <div className="columnVerticalContainer"></div>
            </div>);
    }
});