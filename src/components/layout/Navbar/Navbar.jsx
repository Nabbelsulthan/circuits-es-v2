import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

import {
    NavLink,
    useLocation,
    useNavigate,
} from "react-router-dom";

import {
    HiOutlineMenuAlt3,
    HiOutlineX,
} from "react-icons/hi";

import logo from "../../../assets/logos/circuitES1-logo.png";

import "./Navbar.css";


/* =========================================================
   NAVIGATION DATA
   ========================================================= */

const navItems = [
    {
        name: "Home",
        section: "home",
    },

    {
        name: "About",
        section: "about",
    },

    {
        name: "Solutions",
        section: "solutions",

        dropdown: [
            {
                icon: "⚡",
                title: "LT Panel Solutions",
                subtitle: "MCC • PCC • APFC",
                path: "/solutions/lt-panels",
            },

            {
                icon: "🤖",
                title: "PLC Automation",
                subtitle: "Siemens • Allen Bradley",
                path: "/solutions/plc",
            },

            // {
            //     icon: "🖥",
            //     title: "SCADA Systems",
            //     subtitle: "Monitoring • Analytics",
            //     path: "/solutions/scada",
            // },

            // {
            //     icon: "🛠",
            //     title: "AMC & Maintenance",
            //     subtitle: "24×7 Support • Preventive Service",
            //     path: "/solutions/amc",
            // },
        ],
    },

    {
        name: "Products",
        section: "products",
    },

    {
        name: "Services",
        section: "home-services",
    },

    // {
    //     name: "Projects",
    //     path: "/projects",
    //     separatePage: true,
    // },

    {
        name: "Contact",
        section: "contact",
    },
];


const SECTION_IDS = [
    "home",
    "about",
    "solutions",
    "products",
    "home-services",
    "contact",
];


/* =========================================================
   NAVBAR
   ========================================================= */

const Navbar = () => {

    const navigate = useNavigate();

    const location = useLocation();


    /* =====================================================
       STATE
       ===================================================== */

    const [isScrolled, setIsScrolled] =
        useState(false);

    const [mobileOpen, setMobileOpen] =
        useState(false);

    const [openDropdown, setOpenDropdown] =
        useState(null);

    const [activeSection, setActiveSection] =
        useState("home");


    /* =====================================================
       REFS
       ===================================================== */

    const closeTimer =
        useRef(null);

    const scrollLockRef =
        useRef(false);

    const scrollTimeoutRef =
        useRef(null);


    const currentPath =
        location.pathname;


    /* =====================================================
       CLOSE MENU
       ===================================================== */

    const closeMenu = useCallback(() => {

        setMobileOpen(false);

        setOpenDropdown(null);

    }, []);


    /* =====================================================
   TOGGLE MOBILE MENU
   ===================================================== */

    const toggleMenu = useCallback(() => {

        setMobileOpen((previous) => !previous);

        setOpenDropdown(null);

    }, []);


    /* =====================================================
       SCROLLED STATE
       ===================================================== */

    useEffect(() => {

        const handleScroll = () => {

            setIsScrolled(
                window.scrollY > 40
            );

        };


        handleScroll();


        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );


        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };

    }, []);


    /* =====================================================
       ACTIVE SECTION DETECTION
       ===================================================== */

    const detectActiveSection =
        useCallback(() => {

            if (
                currentPath !== "/"
            ) {

                setActiveSection("");

                return;

            }


            if (
                scrollLockRef.current
            ) {

                return;

            }


            const navbar =
                document.querySelector(
                    ".navbar"
                );


            const navbarHeight =
                navbar
                    ? navbar.getBoundingClientRect().height
                    : 84;


            /*
             * Activation line below navbar.
             */

            const activationPoint =
                navbarHeight + 100;


            let currentSection =
                "home";


            let bestDistance =
                Infinity;


            SECTION_IDS.forEach(
                (id) => {

                    const section =
                        document.getElementById(
                            id
                        );


                    if (!section) {
                        return;
                    }


                    const rect =
                        section.getBoundingClientRect();


                    /*
                     * Section has reached
                     * the activation line.
                     */

                    if (
                        rect.top <=
                        activationPoint
                    ) {

                        const distance =
                            Math.abs(
                                rect.top -
                                activationPoint
                            );


                        if (
                            distance <
                            bestDistance
                        ) {

                            bestDistance =
                                distance;

                            currentSection =
                                id;

                        }

                    }

                }
            );


            setActiveSection(
                currentSection
            );


        }, [currentPath]);


    /* =====================================================
       SCROLL LISTENER
       ===================================================== */

    useEffect(() => {

        if (
            currentPath !== "/"
        ) {

            setActiveSection("");

            return;

        }


        const handleScroll = () => {

            detectActiveSection();

        };


        const timer =
            window.setTimeout(
                detectActiveSection,
                100
            );


        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );


        window.addEventListener(
            "resize",
            handleScroll
        );


        return () => {

            window.clearTimeout(
                timer
            );


            window.removeEventListener(
                "scroll",
                handleScroll
            );


            window.removeEventListener(
                "resize",
                handleScroll
            );

        };

    }, [
        currentPath,
        detectActiveSection,
    ]);


    /* =====================================================
       HASH CHANGE
       ===================================================== */

    useEffect(() => {

        if (
            currentPath !== "/"
        ) {

            return;

        }


        const hash =
            location.hash.replace(
                "#",
                ""
            );


        if (
            SECTION_IDS.includes(hash)
        ) {

            setActiveSection(hash);

        }

    }, [
        currentPath,
        location.hash,
    ]);


    /* =====================================================
       BODY LOCK
       ===================================================== */

    useEffect(() => {

        if (mobileOpen) {

            document.body.classList.add(
                "navbar-menu-open"
            );

        } else {

            document.body.classList.remove(
                "navbar-menu-open"
            );

        }


        return () => {

            document.body.classList.remove(
                "navbar-menu-open"
            );

        };

    }, [mobileOpen]);


    /* =====================================================
       RESET MOBILE ON DESKTOP
       ===================================================== */

    useEffect(() => {

        const handleResize = () => {

            if (
                window.innerWidth > 1100
            ) {

                setMobileOpen(false);

                setOpenDropdown(null);

            }

        };


        window.addEventListener(
            "resize",
            handleResize
        );


        return () => {

            window.removeEventListener(
                "resize",
                handleResize
            );

        };

    }, []);


    /* =====================================================
       ESCAPE
       ===================================================== */

    useEffect(() => {

        const handleEscape =
            (event) => {

                if (
                    event.key !==
                    "Escape"
                ) {

                    return;

                }


                setOpenDropdown(null);

                setMobileOpen(false);

            };


        document.addEventListener(
            "keydown",
            handleEscape
        );


        return () => {

            document.removeEventListener(
                "keydown",
                handleEscape
            );

        };

    }, []);


    /* =====================================================
       DROPDOWN
       ===================================================== */

    const clearCloseTimer =
        useCallback(() => {

            if (
                closeTimer.current
            ) {

                window.clearTimeout(
                    closeTimer.current
                );

                closeTimer.current =
                    null;

            }

        }, []);


    const toggleDropdown =
        (name) => {

            clearCloseTimer();


            setOpenDropdown(
                (previous) =>
                    previous === name
                        ? null
                        : name
            );

        };


    const handleDropdownEnter =
        (name) => {

            if (
                window.matchMedia(
                    "(hover: hover) and (pointer: fine)"
                ).matches
            ) {

                clearCloseTimer();

                setOpenDropdown(name);

            }

        };


    const handleDropdownLeave =
        (name) => {

            if (
                !window.matchMedia(
                    "(hover: hover) and (pointer: fine)"
                ).matches
            ) {

                return;

            }


            clearCloseTimer();


            closeTimer.current =
                window.setTimeout(() => {

                    setOpenDropdown(
                        (previous) =>
                            previous === name
                                ? null
                                : previous
                    );

                }, 180);

        };


    /* =====================================================
       SECTION NAVIGATION
       ===================================================== */

    const handleSectionNavigation =
        (section) => {

            closeMenu();

            setOpenDropdown(null);


            setActiveSection(
                section
            );


            if (
                currentPath === "/"
            ) {

                const element =
                    document.getElementById(
                        section
                    );


                if (element) {

                    /*
                     * Prevent the scroll listener
                     * from changing the active item
                     * during smooth scrolling.
                     */

                    scrollLockRef.current =
                        true;


                    window.history.replaceState(
                        null,
                        "",
                        `/#${section}`
                    );


                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });


                    if (
                        scrollTimeoutRef.current
                    ) {

                        window.clearTimeout(
                            scrollTimeoutRef.current
                        );

                    }


                    scrollTimeoutRef.current =
                        window.setTimeout(() => {

                            scrollLockRef.current =
                                false;

                            setActiveSection(
                                section
                            );

                        }, 800);


                    return;

                }

            }


            // navigate(
            //     `/#${section}`
            // );

            navigate("/", {
                state: {
                    scrollTo: section,
                },
            });

        };


    /* =====================================================
       HOME / LOGO
       ===================================================== */

    const handleHomeNavigation =
        () => {

            closeMenu();

            setOpenDropdown(null);

            setActiveSection(
                "home"
            );


            if (
                currentPath === "/"
            ) {

                const home =
                    document.getElementById(
                        "home"
                    );


                if (home) {

                    scrollLockRef.current =
                        true;


                    window.history.replaceState(
                        null,
                        "",
                        "/#home"
                    );


                    home.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });


                    if (
                        scrollTimeoutRef.current
                    ) {

                        window.clearTimeout(
                            scrollTimeoutRef.current
                        );

                    }


                    scrollTimeoutRef.current =
                        window.setTimeout(() => {

                            scrollLockRef.current =
                                false;

                            setActiveSection(
                                "home"
                            );

                        }, 800);


                    return;

                }

            }


            navigate(
                "/#home"
            );

        };


    /* =====================================================
       ACTIVE STATE
       ===================================================== */

    const isMainActive =
        (item) => {

            /*
             * Projects
             */

            if (
                item.separatePage
            ) {

                return (
                    currentPath ===
                    item.path
                );

            }


            /*
             * Solutions
             * is active on its own
             * section OR child pages.
             */

            if (
                item.name ===
                "Solutions"
            ) {

                return (
                    activeSection ===
                    "solutions" ||
                    currentPath.startsWith(
                        "/solutions/"
                    )
                );

            }


            /*
             * Home sections.
             */

            if (
                currentPath === "/"
            ) {

                return (
                    activeSection ===
                    item.section
                );

            }


            return false;

        };


    /* =====================================================
       RENDER
       ===================================================== */

    return (
        <>

            <header
                className={`navbar ${isScrolled
                    ? "scrolled"
                    : ""
                    }`}
            >

                <div className="navbar-container">


                    {/* =================================================
                       LOGO
                       ================================================= */}

                    <button
                        type="button"
                        className="navbar-logo"
                        onClick={
                            handleHomeNavigation
                        }
                        aria-label="CircuitsES Home"
                    >

                        <img
                            src={logo}
                            alt="CircuitsES"
                        />

                    </button>


                    {/* =================================================
                       DESKTOP / MOBILE NAV
                       ================================================= */}

                    <nav
                        className={`navbar-nav ${mobileOpen
                            ? "active"
                            : ""
                            }`}
                        aria-label="Main Navigation"
                    >


                        {/* =============================================
                           DRAWER HEADER
                           ============================================= */}

                        <div className="drawer-header">

                            <button
                                type="button"
                                className="drawer-logo-button"
                                onClick={
                                    handleHomeNavigation
                                }
                                aria-label="CircuitsES Home"
                            >

                                <img
                                    src={logo}
                                    alt="CircuitsES"
                                    className="drawer-logo"
                                />

                            </button>


                            <button
                                type="button"
                                className="drawer-close"
                                onClick={
                                    closeMenu
                                }
                                aria-label="Close navigation"
                            >

                                <HiOutlineX />

                            </button>

                        </div>


                        <div className="drawer-divider" />


                        {/* =============================================
                           NAV ITEMS
                           ============================================= */}

                        {navItems.map(
                            (item) => {

                                const active =
                                    isMainActive(
                                        item
                                    );


                                /* =====================================
                                   SOLUTIONS DROPDOWN
                                   ===================================== */

                                if (
                                    item.dropdown
                                ) {

                                    const dropdownOpen =
                                        openDropdown ===
                                        item.name;


                                    return (
                                        <div
                                            key={
                                                item.name
                                            }
                                            className={`nav-dropdown ${active
                                                ? "active"
                                                : ""
                                                }`}
                                            onMouseEnter={() =>
                                                handleDropdownEnter(
                                                    item.name
                                                )
                                            }
                                            onMouseLeave={() =>
                                                handleDropdownLeave(
                                                    item.name
                                                )
                                            }
                                        >

                                            <div className="nav-link-group">


                                                <button
                                                    type="button"
                                                    className={`nav-link dropdown-main-link ${active
                                                        ? "active"
                                                        : ""
                                                        }`}
                                                    onClick={() =>
                                                        handleSectionNavigation(
                                                            item.section
                                                        )
                                                    }
                                                >

                                                    <span>
                                                        {
                                                            item.name
                                                        }
                                                    </span>

                                                </button>


                                                <button
                                                    type="button"
                                                    className="dropdown-icon-btn"
                                                    onClick={(event) => {

                                                        event.stopPropagation();

                                                        toggleDropdown(
                                                            item.name
                                                        );

                                                    }}
                                                    aria-label="Open Solutions menu"
                                                    aria-expanded={
                                                        dropdownOpen
                                                    }
                                                >

                                                    <span
                                                        className={`dropdown-arrow ${dropdownOpen
                                                            ? "rotate"
                                                            : ""
                                                            }`}
                                                    >
                                                        ▾
                                                    </span>

                                                </button>

                                            </div>


                                            <div
                                                className={`dropdown-card ${dropdownOpen
                                                    ? "show"
                                                    : ""
                                                    }`}
                                            >

                                                {item.dropdown.map(
                                                    (drop) => (

                                                        <NavLink
                                                            key={
                                                                drop.title
                                                            }
                                                            to={
                                                                drop.path
                                                            }
                                                            className={({ isActive }) =>
                                                                `dropdown-item ${isActive
                                                                    ? "active"
                                                                    : ""
                                                                }`
                                                            }
                                                            onClick={
                                                                closeMenu
                                                            }
                                                        >

                                                            <div className="dropdown-icon">
                                                                {
                                                                    drop.icon
                                                                }
                                                            </div>


                                                            <div className="dropdown-content">

                                                                <h4>
                                                                    {
                                                                        drop.title
                                                                    }
                                                                </h4>

                                                                <p>
                                                                    {
                                                                        drop.subtitle
                                                                    }
                                                                </p>

                                                            </div>

                                                        </NavLink>

                                                    )
                                                )}

                                            </div>

                                        </div>
                                    );

                                }


                                /* =====================================
                                   SEPARATE PAGE
                                   ===================================== */

                                if (
                                    item.separatePage
                                ) {

                                    return (
                                        <NavLink
                                            key={
                                                item.name
                                            }
                                            to={
                                                item.path
                                            }
                                            className={({ isActive }) =>
                                                `nav-link ${isActive
                                                    ? "active"
                                                    : ""
                                                }`
                                            }
                                            onClick={
                                                closeMenu
                                            }
                                        >
                                            {
                                                item.name
                                            }
                                        </NavLink>
                                    );

                                }


                                /* =====================================
                                   NORMAL SECTION
                                   ===================================== */

                                return (
                                    <button
                                        key={
                                            item.name
                                        }
                                        type="button"
                                        className={`nav-link ${active
                                            ? "active"
                                            : ""
                                            }`}
                                        onClick={() =>
                                            handleSectionNavigation(
                                                item.section
                                            )
                                        }
                                    >
                                        {
                                            item.name
                                        }
                                    </button>
                                );

                            }
                        )}


                        {/* =================================================
                           MOBILE QUOTE
                           ================================================= */}

                        <NavLink
                            to="/quote"
                            className="mobile-quote-btn"
                            onClick={
                                closeMenu
                            }
                        >

                            <span>
                                Get Quote
                            </span>

                            <span
                                className="mobile-quote-arrow"
                                aria-hidden="true"
                            >
                                →
                            </span>

                        </NavLink>

                    </nav>


                    {/* =================================================
                       RIGHT ACTIONS
                       ================================================= */}

                    <div className="navbar-actions">


                        {/* ---------------------------------------------
                           DESKTOP ONLY
                           --------------------------------------------- */}

                        <NavLink
                            to="/quote"
                            className="quote-btn"
                        >

                            <span>
                                Get Quote
                            </span>

                            <span
                                className="quote-arrow"
                                aria-hidden="true"
                            >
                                →
                            </span>

                        </NavLink>


                        {/* ---------------------------------------------
                           TABLET / MOBILE ONLY
                           --------------------------------------------- */}

                        <button
                            type="button"
                            className={`menu-toggle ${mobileOpen
                                ? "active"
                                : ""
                                }`}
                            onClick={
                                toggleMenu
                            }
                            aria-label={
                                mobileOpen
                                    ? "Close navigation"
                                    : "Open navigation"
                            }
                            aria-expanded={
                                mobileOpen
                            }
                        >

                            {mobileOpen ? (
                                <HiOutlineX />
                            ) : (
                                <HiOutlineMenuAlt3 />
                            )}

                        </button>

                    </div>

                </div>

            </header>


            {/* =========================================================
               MOBILE OVERLAY
               ========================================================= */}

            {mobileOpen && (

                <button
                    type="button"
                    className="mobile-overlay"
                    onClick={
                        closeMenu
                    }
                    aria-label="Close navigation"
                />

            )}

        </>
    );
};


export default Navbar;