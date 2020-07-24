import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({language, text}) => {
    useEffect((e) => {
        console.log("New language or text");
    }, [language, text]);

    return <div />;
}

export default Convert;