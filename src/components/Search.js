import React, {useState} from 'react';

const Search = (props) => {
    const [term, setTerm] = useState('');

    return (
        <div className="search ui container">
            <div className=" ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={e => setTerm(e.target.value)} 
                        className="input" />
                </div>
            </div>
        </div>
    );
};

export default Search;