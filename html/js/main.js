var React = require('react');

var Main = React.createClass({

  render() {
    return <h1>Hello, World.</h1>;
  }

});

React.render(
  <Main />,
  document.getElementById('main')
);

module.exports = Main;
