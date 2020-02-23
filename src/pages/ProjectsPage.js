import React from 'react';

export default function ProjectsPage() {

    const projects = [
        {
            title: "Notebook",
            description: "A react based PWA quick notebook that save all data locally.",
            url: "https://thefallenmerc.github.io/notebook"
        },
        {
            title: "Flat React",
            description: "A react based flat cms that is simple and powerful.",
            url: "https://thefallenmerc.github.io/notebook"
        },
        {
            title: "Twitter Dark Mode",
            description: "Implementation of a conceptual design.",
            url: "https://thefallenmerc.github.io/notebook"
        },
        {
            title: "Yatch Hire",
            description: "Implementation of a conceptual design in flutter.",
            url: "https://github.com/thefallenmerc/yatch_hire"
        },
        {
            title: "90 Days",
            description: "A resolution app made in flutter backed by Laravel.",
            url: "https://github.com/thefallenmerc/90days-flutter"
        },
    ];

    return (
        <div id="projects" className="row d-flex section justify-content-center align-items-center">
            <div className="container">
                <h1 className="section-header text-center">Projects</h1>
                <div className="row pt-4">
                    {
                        projects.map((project, index) => {
                            return (
                                <div key={index} className="col-sm-6 col-md-6 col-lg-4 project">
                                    <div className="project-body">
                                        <h4 className="project-head">{project.title}</h4>
                                        <p className="project-details">{project.description}</p>
                                        <a href={project.url} rel="noopener noreferrer" target="_blank" className="project-link">Check it out <i className="fa fa-angle-right" /></a>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <p className="text-center">And many other projects.</p>
            </div>
        </div>
    );
}