import React from 'react';

export default function SkillsPage() {

    const skills = [
        // "C",
        // "C++",
        // "Java",
        "Python",
        // "C#",
        "PHP",
        "Dart",
        "Typescript",
        "JavaScript",
        "Flutter",
        "HTML5",
        "CSS3",
        "Laravel",
        // "Magento",
        "Code Igniter",
        "Arduino",
        "Bootstrap",
        // "Servlets and JSP",
        "NodeJS",
        "ExpressJS",
        "VueJS",
        "React",
        "Angular",
        "jQuery",
        "RDBMS",
        "MySQL",
        "mongo DB",
        // "XML and JSON"
    ];

    return (
        <div id="skills" class="row d-flex section justify-content-center align-items-center">
            <div class="container text-center flex-fill">
                <h1 class="section-header text-center p-2">Skills</h1>
                <div class="section-desc">
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