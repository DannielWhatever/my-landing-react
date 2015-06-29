/** @jsx React.DOM */

var React = require("react");

var Contact = React.createClass({
    render: function() {
        //require("./Application.css");
        return (

            <footer id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-lg-offset-1 text-center">
                            <h4><strong>Contacto</strong></h4>
                            <p>Actualmente puedes encontrarme en Santiago de Chile</p>
                            <ul className="list-unstyled">
                                <li>
                                    <i className="fa fa-envelope-o fa-fw"></i>
                                    <a href="mailto:name@example.com">dannielgutierrez90@gmail.com</a>
                                </li>
                                <li>
                                    <i className="fa fa-phone fa-fw"></i>
                                    <span>-</span>
                                </li>
                            </ul>
                            <br/>
                            <ul className="list-inline">
                                <li>
                                    <a href="https://twitter.com/DannielWhatever">
                                        <i className="fa fa-twitter fa-fw fa-3x"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/profile/view?id=216836458">
                                        <i className="fa fa-linkedin fa-fw fa-3x"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/DannielWhatever">
                                        <i className="fa fa-github fa-fw fa-3x"></i>
                                    </a>
                                </li>
                            </ul>
                            <hr className="small" />
                            <p className="text-muted">
                                Copyright &copy; <a href="https://twitter.com/DannielWhatever">@DannielWhatever</a> 2015
                                <br/>
                                Basado en un template de <a href="http://startbootstrap.com/template-overviews/stylish-portfolio/">Start Bootstrap</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        );
    }
});

module.exports = Contact;
