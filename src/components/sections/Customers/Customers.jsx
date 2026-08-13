import "./Customers.css";

import bitsolLogo from "../../../assets/customers/bitsol.png";
import activesineLogo from "../../../assets/customers/activesine.png";
import syrmaSgsLogo from "../../../assets/customers/syrma-sgs.png";
// import elmanEngineeringLogo from "../../../assets/customers/elman-engineering.png";
import aceElectrotrendLogo from "../../../assets/customers/ace-electrotrend.png";
import delphiTvsLogo from "../../../assets/customers/delphi-tvs.png";
import cumiLogo from "../../../assets/customers/cumi.png";
import nextEnergyLogo from "../../../assets/customers/next-energy-system.png";
import sflLogo from "../../../assets/customers/sfl.png";
import psrLogo from "../../../assets/customers/psr-engineering-college.png";


const Customers = () => {

    const customers = [
        {
            name: "Bitsol",
            logo: bitsolLogo,
        },
        {
            name: "Activesine",
            logo: activesineLogo,
        },
        {
            name: "Syrma SGS",
            logo: syrmaSgsLogo,
        },
        // {
        //     name: "Elman Engineering",
        //     logo: elmanEngineeringLogo,
        // },
        {
            name: "Ace Electrotrend",
            logo: aceElectrotrendLogo,
        },
        {
            name: "Delphi TVS",
            logo: delphiTvsLogo,
        },
        {
            name: "Carborundum Universal Limited",
            logo: cumiLogo,
        },
        {
            name: "Next Energy System",
            logo: nextEnergyLogo,
        },
        {
            name: "SFL",
            logo: sflLogo,
        },
        {
            name: "PSR Engineering College",
            logo: psrLogo,
        },
    ];


    /* Split customers into two moving rows */

    const firstRow = customers.slice(0, 5);
    const secondRow = customers.slice(5);


    const renderLogos = (items) => (

        <>

            {items.map((customer) => (

                <div
                    className="customer-marquee-logo"
                    key={customer.name}
                >

                    <img
                        src={customer.logo}
                        alt={`${customer.name} logo`}
                    />

                </div>

            ))}

        </>

    );


    return (

        <section
            id="customers"
            className="customers"
        >

            <div className="customers-container">

                {/* =================================================
                    HEADER
                    ================================================= */}

                <div className="customers-header">

                    <span className="customers-eyebrow">
                        OUR CUSTOMERS
                    </span>


                    <div className="customers-heading">

                        <h2>
                            Trusted by teams
                            <br />
                            <span>building what matters.</span>
                        </h2>


                        <p>
                            Organisations across engineering,
                            manufacturing, technology and education
                            trust CircuitsES for electrical and
                            automation solutions.
                        </p>

                    </div>

                </div>


                {/* =================================================
                    CUSTOMER MARQUEE
                    ================================================= */}

                <div className="customers-marquee">

                    {/* FIRST ROW */}

                    <div className="customers-marquee-track">

                        <div className="customers-marquee-group">

                            {renderLogos(firstRow)}

                        </div>


                        <div
                            className="customers-marquee-group"
                            aria-hidden="true"
                        >

                            {renderLogos(firstRow)}

                        </div>

                    </div>


                    {/* SECOND ROW */}

                    <div className="customers-marquee-track customers-marquee-track-reverse">

                        <div className="customers-marquee-group">

                            {renderLogos(secondRow)}

                        </div>


                        <div
                            className="customers-marquee-group"
                            aria-hidden="true"
                        >

                            {renderLogos(secondRow)}

                        </div>

                    </div>

                </div>


                {/* =================================================
                    BOTTOM STATEMENT
                    ================================================= */}

                <div className="customers-footer">

                    <span>
                        INDUSTRIAL PARTNERSHIPS
                    </span>

                    <div className="customers-footer-line" />

                    <p>
                        Engineering solutions built around
                        real applications.
                    </p>

                </div>

            </div>

        </section>
    );
};


export default Customers;