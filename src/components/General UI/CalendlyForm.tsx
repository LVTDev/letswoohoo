import React from "react";

const CalendlyForm = () => {
  return (
    <div>
      <div
        className="calendly-inline-widget"
       data-url="https://calendly.com/juanpablo-letswoohoo/30min"
        style={{minWidth:"320px", height:"700px"}}
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
