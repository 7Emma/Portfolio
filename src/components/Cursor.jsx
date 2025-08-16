import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      style={{
        left: position.x,
        top: position.y,
      }}
      className="fixed w-4 h-4 bg-purple-500 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-[9999]"
    />
  );
};

export default CustomCursor;
