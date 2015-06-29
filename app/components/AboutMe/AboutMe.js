/** @jsx React.DOM */

var React = require("react");

var AboutMe = React.createClass({
    render: function() {
        //require("./Application.css");
        return (
            <section id="about" className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Durante los 3 y medio últimos años de mi vida... </h2>
                            <p className="lead">he estado desarrollando aplicaciones cliente servidor, principalmente usando el framework Spring, servicios web SOAP y REST, programando en PL-SQL e implementando servicios de pago. También durante este tiempo he trabajado en el front end, usando vanilla JavaScript, algún framework y herramientas como Gulp y Browserify.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = AboutMe;