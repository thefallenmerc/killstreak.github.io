import React from 'react';

export default function Footer() {
    return (
        <nav className="footer navbar-dark fixed-bottom">
            <span className="navbar-brand">Made with <i className="fa fa-code" /></span>
            <ul>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/shubham.chahar">
                        <i className="fa fa-facebook" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/thefallenmerc">
                        <i className="fa fa-twitter" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://in.linkedin.com/in/shubhamschahar">
                        <i className="fa fa-linkedin" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/thefallenmerc">
                        <i className="fa fa-github" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://bitbucket.org/thehandofgod">
                        <i className="fa fa-bitbucket" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}