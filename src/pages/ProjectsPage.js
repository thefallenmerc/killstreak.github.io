import React from 'react';

export default function ProjectsPage() {

    const projects = [
        {
            title: "Notebook",
            description: "A react based PWA quick notebook that save all data locally.",
            url: "https://notebook.shubhamschahar.com/"
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
                                        <a href={project.url} className="project-link">Check it out <i className="fa fa-angle-right" /></a>
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