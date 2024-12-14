import { useMemo, useRef } from "react";
import useIntersectionObserver from "../hooks/use-intersection-observer";

const IntersectionElement = () => {
  const elementRef = useRef(null);

  const options = useMemo(
    () => ({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }),
    []
  );

  const intersectionEntry = useIntersectionObserver(elementRef, options);

  console.log("isIntersecting", intersectionEntry?.isIntersecting);
  console.log("intersecttionRatio", intersectionEntry?.intersectionRatio);

  return (
    <div
      style={{
        height: "200vh",
      }}
    >
      <div
        ref={elementRef}
        style={{
          height: "50vh",
          background: "lightblue",
        }}
      >
        {"Intersection use-case"}
      </div>
    </div>
  );
};

export default IntersectionElement;
