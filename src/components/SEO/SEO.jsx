import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.circuitses.com";

const SEO = ({
    title,
    description,
    path = "/",
}) => {

    const canonicalUrl =
        `${SITE_URL}${path === "/" ? "" : path}`;

    return (
        <Helmet>

            {/* ================================
                BASIC SEO
            ================================= */}

            <title>{title}</title>

            <meta
                name="description"
                content={description}
            />

            <link
                rel="canonical"
                href={canonicalUrl}
            />


            {/* ================================
                OPEN GRAPH
            ================================= */}

            <meta
                property="og:type"
                content="website"
            />

            <meta
                property="og:site_name"
                content="CircuitsES"
            />

            <meta
                property="og:title"
                content={title}
            />

            <meta
                property="og:description"
                content={description}
            />

            <meta
                property="og:url"
                content={canonicalUrl}
            />

            <meta
                property="og:image"
                content={`${SITE_URL}/og-image.png`}
            />

            <meta
                property="og:image:secure_url"
                content={`${SITE_URL}/og-image.png`}
            />

            <meta
                property="og:image:type"
                content="image/png"
            />

            <meta
                property="og:image:width"
                content="1200"
            />

            <meta
                property="og:image:height"
                content="630"
            />

            <meta
                property="og:image:alt"
                content="CircuitsES — Electrical & Industrial Automation Solutions"
            />


            {/* ================================
                TWITTER / X
            ================================= */}

            <meta
                name="twitter:card"
                content="summary_large_image"
            />

            <meta
                name="twitter:title"
                content={title}
            />

            <meta
                name="twitter:description"
                content={description}
            />

            <meta
                name="twitter:image"
                content={`${SITE_URL}/og-image.png`}
            />



            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "@id": "https://www.circuitses.com/#organization",

                    "name": "Circuits Energy System (OPC) PVT LTD.",
                    "alternateName": "CircuitsES",

                    "url": "https://www.circuitses.com/",

                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.circuitses.com/CircuitES-logo.png"
                    },

                    "description":
                        "CircuitsES designs and manufactures electrical control panels, MCC, PCC, PLC and industrial automation systems, along with custom electrical and electronic enclosures for industrial applications.",

                    "telephone": "+91-8072127505",

                    "email": "info@circuitses.com",

                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress":
                            "No.553/141, Begapalli SIPCOT-1, Begapalli–Nallur Agaraharam Road",
                        "addressLocality": "Hosur",
                        "postalCode": "635126",
                        "addressRegion": "Tamil Nadu",
                        "addressCountry": "IN"
                    },

                    "sameAs": [
                        "https://www.linkedin.com/company/circuitses/"
                    ]
                })}
            </script>


            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",

                    "@id": "https://www.circuitses.com/#localbusiness",

                    "name": "Circuits Energy System (OPC) PVT LTD.",
                    "alternateName": "CircuitsES",

                    "url": "https://www.circuitses.com/",

                    "logo": "https://www.circuitses.com/CircuitES-logo.png",

                    "image": "https://www.circuitses.com/og-image.png",

                    "telephone": "+91-8072127505",

                    "email": "info@circuitses.com",

                    "description":
                        "CircuitsES designs and manufactures electrical control panels, MCC, PCC, PLC and industrial automation systems, along with custom electrical and electronic enclosures for industrial applications.",

                    "address": {
                        "@type": "PostalAddress",

                        "streetAddress":
                            "No.553/141, Begapalli SIPCOT-1, Begapalli–Nallur Agaraharam Road",

                        "addressLocality": "Hosur",

                        "postalCode": "635126",

                        "addressRegion": "Tamil Nadu",

                        "addressCountry": "IN"
                    },

                    "sameAs": [
                        "https://www.linkedin.com/company/circuitses/"
                    ]
                })}
            </script>


            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",

                    "@id": "https://www.circuitses.com/#website",

                    "name": "CircuitsES",
                    "alternateName": "Circuits Energy System",

                    "url": "https://www.circuitses.com/",

                    "publisher": {
                        "@id": "https://www.circuitses.com/#organization"
                    },

                    "inLanguage": "en-IN"
                })}
            </script>

        </Helmet>
    );
};

export default SEO;