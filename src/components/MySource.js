import React from 'react';

export default class MySource extends React.Component {
    constructor(props) {
        super(props);
        let mySources = [];
        this.state = {
            mySources
        }
    }
    componentWillMount() {
        const url = "http://localhost:3100/getMySources";
        var req = new Request(url);
        fetch(req)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    mySources: data
                });
            });
    }

    render() {
        if(this.state.mySources !== null) {
            return(
                <div className="mySources container">
                    <div className="row">
                        <h1>My Sources</h1>
                        <a href="/home" className="btn btn-primary pull-right">Back to Sources List</a>
                        {
                            this.state.mySources.map((source, i) => {
                                return (
                                    <div className="source" key={i}>
                                        <p>
                                            <a href={`/articles/${source}`}>{source}</a>
                                        </p>    
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            );
        } else {
            return ("");
        }
    }
}