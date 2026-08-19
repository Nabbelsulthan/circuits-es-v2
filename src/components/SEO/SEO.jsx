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

        </Helmet>
    );
};

export default SEO;