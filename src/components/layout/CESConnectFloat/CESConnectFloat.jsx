



import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import connectLogo from "../../../assets/logos/connect-logo.png";
import "./CESConnectFloat.css";


export default function CESConnectFloat() {

  const location = useLocation();

  const buttonRef = useRef(null);

  const [position, setPosition] =
    useState(null);

  const [isDragging, setIsDragging] =
    useState(false);

  const dragStart = useRef({
    x: 0,
    y: 0,
    left: 0,
    top: 0,
  });

  const hasMoved = useRef(false);


  /* =========================================================
     CES CONNECT ROUTES
     Hide floating button everywhere inside customer portal
  ========================================================= */

  const isCESConnectPage =
    location.pathname === "/portal" ||
    location.pathname === "/ces-connect" ||
    location.pathname === "/customer-projects" ||
    location.pathname === "/dispatch-status" ||
    location.pathname.startsWith("/project/");


  /*
   * Do NOT render the floating button inside CES Connect.
   */

  if (isCESConnectPage) {
    return null;
  }


  /* =========================================================
     LOGIN STATE
  ========================================================= */

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";


  const destination =
    isLoggedIn
      ? "/ces-connect"
      : "/portal";


  /* =========================================================
     START DRAG
  ========================================================= */

  const handlePointerDown = (event) => {

    const element =
      buttonRef.current;

    if (!element) return;

    event.preventDefault();

    const rect =
      element.getBoundingClientRect();


    dragStart.current = {

      x: event.clientX,

      y: event.clientY,

      left: rect.left,

      top: rect.top,

    };


    hasMoved.current = false;

    setIsDragging(true);


    element.setPointerCapture?.(
      event.pointerId
    );

  };


  /* =========================================================
     DRAG
  ========================================================= */

  const handlePointerMove = (event) => {

    if (!isDragging) return;

    event.preventDefault();


    const deltaX =
      event.clientX -
      dragStart.current.x;


    const deltaY =
      event.clientY -
      dragStart.current.y;


    if (
      Math.abs(deltaX) > 4 ||
      Math.abs(deltaY) > 4
    ) {

      hasMoved.current = true;

    }


    const element =
      buttonRef.current;

    if (!element) return;


    const margin = 10;


    const maxLeft =
      window.innerWidth -
      element.offsetWidth -
      margin;


    const maxTop =
      window.innerHeight -
      element.offsetHeight -
      margin;


    const newLeft =
      Math.min(
        Math.max(
          margin,
          dragStart.current.left +
          deltaX
        ),
        maxLeft
      );


    const newTop =
      Math.min(
        Math.max(
          margin,
          dragStart.current.top +
          deltaY
        ),
        maxTop
      );


    setPosition({
      x: newLeft,
      y: newTop,
    });

  };


  /* =========================================================
     END DRAG
  ========================================================= */

  const handlePointerUp = (event) => {

    setIsDragging(false);


    buttonRef.current
      ?.releasePointerCapture?.(
        event.pointerId
      );

  };


  /* =========================================================
     CANCEL DRAG
  ========================================================= */

  const handlePointerCancel = (event) => {

    setIsDragging(false);


    buttonRef.current
      ?.releasePointerCapture?.(
        event.pointerId
      );

  };


  /* =========================================================
     CLICK
  ========================================================= */

  const handleClick = (event) => {

    if (hasMoved.current) {

      event.preventDefault();

      event.stopPropagation();

      hasMoved.current = false;

    }

  };


  /* =========================================================
     POSITION
  ========================================================= */

  const positionStyle =
    position
      ? {
        left: `${position.x}px`,
        top: `${position.y}px`,
        right: "auto",
        bottom: "auto",
      }
      : {};


  /* =========================================================
     RENDER
  ========================================================= */

  return (

    <Link
      ref={buttonRef}

      to={destination}

      className={`
                ces-connect-float
                ${isDragging
          ? "ces-connect-dragging"
          : ""}
            `}

      style={positionStyle}

      draggable="false"

      onPointerDown={
        handlePointerDown
      }

      onPointerMove={
        handlePointerMove
      }

      onPointerUp={
        handlePointerUp
      }

      onPointerCancel={
        handlePointerCancel
      }

      onClick={
        handleClick
      }

      aria-label="
                Open CES Connect customer portal
            "
    >

      {/* <div className="portal-icon">

        <span>
         😀
        </span>

      </div> */}

      <div className="portal-icon">
        <img
          src={connectLogo}
          alt="CES Connect"
          className="ces-connect-logo"
        />
      </div>


      <div className="ces-connect-text">

        <span className="portal-label">
          CUSTOMER PORTAL
        </span>

        <span className="portal-name">
          CES Connect
        </span>

      </div>

    </Link>

  );

}