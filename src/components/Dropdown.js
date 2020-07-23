import React, {useState} from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    //This piece of state stores whether the dropdown menu is open or not.
    const [open, setOpen] = useState(false);

    const renderedOptions = options.map((option) => {
        //if the current option to map over is equal to the currently selected option,
        if (option.value === selected.value) {
            //don't return anything
            return null;
        }

        return (
            <div 
                key={option.value} 
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div 
                    //switches the open variable every time you click.
                    onClick={() => setOpen(!open)} 
                    //if open is true, set visible and active as classes, otherwise set an empty string.
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;