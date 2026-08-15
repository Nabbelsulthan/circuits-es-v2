
import { useState } from "react";


import { useNavigate } from "react-router-dom";

import {
    ArrowUpRight,
    Mail,
    MapPin,
    Navigation,
    Phone,
    Send,
    MessageCircle,
} from "lucide-react";


import {
    FaLinkedinIn,
    FaInstagram,
    FaFacebookF,
} from "react-icons/fa";

import "./Contact.css";



const Contact = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [message, setMessage] = useState({
        show: false,
        text: "",
        type: "",
    });


    // Show notification
    const showMessage = (text, type) => {

        setMessage({
            show: true,
            text,
            type,
        });

        setTimeout(() => {

            setMessage({
                show: false,
                text: "",
                type: "",
            });

        }, 3500);
    };





    //     const sendWhatsApp = (form) => {

    //         const name =
    //             form.elements.name.value.trim();

    //         const phone =
    //             form.elements.phone.value.trim();

    //         const email =
    //             form.elements.email.value.trim();

    //         const company =
    //             form.elements.company.value.trim();

    //         const requirement =
    //             form.elements.requirement.value.trim();


    //         const whatsappMessage = `
    // Hello Circuits Energy System,

    // I would like to discuss an engineering requirement.

    // Name: ${name}
    // Phone: ${phone}
    // Email: ${email}
    // Company: ${company || "Not provided"}

    // Requirement:
    // ${requirement}

    // Thank you.
    //     `.trim();


    //         const whatsappNumber =
    //             "919445468377";


    //         const whatsappURL =
    //             `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    //                 whatsappMessage
    //             )}`;


    //         /*
    //          * Open WhatsApp in a new tab/window.
    //          */

    //         window.open(
    //             whatsappURL,
    //             "_blank",
    //             "noopener,noreferrer"
    //         );


    //         /*
    //          * Clear the form.
    //          */

    //         form.reset();


    //         /*
    //          * Go to the CES Thank You page.
    //          */

    //         navigate("/thank-you");

    //     };



    //     const sendWhatsApp = (form) => {

    //         const name =
    //             form.elements.name?.value.trim();

    //         const phone =
    //             form.elements.phone?.value.trim();

    //         const email =
    //             form.elements.email?.value.trim();

    //         const company =
    //             form.elements.company?.value.trim();

    //         const requirement =
    //             form.elements.requirement?.value.trim();


    //         /* ==========================================
    //            REQUIRED FIELD VALIDATION
    //            ========================================== */

    //         if (!name) {
    //             form.elements.name?.focus();
    //             return;
    //         }

    //         if (!phone) {
    //             form.elements.phone?.focus();
    //             return;
    //         }

    //         if (!email) {
    //             form.elements.email?.focus();
    //             return;
    //         }

    //         if (!requirement) {
    //             form.elements.requirement?.focus();
    //             return;
    //         }


    //         /* ==========================================
    //            EMAIL VALIDATION
    //            ========================================== */

    //         const emailRegex =
    //             /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //         if (!emailRegex.test(email)) {
    //             form.elements.email?.focus();
    //             return;
    //         }


    //         /* ==========================================
    //            PHONE VALIDATION
    //            ========================================== */

    //         const normalizedPhone =
    //             phone.replace(/[\s\-().]/g, "");

    //         if (
    //             !/^(?:\+91|91)?[6-9]\d{9}$/.test(
    //                 normalizedPhone
    //             )
    //         ) {
    //             form.elements.phone?.focus();
    //             return;
    //         }


    //         /* ==========================================
    //            WHATSAPP MESSAGE
    //            ========================================== */

    //         const whatsappMessage = `
    // Hello Circuits Energy System,

    // I would like to discuss an engineering requirement.

    // Name: ${name}
    // Phone: ${phone}
    // Email: ${email}
    // Company: ${company || "Not provided"}

    // Requirement:
    // ${requirement}

    // Thank you.
    // `.trim();


    //         /* ==========================================
    //            WHATSAPP
    //            ========================================== */

    //         const whatsappNumber =
    //             "919445468377";

    //         const whatsappURL =
    //             `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    //                 whatsappMessage
    //             )}`;


    //         /* ==========================================
    //            OPEN WHATSAPP
    //            ========================================== */

    //         window.open(
    //             whatsappURL,
    //             "_blank",
    //             "noopener,noreferrer"
    //         );


    //         /* ==========================================
    //            CLEAR FORM
    //            ========================================== */

    //         form.reset();


    //         /* ==========================================
    //            THANK YOU PAGE
    //            ========================================== */

    //         navigate("/thank-you");

    //     };




    const sendWhatsApp = (form) => {

        if (!form.checkValidity()) {

            form.reportValidity();

            return;
        }

        const name =
            form.elements.name.value.trim();

        const phone =
            form.elements.phone.value.trim();

        const email =
            form.elements.email.value.trim();

        const company =
            form.elements.company.value.trim();

        const requirement =
            form.elements.requirement.value.trim();


        const whatsappMessage = `
Hello Circuits Energy System,

I would like to discuss an engineering requirement.

Name: ${name}
Phone: ${phone}
Email: ${email}
Company: ${company || "Not provided"}

Requirement:
${requirement}

Thank you.
`.trim();


        const whatsappNumber =
            "919445468377";


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
            )}`;


        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );


        form.reset();

        navigate("/thank-you");
    };

    const sendContactEnquiry = async (form) => {

        setLoading(true);


        const payload = {

            enquiry_type: "contact",

            name:
                form.elements.name.value.trim(),

            company:
                form.elements.company.value.trim() || null,

            email:
                form.elements.email.value
                    .trim()
                    .toLowerCase(),

            phone:
                form.elements.phone.value.trim(),

            location:
                null,

            panel_type:
                null,

            quantity:
                null,

            timeline:
                null,

            message:
                form.elements.requirement.value.trim(),

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
                    "Unable to send your enquiry."
                );

            }


            form.reset();

            navigate("/thank-you");

            showMessage(
                "Thank you. Your enquiry has been received successfully.",
                "success"
            );


        } catch (error) {

            console.error(
                "Contact enquiry error:",
                error
            );


            showMessage(
                error.message ||
                "Unable to send your enquiry. Please try again.",
                "error"
            );


        } finally {

            setLoading(false);

        }

    };



    const handleSubmit = async (event) => {

        event.preventDefault();

        const form = event.target;


        if (!form.checkValidity()) {

            form.reportValidity();

            return;

        }


        const phone =
            form.elements.phone.value.trim();


        const phoneRegex =
            /^[0-9]{10}$/;


        if (!phoneRegex.test(phone)) {

            showMessage(
                "Please enter a valid 10-digit mobile number.",
                "error"
            );

            return;

        }


        const email =
            form.elements.email.value.trim();


        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


        if (!emailRegex.test(email)) {

            showMessage(
                "Please enter a valid email address.",
                "error"
            );

            return;

        }


        /*
         * Contact form always goes through backend.
         *
         * WhatsApp has its own dedicated button.
         */

        await sendContactEnquiry(form);

    };


    return (

        <main id="contact" className="contact-page" >

            {/* =====================================================
                CONTACT INTRO
            ===================================================== */}

            <section className="contact-page-intro">

                <div className="contact-page-container">

                    <div className="contact-page-intro-content">

                        <span className="contact-page-eyebrow">
                            CONTACT CIRCUITSES
                        </span>


                        <h1>
                            Let's build
                            <span> something that works.</span>
                        </h1>


                        <p>
                            Tell us what you are building, upgrading
                            or automating. Our team will help you find
                            the right engineering solution.
                        </p>

                    </div>


                    <div className="contact-page-intro-meta">

                        <div className="contact-page-meta-item">

                            <span>
                                RESPONSE
                            </span>

                            <strong>
                                Engineering enquiry
                            </strong>

                        </div>


                        <div className="contact-page-meta-item">

                            <span>
                                LOCATIONS
                            </span>

                            <strong>
                                Hosur
                            </strong>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                HORIZONTAL LOCATION MAP
                ===================================================== */}

            <section className="contact-map-section">

                <div className="contact-page-container">

                    <div className="contact-map-header">

                        <div>

                            <span className="contact-page-section-label">
                                OUR LOCATIONS
                            </span>

                            <h2>
                                Find us where
                                <span> engineering happens.</span>
                            </h2>

                        </div>


                        <a
                            href="https://maps.app.goo.gl/Sg6ncJunFLxbMjZN7?g_st=iw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-map-directions"
                        >
                            <Navigation />

                            <span>
                                View on Google Maps
                            </span>

                            <ArrowUpRight />

                        </a>

                    </div>


                    <div className="contact-map">

                        {/* Map background */}

                        <div className="contact-map-background">

                            <iframe
                                title="CircuitsES location map"
                                src="https://www.google.com/maps?q=Hosur%2C%20Tamil%20Nadu%2C%20India&output=embed"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                        </div>


                        {/* Map overlay */}

                        <div className="contact-map-overlay">

                            <div className="contact-map-location">

                                <div className="contact-map-pin">
                                    <MapPin />
                                </div>

                                <div>

                                    <span>
                                        MANUFACTURING FACILITY
                                    </span>

                                    <strong>
                                        Hosur
                                    </strong>

                                    <p>
                                        SIPCOT / Begapalli,
                                        Krishnagiri District,
                                        Tamil Nadu.
                                    </p>

                                </div>

                            </div>


                            <div className="contact-map-location">

                                <div className="contact-map-pin">
                                    <MapPin />
                                </div>

                                <div>

                                    <span>
                                        REGISTERED OFFICE
                                    </span>

                                    <strong>
                                        Salem
                                    </strong>

                                    <p>
                                        Omalur,
                                        Salem District,
                                        Tamil Nadu.
                                    </p>

                                </div>

                            </div>

                        </div>


                        <div className="contact-map-caption">

                            <span>
                                CIRCUITS ENERGY SYSTEM (OPC) PRIVATE LIMITED.
                            </span>

                            <strong>
                                Hosur 
                            </strong>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CONTACT INFORMATION + ENQUIRY
                ===================================================== */}

            <section className="contact-enquiry-section">

                <div className="contact-page-container">

                    <div className="contact-enquiry-grid">


                        {/* =================================================
                            CONTACT INFORMATION
                            ================================================= */}

                        <div className="contact-information">

                            <span className="contact-page-section-label">
                                GET IN TOUCH
                            </span>


                            <h2>
                                Start a
                                <span> conversation.</span>
                            </h2>


                            <p className="contact-information-intro">
                                Whether you need a new control panel,
                                automation solution, fabrication support
                                or an industrial upgrade, talk to our team.
                            </p>


                            {/* Phone */}

                            <a
                                href="tel:+918072127505"
                                className="contact-information-item"
                            >

                                <div className="contact-information-icon">
                                    <Phone />
                                </div>

                                <div>

                                    <span>
                                        PHONE
                                    </span>

                                    <strong>
                                        +91 80 7212 7505
                                    </strong>

                                </div>

                                <ArrowUpRight />

                            </a>


                            {/* Email */}

                            <a
                                href="mailto:info@circuitses.com"
                                className="contact-information-item"
                            >

                                <div className="contact-information-icon">
                                    <Mail />
                                </div>

                                <div>

                                    <span>
                                        EMAIL
                                    </span>

                                    <strong>
                                        info@circuitses.com
                                    </strong>

                                </div>

                                <ArrowUpRight />

                            </a>


                            {/* WhatsApp */}

                            <a
                                href="https://wa.me/918072127505"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-information-item"
                            >

                                <div className="contact-information-icon">
                                    <MessageCircle />
                                </div>

                                <div>

                                    <span>
                                        WHATSAPP
                                    </span>

                                    <strong>
                                        Chat with our team
                                    </strong>

                                </div>

                                <ArrowUpRight />

                            </a>


                            {/* Social */}

                            {/* <div className="contact-social-links">

                                <a
                                    href="https://in.linkedin.com/company/circuitses"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="CircuitsES LinkedIn"
                                >
                                    <Linkedin />
                                </a>


                                <a
                                    href="https://www.instagram.com/circuitses?igsh=b25saXcwejk1bzBm&utm_source=qr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="CircuitsES Instagram"
                                >
                                    <Instagram />
                                </a>

                            </div> */}


                            {/* <div className="contact-social-links">

                                <a
                                    href="https://in.linkedin.com/company/circuitses"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="CircuitsES LinkedIn"
                                >
                                    <span className="contact-social-letter">
                                        in
                                    </span>
                                </a>


                                <a
                                    href="https://www.instagram.com/circuitses?igsh=b25saXcwejk1bzBm&utm_source=qr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="CircuitsES Instagram"
                                >
                                    <span className="contact-social-letter">
                                        ◎
                                    </span>
                                </a>

                            </div> */}


                            <div className="contact-social-links">

                                <a
                                    href="https://in.linkedin.com/company/circuitses"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="CircuitsES LinkedIn"
                                >
                                    <FaLinkedinIn />
                                </a>


                                <a
                                    href="https://www.instagram.com/circuitses"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="CircuitsES Instagram"
                                >
                                    <FaInstagram />
                                </a>


                                <a
                                    href="https://www.facebook.com/share/19Tc8z9c3T/?mibextid=wwXIfr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="CircuitsES Facebook"
                                >
                                    <FaFacebookF />
                                </a>

                            </div>


                            {/* Addresses */}

                            <div className="contact-addresses">

                                <div>

                                    <span>
                                        REGISTERED OFFICE
                                    </span>

                                    <p>
                                        13/247, Kanavaipudur,
                                        Omalur,
                                        Salem – 636354,
                                        Tamil Nadu.
                                    </p>

                                </div>


                                <div>

                                    <span>
                                        MANUFACTURING FACILITY
                                    </span>

                                    <p>
                                        No.553/141, Begapalli SIPCOT-1,
                                        Begapalli–Nallur Agaraharam Road,
                                        Hosur – 635126,
                                        Krishnagiri District,
                                        Tamil Nadu.
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            ENQUIRY FORM
                            ================================================= */}

                        <div className="contact-form-wrapper">

                            <div className="contact-form-header">

                                <span>
                                    PROJECT ENQUIRY
                                </span>

                                <h2>
                                    Tell us what you need.
                                </h2>

                                <p>
                                    Share a few details and our team
                                    will get back to you.
                                </p>

                            </div>


                            <form
                                className="contact-form"
                                onSubmit={handleSubmit}
                            >

                                {/* Name */}

                                <div className="contact-form-field">

                                    <label htmlFor="contact-name">
                                        Name*
                                    </label>

                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        placeholder="Your full name"
                                        autoComplete="name"
                                        required
                                    />

                                </div>


                                {/* Phone */}

                                <div className="contact-form-field">

                                    <label htmlFor="contact-phone">
                                        Phone*
                                    </label>

                                    <input
                                        id="contact-phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="10-digit mobile number"
                                        inputMode="numeric"
                                        autoComplete="tel"
                                        pattern="[0-9]{10}"
                                        maxLength="10"
                                        required
                                        onInput={(event) => {

                                            event.target.value =
                                                event.target.value.replace(
                                                    /[^0-9]/g,
                                                    ""
                                                );
                                        }}
                                    />

                                </div>


                                {/* Email */}

                                <div className="contact-form-field">

                                    <label htmlFor="contact-email">
                                        Email*
                                    </label>

                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        placeholder="you@company.com"
                                        autoComplete="email"
                                        required
                                    />

                                </div>


                                {/* Company */}

                                <div className="contact-form-field">

                                    <label htmlFor="contact-company">
                                        Company*
                                    </label>

                                    <input
                                        id="contact-company"
                                        name="company"
                                        type="text"
                                        placeholder="Company name"
                                        autoComplete="organization"
                                    />

                                </div>


                                {/* Requirement */}

                                <div className="contact-form-field">

                                    <label htmlFor="contact-requirement">
                                        Requirement*
                                    </label>

                                    <textarea
                                        id="contact-requirement"
                                        name="requirement"
                                        rows="5"
                                        placeholder="Tell us about your project, panel or automation requirement..."
                                        required
                                    />

                                </div>


                                {/* Actions */}

                                <div className="contact-form-actions">

                                    <button
                                        type="submit"
                                        className="contact-form-submit"
                                        disabled={loading}
                                        onClick={(event) => {

                                            event.currentTarget.form.dataset.action =
                                                "email";
                                        }}
                                    >

                                        {loading ? (
                                            <>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send />

                                                <span>
                                                    Send Enquiry
                                                </span>

                                                <ArrowUpRight />
                                            </>
                                        )}

                                    </button>


                                    <button
                                        type="button"
                                        className="contact-form-whatsapp"
                                        onClick={(event) => {

                                            const form =
                                                event.currentTarget.form;

                                            sendWhatsApp(form);

                                        }}
                                    >
                                        <MessageCircle />

                                        <span>
                                            WhatsApp
                                        </span>

                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                NOTIFICATION
                ===================================================== */}

            {message.show && (

                <div
                    className={`contact-notification ${message.type}`}
                    role="status"
                    aria-live="polite"
                >

                    {message.text}

                </div>

            )}



        </main>


    );


};


export default Contact;