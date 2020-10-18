import React from 'react';
import './Content.css';

const Content = props => {
    return (
        <div>
            <section>
                {props.children}
            </section>
        </div>
    );
}

export default Content;