/** @jsx React.DOM */

var React = require("react");

var Navigation = React.createClass({
    render: function() {
        return (
            <nav id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <a id="menu-close" href="#" className="btn btn-light btn-lg pull-right toggle"><i className="fa fa-times"></i></a>
                    <li className="sidebar-brand">
                        <a href="#top" className="menu-link">Daniel Gutiérrez</a>
                    </li>
                    <li>
                        <a href="#top" className="menu-link">Hi</a>
                    </li>
                    <li>
                        <a href="#about" className="menu-link">Sobre mi trabajo</a>
                    </li>
                    <li>
                        <a href="#skills" className="menu-link">Habilidades</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="menu-link">In Action</a>
                    </li>
                    <li>
                        <a href="#contact" className="menu-link">Enviame un email</a>
                    </li>
                </ul>
            </nav>
        );
    }
});

module.exports = Navigation;
