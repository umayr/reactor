/** @jsx React.DOM */

'use strict';

var React = require('react');
var WeekCheckbox = require('./components/WeekCheckbox');

var Wrapper = React.createClass({
    __linker: function (state) {
        this.setState({
            week: state
        })
    },
    getInitialState: function () {
        return {
            week: []
        }
    },
    render: function () {
        return (
            <div>
                <pre>
                    {
                        JSON.stringify(this.state.week)
                    }
                </pre>
                <WeekCheckbox link={this.__linker}/>
            </div>
        );
    }
});
var mountNode = document.getElementById('content');
React.render(<Wrapper />, mountNode);