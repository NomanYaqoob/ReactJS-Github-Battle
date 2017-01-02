var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');
class Home extends React.Component {

  render() {
    return (
      <MainContainer >
        <h1>Github Battle</h1>
        <p className='lead'>Some Fancy Moto</p>
        <Link to="/playerOne">
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </MainContainer>
    )
  }
}

module.exports = Home;
