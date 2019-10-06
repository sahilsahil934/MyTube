import React from 'react';

class SearchBar extends React.Component {


    state = { search: '' };

    onInputChange = (event) => {

        this.setState({ search: event.target.value });

    }

    onFormSubmit = (event) => {

        event.preventDefault();

        this.props.onSearchSubmit(this.state.search);

    }

    render() {

        return (
          
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video search</label>
                        <input 
                            type="text"
                            value= {this.state.search}
                            onChange={this.onInputChange} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;