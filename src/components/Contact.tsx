'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';

type Field = 'name' | 'email' | 'message';

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
    const [fieldErrors, setFieldErrors] = useState<Partial<Record<Field, string>>>({});
    const activeRequest = useRef<AbortController | null>(null);

    useEffect(() => () => {
        const request = activeRequest.current;
        activeRequest.current = null;
        request?.abort();
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (activeRequest.current) return;

        // Reset previous message state
        setFormMessage({ text: '', type: null });

        // Client-side validation
        const errors: Partial<Record<Field, string>> = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required.';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Please enter a valid email address.';
        }
        if (!formData.message.trim()) {
            errors.message = 'Message is required.';
        }

        setFieldErrors(errors);
        const firstInvalid = (['name', 'email', 'message'] as const).find((field) => errors[field]);
        if (firstInvalid) {
            setFormMessage({ text: 'Please correct the highlighted fields.', type: 'error' });
            const field = e.currentTarget.elements.namedItem(firstInvalid);
            if (field instanceof HTMLElement) field.focus();
            return;
        }

        // Show loading state
        setIsLoading(true);
        const controller = new AbortController();
        activeRequest.current = controller;
        let timedOut = false;
        const timeout = window.setTimeout(() => {
            timedOut = true;
            controller.abort();
        }, 15_000);

        try {
            const form = new FormData();
            form.append('name', formData.name);
            form.append('email', formData.email);
            form.append('message', formData.message);
            form.append('_subject', 'New Portfolio Contact');

            const response = await fetch('https://formspree.io/f/mnnzzegg', {
                method: 'POST',
                signal: controller.signal,
                body: form,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (activeRequest.current !== controller) return;
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
            if (activeRequest.current !== controller) return;
            setFormMessage({
                text: timedOut
                    ? 'The request timed out. Your draft is saved below. Delivery could not be confirmed; retry or email me directly.'
                    : controller.signal.aborted
                        ? 'Sending cancelled. Your draft is saved below. Delivery could not be confirmed; retry or email me directly.'
                        : 'There was a problem sending your message. Your draft is saved below. Please retry or email me directly.',
                type: 'error',
            });
        } finally {
            window.clearTimeout(timeout);
            if (activeRequest.current === controller) {
                activeRequest.current = null;
                setIsLoading(false);
            }
        }
    };

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <p className="eyebrow">05 / WHAT’S NEXT?</p>
                <h2 className="section-title">Let’s build <em>something.</em></h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let&apos;s Start a Conversation</h3>
                        <p>
                            Have a product to build, an engineering challenge to explore, or an opportunity
                            worth talking about? I&apos;d love to hear from you. I&apos;m currently an SDE Intern
                            at PGAGI Consultancy and always happy to connect with thoughtful teams and fellow builders.
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
                                Share a bit about who you are and what you&apos;d like to talk about: internships,
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
                            {formMessage.type === 'error' && (
                                <> <a href="mailto:divyanshm.code@gmail.com">Email me directly</a>.</>
                            )}
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
                                        disabled={isLoading}
                                        aria-invalid={Boolean(fieldErrors.name)}
                                        aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                    {fieldErrors.name && <p id="name-error" className="field-error">{fieldErrors.name}</p>}
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
                                        disabled={isLoading}
                                        aria-invalid={Boolean(fieldErrors.email)}
                                        aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                    {fieldErrors.email && <p id="email-error" className="field-error">{fieldErrors.email}</p>}
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
                                    disabled={isLoading}
                                    aria-invalid={Boolean(fieldErrors.message)}
                                    aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                                {fieldErrors.message && <p id="message-error" className="field-error">{fieldErrors.message}</p>}
                            </div>
                            <button
                                type="submit"
                                className="submit-btn"
                                id="submitBtn"
                                disabled={isLoading}
                            >
                                <i className="fas fa-paper-plane"></i>
                                <span className="btn-text">{isLoading ? 'Sending…' : 'Send message'}</span>
                            </button>
                            {isLoading && (
                                <button type="button" className="submit-btn" onClick={() => activeRequest.current?.abort()}>
                                    Cancel
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
