import React, { useState, useEffect } from 'react';
import htmlContent from './chest.html';
import Navbar from '../Navbar';

const ChestDiseasePrediction = () => {
    const [loadedHtml, setLoadedHtml] = useState('');

    useEffect(() => {
        fetch(htmlContent)
            .then(response => response.text())
            .then(data => setLoadedHtml(data))
            .catch(error => console.error('Error fetching HTML content:', error));
    }, []);

    return (
        <>
        <Navbar/>
        <div dangerouslySetInnerHTML={{ __html: loadedHtml }} />
        </>
    );
}

export default ChestDiseasePrediction;
