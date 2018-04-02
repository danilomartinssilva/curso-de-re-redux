import React from 'react';
import { Link } from 'react-router-dom';



const NoteCard = ({ children }) => (
    <div className="jumbotron">
        <div>{children}</div>
        
    </div>
);

export default NoteCard;
