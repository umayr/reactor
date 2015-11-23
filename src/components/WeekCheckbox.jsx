/**
 * Created by Umayr Shahid on 11/23/15.
 */

/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'WeekCheckbox',
    getInitialState: function () {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var week = [];
        days.forEach(function (day) {
            week.push({
                name: day,
                abbr: day.substr(0, 1),
                checked: false
            });
        });
        return {week: week};
    },
    render: function () {
        var days = this.state.week.map(function (day) {
            return (
                <span>
                    <input type="checkbox" onChange={this.__update.bind(this, day.name)}/>
                    { day.abbr }
                </span>
            );
        }.bind(this));

        return <div>{days}</div>;
    },
    __update: function (name) {
        this.setState({
            week: this.state.week.map(function (day) {
                return {
                    name: day.name,
                    abbr: day.abbr,
                    checked: (day.name === name ? !day.checked : day.checked)
                };
            })
        });
        if (typeof this.props.link === 'function') this.props.link(this.state.week);
    }
});