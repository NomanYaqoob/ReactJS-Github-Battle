var React = require('react');
var styles = require("../styles");
MainContainer = (props) => {
    return (
        <div className="jumbotron col-sm-12 text-center" style={styles.bgTransparent}>
            {props.children}
        </div>
    )
}


module.exports = MainContainer;