/** @jsx React.DOM */

var React = require("react");

var Header = React.createClass({
    render: function() {
        //require("./Application.css");
        //use this, with another pic
        /*<div className="text-vertical-center">
            <h1>Hi! Im Daniel Gutiérrez</h1>
            <h3>Full Stack Developer from Santiago, CL</h3>
            <br/>
            <a href="#about" className="btn btn-dark btn-lg">Sobre mi trabajo</a>
        </div>*/
        return (
            <header id="top" className="header">


                  <div className="text-vertical-bottom">
                    <h1>Hi! Im Daniel Gutiérrez</h1>
                    <h3> ~ Full Stack Developer from Santiago, CL</h3>

                    <br/><br/><br/>

                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                          <a href="#about" className="btn btn-dark btn-lg">Sobre mi trabajo</a>
                        </div>
                    </div>


                    <br/><br/><br/><br/><br/><br/><br/>

                  </div>


            </header>
        );
    }
});

module.exports = Header;
