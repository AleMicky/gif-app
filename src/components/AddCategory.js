import React from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategoria}) => {

    const [inputValue, setInputValue] = React.useState('');

    const handleInputChange = e =>{
        setInputValue(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategoria(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
       <form onSubmit={handleSubmit}>
            <input 
                  className="input is-primary" 
                  type="text" 
                  value={inputValue}
                  onChange={handleInputChange}
            />
       </form>
    )
}

AddCategory.propTypes = {
    setCategoria: PropTypes.func.isRequired
}