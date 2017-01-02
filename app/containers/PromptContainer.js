var React = require("react");
var Prompt = require("../components/Prompt");

class PromptContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username: ''
        }

        this.handleOnUserUpdate = this.handleOnUserUpdate.bind(this);
        this.handleOnSubmitUser = this.handleOnSubmitUser.bind(this);
    }

    handleOnUserUpdate(e) {
        this.setState({
            username: e.target.value
        })
    }

    handleOnSubmitUser(e) {
        e.preventDefault();
        console.log('insub')

        if (this.props.routeParams.playerOne) { // if we are on playerTwo Route
            console.log("router", this.context)
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            })
        }
        else { // we dont have any routeParams with name Playerone i-e we are on playerOne rotue
            console.log("router", this.context)
            this.context.router.push('/playerTwo/' + this.state.username);
            this.setState({
                username: ''
            });
        }
    }

    render() {
        return (
            <Prompt
                onSumbitUser={this.handleOnSubmitUser}
                onUserUpdate={this.handleOnUserUpdate}
                username={this.state.username}
                header={this.props.route.header} />
        )
    }
}

PromptContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

module.exports = PromptContainer; 