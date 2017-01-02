var React = require("react");
var ConfirmBattle = require("../components/ConfirmBattle")
var githubHelpers = require("../utils/githubHelper")
class ConfirmBattleContainer extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            isLoading: true,
            playersInfo: []
        }
        this.handlerInitiateBattle = this.handlerInitiateBattle.bind(this);
    }


    componentDidMount() {
        var query = this.props.location.query;
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]).then(player => {
            console.log('players', player);
            this.setState({
                isLoading: false,
                playersInfo: [player[0], player[1]]
            })
        });
        console.log("Query", query);
    }


    handlerInitiateBattle(e) {
        console.log("handel");
        this.context.router.push({
            pathname: "/results",
            state: {
                playersInfo: this.state.playersInfo
            }
        })
    }

    render() {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                onInitiateBattle={this.handlerInitiateBattle}
                playersInfo={this.state.playersInfo} />
        )
    }
}

ConfirmBattleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

module.exports = ConfirmBattleContainer;