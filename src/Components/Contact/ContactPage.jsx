import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setmessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `Thank You ${name} for Contacting Us. We will Get Back to You Soon.\n\nYour Mail Id - ${email}.\nYour Message is - ${message}`
        );
        setname("");
        setEmail("");
        setmessage("");
    };

    return (
        <>
            <div className="contactSection">
                <h2>Contact Us</h2>
                <div className="contactMap">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.9326842857768!2d77.1072568833736!3d30.906397434907817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f810027e64ab1%3A0x6f0c96dca08b048b!2sDecathlon%20Sports%20Solan!5e0!3m2!1sen!2sin!4v1743080396257!5m2!1sen!2sin"
                        width="800"
                        height="600"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="solanmap"
                    ></iframe>
                </div>

                <div className="contactInfo">
                    <div className="contactAddress">
                        <div className="address">
                            <h3>Store in London</h3>
                            <p>
                                1418 River Drive, Suite 35 Cottonhall, CA 9622
                                <br /> United Kingdom
                            </p>
                            <p>
                                EliteThreads@gmail.com
                                <br />
                                +44 20 7123 4567
                            </p>
                        </div>
                        <div className="address">
                            <h3>Store in India</h3>
                            <p>
                            Mall Road, Solan Near Shoolini Temple, Mall Road,
                            Solan
                                <br /> Himachal Pradesh
                            </p>
                            <p>
                                EliteThreads@gmail.com
                                <br />
                                +91 12345-06789
                            </p>
                        </div>
                    </div>
                    <div className="contactForm">
                        <h3>Get In Touch</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={name}
                                placeholder="Name *"
                                onChange={(e) => setname(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                value={email}
                                placeholder="Email address *"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <textarea
                                rows={10}
                                cols={40}
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => setmessage(e.target.value)}
                            />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
