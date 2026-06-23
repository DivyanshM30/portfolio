export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="social-links">
                    <a
                        href="https://github.com/DivyanshM30"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        href="https://linkedin.com/in/DivyanshM30"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                        href="https://twitter.com/DivyanshM30"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href="https://leetcode.com/DivyanshM30"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fas fa-code"></i>
                    </a>
                    <a href="mailto:divyanshm.code@gmail.com" className="social-link">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
                <p>
                    &copy; {new Date().getFullYear()} Divyansh Mishra
                    <span style={{ margin: '0 8px' }}>·</span>
                    All rights reserved
                    <span style={{ margin: '0 8px' }}>·</span>
                    Made with ❤️
                </p>
            </div>
        </footer>
    );
}
