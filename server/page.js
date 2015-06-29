/** @jsx React.DOM */

var React = require("react");

var Application = require("../app/components/Application/Application");

var styleCollector = require("./style-collector");

module.exports = function(req, scriptFilename, tweets) {

	var html;
	var css = styleCollector.collect(function() {
		html = React.renderComponentToString(<Application url={ req.url } tweets={ tweets } />);
	});
	return React.renderComponentToString(
		<html>
			<head>
				<meta charSet="utf-8"></meta>
				<style id="server-side-style" dangerouslySetInnerHTML={{__html: css}} />
			</head>
			<body>
				<div id="content" dangerouslySetInnerHTML={{__html: html}} />
				<script src={"assets/" + scriptFilename}></script>
			</body>
		</html>
	);
}