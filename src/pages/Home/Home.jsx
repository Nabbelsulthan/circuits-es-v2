

import Hero from "../../components/sections/Hero";
import AboutPreview from "../../components/sections/AboutPreview";
import Solutions from "../../components/sections/Solutions";
import Products from "../../components/sections/Products/Products";
import HomeServices from "../../components/sections/HomeServices/HomeServices";
import Contact from "../../components/sections/Contact/Contact";
import WhyChooseUs from "../../components/sections/WhyChooseUs/WhyChooseUs";
import Customers from "../../components/sections/Customers/Customers";
import ContactCTA from "../../components/sections/ContactCTA/ContactCTA";

import SEO from "../../components/SEO/SEO";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";



const Home = () => {

    const location = useLocation();


    useEffect(() => {

        const id = location.state?.scrollTo;

        if (!id) return;


        const timer = setTimeout(() => {

            const section =
                document.getElementById(id);


            if (!section) return;


            section.scrollIntoView({

                behavior: "smooth",

                block: "start",

            });


            /*
             * Clear the navigation state
             * without triggering another navigation.
             */

            window.history.replaceState(

                null,

                "",

                `/#${id}`

            );

        }, 100);


        return () => clearTimeout(timer);


    }, [location.state]);


    return (

        <>

            <SEO
                title="CircuitsES | Electrical & Industrial Automation Solutions"
                description="CircuitsES designs and manufactures electrical control panels, MCC, PCC, PLC and industrial automation systems, along with custom electrical and electronic enclosures for industrial applications."
                path="/"
            />
            <Hero />

            <AboutPreview />

            <Solutions />

            <Products />

            <HomeServices />

            <WhyChooseUs />

            <Customers />

            <ContactCTA />

            <Contact />

        </>

    );

};


export default Home;