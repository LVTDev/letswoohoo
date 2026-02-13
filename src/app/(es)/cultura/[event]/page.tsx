import OurCulture from "@/components/General UI/OurCulture";
import React from "react";
import events from "@/app/(en)/our-culture/eventos"; 

const page = async ({ params }: { params: Promise<{ event: keyof typeof events }> }) => {
  const { event } = await params;


  return (
    <div>
      <OurCulture lang={"es"} event={event} />
    </div>
  );
};

export default page;
