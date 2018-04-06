import React from 'react';
import moment from 'moment';

export default class Article extends React.Component {
    saveArticle(article) {
        fetch('http://localhost:3100/addArticle', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            if(data) {
                alert(data.success);
            }
        });
    }
    render() {
        if(this.props.articles !== null) {
            return(
                <div>
                    {
                        this.props.articles.map((article, i) => {
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
                                        <br/>
                                        <button onClick={() => this.saveArticle(article)} className="btn btn-success">Save Article</button>
                                    </div>                                          
                                );
                            } else {
                                return (
                                    <div className="article" key={i}>
                                        <a href={article.url} target="_blank"><h4>{article.title}</h4></a>
                                        <p>{article.description}</p>
                                        <i>Source: {article.source.name}</i>
                                        <i>Published Date: <u>{formattedDate}</u></i>
                                        <br/>
                                        <button onClick={() => this.saveArticle(article)} className="btn btn-success">Save Article</button>
                                    </div>                                          
                                );
                            }
                        })
                    }    
                </div>
            );
        } else {
            return ("");
        }
    }
}