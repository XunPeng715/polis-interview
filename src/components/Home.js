import React from 'react';
import Source from './Source';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sources: null
        };        
    }

    componentWillMount() {
        const url = "https://newsapi.org/v2/sources?apiKey=072ba4d64188442198379c413b689560";
        var req = new Request(url);
        var that = this;
        fetch(req)
            .then(response => {
                return response.json();
            })
            .then(xun => {
                that.setState({
                    sources: xun.sources
                });
            });
    }

    render() {
        if(this.state.sources !== null) {                    
            return( 
                <div className="container">
                    <div className="row">
                        <h1>News Sources</h1>
                        <a href="/savedArticles" className="btn btn-primary pull-right">View Saved Articles</a>
                        <a href="/mySources" className="btn btn-primary pull-right-2">My Sources</a>
                        <Source sources={this.state.sources} />                             
                    </div>
                </div>
            );
        } else {
            return("");
        }
    }
}