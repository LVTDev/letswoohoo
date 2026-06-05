"use client";

import { useState } from "react";

function ServiciosDropdownItem({
  label,
  children,
  defaultOpen = false,
}: {
  label?: string;
  defaultOpen: boolean;
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      style={{
        border: `0.5px solid ${open ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.15)"}`,
        borderRadius: 12,
        marginBottom: 10,
        overflow: "hidden",
        background: "#fff",
        transition: "border-color 0.2s",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 18px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: 12,
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontWeight: 500,
            fontSize: 15,
          }}
        >
          {label}
        </span>
        <span
          style={{
            display: "inline-block",
            transition: "transform 0.25s cubic-bezier(0.4,0,0.2,1)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            fontSize: 18,
            color: "#888",
          }}
        >
          ▾
        </span>
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.28s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              padding: "14px 18px 16px",
              borderTop: "0.5px solid rgba(0,0,0,0.1)",
              fontSize: 14,
              color: "#555",
              lineHeight: 1.7,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiciosDropdownItem;
