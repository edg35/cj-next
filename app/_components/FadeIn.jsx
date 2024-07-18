"use client";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const FadeIn = ({ children, threshold = 0.5 }) => {
  const ref = useRef();
  const [inViewRef, inView] = useInView({ threshold });

  // Use `useEffect` to handle the fade-in effect
  useEffect(() => {
    if (inView && ref.current) {
      ref.current.classList.add("opacity-100");
    }
  }, [inView]);

  // Combine both refs: one for the intersection observer and one for accessing the DOM node
  const setRefs = (node) => {
    ref.current = node;
    inViewRef(node);
  };

  return (
    <div
      ref={setRefs}
      className="opacity-0 transition-opacity duration-500 ease-in-out"
    >
      {children}
    </div>
  );
};

export default FadeIn;
