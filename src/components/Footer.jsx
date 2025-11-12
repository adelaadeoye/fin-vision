import './Footer.css'

function Footer() {
return (
    <footer className="footer" id="contact">
        <div className="container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>FinVision</h3>
                    <p>Empowering financial intelligence for a brighter future.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Connect</h4>
                    <ul>
                        <li>
                            <a 
                                href="https://wa.me/4915140721498" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Chat on WhatsApp"
                            >
                                WhatsApp
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 FinVision. All rights reserved.</p>
            </div>
        </div>
    </footer>
)
}

export default Footer
