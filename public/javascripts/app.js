/** @jsx React.DOM */

var React = require('react');

var Chitter = require('./components/Chitter.react');

React.render(
  <Chitter />,
  document.getElementById('app')
);