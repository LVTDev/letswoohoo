import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" font-albert  mx-auto">
            <div className=" relative h-[500px]">
                <Image
                  fill
                  src={"/Thanks.png"}
                  alt={`Thanks bg`}
                />
              </div>
    </div>
  );
};

export default page;
