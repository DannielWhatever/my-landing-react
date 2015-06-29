/** @jsx React.DOM */

var React = require("react");

var Header = React.createClass({
    render: function() {
        //require("./Application.css");
        return (
            <header id="top" className="header">
                <div className="text-vertical-center">
                    <h1>Hi! Im Daniel Gutiérrez</h1>
                    <h3>Full Stack Developer from Santiago, CL</h3>
                    <br/>
                    <a href="#about" className="btn btn-dark btn-lg">Sobre mi trabajo</a>
                </div>
            </header>
        );
    }
});

module.exports = Header;