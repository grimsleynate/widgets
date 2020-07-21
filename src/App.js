import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

//This is our list of question and answer pairs for this widget.
const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    },
];

const

export default () => {
    return (
        <div>
            <Search />
        </div>

    );
};