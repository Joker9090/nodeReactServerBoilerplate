import React from 'react';
import ReactDOMServer from 'react-dom/server';

class Html extends React.Component {

  render() {
    var data = { data: Object.assign({}, this.props.state, { containerId: this.props.containerId } ) };

    var initScript = 'window.SCOPE = ' + JSON.stringify( data );

    return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
        </head>
        <body>

          <div className="container" id="auth" />

          {/* <script dangerouslySetInnerHTML={{__html: initScript}} /> */}
          <script src="/main.js"></script>

        </body>
      </html>
    );
  }

}

module.exports = Html;
