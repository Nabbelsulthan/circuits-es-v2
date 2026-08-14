

// import Hero from "../../components/sections/Hero";
// import AboutPreview from "../../components/sections/AboutPreview";
// import Solutions from "../../components/sections/Solutions";
// import Products from "../../components/sections/Products/Products";

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";


// const Home = () => {
//     const location = useLocation();

//     useEffect(() => {
//         if (location.state?.scrollTo) {
//             setTimeout(() => {
//                 document
//                     .getElementById(location.state.scrollTo)
//                     ?.scrollIntoView({
//                         behavior: "smooth",
//                         block: "start",
//                     });
//                 window.history.replaceState({}, document.title);
//             }, 100);
//         }
//     }, [location]);

//     return (
//         <>
//             <Hero />
//             <AboutPreview />
//             <Solutions />
//             <Products />

//         </>
//     );
// };

// export default Home;


// import Hero from "../../components/sections/Hero";
// import AboutPreview from "../../components/sections/AboutPreview";
// import Solutions from "../../components/sections/Solutions";
// import Products from "../../components/sections/Products/Products";
// import Services from "../../components/sections/Services/Services";

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const Home = () => {

//     const location = useLocation();

//     useEffect(() => {

//         const id = location.state?.scrollTo;

//         if (!id) return;

//         setTimeout(() => {

//             const section = document.getElementById(id);

//             if (section) {

//                 section.scrollIntoView({
//                     behavior: "smooth",
//                     block: "start",
//                 });

//                 window.history.replaceState(
//                     null,
//                     "",
//                     `/#${id}`
//                 );

//             }

//         }, 100);

//     }, [location.state]);

//     return (
//         <>
//             <Hero />
//             <AboutPreview />
//             <Solutions />
//             <Products />
//             <Services/>
//         </>
//     );
// };

// export default Home;


import Hero from "../../components/sections/Hero";
import AboutPreview from "../../components/sections/AboutPreview";
import Solutions from "../../components/sections/Solutions";
import Products from "../../components/sections/Products/Products";
import HomeServices from "../../components/sections/HomeServices/HomeServices";
// import Services from "../../components/sections/Services/Services";
import Contact from "../../components/sections/Contact/Contact";
import WhyChooseUs from "../../components/sections/WhyChooseUs/WhyChooseUs";
import Customers from "../../components/sections/Customers/Customers";
import ContactCTA from "../../components/sections/ContactCTA/ContactCTA";
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

            <Hero />

            <AboutPreview />

            <Solutions />

            <Products />

            {/* <Services /> */}

            <HomeServices />

            <WhyChooseUs />

            <Customers />

            <ContactCTA />

            <Contact />

        </>

    );

};


export default Home;