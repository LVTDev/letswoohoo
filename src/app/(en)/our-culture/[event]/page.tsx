import OurCulture from "@/components/General UI/OurCulture";
import React from "react";
import events from "../eventos";

const page = async ({ params }: { params: Promise<{ event: keyof typeof events }> }) => {
  const { event } = await params;


  return (
    <div>
      <OurCulture event={event} />
    </div>
  );
};

export default page;
