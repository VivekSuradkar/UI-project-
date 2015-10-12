var ReactionOuterContainer = React.createClass({

    propTypes: {
        arrayModel: React.PropTypes.arrayOf(React.PropTypes.instanceOf(RowModel)).isRequired,
        title: React.PropTypes.string.isRequired
    },

    getRowViews: function () {
        var aRowViews = [];
        var aModels = this.props.arrayModel;
        var i;
        for (i in aModels) {
            aRowViews.push(<RowView key={i} rowModel={aModels[i]}/>);
        }

        return aRowViews;
    },

    render: function () {
        var sTitle = this.props.title;
        return (
            <div className="Reaction outerContainer">
                <div className="titleContainer">{sTitle}</div>
                <div className="graphContainer">
                    <div className="verticalBar"></div>
                    {this.getRowViews()}
                    <div className="horizontalBar"></div>
                </div>
                <div className="scaleContainer"></div>
                <div className="scaleContainer"></div>
                <div className="scaleContainer">
                    <div className="arrowContainer"></div>
                    <div className="reactionScaleValue">10000</div>
                </div>
                <div className="scaleContainer">
                    <div className="arrowContainer"></div>
                    <div className="reactionScaleValue">20000</div>
                </div>

            </div>


        );
    }
});