"use client";

import { InView } from "react-intersection-observer";

export default function AnimatedNewsCard({
  children,
  classNameInView,
  classNameNotInView,
}: {
  children: React.ReactNode;
  classNameInView: string;
  classNameNotInView: string;
}) {
  return (
    <InView triggerOnce threshold={1}>
      {({ inView, ref, entry }) => (
        <div
          ref={ref}
          className={inView ? "scale-150 duration-300" : classNameNotInView}
        >
          {children}
        </div>
      )}
    </InView>
  );a
}
