import React from 'react';
import Article from './Article';

export default class Articles extends React.Component {
    constructor(props) {
        super(props);
        let sourceId = this.props.match.params.sourceId;
        let articles = [];
        this.state = {
            sourceId,
            articles
        };     
    }

    componentWillMount() {
        const url = "https://newsapi.org/v2/top-headlines?sources="+this.state.sourceId+"&apiKey=072ba4d64188442198379c413b689560";
        var req = new Request(url);
        var that = this;
        fetch(req)
            .then(response => {
                return response.json();
            })
            .then(data => {
                that.setState({
                    articles: data.articles
                });
            });
    }

    render() {
        if(this.state.articles !== null) {
            return(
                <div className="articles container">
                    <div className="row">
                        <h1>Top 10 Articles</h1>
                        <a href="/home" className="btn btn-primary pull-right">Back to Sources</a>
                        <Article articles={this.state.articles} />                            
                    </div>
                </div>                                            
            );
        } else {
            return ("");
        }
    }
}