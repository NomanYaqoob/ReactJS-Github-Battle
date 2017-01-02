var React = require('react');
var MainContainer = require('./MainContainer');
// class Prompt extends React.Component {
//     render() {
//         return (
//             <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={backgroundTransparent}>
//                 <h1>{this.props.header}</h1>
//                 <div className="col-sm-12">
//                     <form onSubmit={this.props.onSumbitUser}>
//                         <div className='form-group'>
//                             <input type="text" placeholder="Github Username"
//                                 value={this.props.username}
//                                 onChange={this.props.onUserUpdate}
//                                 className='form-control' />
//                         </div>
//                         <div className='form-group col-sm-4 col-sm-offset-4'>
//                             <button className='btn btn-block btn-success' type='submit'>Continue</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         )
//     }

// }

//functional Stateless Component 
Prompt = (props) => {
    return (
        <MainContainer>
            <h1>{props.header}</h1>
            <div className="col-sm-12">
                <form onSubmit={props.onSumbitUser}>
                    <div className='form-group'>
                        <input type="text" placeholder="Github Username"
                            value={props.username}
                            onChange={props.onUserUpdate}
                            className='form-control' />
                    </div>
                    <div className='form-group col-sm-4 col-sm-offset-4'>
                        <button className='btn btn-block btn-success' type='submit'>Continue</button>
                    </div>
                </form>
            </div>
        </MainContainer>
    )
}

Prompt.propTypes = {
    header: React.PropTypes.string.isRequired,
    username: React.PropTypes.string.isRequired,
    onSumbitUser: React.PropTypes.func.isRequired,
    onUserUpdate: React.PropTypes.func.isRequired
}

module.exports = Prompt;
