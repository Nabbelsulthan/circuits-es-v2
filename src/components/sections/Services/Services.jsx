// import "./Services.css";

// import {
//     ClipboardCheck,
//     DraftingCompass,
//     Factory,
//     ShieldCheck,
//     Scissors,
//     Cable,
//     Truck,
//     Wrench,
//     Settings,
//     Cpu,
//     Zap,
//     Boxes
// } from "lucide-react";

// import Button from "../../ui/Button";
// import SectionHeading from "../../ui/SectionHeading";
// import IconBox from "../../ui/IconBox";
// import FeatureCard from "../../ui/FeatureCard";
// import ProcessTimeline from "../../ui/ProcessTimeline";
// import CTASection from "../../ui/CTASection";


// const Services = () => {

//     return (

//         <main id="services" className="services-page" >

//             {/*==================================================
//                 SERVICES HERO
//             ==================================================*/}

//             <section className="services-hero">

//                 <div className="container">

//                     <div className="services-hero-grid">

//                         {/*========================================
//                             HERO CONTENT
//                         ========================================*/}

//                         <div
//                             className="hero-content"
//                             data-aos="fade-right"
//                         >

//                             <span className="section-tag">

//                                 ENGINEERING SERVICES

//                             </span>

//                             {/* <h1>

//                                 Engineering
//                                 <span className="hero-highlight">
//                                     Solutions
//                                 </span>
//                                 Built for Industry.

//                             </h1> */}

//                             <h1>
//                                 Engineering{" "}
//                                 <span className="hero-highlight">
//                                     Solutions
//                                 </span>
//                                 <br />
//                                 Built for Industry.
//                             </h1>

//                             <p>

//                                 From engineering and precision fabrication
//                                 to installation, commissioning and lifecycle
//                                 support, CircuitsES provides complete
//                                 electrical and automation solutions for
//                                 demanding industrial applications.

//                             </p>

//                             <div className="hero-buttons">

//                                 <Button
//                                     to="/quote"
//                                     variant="primary"
//                                 >

//                                     Start Your Project

//                                 </Button>

//                                 <Button
//                                     to="/products"
//                                     variant="secondary"
//                                 >

//                                     Explore Our Products

//                                 </Button>

//                             </div>

//                             <div
//                                 className="hero-tags"
//                                 data-aos="fade-up"
//                                 data-aos-delay="200"
//                             >

//                                 <span>

//                                     Electrical Engineering

//                                 </span>

//                                 <span>

//                                     Automation

//                                 </span>

//                                 <span>

//                                     Precision Fabrication

//                                 </span>

//                                 <span>

//                                     Lifecycle Support

//                                 </span>

//                             </div>

//                         </div>


//                         {/*========================================
//                             HERO ENGINEERING DASHBOARD
//                         ========================================*/}

//                         <div
//                             className="hero-dashboard"
//                             data-aos="fade-left"
//                         >

//                             <div className="dashboard-card">

//                                 <span>

//                                     COMPLETE ENGINEERING PARTNER

//                                 </span>

//                                 <h3>

//                                     From Concept
//                                     to Commissioning

//                                 </h3>

//                                 <p>

//                                     One integrated engineering workflow
//                                     covering design, manufacturing,
//                                     testing, installation and long-term
//                                     technical support.

//                                 </p>

//                             </div>


//                             <div className="dashboard-grid">

//                                 <div className="dashboard-item">

//                                     <IconBox
//                                         icon={ClipboardCheck}
//                                         size={25}
//                                     />

//                                     <span>

//                                         Consultation

//                                     </span>

//                                 </div>


//                                 <div className="dashboard-item">

//                                     <IconBox
//                                         icon={DraftingCompass}
//                                         size={25}
//                                     />

//                                     <span>

//                                         Engineering

//                                     </span>

//                                 </div>


//                                 <div className="dashboard-item">

//                                     <IconBox
//                                         icon={Factory}
//                                         size={25}
//                                     />

//                                     <span>

//                                         Manufacturing

//                                     </span>

//                                 </div>


//                                 <div className="dashboard-item">

//                                     <IconBox
//                                         icon={ShieldCheck}
//                                         size={25}
//                                     />

//                                     <span>

//                                         Testing

//                                     </span>

//                                 </div>


//                                 <div className="dashboard-item">

//                                     <IconBox
//                                         icon={Truck}
//                                         size={25}
//                                     />

//                                     <span>

//                                         Delivery

//                                     </span>

//                                 </div>


//                                 <div className="dashboard-item">

//                                     <IconBox
//                                         icon={Wrench}
//                                         size={25}
//                                     />

//                                     <span>

//                                         Support

//                                     </span>

//                                 </div>

//                             </div>

//                         </div>

//                     </div>

//                 </div>

//             </section>


//             {/*==================================================
//                 ENGINEERING OVERVIEW
//             ==================================================*/}

//             <section className="services-overview">

//                 <div className="container">

//                     <SectionHeading
//                         tag="WHAT WE DO"
//                         title="One Engineering Partner. Complete Industrial Solutions."
//                         description="Our services bring engineering, manufacturing, automation and field execution together under one coordinated workflow."
//                     />

//                     <div className="services-overview-grid">

//                         <FeatureCard
//                             icon={DraftingCompass}
//                             title="Engineering & Design"
//                             description="Application analysis, electrical engineering, CAD development, control schematics and manufacturing documentation."
//                             delay={0}
//                         />

//                         <FeatureCard
//                             icon={Factory}
//                             title="Precision Manufacturing"
//                             description="Panel fabrication, CNC laser cutting, precision bending, assembly, busbar fabrication and control wiring."
//                             delay={100}
//                         />

//                         <FeatureCard
//                             icon={Settings}
//                             title="Automation & Integration"
//                             description="PLC, HMI, SCADA, drives, industrial networking and control system integration."
//                             delay={200}
//                         />

//                         <FeatureCard
//                             icon={ShieldCheck}
//                             title="Testing & Commissioning"
//                             description="Factory testing, installation, commissioning and functional verification before final handover."
//                             delay={300}
//                         />

//                         <FeatureCard
//                             icon={Wrench}
//                             title="Lifecycle Support"
//                             description="Preventive maintenance, breakdown assistance, technical support and system optimization."
//                             delay={400}
//                         />

//                         <FeatureCard
//                             icon={Zap}
//                             title="Modernization & Retrofit"
//                             description="Strategic upgrades for ageing electrical and automation systems without unnecessary complete replacement."
//                             delay={500}
//                         />

//                     </div>

//                 </div>

//             </section>

//             {/*==================================================
//                 ENGINEERING WORKFLOW
//             ==================================================*/}

//             <section className="engineering-workflow">

//                 <div className="container">

//                     <SectionHeading
//                         tag="ENGINEERING WORKFLOW"
//                         title="Every Successful Project Starts with Smart Engineering"
//                         description="Every project begins with understanding your operational requirements. Our engineering team studies the application, develops the technical documentation and prepares manufacturing-ready designs before production begins."
//                     />

//                     <ProcessTimeline
//                         items={[
//                             {
//                                 icon: ClipboardCheck,
//                                 title: "Requirement Analysis",
//                                 description:
//                                     "Understanding the application, electrical load, process requirements, future expansion and customer expectations."
//                             },
//                             {
//                                 icon: Boxes,
//                                 title: "Site Survey",
//                                 description:
//                                     "Evaluating installation conditions, existing systems, cable routing and available infrastructure."
//                             },
//                             {
//                                 icon: DraftingCompass,
//                                 title: "Engineering Design",
//                                 description:
//                                     "Preparing complete electrical engineering documentation and manufacturing-ready designs."
//                             },
//                             {
//                                 icon: ShieldCheck,
//                                 title: "Customer Approval",
//                                 description:
//                                     "Technical review, design discussions and approval before manufacturing begins."
//                             }
//                         ]}
//                     />

//                 </div>

//             </section>


//             {/*==================================================
//                 ENGINEERING DESIGN PACKAGE
//             ==================================================*/}

//             <section className="engineering-package-section">

//                 <div className="container">

//                     <div className="engineering-package-layout">

//                         {/*========================================
//                             CONTENT
//                         ========================================*/}

//                         <div
//                             className="package-intro"
//                             data-aos="fade-right"
//                         >

//                             <span className="section-tag">

//                                 DESIGN PACKAGE

//                             </span>

//                             <h2>

//                                 Complete Documentation
//                                 Ready for Manufacturing

//                             </h2>

//                             <p>

//                                 Every project is supported by comprehensive
//                                 engineering documentation that simplifies
//                                 manufacturing, installation, testing and
//                                 future maintenance.

//                             </p>

//                             <div className="package-note">

//                                 <ShieldCheck size={20} />

//                                 <span>

//                                     Engineering documentation developed
//                                     around your application.

//                                 </span>

//                             </div>

//                         </div>


//                         {/*========================================
//                             DOCUMENTATION GRID
//                         ========================================*/}

//                         <div className="package-grid">

//                             <FeatureCard
//                                 icon={DraftingCompass}
//                                 title="Single Line Diagram"
//                                 description="Clear electrical power distribution planning and system representation."
//                                 delay={0}
//                             />

//                             <FeatureCard
//                                 icon={Boxes}
//                                 title="General Arrangement"
//                                 description="Panel layout, dimensions, component placement and enclosure configuration."
//                                 delay={100}
//                             />

//                             <FeatureCard
//                                 icon={Cable}
//                                 title="Control Schematics"
//                                 description="Detailed control circuits, wiring diagrams and electrical connections."
//                                 delay={200}
//                             />

//                             <FeatureCard
//                                 icon={ClipboardCheck}
//                                 title="Bill of Materials"
//                                 description="Complete component and material listing for project execution."
//                                 delay={300}
//                             />

//                             <FeatureCard
//                                 icon={DraftingCompass}
//                                 title="CAD Drawings"
//                                 description="Manufacturing-ready drawings prepared for accurate fabrication and assembly."
//                                 delay={400}
//                             />

//                             <FeatureCard
//                                 icon={ShieldCheck}
//                                 title="Technical Documentation"
//                                 description="Project documentation supporting installation, testing, operation and maintenance."
//                                 delay={500}
//                             />

//                         </div>

//                     </div>

//                 </div>

//             </section>

//             {/*==================================================
//                 MANUFACTURING EXCELLENCE
//             ==================================================*/}

//             <section className="manufacturing-excellence">

//                 <div className="container">

//                     <SectionHeading
//                         tag="MANUFACTURING EXCELLENCE"
//                         title="Precision Manufacturing Built Around Quality"
//                         description="Our manufacturing process combines engineering discipline, modern fabrication techniques and skilled workmanship to deliver reliable electrical and automation systems for demanding industrial environments."
//                     />

//                     {/*========================================
//                         MANUFACTURING PROCESS
//                     ========================================*/}

//                     <div className="manufacturing-process">

//                         <ProcessTimeline
//                             items={[
//                                 {
//                                     icon: DraftingCompass,
//                                     title: "Engineering Drawings",
//                                     description:
//                                         "Approved electrical and mechanical drawings provide the foundation for accurate manufacturing."
//                                 },
//                                 {
//                                     icon: Scissors,
//                                     title: "Laser Cutting",
//                                     description:
//                                         "Precision CNC laser cutting produces accurate openings, mounting plates and sheet-metal components."
//                                 },
//                                 {
//                                     icon: Wrench,
//                                     title: "CNC Bending",
//                                     description:
//                                         "Precision bending creates consistent panels, brackets and enclosure components with accurate dimensions."
//                                 },
//                                 {
//                                     icon: Cable,
//                                     title: "Busbar Fabrication",
//                                     description:
//                                         "Busbar cutting, preparation and fabrication are carried out according to the approved electrical design."
//                                 },
//                                 {
//                                     icon: Factory,
//                                     title: "Panel Assembly",
//                                     description:
//                                         "Electrical components, mounting systems and fabricated parts are assembled according to engineering drawings."
//                                 },
//                                 {
//                                     icon: Cable,
//                                     title: "Control Wiring",
//                                     description:
//                                         "Professional wiring, ferruling, identification and termination provide clean and maintainable control systems."
//                                 },
//                                 {
//                                     icon: ShieldCheck,
//                                     title: "Factory Testing",
//                                     description:
//                                         "Panels undergo inspection and functional verification before they are cleared for dispatch."
//                                 },
//                                 {
//                                     icon: Truck,
//                                     title: "Dispatch",
//                                     description:
//                                         "Completed systems are prepared and safely packed for delivery to the installation site."
//                                 }
//                             ]}
//                         />

//                     </div>


//                     {/*========================================
//                         MANUFACTURING CAPABILITIES
//                     ========================================*/}

//                     <div className="manufacturing-capabilities">

//                         <div
//                             className="manufacturing-capabilities-intro"
//                             data-aos="fade-right"
//                         >

//                             <span className="section-tag">

//                                 FABRICATION CAPABILITIES

//                             </span>

//                             <h3>

//                                 From Raw Sheet Metal
//                                 to Finished Industrial System

//                             </h3>

//                             <p>

//                                 Our fabrication and assembly capabilities
//                                 allow us to maintain greater control over
//                                 quality, dimensions and project requirements
//                                 throughout the manufacturing process.

//                             </p>

//                         </div>


//                         <div className="manufacturing-capabilities-grid">

//                             <FeatureCard
//                                 icon={Scissors}
//                                 title="CNC Laser Cutting"
//                                 description="Accurate sheet-metal cutting for panel bodies, mounting plates, doors, cable entries and customized fabrication requirements."
//                                 delay={0}
//                             />

//                             <FeatureCard
//                                 icon={Wrench}
//                                 title="CNC Bending"
//                                 description="Precision bending for enclosure panels, structural components, brackets and customized sheet-metal assemblies."
//                                 delay={100}
//                             />

//                             <FeatureCard
//                                 icon={Cable}
//                                 title="Busbar Fabrication"
//                                 description="Busbar preparation and fabrication for reliable power distribution and organized panel construction."
//                                 delay={200}
//                             />

//                             <FeatureCard
//                                 icon={Factory}
//                                 title="Panel Assembly"
//                                 description="Mechanical and electrical assembly carried out according to approved engineering drawings and project requirements."
//                                 delay={300}
//                             />

//                         </div>

//                     </div>


//                     {/*========================================
//                         QUALITY FOCUS
//                     ========================================*/}

//                     <div
//                         className="manufacturing-quality"
//                         data-aos="fade-up"
//                     >

//                         <div className="quality-icon">

//                             <IconBox
//                                 icon={ShieldCheck}
//                                 size={34}
//                             />

//                         </div>

//                         <div className="quality-content">

//                             <span>

//                                 QUALITY THROUGH EVERY STAGE

//                             </span>

//                             <h3>

//                                 Built Right. Checked Before It Leaves.

//                             </h3>

//                             <p>

//                                 From fabrication accuracy and component
//                                 installation to wiring, inspection and
//                                 functional testing, quality is considered
//                                 throughout the manufacturing process rather
//                                 than only at the final stage.

//                             </p>

//                         </div>

//                     </div>

//                 </div>

//             </section>

//             {/*==================================================
//                 FIELD EXECUTION & COMMISSIONING
//             ==================================================*/}

//             <section className="field-execution">

//                 <div className="container">

//                     <SectionHeading
//                         tag="FIELD EXECUTION"
//                         title="From Factory Floor to Successful Commissioning"
//                         description="Our responsibility extends beyond manufacturing. We coordinate installation, testing and commissioning to help ensure that every system performs as intended in its operating environment."
//                     />

//                     {/*========================================
//                         EXECUTION PROCESS
//                     ========================================*/}

//                     <div className="execution-process">

//                         <ProcessTimeline
//                             orientation="vertical"
//                             items={[
//                                 {
//                                     icon: ShieldCheck,
//                                     title: "Factory Acceptance Testing",
//                                     description:
//                                         "Functional verification, inspection and testing are completed before the system leaves our facility."
//                                 },
//                                 {
//                                     icon: Truck,
//                                     title: "Packing & Dispatch",
//                                     description:
//                                         "Completed panels are prepared, protected and dispatched with attention to safe transportation."
//                                 },
//                                 {
//                                     icon: Factory,
//                                     title: "Site Installation",
//                                     description:
//                                         "Panel positioning, mechanical installation, cable termination and site coordination are carried out as required."
//                                 },
//                                 {
//                                     icon: Settings,
//                                     title: "System Commissioning",
//                                     description:
//                                         "Energization, parameter configuration, functional checks and system verification are performed during commissioning."
//                                 },
//                                 {
//                                     icon: ClipboardCheck,
//                                     title: "Customer Handover",
//                                     description:
//                                         "Final documentation, technical guidance and project handover follow successful commissioning."
//                                 }
//                             ]}
//                         />

//                     </div>


//                     {/*========================================
//                         EXECUTION HIGHLIGHTS
//                     ========================================*/}

//                     <div className="execution-highlights">

//                         <div
//                             className="execution-intro"
//                             data-aos="fade-right"
//                         >

//                             <span className="section-tag">

//                                 SITE EXECUTION

//                             </span>

//                             <h3>

//                                 Engineering Support
//                                 Where It Matters Most

//                             </h3>

//                             <p>

//                                 A well-manufactured system still needs
//                                 correct installation and commissioning.
//                                 Our team works with project and site
//                                 teams to help ensure the completed
//                                 system transitions smoothly from
//                                 manufacturing to operation.

//                             </p>

//                         </div>


//                         <div className="execution-highlight-grid">

//                             <FeatureCard
//                                 icon={Boxes}
//                                 title="Site Coordination"
//                                 description="Coordination with project teams, electrical contractors and site personnel during installation and commissioning."
//                                 delay={0}
//                             />

//                             <FeatureCard
//                                 icon={ShieldCheck}
//                                 title="Safety & Verification"
//                                 description="Installation and commissioning activities are approached with attention to electrical safety and system verification."
//                                 delay={100}
//                             />

//                             <FeatureCard
//                                 icon={Zap}
//                                 title="Performance Validation"
//                                 description="Functional checks help confirm that the installed system operates according to the approved engineering requirements."
//                                 delay={200}
//                             />

//                             <FeatureCard
//                                 icon={Wrench}
//                                 title="Technical Assistance"
//                                 description="Engineering support is available during startup, troubleshooting and commissioning activities."
//                                 delay={300}
//                             />

//                         </div>

//                     </div>


//                     {/*========================================
//                         HANDOVER MESSAGE
//                     ========================================*/}

//                     <div
//                         className="handover-banner"
//                         data-aos="zoom-in"
//                     >

//                         <div className="handover-icon">

//                             <IconBox
//                                 icon={ShieldCheck}
//                                 size={34}
//                             />

//                         </div>

//                         <div className="handover-content">

//                             <span>

//                                 PROJECT HANDOVER

//                             </span>

//                             <h3>

//                                 Commissioned With Confidence

//                             </h3>

//                             <p>

//                                 Our objective is not simply to deliver
//                                 a panel. It is to deliver a functioning
//                                 system that is ready for the customer's
//                                 operating environment.

//                             </p>

//                         </div>

//                     </div>

//                 </div>

//             </section>

//             {/*==================================================
//                 LIFECYCLE SUPPORT
//             ==================================================*/}

//             <section className="lifecycle-support">

//                 <div className="container">

//                     <SectionHeading
//                         tag="LIFECYCLE SUPPORT"
//                         title="Engineering Support That Continues Beyond Delivery"
//                         description="Our relationship with the customer does not end at commissioning. We provide ongoing technical support and maintenance services to help electrical and automation systems remain reliable throughout their service life."
//                     />

//                     {/*========================================
//                         SUPPORT SERVICES
//                     ========================================*/}

//                     <div className="support-services-grid">

//                         <FeatureCard
//                             icon={Settings}
//                             title="Preventive Maintenance"
//                             description="Scheduled inspections, cleaning, tightening, functional checks and condition-based observations to help prevent unexpected failures."
//                             delay={0}
//                         />

//                         <FeatureCard
//                             icon={ShieldCheck}
//                             title="System Health Checks"
//                             description="Periodic assessment of electrical panels, control systems and connected equipment to identify potential issues before they affect operations."
//                             delay={100}
//                         />

//                         <FeatureCard
//                             icon={Wrench}
//                             title="Breakdown Assistance"
//                             description="Technical assistance for troubleshooting electrical and automation issues with the objective of restoring operation quickly."
//                             delay={200}
//                         />

//                         <FeatureCard
//                             icon={Cpu}
//                             title="Automation Support"
//                             description="Support for PLC, HMI, drives, control logic and automation-related issues across installed systems."
//                             delay={300}
//                         />

//                         <FeatureCard
//                             icon={ClipboardCheck}
//                             title="Operator Training"
//                             description="Technical guidance and operator training to help customers understand system operation, basic troubleshooting and safe practices."
//                             delay={400}
//                         />

//                         <FeatureCard
//                             icon={Boxes}
//                             title="Spare Parts Guidance"
//                             description="Assistance in identifying critical components and planning suitable spares for improved maintenance readiness."
//                             delay={500}
//                         />

//                     </div>


//                     {/*========================================
//                         SUPPORT COVERAGE
//                     ========================================*/}

//                     <div className="support-coverage">

//                         <div
//                             className="support-coverage-content"
//                             data-aos="fade-right"
//                         >

//                             <span className="section-tag">

//                                 SUPPORT COVERAGE

//                             </span>

//                             <h3>

//                                 Protecting the Performance
//                                 of Your Investment

//                             </h3>

//                             <p>

//                                 Industrial electrical systems are expected
//                                 to operate reliably for years. Our lifecycle
//                                 support services are designed to help
//                                 customers maintain performance, identify
//                                 issues early and make informed technical
//                                 decisions as their facilities evolve.

//                             </p>

//                         </div>


//                         <div
//                             className="support-checklist"
//                             data-aos="fade-left"
//                         >

//                             <div className="support-check">

//                                 <ShieldCheck size={21} />

//                                 <span>

//                                     Preventive Maintenance

//                                 </span>

//                             </div>

//                             <div className="support-check">

//                                 <ShieldCheck size={21} />

//                                 <span>

//                                     Periodic System Health Checks

//                                 </span>

//                             </div>

//                             <div className="support-check">

//                                 <ShieldCheck size={21} />

//                                 <span>

//                                     Breakdown Assistance

//                                 </span>

//                             </div>

//                             <div className="support-check">

//                                 <ShieldCheck size={21} />

//                                 <span>

//                                     PLC & Automation Support

//                                 </span>

//                             </div>

//                             <div className="support-check">

//                                 <ShieldCheck size={21} />

//                                 <span>

//                                     Operator Training

//                                 </span>

//                             </div>

//                             <div className="support-check">

//                                 <ShieldCheck size={21} />

//                                 <span>

//                                     Spare Parts Guidance

//                                 </span>

//                             </div>

//                             <div className="support-check">

//                                 <ShieldCheck size={21} />

//                                 <span>

//                                     Technical Documentation

//                                 </span>

//                             </div>

//                             <div className="support-check">

//                                 <ShieldCheck size={21} />

//                                 <span>

//                                     Future Upgrade Recommendations

//                                 </span>

//                             </div>

//                         </div>

//                     </div>


//                     {/*========================================
//                         LONG-TERM PARTNERSHIP
//                     ========================================*/}

//                     <div
//                         className="support-partnership"
//                         data-aos="fade-up"
//                     >

//                         <div className="partnership-icon">

//                             <IconBox
//                                 icon={Wrench}
//                                 size={34}
//                             />

//                         </div>

//                         <div className="partnership-content">

//                             <span>

//                                 LONG-TERM ENGINEERING PARTNERSHIP

//                             </span>

//                             <h3>

//                                 Your System Evolves.
//                                 Our Engineering Support Evolves With It.

//                             </h3>

//                             <p>

//                                 As production requirements change,
//                                 equipment ages and new technologies become
//                                 available, we can support future
//                                 modifications, automation upgrades,
//                                 retrofits and system improvements.

//                             </p>

//                         </div>

//                     </div>

//                 </div>

//             </section>

//             {/*==================================================
//                 RETROFIT & MODERNIZATION
//             ==================================================*/}

//             <section className="retrofit-modernization">

//                 <div className="container">

//                     <SectionHeading
//                         tag="RETROFIT & MODERNIZATION"
//                         title="Modernize Existing Systems Without Starting From Zero"
//                         description="Ageing electrical and automation systems do not always require complete replacement. Our retrofit solutions help improve reliability, efficiency and control while making practical use of existing infrastructure."
//                     />

//                     {/*========================================
//                         RETROFIT INTRO
//                     ========================================*/}

//                     <div className="retrofit-intro">

//                         <div
//                             className="retrofit-intro-content"
//                             data-aos="fade-right"
//                         >

//                             <span className="section-tag">

//                                 SMART UPGRADES

//                             </span>

//                             <h3>

//                                 Extend Equipment Life
//                                 Through Targeted Engineering

//                             </h3>

//                             <p>

//                                 Existing panels and automation systems can
//                                 often be upgraded in stages. We evaluate
//                                 the current system, identify limitations and
//                                 develop practical modifications based on
//                                 the application and future requirements.

//                             </p>

//                             <p>

//                                 The objective is simple: improve the system
//                                 without introducing unnecessary replacement
//                                 costs or avoidable production disruption.

//                             </p>

//                         </div>


//                         <div
//                             className="retrofit-benefit-panel"
//                             data-aos="fade-left"
//                         >

//                             <span>

//                                 WHY CONSIDER A RETROFIT?

//                             </span>

//                             <div className="retrofit-benefit-list">

//                                 <div>

//                                     <IconBox
//                                         icon={ShieldCheck}
//                                         size={24}
//                                     />

//                                     <span>

//                                         Improve System Reliability

//                                     </span>

//                                 </div>

//                                 <div>

//                                     <IconBox
//                                         icon={Zap}
//                                         size={24}
//                                     />

//                                     <span>

//                                         Improve Energy Efficiency

//                                     </span>

//                                 </div>

//                                 <div>

//                                     <IconBox
//                                         icon={Wrench}
//                                         size={24}
//                                     />

//                                     <span>

//                                         Reduce Maintenance Issues

//                                     </span>

//                                 </div>

//                                 <div>

//                                     <IconBox
//                                         icon={Settings}
//                                         size={24}
//                                     />

//                                     <span>

//                                         Prepare for Future Expansion

//                                     </span>

//                                 </div>

//                             </div>

//                         </div>

//                     </div>


//                     {/*========================================
//                         RETROFIT SERVICES
//                     ========================================*/}

//                     <div className="retrofit-services">

//                         <FeatureCard
//                             icon={Settings}
//                             title="Control Panel Modernization"
//                             description="Upgrade ageing switchgear, protection devices, control components and internal systems while retaining suitable existing infrastructure."
//                             delay={0}
//                         />

//                         <FeatureCard
//                             icon={Cpu}
//                             title="PLC Migration"
//                             description="Replace legacy PLC platforms with modern control systems while planning the migration around existing field devices and production requirements."
//                             delay={100}
//                         />

//                         <FeatureCard
//                             icon={Zap}
//                             title="Drive & Motor Upgrades"
//                             description="Upgrade motor-control systems with modern drive technologies to improve process control, operational flexibility and energy performance."
//                             delay={200}
//                         />

//                         <FeatureCard
//                             icon={DraftingCompass}
//                             title="Control System Upgrades"
//                             description="Modernize control architecture, HMI systems and associated automation components to improve usability and system visibility."
//                             delay={300}
//                         />

//                         <FeatureCard
//                             icon={Scissors}
//                             title="Enclosure Modification"
//                             description="Modify existing enclosures using precision fabrication, CNC laser cutting and bending to accommodate new components and equipment."
//                             delay={400}
//                         />

//                         <FeatureCard
//                             icon={Cable}
//                             title="Wiring & Component Replacement"
//                             description="Replace ageing wiring, terminals and selected electrical components while improving organization, identification and maintainability."
//                             delay={500}
//                         />

//                     </div>


//                     {/*========================================
//                         RETROFIT APPROACH
//                     ========================================*/}

//                     <div className="retrofit-approach">

//                         <div
//                             className="retrofit-approach-heading"
//                             data-aos="fade-up"
//                         >

//                             <span className="section-tag">

//                                 OUR APPROACH

//                             </span>

//                             <h3>

//                                 Upgrade What Matters.
//                                 Preserve What Works.

//                             </h3>

//                         </div>


//                         <ProcessTimeline
//                             items={[
//                                 {
//                                     icon: ClipboardCheck,
//                                     title: "Assess",
//                                     description:
//                                         "Review the existing electrical and automation system, its condition and operational requirements."
//                                 },
//                                 {
//                                     icon: DraftingCompass,
//                                     title: "Engineer",
//                                     description:
//                                         "Develop a practical retrofit strategy and prepare the required electrical and mechanical documentation."
//                                 },
//                                 {
//                                     icon: Wrench,
//                                     title: "Modify",
//                                     description:
//                                         "Carry out fabrication, component replacement, wiring changes and system modifications."
//                                 },
//                                 {
//                                     icon: ShieldCheck,
//                                     title: "Test",
//                                     description:
//                                         "Verify the upgraded system through inspection, functional checks and commissioning."
//                                 }
//                             ]}
//                         />

//                     </div>


//                     {/*========================================
//                         RETROFIT RESULT
//                     ========================================*/}

//                     <div
//                         className="retrofit-result"
//                         data-aos="zoom-in"
//                     >

//                         <div className="retrofit-result-icon">

//                             <IconBox
//                                 icon={Factory}
//                                 size={34}
//                             />

//                         </div>

//                         <div className="retrofit-result-content">

//                             <span>

//                                 THE RESULT

//                             </span>

//                             <h3>

//                                 A More Capable System Without
//                                 Unnecessary Replacement

//                             </h3>

//                             <p>

//                                 A well-planned retrofit can extend the
//                                 useful life of existing equipment, improve
//                                 operational performance and create a
//                                 practical path toward future automation
//                                 and expansion.

//                             </p>

//                         </div>

//                     </div>

//                 </div>

//             </section>

//             {/*==================================================
//                 SPECIALIZED ENGINEERING SERVICES
//             ==================================================*/}

//             <section className="specialized-services">

//                 <div className="container">

//                     <SectionHeading
//                         tag="SPECIALIZED SERVICES"
//                         title="Specialized Engineering Solutions Beyond the Panel"
//                         description="Our capabilities extend beyond electrical panel manufacturing, with precision enclosure fabrication and complete rooftop solar solutions for residential, commercial, industrial and institutional applications."
//                     />


//                     {/*================================================
//                         ENCLOSURE SOLUTIONS
//                     =================================================*/}

//                     <div className="specialized-service enclosure-service">

//                         <div
//                             className="specialized-service-content"
//                             data-aos="fade-right"
//                         >

//                             <span className="section-tag">

//                                 ENCLOSURE SOLUTIONS

//                             </span>

//                             <h3>

//                                 Precision Enclosures
//                                 Built Around Your Application

//                             </h3>

//                             <p>

//                                 We provide a wide range of industrial,
//                                 electrical and customized enclosures
//                                 designed for secure indoor installations
//                                 and demanding outdoor environments.

//                             </p>

//                             <p>

//                                 From standard industrial requirements
//                                 to application-specific fabrication,
//                                 our engineering and manufacturing
//                                 capabilities allow enclosure designs
//                                 to be adapted around the equipment,
//                                 environment and installation requirements.

//                             </p>


//                             {/*========================================
//                                 ENCLOSURE TYPES
//                             ========================================*/}

//                             <div className="specialized-list">

//                                 <div>

//                                     <Boxes size={20} />

//                                     <span>

//                                         Industrial Enclosures

//                                     </span>

//                                 </div>

//                                 <div>

//                                     <Boxes size={20} />

//                                     <span>

//                                         Electrical Enclosures

//                                     </span>

//                                 </div>

//                                 <div>

//                                     <Boxes size={20} />

//                                     <span>

//                                         Outdoor Enclosures

//                                     </span>

//                                 </div>

//                                 <div>

//                                     <Boxes size={20} />

//                                     <span>

//                                         Modular Enclosures

//                                     </span>

//                                 </div>

//                                 <div>

//                                     <Boxes size={20} />

//                                     <span>

//                                         Custom-Built Enclosures

//                                     </span>

//                                 </div>

//                                 <div>

//                                     <ShieldCheck size={20} />

//                                     <span>

//                                         SS304 / SS316 Options

//                                     </span>

//                                 </div>

//                             </div>

//                         </div>


//                         {/*========================================
//                             ENCLOSURE CAPABILITIES
//                         ========================================*/}

//                         <div
//                             className="specialized-service-panel"
//                             data-aos="fade-left"
//                         >

//                             <span>

//                                 ENCLOSURE ENGINEERING

//                             </span>

//                             <h4>

//                                 From Design
//                                 to Finished Enclosure

//                             </h4>

//                             <div className="specialized-capabilities">

//                                 <div>

//                                     <IconBox
//                                         icon={DraftingCompass}
//                                         size={24}
//                                     />

//                                     <span>

//                                         Product Design &
//                                         Development

//                                     </span>

//                                 </div>

//                                 <div>

//                                     <IconBox
//                                         icon={Scissors}
//                                         size={24}
//                                     />

//                                     <span>

//                                         CNC Laser Cutting

//                                     </span>

//                                 </div>

//                                 <div>

//                                     <IconBox
//                                         icon={Wrench}
//                                         size={24}
//                                     />

//                                     <span>

//                                         Precision Bending

//                                     </span>

//                                 </div>

//                                 <div>

//                                     <IconBox
//                                         icon={Factory}
//                                         size={24}
//                                     />

//                                     <span>

//                                         Manufacturing &
//                                         Assembly

//                                     </span>

//                                 </div>

//                                 <div>

//                                     <IconBox
//                                         icon={ShieldCheck}
//                                         size={24}
//                                     />

//                                     <span>

//                                         Prototyping &
//                                         Testing

//                                     </span>

//                                 </div>

//                                 <div>

//                                     <IconBox
//                                         icon={Boxes}
//                                         size={24}
//                                     />

//                                     <span>

//                                         Custom Fabrication

//                                     </span>

//                                 </div>

//                             </div>

//                         </div>

//                     </div>


//                     {/*================================================
//                         SOLAR SERVICES
//                     =================================================*/}

//                     <div className="specialized-service solar-service">

//                         <div
//                             className="specialized-service-panel solar-panel"
//                             data-aos="fade-right"
//                         >

//                             <span>

//                                 SOLAR SOLUTIONS

//                             </span>

//                             <h4>

//                                 Solar Systems
//                                 Designed Around Your Energy Needs

//                             </h4>

//                             <div className="solar-sectors">

//                                 <div>

//                                     <IconBox
//                                         icon={Boxes}
//                                         size={24}
//                                     />

//                                     <div>

//                                         <strong>

//                                             Residential

//                                         </strong>

//                                         <p>

//                                             Reliable rooftop solar
//                                             solutions designed to
//                                             reduce household
//                                             electricity costs and
//                                             support long-term energy
//                                             savings.

//                                         </p>

//                                     </div>

//                                 </div>

//                                 <div>

//                                     <IconBox
//                                         icon={Factory}
//                                         size={24}
//                                     />

//                                     <div>

//                                         <strong>

//                                             Commercial & Industrial

//                                         </strong>

//                                         <p>

//                                             Customized rooftop
//                                             systems designed around
//                                             energy requirements,
//                                             available roof space
//                                             and long-term returns.

//                                         </p>

//                                     </div>

//                                 </div>

//                                 <div>

//                                     <IconBox
//                                         icon={ShieldCheck}
//                                         size={24}
//                                     />

//                                     <div>

//                                         <strong>

//                                             Institutional

//                                         </strong>

//                                         <p>

//                                             Cost-effective solar
//                                             solutions for educational,
//                                             research and institutional
//                                             facilities.

//                                         </p>

//                                     </div>

//                                 </div>

//                             </div>

//                         </div>


//                         {/*========================================
//                             SOLAR CONTENT
//                         ========================================*/}

//                         <div
//                             className="specialized-service-content"
//                             data-aos="fade-left"
//                         >

//                             <span className="section-tag">

//                                 SOLAR ENGINEERING

//                             </span>

//                             <h3>

//                                 End-to-End Rooftop
//                                 Solar Solutions

//                             </h3>

//                             <p>

//                                 We provide complete rooftop solar
//                                 solutions from initial assessment
//                                 and system design through installation,
//                                 commissioning and long-term maintenance.

//                             </p>


//                             <div className="solar-process">

//                                 <div>

//                                     <span>

//                                         01

//                                     </span>

//                                     <div>

//                                         <strong>

//                                             Site Assessment

//                                         </strong>

//                                         <p>

//                                             Evaluate the site,
//                                             roof conditions and
//                                             energy requirements.

//                                         </p>

//                                     </div>

//                                 </div>

//                                 <div>

//                                     <span>

//                                         02

//                                     </span>

//                                     <div>

//                                         <strong>

//                                             System Design

//                                         </strong>

//                                         <p>

//                                             Develop a solution
//                                             based on application
//                                             and energy demand.

//                                         </p>

//                                     </div>

//                                 </div>

//                                 <div>

//                                     <span>

//                                         03

//                                     </span>

//                                     <div>

//                                         <strong>

//                                             Installation

//                                         </strong>

//                                         <p>

//                                             Complete installation
//                                             and system integration.

//                                         </p>

//                                     </div>

//                                 </div>

//                                 <div>

//                                     <span>

//                                         04

//                                     </span>

//                                     <div>

//                                         <strong>

//                                             Commissioning

//                                         </strong>

//                                         <p>

//                                             Testing and verification
//                                             before system handover.

//                                         </p>

//                                     </div>

//                                 </div>

//                             </div>


//                             {/*====================================
//                                 SOLAR AMC
//                             ====================================*/}

//                             <div className="solar-amc">

//                                 <IconBox
//                                     icon={Wrench}
//                                     size={26}
//                                 />

//                                 <div>

//                                     <span>

//                                         SOLAR AMC

//                                     </span>

//                                     <h4>

//                                         Long-Term Performance Support

//                                     </h4>

//                                     <p>

//                                         Regular inspections, preventive
//                                         maintenance and system monitoring
//                                         help maintain energy output,
//                                         reliability and long-term system
//                                         performance.

//                                     </p>

//                                 </div>

//                             </div>

//                         </div>

//                     </div>


//                     {/*================================================
//                         SPECIALIZED SERVICES SUMMARY
//                     =================================================*/}

//                     <div
//                         className="specialized-summary"
//                         data-aos="fade-up"
//                     >

//                         <div className="specialized-summary-icon">

//                             <IconBox
//                                 icon={Settings}
//                                 size={34}
//                             />

//                         </div>

//                         <div>

//                             <span>

//                                 ENGINEERED FOR YOUR APPLICATION

//                             </span>

//                             <h3>

//                                 One Engineering Partner,
//                                 Multiple Specialized Capabilities

//                             </h3>

//                             <p>

//                                 Whether you need a custom enclosure,
//                                 precision sheet-metal fabrication or
//                                 a rooftop solar solution, our engineering
//                                 and manufacturing capabilities allow us
//                                 to develop practical solutions around
//                                 your specific requirements.

//                             </p>

//                         </div>

//                     </div>

//                 </div>

//             </section>

//             {/*==================================================
//                 OUR COMMITMENT
//             ==================================================*/}

//             <section className="our-commitment">

//                 <div className="container">

//                     <SectionHeading
//                         tag="OUR COMMITMENT"
//                         title="Engineering Confidence Built Into Every Project"
//                         description="Every solution delivered by Circuits Energy System reflects our commitment to engineering discipline, precision manufacturing, reliable execution and long-term customer relationships."
//                     />


//                     {/*========================================
//                         COMMITMENT GRID
//                     ========================================*/}

//                     <div className="commitment-grid">

//                         <FeatureCard
//                             icon={DraftingCompass}
//                             tag="01"
//                             title="Engineering First"
//                             description="Every project begins with understanding the customer's application, operating environment and technical requirements before selecting the right solution."
//                             delay={0}
//                         />

//                         <FeatureCard
//                             icon={Factory}
//                             tag="02"
//                             title="Precision Manufacturing"
//                             description="Modern fabrication techniques, laser cutting, CNC bending, assembly and skilled workmanship help deliver consistent and dependable systems."
//                             delay={100}
//                         />

//                         <FeatureCard
//                             icon={ShieldCheck}
//                             tag="03"
//                             title="Quality Through Every Stage"
//                             description="Inspection and verification are built into the engineering, fabrication, assembly and testing process rather than treated as a final-stage activity."
//                             delay={200}
//                         />

//                         <FeatureCard
//                             icon={Wrench}
//                             tag="04"
//                             title="Long-Term Partnership"
//                             description="Our support continues beyond delivery through maintenance, technical assistance, upgrades, retrofit solutions and future engineering requirements."
//                             delay={300}
//                         />

//                     </div>


//                     {/*========================================
//                         ENGINEERING PROMISE
//                     ========================================*/}

//                     <div
//                         className="engineering-promise"
//                         data-aos="zoom-in"
//                     >

//                         <div className="promise-content">

//                             <span>

//                                 ONE ENGINEERING PARTNER

//                             </span>

//                             <h3>

//                                 Consult.
//                                 Design.
//                                 Manufacture.
//                                 Deliver.
//                                 Support.

//                             </h3>

//                             <p>

//                                 A complete engineering ecosystem designed
//                                 to simplify electrical, automation and
//                                 industrial projects from the first
//                                 conversation through the entire system
//                                 lifecycle.

//                             </p>

//                         </div>


//                         <div className="promise-points">

//                             <div>

//                                 <IconBox
//                                     icon={ClipboardCheck}
//                                     size={25}
//                                 />

//                                 <span>

//                                     Understand

//                                 </span>

//                             </div>

//                             <div>

//                                 <IconBox
//                                     icon={DraftingCompass}
//                                     size={25}
//                                 />

//                                 <span>

//                                     Engineer

//                                 </span>

//                             </div>

//                             <div>

//                                 <IconBox
//                                     icon={Factory}
//                                     size={25}
//                                 />

//                                 <span>

//                                     Manufacture

//                                 </span>

//                             </div>

//                             <div>

//                                 <IconBox
//                                     icon={ShieldCheck}
//                                     size={25}
//                                 />

//                                 <span>

//                                     Verify

//                                 </span>

//                             </div>

//                             <div>

//                                 <IconBox
//                                     icon={Wrench}
//                                     size={25}
//                                 />

//                                 <span>

//                                     Support

//                                 </span>

//                             </div>

//                         </div>

//                     </div>

//                 </div>

//             </section>


//             {/*==================================================
//                 FINAL CALL TO ACTION
//             ==================================================*/}

//             <CTASection

//                 tag="LET'S BUILD TOGETHER"

//                 title="Ready to Engineer Your Next Project?"

//                 description="Whether you are planning a new electrical installation, modernizing an existing facility or looking for a reliable engineering partner, our team is ready to understand your requirements and develop the right solution."

//                 primaryText="Request Consultation"

//                 primaryTo="/quote"

//                 secondaryText="Get a Quote"

//                 secondaryTo="/quote"

//             />

//         </main>
//     );

// };

// export default Services;




import "./Services.css";

import {
    ClipboardCheck,
    DraftingCompass,
    Factory,
    ShieldCheck,
    Scissors,
    Cable,
    Truck,
    Wrench,
    Settings,
    Cpu,
    Zap,
    Boxes,
} from "lucide-react";

import Button from "../../ui/Button";
import SectionHeading from "../../ui/SectionHeading";
import IconBox from "../../ui/IconBox";
import FeatureCard from "../../ui/FeatureCard";
import ProcessTimeline from "../../ui/ProcessTimeline";
import CTASection from "../../ui/CTASection";

const Services = () => {
    return (
        <main id="services" className="services-page">

            {/* ==================================================
                SERVICES HERO
            ================================================== */}

            <section className="services-hero">
                <div className="container">

                    <div className="services-hero-grid">

                        <div
                            className="hero-content"
                            data-aos="fade-right"
                        >
                            <span className="section-tag">
                                ENGINEERING SERVICES
                            </span>

                            <h1>
                                Engineering{" "}
                                <span className="hero-highlight">
                                    Solutions
                                </span>
                                <br />
                                Built for Industry.
                            </h1>

                            <p>
                                From engineering and precision fabrication
                                to installation, commissioning and lifecycle
                                support, CircuitsES provides complete
                                electrical and automation solutions for
                                demanding industrial applications.
                            </p>

                            <div className="hero-buttons">
                                <Button
                                    to="/quote"
                                    variant="primary"
                                >
                                    Start Your Project
                                </Button>

                                <Button
                                    to="/products"
                                    variant="secondary"
                                >
                                    Explore Our Products
                                </Button>
                            </div>

                            <div
                                className="hero-tags"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <span>Electrical Engineering</span>
                                <span>Automation</span>
                                <span>Precision Fabrication</span>
                                <span>Lifecycle Support</span>
                            </div>
                        </div>

                        {/* HERO DASHBOARD */}

                        <div
                            className="hero-dashboard"
                            data-aos="fade-left"
                        >
                            <div className="dashboard-card">
                                <span>
                                    COMPLETE ENGINEERING PARTNER
                                </span>

                                <h3>
                                    From Concept
                                    <br />
                                    to Commissioning
                                </h3>

                                <p>
                                    One integrated engineering workflow
                                    covering design, manufacturing,
                                    testing, installation and technical
                                    support.
                                </p>
                            </div>

                            <div className="dashboard-grid">

                                <div className="dashboard-item">
                                    <IconBox
                                        icon={ClipboardCheck}
                                        size={25}
                                    />
                                    <span>Consultation</span>
                                </div>

                                <div className="dashboard-item">
                                    <IconBox
                                        icon={DraftingCompass}
                                        size={25}
                                    />
                                    <span>Engineering</span>
                                </div>

                                <div className="dashboard-item">
                                    <IconBox
                                        icon={Factory}
                                        size={25}
                                    />
                                    <span>Manufacturing</span>
                                </div>

                                <div className="dashboard-item">
                                    <IconBox
                                        icon={ShieldCheck}
                                        size={25}
                                    />
                                    <span>Testing</span>
                                </div>

                                <div className="dashboard-item">
                                    <IconBox
                                        icon={Truck}
                                        size={25}
                                    />
                                    <span>Delivery</span>
                                </div>

                                <div className="dashboard-item">
                                    <IconBox
                                        icon={Wrench}
                                        size={25}
                                    />
                                    <span>Support</span>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ==================================================
                ENGINEERING OVERVIEW
            ================================================== */}

            <section className="services-overview">
                <div className="container">

                    <SectionHeading
                        tag="WHAT WE DO"
                        title="One Engineering Partner. Complete Industrial Solutions."
                        description="Our services bring engineering, manufacturing, automation and field execution together under one coordinated workflow."
                    />

                    <div className="services-overview-grid">

                        <FeatureCard
                            icon={DraftingCompass}
                            title="Engineering & Design"
                            description="Application analysis, electrical engineering, CAD development, control schematics and manufacturing documentation."
                            delay={0}
                        />

                        <FeatureCard
                            icon={Factory}
                            title="Precision Manufacturing"
                            description="Panel fabrication, CNC laser cutting, precision bending, busbar fabrication, assembly and control wiring."
                            delay={100}
                        />

                        <FeatureCard
                            icon={Settings}
                            title="Automation & Integration"
                            description="PLC, HMI, SCADA, drives, industrial networking and control system integration."
                            delay={200}
                        />

                        <FeatureCard
                            icon={ShieldCheck}
                            title="Testing & Commissioning"
                            description="Factory testing, installation, commissioning and functional verification before final handover."
                            delay={300}
                        />

                        <FeatureCard
                            icon={Wrench}
                            title="Lifecycle Support"
                            description="Preventive maintenance, breakdown assistance, technical support and system optimization."
                            delay={400}
                        />

                        <FeatureCard
                            icon={Zap}
                            title="Modernization & Retrofit"
                            description="Strategic upgrades for ageing electrical and automation systems without unnecessary complete replacement."
                            delay={500}
                        />

                    </div>
                </div>
            </section>


            {/* ==================================================
                ENGINEERING WORKFLOW
            ================================================== */}

            <section className="engineering-workflow">
                <div className="container">

                    <SectionHeading
                        tag="ENGINEERING WORKFLOW"
                        title="Every Successful Project Starts with Smart Engineering"
                        description="We understand the application, develop the technical documentation and prepare manufacturing-ready designs before production begins."
                    />

                    <ProcessTimeline
                        items={[
                            {
                                icon: ClipboardCheck,
                                title: "Requirement Analysis",
                                description:
                                    "Understanding the application, electrical load, process requirements, future expansion and customer expectations.",
                            },
                            {
                                icon: Boxes,
                                title: "Site Survey",
                                description:
                                    "Evaluating installation conditions, existing systems, cable routing and available infrastructure.",
                            },
                            {
                                icon: DraftingCompass,
                                title: "Engineering Design",
                                description:
                                    "Preparing complete electrical engineering documentation and manufacturing-ready designs.",
                            },
                            {
                                icon: ShieldCheck,
                                title: "Customer Approval",
                                description:
                                    "Technical review, design discussions and approval before manufacturing begins.",
                            },
                        ]}
                    />

                </div>
            </section>


            {/* ==================================================
                ENGINEERING DESIGN PACKAGE
            ================================================== */}

            <section className="engineering-package-section">
                <div className="container">

                    <div className="engineering-package-layout">

                        <div
                            className="package-intro"
                            data-aos="fade-right"
                        >
                            <span className="section-tag">
                                DESIGN PACKAGE
                            </span>

                            <h2>
                                Complete Documentation
                                <br />
                                Ready for Manufacturing
                            </h2>

                            <p>
                                Every project is supported by engineering
                                documentation that simplifies manufacturing,
                                installation, testing and future maintenance.
                            </p>

                            <div className="package-note">
                                <ShieldCheck size={20} />

                                <span>
                                    Engineering documentation developed
                                    around your application.
                                </span>
                            </div>
                        </div>

                        <div className="package-grid">

                            <FeatureCard
                                icon={DraftingCompass}
                                title="Single Line Diagram"
                                description="Clear electrical power distribution planning and system representation."
                                delay={0}
                            />

                            <FeatureCard
                                icon={Boxes}
                                title="General Arrangement"
                                description="Panel layout, dimensions, component placement and enclosure configuration."
                                delay={100}
                            />

                            <FeatureCard
                                icon={Cable}
                                title="Control Schematics"
                                description="Detailed control circuits, wiring diagrams and electrical connections."
                                delay={200}
                            />

                            <FeatureCard
                                icon={ClipboardCheck}
                                title="Bill of Materials"
                                description="Complete component and material listing for project execution."
                                delay={300}
                            />

                            <FeatureCard
                                icon={DraftingCompass}
                                title="CAD Drawings"
                                description="Manufacturing-ready drawings prepared for accurate fabrication and assembly."
                                delay={400}
                            />

                            <FeatureCard
                                icon={ShieldCheck}
                                title="Technical Documentation"
                                description="Project documentation supporting installation, testing, operation and maintenance."
                                delay={500}
                            />

                        </div>

                    </div>
                </div>
            </section>


            {/* ==================================================
                MANUFACTURING EXCELLENCE
            ================================================== */}

            <section className="manufacturing-excellence">
                <div className="container">

                    <SectionHeading
                        tag="MANUFACTURING EXCELLENCE"
                        title="Precision Manufacturing Built Around Quality"
                        description="Our manufacturing process combines engineering discipline, modern fabrication techniques and skilled workmanship to deliver reliable electrical and automation systems."
                    />

                    {/* MANUFACTURING PROCESS */}

                    <div className="manufacturing-process">

                        <ProcessTimeline
                            items={[
                                {
                                    icon: DraftingCompass,
                                    title: "Engineering Drawings",
                                    description:
                                        "Approved electrical and mechanical drawings provide the foundation for accurate manufacturing.",
                                },
                                {
                                    icon: Scissors,
                                    title: "Laser Cutting",
                                    description:
                                        "Precision CNC laser cutting produces accurate openings, mounting plates and sheet-metal components.",
                                },
                                {
                                    icon: Wrench,
                                    title: "CNC Bending",
                                    description:
                                        "Precision bending creates consistent panels, brackets and enclosure components.",
                                },
                                {
                                    icon: Factory,
                                    title: "Panel Assembly",
                                    description:
                                        "Electrical components, mounting systems and fabricated parts are assembled according to engineering drawings.",
                                },
                                {
                                    icon: Cable,
                                    title: "Busbar Fabrication",
                                    description:
                                        "Busbar cutting, preparation and fabrication are carried out according to the approved electrical design.",
                                },

                                {
                                    icon: Cable,
                                    title: "Control Wiring",
                                    description:
                                        "Professional wiring, ferruling, identification and termination provide clean and maintainable control systems.",
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Factory Testing",
                                    description:
                                        "Panels undergo inspection and functional verification before dispatch.",
                                },
                                {
                                    icon: Truck,
                                    title: "Dispatch",
                                    description:
                                        "Completed systems are prepared and safely packed for delivery.",
                                },
                            ]}
                        />

                    </div>


                    {/* ==================================================
                        MANUFACTURING CAPABILITIES
                    ================================================== */}

                    <div className="manufacturing-capabilities">

                        <div
                            className="manufacturing-capabilities-intro"
                            data-aos="fade-right"
                        >
                            <span className="section-tag">
                                MANUFACTURING CAPABILITIES
                            </span>

                            <h3>
                                Precision Fabrication.
                                <br />
                                Reliable Panel Assembly.
                            </h3>

                            <p>
                                Our manufacturing capabilities give us direct
                                control over fabrication, assembly and quality.
                                This allows us to build electrical panels and
                                industrial systems around specific project
                                requirements.
                            </p>

                            <div className="package-note">
                                <Factory size={20} />

                                <span>
                                    Panel Assembly is one of our core
                                    manufacturing capabilities.
                                </span>
                            </div>
                        </div>


                        <div className="manufacturing-capabilities-grid">

                            {/* 01 */}

                            <FeatureCard
                                icon={Scissors}
                                title="CNC Laser Cutting"
                                description="Accurate sheet-metal cutting for panel bodies, mounting plates, doors, cable entries and customized fabrication requirements."
                                delay={0}
                            />

                            {/* 02 */}

                            <FeatureCard
                                icon={Wrench}
                                title="CNC Bending"
                                description="Precision bending for enclosure panels, structural components, brackets and customized sheet-metal assemblies."
                                delay={100}
                            />

                            {/* 03 */}

                            <FeatureCard
                                icon={Cable}
                                title="Busbar Fabrication"
                                description="Busbar preparation and fabrication for reliable power distribution and organized panel construction."
                                delay={200}
                            />

                            {/* 04 — CORE CAPABILITY */}

                            <FeatureCard
                                icon={Factory}
                                title="Panel Assembly"
                                description="Complete mechanical and electrical panel assembly carried out according to approved engineering drawings, component specifications and project requirements."
                                delay={300}
                            />

                        </div>

                    </div>


                    {/* QUALITY */}

                    <div
                        className="manufacturing-quality"
                        data-aos="fade-up"
                    >
                        <div className="quality-icon">
                            <IconBox
                                icon={ShieldCheck}
                                size={34}
                            />
                        </div>

                        <div className="quality-content">

                            <span>
                                QUALITY THROUGH EVERY STAGE
                            </span>

                            <h3>
                                Built Right. Checked Before It Leaves.
                            </h3>

                            <p>
                                From fabrication accuracy and component
                                installation to wiring, inspection and
                                functional testing, quality is considered
                                throughout the manufacturing process.
                            </p>

                        </div>
                    </div>

                </div>
            </section>


            {/* ==================================================
                FIELD EXECUTION & COMMISSIONING
            ================================================== */}

            <section className="field-execution">
                <div className="container">

                    <SectionHeading
                        tag="FIELD EXECUTION"
                        title="From Factory Floor to Successful Commissioning"
                        description="Our responsibility extends beyond manufacturing. We coordinate installation, testing and commissioning to help ensure that every system performs as intended."
                    />

                    <div className="execution-process">

                        <ProcessTimeline
                            orientation="vertical"
                            items={[
                                {
                                    icon: ShieldCheck,
                                    title: "Factory Acceptance Testing",
                                    description:
                                        "Functional verification, inspection and testing are completed before the system leaves our facility.",
                                },
                                {
                                    icon: Truck,
                                    title: "Packing & Dispatch",
                                    description:
                                        "Completed panels are prepared, protected and dispatched with attention to safe transportation.",
                                },
                                {
                                    icon: Factory,
                                    title: "Site Installation",
                                    description:
                                        "Panel positioning, mechanical installation, cable termination and site coordination are carried out as required.",
                                },
                                {
                                    icon: Settings,
                                    title: "System Commissioning",
                                    description:
                                        "Energization, parameter configuration, functional checks and system verification are performed during commissioning.",
                                },
                                {
                                    icon: ClipboardCheck,
                                    title: "Customer Handover",
                                    description:
                                        "Final documentation, technical guidance and project handover follow successful commissioning.",
                                },
                            ]}
                        />

                    </div>


                    <div className="execution-highlights">

                        <div
                            className="execution-intro"
                            data-aos="fade-right"
                        >
                            <span className="section-tag">
                                SITE EXECUTION
                            </span>

                            <h3>
                                Engineering Support
                                <br />
                                Where It Matters Most
                            </h3>

                            <p>
                                A well-manufactured system still needs correct
                                installation and commissioning. Our team works
                                with project and site teams to help ensure the
                                completed system transitions smoothly into
                                operation.
                            </p>
                        </div>


                        <div className="execution-highlight-grid">

                            <FeatureCard
                                icon={Boxes}
                                title="Site Coordination"
                                description="Coordination with project teams, electrical contractors and site personnel during installation and commissioning."
                                delay={0}
                            />

                            <FeatureCard
                                icon={ShieldCheck}
                                title="Safety & Verification"
                                description="Installation and commissioning activities are approached with attention to electrical safety and system verification."
                                delay={100}
                            />

                            <FeatureCard
                                icon={Zap}
                                title="Performance Validation"
                                description="Functional checks help confirm that the installed system operates according to approved engineering requirements."
                                delay={200}
                            />

                            <FeatureCard
                                icon={Wrench}
                                title="Technical Assistance"
                                description="Engineering support is available during startup, troubleshooting and commissioning activities."
                                delay={300}
                            />

                        </div>

                    </div>


                    <div
                        className="handover-banner"
                        data-aos="zoom-in"
                    >
                        <div className="handover-icon">
                            <IconBox
                                icon={ShieldCheck}
                                size={34}
                            />
                        </div>

                        <div className="handover-content">

                            <span>
                                PROJECT HANDOVER
                            </span>

                            <h3>
                                Commissioned With Confidence
                            </h3>

                            <p>
                                Our objective is not simply to deliver a
                                panel. It is to deliver a functioning system
                                that is ready for the customer's operating
                                environment.
                            </p>

                        </div>
                    </div>

                </div>
            </section>


            {/* ==================================================
                LIFECYCLE SUPPORT
            ================================================== */}

            <section className="lifecycle-support">
                <div className="container">

                    <SectionHeading
                        tag="LIFECYCLE SUPPORT"
                        title="Engineering Support That Continues Beyond Delivery"
                        description="Our relationship with the customer does not end at commissioning. We provide ongoing technical support and maintenance services to help electrical and automation systems remain reliable throughout their service life."
                    />

                    <div className="support-services-grid">

                        <FeatureCard
                            icon={Settings}
                            title="Preventive Maintenance"
                            description="Scheduled inspections, cleaning, tightening, functional checks and condition-based observations."
                            delay={0}
                        />

                        <FeatureCard
                            icon={ShieldCheck}
                            title="System Health Checks"
                            description="Periodic assessment of electrical panels, control systems and connected equipment."
                            delay={100}
                        />

                        <FeatureCard
                            icon={Wrench}
                            title="Breakdown Assistance"
                            description="Technical assistance for troubleshooting electrical and automation issues."
                            delay={200}
                        />

                        <FeatureCard
                            icon={Cpu}
                            title="Automation Support"
                            description="Support for PLC, HMI, drives, control logic and automation-related issues."
                            delay={300}
                        />

                        <FeatureCard
                            icon={ClipboardCheck}
                            title="Operator Training"
                            description="Technical guidance and operator training covering system operation and basic troubleshooting."
                            delay={400}
                        />

                        <FeatureCard
                            icon={Boxes}
                            title="Spare Parts Guidance"
                            description="Assistance in identifying critical components and planning suitable spares."
                            delay={500}
                        />

                    </div>


                    <div className="support-coverage">

                        <div
                            className="support-coverage-content"
                            data-aos="fade-right"
                        >
                            <span className="section-tag">
                                SUPPORT COVERAGE
                            </span>

                            <h3>
                                Protecting the Performance
                                <br />
                                of Your Investment
                            </h3>

                            <p>
                                Industrial electrical systems are expected
                                to operate reliably for years. Our lifecycle
                                support helps customers maintain performance,
                                identify issues early and make informed
                                technical decisions as their facilities
                                evolve.
                            </p>
                        </div>


                        <div
                            className="support-checklist"
                            data-aos="fade-left"
                        >
                            <div className="support-check">
                                <ShieldCheck size={21} />
                                <span>Preventive Maintenance</span>
                            </div>

                            <div className="support-check">
                                <ShieldCheck size={21} />
                                <span>Periodic System Health Checks</span>
                            </div>

                            <div className="support-check">
                                <ShieldCheck size={21} />
                                <span>Breakdown Assistance</span>
                            </div>

                            <div className="support-check">
                                <ShieldCheck size={21} />
                                <span>PLC & Automation Support</span>
                            </div>

                            <div className="support-check">
                                <ShieldCheck size={21} />
                                <span>Operator Training</span>
                            </div>

                            <div className="support-check">
                                <ShieldCheck size={21} />
                                <span>Spare Parts Guidance</span>
                            </div>

                            <div className="support-check">
                                <ShieldCheck size={21} />
                                <span>Future Upgrade Recommendations</span>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/* ==================================================
                RETROFIT & MODERNIZATION
            ================================================== */}

            <section className="retrofit-modernization">
                <div className="container">

                    <SectionHeading
                        tag="RETROFIT & MODERNIZATION"
                        title="Modernize Existing Systems Without Starting From Zero"
                        description="Ageing electrical and automation systems do not always require complete replacement. Our retrofit solutions help improve reliability, efficiency and control while making practical use of existing infrastructure."
                    />

                    <div className="retrofit-intro">

                        <div
                            className="retrofit-intro-content"
                            data-aos="fade-right"
                        >
                            <span className="section-tag">
                                SMART UPGRADES
                            </span>

                            <h3>
                                Extend Equipment Life
                                <br />
                                Through Targeted Engineering
                            </h3>

                            <p>
                                Existing panels and automation systems can
                                often be upgraded in stages. We evaluate the
                                current system, identify limitations and
                                develop practical modifications based on
                                the application and future requirements.
                            </p>
                        </div>


                        <div
                            className="retrofit-benefit-panel"
                            data-aos="fade-left"
                        >
                            <span>
                                WHY CONSIDER A RETROFIT?
                            </span>

                            <div className="retrofit-benefit-list">

                                <div>
                                    <IconBox
                                        icon={ShieldCheck}
                                        size={24}
                                    />
                                    <span>
                                        Improve System Reliability
                                    </span>
                                </div>

                                <div>
                                    <IconBox
                                        icon={Zap}
                                        size={24}
                                    />
                                    <span>
                                        Improve Energy Efficiency
                                    </span>
                                </div>

                                <div>
                                    <IconBox
                                        icon={Wrench}
                                        size={24}
                                    />
                                    <span>
                                        Reduce Maintenance Issues
                                    </span>
                                </div>

                                <div>
                                    <IconBox
                                        icon={Settings}
                                        size={24}
                                    />
                                    <span>
                                        Prepare for Future Expansion
                                    </span>
                                </div>

                            </div>
                        </div>

                    </div>


                    <div className="retrofit-services">

                        <FeatureCard
                            icon={Settings}
                            title="Control Panel Modernization"
                            description="Upgrade ageing switchgear, protection devices, control components and internal systems while retaining suitable existing infrastructure."
                            delay={0}
                        />

                        <FeatureCard
                            icon={Cpu}
                            title="PLC Migration"
                            description="Replace legacy PLC platforms with modern control systems while planning migration around existing field devices."
                            delay={100}
                        />

                        <FeatureCard
                            icon={Zap}
                            title="Drive & Motor Upgrades"
                            description="Upgrade motor-control systems with modern drive technologies to improve process control and energy performance."
                            delay={200}
                        />

                        <FeatureCard
                            icon={DraftingCompass}
                            title="Control System Upgrades"
                            description="Modernize control architecture, HMI systems and associated automation components."
                            delay={300}
                        />

                        <FeatureCard
                            icon={Scissors}
                            title="Enclosure Modification"
                            description="Modify existing enclosures using precision fabrication, CNC laser cutting and bending."
                            delay={400}
                        />

                        <FeatureCard
                            icon={Cable}
                            title="Wiring & Component Replacement"
                            description="Replace ageing wiring, terminals and selected electrical components while improving maintainability."
                            delay={500}
                        />

                    </div>


                    <div className="retrofit-approach">

                        <div
                            className="retrofit-approach-heading"
                            data-aos="fade-up"
                        >
                            <span className="section-tag">
                                OUR APPROACH
                            </span>

                            <h3>
                                Upgrade What Matters.
                                <br />
                                Preserve What Works.
                            </h3>
                        </div>

                        <ProcessTimeline
                            items={[
                                {
                                    icon: ClipboardCheck,
                                    title: "Assess",
                                    description:
                                        "Review the existing electrical and automation system, its condition and operational requirements.",
                                },
                                {
                                    icon: DraftingCompass,
                                    title: "Engineer",
                                    description:
                                        "Develop a practical retrofit strategy and prepare the required documentation.",
                                },
                                {
                                    icon: Wrench,
                                    title: "Modify",
                                    description:
                                        "Carry out fabrication, component replacement, wiring changes and system modifications.",
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Test",
                                    description:
                                        "Verify the upgraded system through inspection, functional checks and commissioning.",
                                },
                            ]}
                        />

                    </div>

                </div>
            </section>


            {/* ==================================================
                SPECIALIZED ENGINEERING SERVICES
            ================================================== */}

            <section className="specialized-services">
                <div className="container">

                    <SectionHeading
                        tag="SPECIALIZED SERVICES"
                        title="Specialized Engineering Solutions Beyond the Panel"
                        description="Our capabilities extend beyond electrical panel manufacturing, with precision enclosure fabrication and rooftop solar solutions."
                    />


                    {/* ENCLOSURE */}

                    <div className="specialized-service enclosure-service">

                        <div
                            className="specialized-service-content"
                            data-aos="fade-right"
                        >
                            <span className="section-tag">
                                ENCLOSURE SOLUTIONS
                            </span>

                            <h3>
                                Precision Enclosures
                                <br />
                                Built Around Your Application
                            </h3>

                            <p>
                                We provide industrial, electrical and
                                customized enclosures designed for secure
                                indoor installations and demanding outdoor
                                environments.
                            </p>

                            <div className="specialized-list">

                                <div>
                                    <Boxes size={20} />
                                    <span>Industrial Enclosures</span>
                                </div>

                                <div>
                                    <Boxes size={20} />
                                    <span>Electrical Enclosures</span>
                                </div>

                                <div>
                                    <Boxes size={20} />
                                    <span>Outdoor Enclosures</span>
                                </div>

                                <div>
                                    <Boxes size={20} />
                                    <span>Modular Enclosures</span>
                                </div>

                                <div>
                                    <Boxes size={20} />
                                    <span>Custom-Built Enclosures</span>
                                </div>

                                <div>
                                    <ShieldCheck size={20} />
                                    <span>SS304 / SS316 Options</span>
                                </div>

                            </div>
                        </div>


                        <div
                            className="specialized-service-panel"
                            data-aos="fade-left"
                        >
                            <span>
                                ENCLOSURE ENGINEERING
                            </span>

                            <h4>
                                From Design
                                <br />
                                to Finished Enclosure
                            </h4>

                            <div className="specialized-capabilities">

                                <div>
                                    <IconBox
                                        icon={DraftingCompass}
                                        size={24}
                                    />
                                    <span>
                                        Product Design & Development
                                    </span>
                                </div>

                                <div>
                                    <IconBox
                                        icon={Scissors}
                                        size={24}
                                    />
                                    <span>
                                        CNC Laser Cutting
                                    </span>
                                </div>

                                <div>
                                    <IconBox
                                        icon={Wrench}
                                        size={24}
                                    />
                                    <span>
                                        Precision Bending
                                    </span>
                                </div>

                                <div>
                                    <IconBox
                                        icon={Factory}
                                        size={24}
                                    />
                                    <span>
                                        Manufacturing & Assembly
                                    </span>
                                </div>

                                <div>
                                    <IconBox
                                        icon={ShieldCheck}
                                        size={24}
                                    />
                                    <span>
                                        Prototyping & Testing
                                    </span>
                                </div>

                                <div>
                                    <IconBox
                                        icon={Boxes}
                                        size={24}
                                    />
                                    <span>
                                        Custom Fabrication
                                    </span>
                                </div>

                            </div>
                        </div>

                    </div>


                    {/* SOLAR */}

                    <div className="specialized-service solar-service">

                        <div
                            className="specialized-service-panel solar-panel"
                            data-aos="fade-right"
                        >
                            <span>
                                SOLAR SOLUTIONS
                            </span>

                            <h4>
                                Solar Systems
                                <br />
                                Designed Around Your Energy Needs
                            </h4>

                            <div className="solar-sectors">

                                <div>
                                    <IconBox
                                        icon={Boxes}
                                        size={24}
                                    />

                                    <div>
                                        <strong>Residential</strong>

                                        <p>
                                            Reliable rooftop solar solutions
                                            designed to reduce household
                                            electricity costs.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <IconBox
                                        icon={Factory}
                                        size={24}
                                    />

                                    <div>
                                        <strong>
                                            Commercial & Industrial
                                        </strong>

                                        <p>
                                            Customized rooftop systems
                                            designed around energy
                                            requirements and available
                                            roof space.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <IconBox
                                        icon={ShieldCheck}
                                        size={24}
                                    />

                                    <div>
                                        <strong>Institutional</strong>

                                        <p>
                                            Cost-effective solar solutions
                                            for educational, research and
                                            institutional facilities.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div
                            className="specialized-service-content"
                            data-aos="fade-left"
                        >
                            <span className="section-tag">
                                SOLAR ENGINEERING
                            </span>

                            <h3>
                                End-to-End Rooftop
                                <br />
                                Solar Solutions
                            </h3>

                            <p>
                                We provide complete rooftop solar solutions
                                from initial assessment and system design
                                through installation, commissioning and
                                long-term maintenance.
                            </p>

                            <div className="solar-process">

                                <div>
                                    <span>01</span>

                                    <div>
                                        <strong>Site Assessment</strong>
                                        <p>
                                            Evaluate the site, roof conditions
                                            and energy requirements.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <span>02</span>

                                    <div>
                                        <strong>System Design</strong>
                                        <p>
                                            Develop a solution based on
                                            application and energy demand.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <span>03</span>

                                    <div>
                                        <strong>Installation</strong>
                                        <p>
                                            Complete installation and system
                                            integration.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <span>04</span>

                                    <div>
                                        <strong>Commissioning</strong>
                                        <p>
                                            Testing and verification before
                                            system handover.
                                        </p>
                                    </div>
                                </div>

                            </div>


                            <div className="solar-amc">

                                <IconBox
                                    icon={Wrench}
                                    size={26}
                                />

                                <div>
                                    <span>SOLAR AMC</span>

                                    <h4>
                                        Long-Term Performance Support
                                    </h4>

                                    <p>
                                        Regular inspections, preventive
                                        maintenance and system monitoring
                                        help maintain energy output and
                                        long-term performance.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* ==================================================
                FINAL CALL TO ACTION
            ================================================== */}

            <CTASection
                tag="LET'S BUILD TOGETHER"
                title="Ready to Engineer Your Next Project?"
                description="Whether you are planning a new electrical installation, modernizing an existing facility or looking for a reliable engineering partner, our team is ready to understand your requirements and develop the right solution."
                primaryText="Request Consultation"
                primaryTo="/quote"
                secondaryText="Get a Quote"
                secondaryTo="/quote"
            />

        </main>
    );
};

export default Services;