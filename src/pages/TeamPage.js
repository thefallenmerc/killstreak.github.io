import React from 'react';

export default function TeamPage() {

    const skills = [
        'Xamarin Forms',
        'Flutter',
    ]

    return (
        <div id="team" className="row d-flex section justify-content-center align-items-center">
            <div className="container text-center flex-fill">
                <h1 className="section-header text-center p-2">Team</h1>
                <p className="section-desc">Sonu Sharma - A creative and skilled programmer and flutter developer.</p>
                <div className="section-desc">
                    <ul>
                        {
                            skills.map((skill, index) => {
                                return <li key={index}>{skill}</li>;
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}