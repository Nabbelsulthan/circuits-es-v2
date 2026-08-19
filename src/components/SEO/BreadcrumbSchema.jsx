import { Helmet } from "react-helmet-async";

const BreadcrumbSchema = ({ items = [] }) => {

    if (!items.length) {
        return null;
    }

    const itemListElement = items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://www.circuitses.com${item.path}`
    }));

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": itemListElement
                })}
            </script>
        </Helmet>
    );
};

export default BreadcrumbSchema;