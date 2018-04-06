import React from 'react';
import moment from 'moment';

export default class Saved extends React.Component {
    constructor(props) {
        super(props);
        let articles = [];
        this.state = {
            articles
        };  
    }

    componentWillMount() {
        const url = "http://localhost:3100/savedArticles";
        var req = new Request(url);
        var that = this;
        fetch(req)
            .then(response => {
                return response.json();
            })
            .then(data => {
                that.setState({
                    articles: data
                });
            });
    }

    render() {
        if(this.state.articles !== null) {
            return(
                <div className="articles container">
                    <div className="row">
                        <h1>List of saved articles</h1>
                        <a href="/home" className="btn btn-primary pull-right">Back to Sources</a>
                        {
                            this.state.articles.map((article, i) => {
                                let date = article.publishedAt;
                                let formattedDate = moment(date).format('LL');
                                if(article.urlToImage) {
                                    return (
                                        <div className="article" key={i}>
                                            <img src={article.urlToImage} alt={article.title} />
                                            <a href={article.url} target="_blank"><h4>{article.title}</h4></a>
                                            <p>{article.description}</p>
                                            <i>Source: {article.source.name}</i>
                                            <i>Published Date: <u>{formattedDate}</u></i>
                                        </div>                                          
                                    );
                                } else {
                                    return (
                                        <div className="article" key={i}>
                                            <a href={article.url} target="_blank"><h4>{article.title}</h4></a>
                                            <p>{article.description}</p>
                                            <i>Source: {article.source.name}</i>
                                            <i>Published Date: <u>{formattedDate}</u></i>
                                        </div>                                          
                                    );
                                }
                            })
                        }                                        
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <h1>List of saved articles</h1>
                        <a href="/home" className="btn btn-primary pull-right">Back to Sources</a>
                        <p>No saved articles</p>
                    </div>
                </div>
            );
        }
    }
}