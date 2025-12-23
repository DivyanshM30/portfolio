'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [formMessage, setFormMessage] = useState<{
        text: string;
        type: 'success' | 'error' | null;
    }>({ text: '', type: null });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Reset previous message state
        setFormMessage({ text: '', type: null });

        // Client-side validation
        const errors: string[] = [];

        if (!formData.name.trim()) {
            errors.push('Name is required.');
        }
        if (!formData.email.trim()) {
            errors.push('Email is required.');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.push('Please enter a valid email address.');
        }
        if (!formData.message.trim()) {
            errors.push('Message is required.');
        }

        if (errors.length > 0) {
            setFormMessage({ text: errors.join(' '), type: 'error' });
            return;
        }

        // Show loading state
        setIsLoading(true);

        try {
            const form = new FormData();
            form.append('name', formData.name);
            form.append('email', formData.email);
            form.append('message', formData.message);
            form.append('_subject', 'New Portfolio Contact');

            const response = await fetch('https://formspree.io/f/mnnzzegg', {
                method: 'POST',
                body: form,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                setFormMessage({
                    text: 'Thank you! Your message has been sent successfully.',
                    type: 'success',
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Network response was not ok');
            }
        } catch {
            setFormMessage({
                text: 'Oops! There was a problem sending your message. Please try again.',
                type: 'error',
            });
        }

        // Remove loading state
        setIsLoading(false);
    };

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let&apos;s Start a Conversation</h3>
                        <p>
                            Whether you&apos;re a recruiter looking for a passionate developer, a fellow student
                            wanting to collaborate, or someone who just wants to chat about technology, I&apos;d love
                            to hear from you. I&apos;m actively seeking internship opportunities at product-based
                            companies.
                        </p>
                        <div className="contact-links">
                            <a href="mailto:divyanshm.code@gmail.com" className="contact-link">
                                <i className="fas fa-envelope"></i>
                                divyanshm.code@gmail.com
                            </a>
                            {/* Phone number hidden for privacy
                            <a href="tel:+91-XXXXXXXXXX" className="contact-link">
                                <i className="fas fa-phone"></i>
                                +91-XXXXXXXXXX
                            </a>
                            */}
                            <a
                                href="https://linkedin.com/in/DivyanshM30"
                                className="contact-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin"></i>
                                LinkedIn Profile
                            </a>
                            <a
                                href="https://github.com/DivyanshM30"
                                className="contact-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github"></i>
                                GitHub Profile
                            </a>
                            <a
                                href="https://leetcode.com/DivyanshM30"
                                className="contact-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-code"></i>
                                LeetCode Profile
                            </a>
                        </div>
                    </div>
                    <div className="contact-form">
                        <div className="form-header">
                            <h3 className="form-title">Send a Message</h3>
                            <p className="form-subtitle">
                                Share a bit about who you are and what you&apos;d like to talk about — internships,
                                collaborations, or anything tech. I usually reply within 24 hours.
                            </p>
                        </div>
                        <div
                            className={`form-message ${formMessage.type || ''}`}
                            id="formMessage"
                            aria-live="polite"
                            style={{ display: formMessage.type ? 'block' : 'none' }}
                        >
                            {formMessage.text}
                        </div>
                        <form id="contactForm" onSubmit={handleSubmit} noValidate>
                            <input type="hidden" name="_subject" value="New Portfolio Contact" />
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        Name <span aria-hidden="true">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        autoComplete="name"
                                        placeholder="Your full name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        Email <span aria-hidden="true">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        autoComplete="email"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">
                                    Message <span aria-hidden="true">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="Tell me briefly what you're looking for or how I can help."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
                                id="submitBtn"
                                disabled={isLoading}
                            >
                                <i className="fas fa-paper-plane"></i>
                                <span className="btn-text">Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
