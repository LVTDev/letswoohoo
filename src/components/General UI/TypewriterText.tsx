"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function TypewriterText({
  words,
  textFront,
  cursor,
  full,
}: {
  words: string[];
  textFront: string;
  cursor: string;
  full: boolean;
}) {
  const [typeEffect] = useTypewriter({
    words: [...words],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="text-[40px]">
      <p className=" uppercase font-bold">
        {textFront}{" "}
        <span
          className={` w-[5rem] min-[450px]:min-w-[3.5rem]  mx-auto uppercase font-bold min-[450px]:mt-0 min-[450px]:mx-0  min-[450px]:inline-block ${full && "w-full"}`}
        >
          {typeEffect}
          <Cursor cursorStyle={cursor} />
        </span>
      </p>
    </div>
  );
}

export default TypewriterText;
