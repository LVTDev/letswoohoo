import React from "react";

const CalendlyForm = () => {
  return (
    <div>
      <div
        className="calendly-inline-widget min-w-[320px] h-[700px]"
        data-url="https://calendly.com/desarrollador-letswoohoo/30min"
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </div>
  );
};

export default CalendlyForm;
