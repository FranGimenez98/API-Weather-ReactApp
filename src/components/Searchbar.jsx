import React from "react";
import './searchbar.scss';

class Searchbar extends React.Component{
    

    onInputChange(e){
        this.props.inputChange(e)
    }

    onFormSubmit(e){
        e.preventDefault()

        this.props.formSubmitted()
    }

    render(){
        const location = this.props.location

        return(
            <div className="search-bar">
                <form 
                    onSubmit={(e) => this.onFormSubmit(e)}
                    action=""
                    className="search-bar__form"
                >
                    <button className="search-bar__button">
                        Search
                    </button>
                    <input 
                        type="text" 
                        className="search-bar__search" 
                        id="search"
                        value={location}
                        onChange={(e) => this.onInputChange(e)}
                    >
                    </input>
                </form>
            </div>
        )
    }
}

export default Searchbar;