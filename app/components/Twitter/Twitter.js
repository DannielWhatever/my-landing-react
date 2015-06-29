/** @jsx React.DOM */

var React = require("react");

var Twitter = React.createClass({
    render: function() {

        return (
            <aside className="call-to-action bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h3>@DannielWhatever</h3>
                            <ul>
                            { this.props.tweets.map(function(tweet){
                                return(
                                <li> { tweet.text } </li>
                                )
                              })
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
});

module.exports = Twitter;