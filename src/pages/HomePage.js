import React from 'react';

export default function HomePage({ isBirthday }) {
    return (
        <div
            id="home"
            className="row d-flex section justify-content-center align-items-center"
        >
            <h1 className="section-header text-center">
                {
                    isBirthday ?
                        <div className="birthday-wish"><div> <span role="emoji" aria-label="cake">🎂</span></div><div>Happy Birthday to me 😍</div></div>
                        :
                        <div>Shubham S Chahar</div>
                }
            </h1>
        </div>
    );
}