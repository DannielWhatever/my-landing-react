/** @jsx React.DOM */

var React = require("react");

var Skills = React.createClass({
    render: function() {
        //require("./Application.css");

        return (
            <section id="skills" className="skills bg-primary">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-10 col-lg-offset-1">
                            <div className="row">

                                { this.props.categories.map(function(categorie){

                                    return (
                                        <div className="col-md-4 col-sm-6" key={ categorie.key } >
                                            <div className="skill-item">
                                                <span className="fa-stack fa-4x">
                                                    <i className="fa fa-circle fa-stack-2x"></i>
                                                    <i className={categorie.classIcon}></i>
                                                </span>
                                                <h4>
                                                    <strong> {categorie.title} </strong>
                                                </h4>
                                                <ul>
                                                    { categorie.skills.map(function(skill){
                                                        return (
                                                            <li key={ skill.key } >{skill.title}</li>
                                                        )

                                                      })
                                                    }

                                                </ul>
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

module.exports = Skills;
