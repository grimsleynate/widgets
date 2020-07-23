import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

//This is our array of question and answer objects for the Accordion widget.
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

//This is our array of color option objects for our dropdown
const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    },
];

//This is the App component we are exporting
export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Dropdown 
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            />
        </div>

    );
};