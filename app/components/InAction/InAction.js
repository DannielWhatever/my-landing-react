/** @jsx React.DOM */

var React = require("react");

var InAction = React.createClass({
    render: function() {
        //require("./Application.css");
        return (
            <section id="portfolio" className="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-lg-offset-1 text-center">
                            <h2>In Action</h2>
                            <hr className="small"/>

                            <div className="row">

                                { this.props.pics.map(function(pic){
                                    return (
                                        <div className="col-md-6" key={ pic.key} >
                                            <div className="portfolio-item">
                                                <a href="#">
                                                    <img className="img-portfolio img-responsive" src={ pic.image } />
                                                </a>
                                            </div>
                                        </div>
                                    )
                                  })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
});

module.exports = InAction;
