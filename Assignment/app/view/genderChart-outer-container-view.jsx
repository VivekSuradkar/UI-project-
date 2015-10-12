var GenderOuterContainer = React.createClass({

    propTypes: {
        title: React.PropTypes.string.isRequired,
        malePercent: React.PropTypes.int
    },

    render: function () {
        var iMalePercent = this.props.malePercent * 3.6;
        //var iMalePercent = 25 * 3.6;

        var Style = {};
        if (iMalePercent != null) {
            if (iMalePercent > 180) {
                Style = {
                    backgroundImage: 'linear-gradient(0deg, transparent 50%, #FF8C2D 50%)' + ',linear-gradient(' + iMalePercent + 'deg,transparent 50%, white 50%)'

                };
            } else {
                Style = {
                    backgroundImage: 'linear-gradient(' + iMalePercent + 'deg,transparent 50%, white 50%)' + ',linear-gradient(0deg,white 50%, transparent 50%)'
                };
            }

        } else {
            Style = {
                //backgroundImage: 'linear-gradient('+180+'deg,white 50%, transparent 50%)'+',linear-gradient(0deg,white 50%, transparent 50%)'
            };
        }


        var sTitle = this.props.title;

        return (
            <div className="Gender outerContainer">
                <div className="titleContainer">{sTitle}</div>
                <pie id="id1" className="arc pie" style={Style}></pie>
                <div className="colorGuide">
                    <div className="maleColorBoxContainer" ></div>
                    <div className="maleColorNameContainer" > Male  {this.props.malePercent} % </div>
                </div>
                <div className="colorGuide">
                    <div className="femaleColorBoxContainer" > </div>
                    <div className="femaleColorNameContainer" >Female {100-this.props.malePercent} % </div>
                </div>
            </div>


        );
    }
});
