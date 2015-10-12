var DrugOuterContainer = React.createClass({

    propTypes: {
        arrayModel: React.PropTypes.arrayOf(React.PropTypes.instanceOf(RowModel)).isRequired,
        title: React.PropTypes.string.isRequired
    },

    getColumnViews: function () {
        var aRowViews = [];
        var aModels = this.props.arrayModel;
        var i;
        for (i in aModels) {
            aRowViews.push(<ColumnView key={i} rowModel={aModels[i]}/>);
        }

        return aRowViews;
    },

    render: function () {
        var sTitle = this.props.title;
        return (
            <div className="Drug outerContainer">
                <div className="titleContainer">{sTitle}</div>
                <div className="graphContainer">
                    <div className="drugScaleOuterContainer">
                    <div className="drugScaleContainer">
                        <div className="drugScaleValue">30000</div>
                        <div className="horizontalArrowContainer"></div>
                    </div>
                    <div className="drugScaleContainer">
                        <div className="drugScaleValue">25000</div>
                        <div className="horizontalArrowContainer"></div>
                    </div>
                        <div className="drugScaleContainer">
                            <div className="drugScaleValue">20000</div>
                            <div className="horizontalArrowContainer"></div>
                        </div>
                        <div className="drugScaleContainer">
                            <div className="drugScaleValue">15000</div>
                            <div className="horizontalArrowContainer"></div>
                        </div>
                        <div className="drugScaleContainer">
                            <div className="drugScaleValue">10000</div>
                            <div className="horizontalArrowContainer"></div>
                        </div>
                        <div className="drugScaleContainer">
                            <div className="drugScaleValue">5000</div>
                            <div className="horizontalArrowContainer"></div>
                        </div>

                    </div>
                    <div className="columnVerticalBar"></div>
                    {this.getColumnViews()}
                    <div className="columnHorizontalBar"></div>
                </div>


            </div>


        );
    }
});