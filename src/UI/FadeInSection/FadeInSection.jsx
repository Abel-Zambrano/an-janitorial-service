import React, { useState, useRef, useEffect } from 'react';
import './FadeInSection.scss';

function FadeInSection(props) {
    const [ isVisible, setIsVisible ] = useState(false);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div className={`fade-in-section ${isVisible ? 'is-visible' : '' }`}
        ref={domRef}>
            {props.children}
        </div>
    );
}

export default FadeInSection;