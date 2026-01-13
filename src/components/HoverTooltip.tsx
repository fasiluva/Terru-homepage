import React, { useState } from "react";

const HoverTooltip = ({ href, children, tooltipText }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const handleMove = (e) => {
    setPos({ x: e.clientX + 15, y: e.clientY + 15 });
  };

  return (
    <>
      <a
        href={href}
        target="_blank"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onMouseMove={handleMove}
        className="relative hover:text-blue-800 underline transition cursor-pointer"
      >
        {children}
      </a>

      {show && (
        <div
          className="fixed z-50 bg-black text-white text-sm px-2 py-1 rounded shadow-lg opacity-90 pointer-events-none"
          style={{ top: pos.y, left: pos.x }}
        >
          {tooltipText}
        </div>
      )}
    </>
  );
};

export default HoverTooltip;
