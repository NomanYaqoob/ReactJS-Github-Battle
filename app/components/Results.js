var React = require('react');
var MainContainer = require('./MainContainer');
var UserDetails = require("./UserDetails");
var UserDetailsWrapper = require("./UserDetailsWrapper");
var styles = require("../styles");
var Link = require('react-router').Link;


function puke(e) {
    return <pre>{JSON.stringify(e, 2, '')}</pre>
}

StartOver = () => {
    return (
        <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
                <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
            </Link>
        </div>
    )
}
Tie = (props) => {
    return (
        <MainContainer>
            <h1>It's a Tie!</h1>
            <StartOver />
        </MainContainer>
    )
}

Results = (props) => {
    if (props.isLoading === true) {
        return <p> Loading </p>
    }
    if (props.scores[0] === props.scores[1]) {
        return (
            <Tie scores={props.scores} playersInfo={props.playersInfo} />
        )
    }
    var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    var losingIndex = winningIndex === 0 ? 1 : 0;
    return (
        <MainContainer>
            <h1>Results</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper header='Winner'>
                    <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Loser'>
                    <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
                </UserDetailsWrapper>
            </div>
            <StartOver />
        </MainContainer>
    )
}


Results.PropTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    scores: React.PropTypes.array.isRequired,
    playersInfo: React.PropTypes.array.isRequired
}

module.exports = Results;