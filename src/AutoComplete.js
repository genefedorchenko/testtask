import React from 'react';
import './AutoComplete.css';

class AutoComplete extends React.Component {
    constructor() { 
        super()
        this.state = { suggestions: [], suitableSuggestions: [], value: '' }
        this.onChange = this.onChange.bind(this)
    }
    componentDidMount() { 
        fetch(this.props.url)
            .then(data => data.json())
            .then(data => data.map(el => el.title))
            .then(data => this.setState((state) => ({ ...state, suggestions: data })))
    }
    onChange(e) {
        const enteredValue = e.target.value.toLowerCase()
        this.setState(state => ({
            ...state,
            value: enteredValue,
            suitableSuggestions: this.state.suggestions.filter(el => el.startsWith(enteredValue))
        }))
        this.returnValue(enteredValue)
    }

    returnValue(val) { 
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(val)
        }
    }

    suggestionSelected(index) { 
        this.setState(state => ({
            ...state,
            value: this.state.suggestions[index],
            suitableSuggestions: []
        }))
        this.returnValue(this.state.suggestions[index])
    }
    render() {
        return (
            <>
                <input onChange={this.onChange} type='text' value={this.state.value}/>
                {
                    this.state.suitableSuggestions.length > 0 &&
                        <ul className='suggestions'>
                            {
                                this.state.suitableSuggestions.map((suggestion, index) => (
                                    <li key={index} onClick={()=>this.suggestionSelected(index)}>
                                        {suggestion}
                                    </li>
                                ))
                            }
                        </ul>
                    }
            </>
        )
    }
}

export default AutoComplete;
