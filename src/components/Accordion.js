import React, { useEffect } from 'react';

const Accordion = ({items}) => {
    //helper function that is triggered when the user 
    //clicks on an item.
    const onTitleClick = (index) => {
        console.log('Title clicked', index);
    };

    //This maps each item in the items props to a list
    const renderedItems = items.map((item, index) => {
        return (
            <React.Fragment key={item.title}>
                <div 
                    className="title active"
                    onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="accordion ui styled">
            {renderedItems}
        </div>  
    );
};

export default Accordion;