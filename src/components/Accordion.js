import React, { useState } from 'react';

//This component creates an accordion-style list.  
/*PROPS NEEDED: 
    items: An array of objects that contain two key-value
        pairs with the keys "title" and "content" */
const Accordion = ({items}) => {
    //this state will store which index in our list of items
    //is currently active.
    const [ activeIndex, setActiveIndex] = useState(null);

    //helper function that is triggered when the user 
    //clicks on an item.
    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    //This maps each item in the items props to a list
    const renderedItems = items.map((item, index) => {
        //if the current index is active (according to the activeIndex state),
        //store the string 'active' in the variable 'active.  Otherwise, store an empty string.
        const active = index === activeIndex ? 'active' : '';
        
        return (
            <React.Fragment key={item.title}>
                <div 
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    //We are returning a div containing our rendered list of items.
    return (
        <div className="accordion ui styled">
            {renderedItems}
        </div>  
    );
};

export default Accordion;