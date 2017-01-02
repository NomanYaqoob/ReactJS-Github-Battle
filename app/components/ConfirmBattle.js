var React = require('react');
var ReactRouter = require('react-router');
var styles = require("../styles");
var Link = ReactRouter.Link;
var UserDetail = require("./UserDetails");
var UserDetailsWrapper = require("./UserDetailsWrapper");

function puke(e) {
    return <pre>{JSON.stringify(e, null, " ")} </pre>
}

function abc() {
    alert("Hello World");
}

function ConfirmBattle(props) {
    return props.isLoading == true ?
        < div >  Loading</div >
        : <div className="jumbotron col-sm-12 text-center" style={styles.bgTransparent}>
            <h1>Confirm Players</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper header="Player One">
                    <UserDetail info={props.playersInfo[0]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Player Two">
                    <UserDetail info={props.playersInfo[1]} />
                </UserDetailsWrapper>
            </div>
            <div className='col-sm-8 col-sm-offset-2'>
                <div className='col-sm-12' style={styles.space}>
                    <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
                        Initiate Battle!
                    </button>
                </div>
                <div className='col-sm-12' style={styles.space}>
                    <Link to="/playerOne">
                        <button type='button' className='btn btn-lg btn-danger'> Reselect Players</button>
                    </Link>
                </div>
            </div>
        </div>

}

ConfirmBattle.propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    onInitiateBattle: React.PropTypes.func.isRequired,
    playersInfo: React.PropTypes.array.isRequired,
}

module.exports = ConfirmBattle; 
