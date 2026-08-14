import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    CheckCircle,
    Shield,
    Zap,
    FileText,
    Settings,
    Mail,
    MessageCircle,
    Phone,
} from "react-feather";

import "./Quote.css";

import { useNavigate } from "react-router-dom";


const WHATSAPP_NUMBER = "919445468377";
const QUOTE_EMAIL = "info@circuitses.com";


const panelTypes = [
    {
        id: "mcc",
        number: "01",
        title: "MCC Panel",
        subtitle: "Motor Control Centre",
        icon: <Settings size={20} />,
    },
    {
        id: "pcc",
        number: "02",
        title: "PCC Panel",
        subtitle: "Power Control Centre",
        icon: <Zap size={20} />,
    },
    {
        id: "apfc",
        number: "03",
        title: "APFC Panel",
        subtitle: "Power Factor Correction",
        icon: <Zap size={20} />,
    },
    {
        id: "plc",
        number: "04",
        title: "PLC / Automation",
        subtitle: "PLC • HMI • SCADA",
        icon: <Settings size={20} />,
    },
    {
        id: "vfd",
        number: "05",
        title: "VFD Panel",
        subtitle: "Motor Speed Control",
        icon: <Zap size={20} />,
    },
    {
        id: "custom",
        number: "06",
        title: "Custom Panel",
        subtitle: "Built to your specification",
        icon: <FileText size={20} />,
    },
    {
        id: "not-sure",
        number: "07",
        title: "Not Sure",
        subtitle: "We'll help define it",
        icon: <Shield size={20} />,
    },
];


const initialForm = {
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    quantity: "",
    timeline: "",
    message: "",
    website: "",
};


const Quote = () => {

    const [selectedPanel, setSelectedPanel] = useState("");

    const [formData, setFormData] = useState(initialForm);

    const [error, setError] = useState("");

    const [submitted, setSubmitted] = useState(false);

    const [submitting, setSubmitting] = useState(false);

    const navigate = useNavigate();

    const handleChange = (event) => {

        const {
            name,
            value,
        } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        if (error) {
            setError("");
        }

        if (submitted) {
            setSubmitted(false);
        }
    };


    const selectPanel = (panelId) => {

        setSelectedPanel(panelId);

        setError("");

        if (submitted) {
            setSubmitted(false);
        }
    };


    const getPanelName = () => {

        const panel = panelTypes.find(
            (item) => item.id === selectedPanel
        );

        return panel ? panel.title : "";
    };


    const buildEnquiryMessage = () => {

        return `
CES — ENGINEERING QUOTE ENQUIRY

Panel / Solution:
${getPanelName()}

CUSTOMER DETAILS
Name: ${formData.name}
Company: ${formData.company || "Not provided"}
Phone: ${formData.phone}
Email: ${formData.email}
Location: ${formData.location}

PROJECT DETAILS
Quantity: ${formData.quantity}
Required Timeline: ${formData.timeline}

REQUIREMENT
${formData.message}

Please contact the customer regarding this engineering enquiry.

— Circuits Energy System
`.trim();
    };


    const validateForm = () => {

        const trimmedName = formData.name.trim();
        const trimmedCompany = formData.company.trim();
        const trimmedLocation = formData.location.trim();
        const trimmedMessage = formData.message.trim();


        if (formData.website.trim()) {
            return "Unable to submit this enquiry.";
        }


        if (!selectedPanel) {
            return "Please select the panel or solution you are looking for.";
        }


        if (
            trimmedName.length < 2 ||
            trimmedName.length > 80
        ) {
            return "Please enter a valid name between 2 and 80 characters.";
        }


        if (
            trimmedCompany.length > 120
        ) {
            return "Company name must be 120 characters or less.";
        }


        const phone = formData.phone.replace(
            /[\s\-().]/g,
            ""
        );


        if (
            !/^(?:\+91|91)?[6-9]\d{9}$/.test(phone)
        ) {
            return "Please enter a valid Indian mobile number.";
        }


        if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                formData.email
            )
        ) {
            return "Please enter a valid email address.";
        }


        if (
            trimmedLocation.length < 2 ||
            trimmedLocation.length > 100
        ) {
            return "Please enter the project location.";
        }


        const quantity = Number(
            formData.quantity
        );


        if (
            !Number.isInteger(quantity) ||
            quantity < 1 ||
            quantity > 9999
        ) {
            return "Please enter a valid quantity between 1 and 9999.";
        }


        if (!formData.timeline) {
            return "Please select your required timeline.";
        }


        if (
            trimmedMessage.length < 2 ||
            trimmedMessage.length > 1500
        ) {
            return "Please describe your requirement in 20–1500 characters.";
        }


        return "";
    };


    const handleSubmit = async (event) => {

        event.preventDefault();

        const validationError = validateForm();

        if (validationError) {

            setError(validationError);

            const formCard =
                document.querySelector(".quote-form-card");

            if (formCard) {

                formCard.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

            }

            return;
        }


        setError("");
        setSubmitting(true);


        const normalizedPhone =
            formData.phone
                .replace(/[\s\-().]/g, "");


        const payload = {

            enquiry_type: "quote",

            name: formData.name.trim(),

            company:
                formData.company.trim() || null,

            email:
                formData.email.trim().toLowerCase(),

            phone:
                normalizedPhone,

            location:
                formData.location.trim(),

            panel_type:
                getPanelName(),

            quantity:
                Number(formData.quantity),

            timeline:
                formData.timeline,

            message:
                formData.message.trim(),

            website:
                formData.website.trim(),

        };


        try {

            const response = await fetch(
                "https://api.circuitses.com/api/enquiries",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify(payload),
                }
            );


            const result =
                await response.json();


            if (!response.ok || !result.success) {

                throw new Error(
                    result.message ||
                    "Unable to submit your enquiry."
                );

            }


            /*
             * SUCCESS
             */

            // setSubmitted(true);
            navigate("/thank-you");

            setError("");

            setFormData(initialForm);

            setSelectedPanel("");


        } catch (submitError) {

            console.error(
                "Quote submission error:",
                submitError
            );

            setError(
                submitError.message ||
                "Unable to submit your enquiry right now. Please try again."
            );

        } finally {

            setSubmitting(false);

        }
    };


    return (
        <main className="quote-page">


            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="quote-hero">

                <div
                    className="quote-grid"
                    aria-hidden="true"
                />

                <div
                    className="quote-orbit quote-orbit-one"
                    aria-hidden="true"
                />

                <div
                    className="quote-orbit quote-orbit-two"
                    aria-hidden="true"
                />

                <div
                    className="quote-energy-line quote-energy-line-one"
                    aria-hidden="true"
                />

                <div
                    className="quote-energy-line quote-energy-line-two"
                    aria-hidden="true"
                />


                <div className="quote-container">


                    {/* =================================================
                        INTRO
                    ================================================= */}

                    <div
                        className="quote-intro"
                        data-aos="fade-right"
                    >

                        <div className="quote-eyebrow">

                            <span className="quote-eyebrow-dot" />

                            ENGINEERING ENQUIRY

                        </div>


                        <h1>

                            Let's build the

                            <span>
                                right panel
                            </span>

                            for your project.

                        </h1>


                        <p className="quote-intro-text">

                            Tell us what you're planning.
                            Our engineering team will help
                            turn your requirement into the
                            right electrical panel and
                            configuration.

                        </p>


                        <div className="quote-trust-list">


                            <div className="quote-trust-item">

                                <div className="quote-trust-icon">
                                    <CheckCircle size={19} />
                                </div>

                                <div>

                                    <strong>
                                        Engineered to your requirement
                                    </strong>

                                    <span>
                                        Designed around your actual application
                                    </span>

                                </div>

                            </div>


                            <div className="quote-trust-item">

                                <div className="quote-trust-icon">
                                    <Shield size={19} />
                                </div>

                                <div>

                                    <strong>
                                        Quality-focused manufacturing
                                    </strong>

                                    <span>
                                        Built, wired and tested with care
                                    </span>

                                </div>

                            </div>


                            <div className="quote-trust-item">

                                <div className="quote-trust-icon">
                                    <Zap size={19} />
                                </div>

                                <div>

                                    <strong>
                                        Engineering support
                                    </strong>

                                    <span>
                                        Specification support from requirement to panel
                                    </span>

                                </div>

                            </div>


                        </div>


                        <div className="quote-note">

                            <div className="quote-note-mark">
                                "
                            </div>

                            <div>

                                <strong>
                                    Not sure which panel you need?
                                </strong>

                                <p>
                                    No problem. Tell us about the
                                    application and our team can help
                                    identify the right solution.
                                </p>

                            </div>

                        </div>


                        <div className="quote-direct-contact">

                            <span>
                                Prefer to talk directly?
                            </span>

                            <a
                                href={`tel:+91${WHATSAPP_NUMBER.slice(2)}`}
                                className="quote-phone-link"
                            >
                                <Phone size={16} />

                                +91 94454 68377
                            </a>

                        </div>

                    </div>



                    {/* =================================================
                        FORM
                    ================================================= */}

                    <div
                        className="quote-form-card"
                        data-aos="fade-left"
                    >

                        <div className="quote-form-top">

                            <div>

                                <span>
                                    PROJECT ENQUIRY
                                </span>

                                <h2>
                                    Tell us what
                                    <br />
                                    you're building.
                                </h2>

                            </div>


                            <div className="quote-form-number">
                                01
                            </div>

                        </div>


                        <div className="quote-form-progress">

                            <span className="active" />
                            <span />
                            <span />

                        </div>


                        <form
                            onSubmit={handleSubmit}
                            noValidate
                        >

                            {/* Honeypot */}

                            <div
                                className="quote-honeypot"
                                aria-hidden="true"
                            >

                                <label htmlFor="website">
                                    Website
                                </label>

                                <input
                                    id="website"
                                    type="text"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    tabIndex="-1"
                                    autoComplete="off"
                                />

                            </div>


                            {/* =================================================
                                STEP 01
                            ================================================= */}

                            <div
                                className="quote-field-section"
                                id="quote-panel-selection"
                            >

                                <div className="quote-field-heading">

                                    <div>

                                        <small>
                                            STEP 01
                                        </small>

                                        <h3>
                                            What are you looking for?
                                        </h3>

                                    </div>

                                    <span>
                                        Select one
                                    </span>

                                </div>


                                <div className="quote-panel-grid">

                                    {panelTypes.map(
                                        (panel) => (

                                            <button
                                                key={panel.id}
                                                type="button"
                                                className={`quote-panel-option ${selectedPanel === panel.id
                                                    ? "selected"
                                                    : ""
                                                    }`}
                                                onClick={() =>
                                                    selectPanel(panel.id)
                                                }
                                                aria-pressed={
                                                    selectedPanel === panel.id
                                                }
                                            >

                                                <span className="quote-panel-number">
                                                    {panel.number}
                                                </span>

                                                <span className="quote-panel-icon">
                                                    {panel.icon}
                                                </span>

                                                <span className="quote-panel-copy">

                                                    <strong>
                                                        {panel.title}
                                                    </strong>

                                                    <small>
                                                        {panel.subtitle}
                                                    </small>

                                                </span>

                                                <span className="quote-panel-check">

                                                    <CheckCircle
                                                        size={17}
                                                    />

                                                </span>

                                            </button>

                                        )
                                    )}

                                </div>

                            </div>



                            {/* =================================================
                                STEP 02
                            ================================================= */}

                            <div className="quote-field-section">

                                <div className="quote-field-heading">

                                    <div>

                                        <small>
                                            STEP 02
                                        </small>

                                        <h3>
                                            Project details
                                        </h3>

                                    </div>

                                    <span>
                                        Tell us what you know
                                    </span>

                                </div>


                                <div className="quote-input-grid">


                                    <label className="quote-input">

                                        <span>
                                            Company / Organisation
                                        </span>

                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Your company name"
                                            maxLength="120"
                                            autoComplete="organization"
                                        />

                                    </label>


                                    <label className="quote-input">

                                        <span>
                                            Quantity *
                                        </span>

                                        <input
                                            type="number"
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            placeholder="e.g. 2"
                                            min="1"
                                            max="9999"
                                            step="1"
                                            required
                                        />

                                    </label>


                                    <label className="quote-input">

                                        <span>
                                            Required timeline *
                                        </span>

                                        <select
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleChange}
                                            required
                                        >

                                            <option value="">
                                                Select timeline
                                            </option>

                                            <option value="Urgent">
                                                Urgent
                                            </option>

                                            <option value="2–4 weeks">
                                                2–4 weeks
                                            </option>

                                            <option value="1–2 months">
                                                1–2 months
                                            </option>

                                            <option value="Planning stage">
                                                Planning stage
                                            </option>

                                        </select>

                                    </label>


                                    <label className="quote-input">

                                        <span>
                                            Project location *
                                        </span>

                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            placeholder="City / State"
                                            minLength="2"
                                            maxLength="100"
                                            required
                                            autoComplete="address-level2"
                                        />

                                    </label>


                                </div>


                                <label className="quote-input quote-input-full">

                                    <span>
                                        Tell us about your requirement *
                                    </span>

                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Load details, incoming supply, motor details, automation requirements, application, or anything else you already know..."
                                        rows="6"

                                        maxLength="1500"
                                        required
                                    />

                                    <small className="quote-character-count">
                                        {formData.message.length} / 1500
                                    </small>

                                </label>


                            </div>



                            {/* =================================================
                                STEP 03
                            ================================================= */}

                            <div className="quote-field-section">

                                <div className="quote-field-heading">

                                    <div>

                                        <small>
                                            STEP 03
                                        </small>

                                        <h3>
                                            Where should we reach you?
                                        </h3>

                                    </div>

                                </div>


                                <div className="quote-input-grid">


                                    <label className="quote-input">

                                        <span>
                                            Your name *
                                        </span>

                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full name"
                                            minLength="2"
                                            maxLength="80"
                                            required
                                            autoComplete="name"
                                        />

                                    </label>


                                    <label className="quote-input">

                                        <span>
                                            Phone number *
                                        </span>

                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91"
                                            minLength="10"
                                            maxLength="15"
                                            pattern="^(?:\+91[\s-]?)?[6-9]\d{9}$"
                                            inputMode="tel"
                                            required
                                            autoComplete="tel"
                                        />

                                    </label>


                                    <label className="quote-input quote-input-full">

                                        <span>
                                            Email address *
                                        </span>

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@company.com"
                                            maxLength="150"
                                            required
                                            autoComplete="email"
                                        />

                                    </label>


                                </div>

                            </div>



                            {/* =================================================
                                ERROR
                            ================================================= */}

                            {error && (

                                <div
                                    className="quote-form-error"
                                    role="alert"
                                >

                                    <span>
                                        !
                                    </span>

                                    {error}

                                </div>

                            )}



                            {/* =================================================
                                SUCCESS
                            ================================================= */}

                            {submitted && (
                                <div
                                    className="quote-form-success"
                                    role="status"
                                >

                                    <CheckCircle size={22} />

                                    <div>

                                        <strong>
                                            Thank you — your enquiry has been received.
                                        </strong>

                                        <span>
                                            Our engineering team will review your
                                            requirement and get back to you shortly.
                                        </span>

                                    </div>

                                </div>
                            )}



                            {/* =================================================
                                SUBMIT
                            ================================================= */}

                            <div className="quote-submit-area">

                                <div className="quote-submit-copy">

                                    <CheckCircle size={18} />

                                    <span>
                                        Your requirement will be securely sent to our
                                        engineering team.
                                    </span>

                                </div>


                                <button
                                    type="submit"
                                    className="quote-submit"
                                    disabled={submitting}
                                >

                                    <span>
                                        {submitting
                                            ? "Sending Enquiry..."
                                            : "Get My Engineering Quote"
                                        }
                                    </span>

                                    <span className="quote-submit-arrow">
                                        <ArrowRight size={19} />
                                    </span>

                                </button>

                                <p className="quote-submit-note">
                                    We usually respond as soon as possible.
                                </p>

                            </div>


                        </form>

                    </div>

                </div>

            </section>



            {/* =====================================================
                TRUST BAR
            ===================================================== */}

            <section className="quote-bottom">

                <div className="quote-bottom-container">

                    <div>

                        <span>
                            ENGINEERED
                        </span>

                        <strong>
                            Around your application
                        </strong>

                    </div>


                    <i />


                    <div>

                        <span>
                            MANUFACTURED
                        </span>

                        <strong>
                            For industrial environments
                        </strong>

                    </div>


                    <i />


                    <div>

                        <span>
                            TESTED
                        </span>

                        <strong>
                            Before it reaches you
                        </strong>

                    </div>

                </div>

            </section>



            {/* =====================================================
                FINAL CTA
            ===================================================== */}

            <section className="quote-final-cta">

                <div className="quote-final-grid" />

                <div className="quote-final-glow" />

                <div
                    className="quote-final-inner"
                    data-aos="fade-up"
                >

                    <span>
                        HAVE A DRAWING OR SPECIFICATION?
                    </span>

                    <h2>
                        Bring us the requirement.
                        <br />
                        We'll take it from there.
                    </h2>

                    <p>
                        Even if your project is still being planned,
                        our engineering team can start from the
                        requirement and work toward the right panel
                        solution.
                    </p>


                    <div className="quote-final-actions">

                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}`}
                            target="_blank"
                            rel="noreferrer"
                            className="quote-contact-link quote-whatsapp-link"
                        >

                            <MessageCircle size={18} />

                            WhatsApp an Engineer

                        </a>


                        <a
                            href={`mailto:${QUOTE_EMAIL}`}
                            className="quote-contact-link quote-email-link"
                        >

                            <Mail size={18} />

                            Email Our Design Team

                        </a>

                    </div>

                </div>

            </section>


        </main>
    );
};


export default Quote;