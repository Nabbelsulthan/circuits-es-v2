import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle, ArrowRight } from "react-feather";

import "./ThankYou.css";


const ThankYou = () => {

    const navigate = useNavigate();

    const [seconds, setSeconds] = useState(10);





    useEffect(() => {

        if (
            typeof window.gtag === "function"
        ) {

            window.gtag(
                "event",
                "conversion",
                {
                    send_to:
                        "AW-18144290782/1x-zCOTYos8cEN7P78tD",
                }
            );

        }

    }, []);


    useEffect(() => {

        if (seconds <= 0) {

            navigate("/");

            return;

        }


        const timer = setTimeout(() => {

            setSeconds(
                (previous) => previous - 1
            );

        }, 1000);


        return () => clearTimeout(timer);

    }, [seconds, navigate]);


    return (

        <main className="thank-you-page">

            <div
                className="thank-you-grid"
                aria-hidden="true"
            />


            <div className="thank-you-card">

                <div className="thank-you-icon">
                    <CheckCircle size={42} />
                </div>


                <span className="thank-you-eyebrow">
                    ENQUIRY RECEIVED
                </span>


                <h1>
                    Thank you for
                    <span> reaching out.</span>
                </h1>


                <p className="thank-you-message">

                    Your enquiry has been received successfully.
                    Our engineering team will review your requirement
                    and get back to you shortly.

                </p>


                {/* =================================================
                    COUNTDOWN
                    ================================================= */}

                <div
                    className="thank-you-redirect"
                    role="status"
                    aria-live="polite"
                >

                    <span>
                        Redirecting to homepage in
                    </span>


                    <div className="thank-you-countdown">

                        <span className="thank-you-countdown-number">
                            {seconds}
                        </span>

                        <span className="thank-you-countdown-label">
                            seconds
                        </span>

                    </div>

                </div>


                <Link
                    to="/"
                    className="thank-you-home"
                >

                    <span>
                        Back to Homepage
                    </span>

                    <ArrowRight size={18} />

                </Link>

            </div>

        </main>

    );

};


export default ThankYou;