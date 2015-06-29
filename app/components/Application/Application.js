/** @jsx React.DOM */

var React = require("react");

var Application = React.createClass({
    render: function() {

        var Navigation = require("../Navigation/Navigation");
        var Header = require("../Header/Header");
        var AboutMe = require("../AboutMe/AboutMe");
        var Skills = require("../Skills/Skills");
        var categories = [
            {
                key:1,
                title: 'Front End' ,
                skills: [
                    {key:1, title:'Javascript'},
                    {key:2, title:'Angular'},
                    {key:3, title:'Backbone'},
                    {key:4, title:'Preprocesadores CSS'}
                ]
            },
            {
                key:2,
                title: 'Back End' ,
                skills: [
                    {key:1, title:'Java'},
                    {key:2, title:'Spring Framework'},
                    {key:3, title:'PHP'},
                    {key:4, title:'Node.Js'}
                ]
            },
            {
                key:3,
                title: 'Otros' ,
                skills: [
                    {key:1, title:'SQL'},
                    {key:2, title:'RESTFul'},
                    {key:3, title:'GIT'},
                    {key:4, title:'Design Patterns'}
                ]
            }
        ];

        var InAction = require("../InAction/InAction");
        var pics = [
            { key:1, image: './img/pics/chilehack_morning.jpg' },
            { key:2, image: './img/pics/chilehack_winners.jpg' },
            { key:3, image: './img/pics/chilehack_pitch.jpg' },
            { key:4, image: './img/pics/swvalpo_winners.jpg' }
        ];

        var Twitter = require("../Twitter/Twitter");
        var Contact = require("../Contact/Contact");

        //require("../../../node_modules/font-awesome/css/font-awesome.css");
        //require("../../../node_modules/bootstrap/dist/css/bootstrap.min.css");

        require("./Application.css");
        //require("./Application.styl");

        return (
            <div className="application">
                <a id="menu-toggle" href="#" className="btn btn-dark btn-lg toggle"><i className="fa fa-bars"></i></a>
                <Navigation />
                <Header />
                <AboutMe />
                <Skills categories={categories} />
                <InAction pics={pics} />
                <Twitter tweets={this.props.tweets} />
                <Contact />
            </div>
        );
    }
});

module.exports = Application;