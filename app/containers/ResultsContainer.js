var React = require('react');
var Results = require("../components/Results");
var githubHelpers = require("../utils/githubHelper")
class ResultsContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isLoading: true,
            scores: []
        }
    }


    componentDidMount() {
        console.log("dasdasdasd", this.props.location.state.playersInfo);
        githubHelpers.battle(this.props.location.state.playersInfo).then(scores => {
            this.setState({
                isLoading: false,
                scores: scores
            })
        })
    }

    render() {
        return (
            <Results
                isLoading={this.state.isLoading}
                scores={this.state.scores}
                playersInfo={this.props.location.state.playersInfo} />
        )
    }
}


module.exports = ResultsContainer