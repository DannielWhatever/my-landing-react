/** @jsx React.DOM */

var React = require("react");

var Twitter = React.createClass({
    render: function() {
        //require("./Application.css");
        return (
            <aside className="call-to-action bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h3>@DannielWhatever</h3>
                            <p>Acá debo poner intregación con el twitter o algo.</p>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
});

module.exports = Twitter;