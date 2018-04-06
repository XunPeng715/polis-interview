import React from 'react';

export default class Source extends React.Component {    
    checkboxes = [];

    constructor(props) {
        super(props);
        this.state = {
            checkboxes: []
        };
    }

    handleChange(event) {        
        if(this.checkboxes.indexOf(event.target.value) < 0) {
            this.checkboxes.push(event.target.value);
        } else {
            var index = this.checkboxes.indexOf(event.target.value);
            this.checkboxes.splice(index, 1);
        }
        this.setState({
            checkboxes: this.checkboxes
        });
    }
    addSources(e) {
        e.preventDefault();
        if(this.state.checkboxes.length!==5) {
            alert("Please select 5 sources");
        } else {
            let checkboxArray = this.state.checkboxes;

            fetch('http://localhost:3100/addSources', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(checkboxArray)
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                if(data) {
                    alert(data.success);
                }
            });

        }
    }
    render() {
        if(this.props.sources.length > 0) {
            return(
                <div className="sourceList">
                    <form method="post" id="selectSources" onSubmit={this.addSources.bind(this)}>
                        {
                            this.props.sources.map((source, i) => {
                                return (
                                    <div key={i}>
                                        <input type="checkbox" name="sources" ref="sources" onChange={this.handleChange.bind(this)} value={source.id} /> &nbsp; {source.name}
                                    </div>
                                );
                            })
                        }
                        <input type="submit" className="btn btn-primary button" value="Add Sources" />
                    </form>
                </div>
            );
        } else {
            return ("");
        }
    }
}