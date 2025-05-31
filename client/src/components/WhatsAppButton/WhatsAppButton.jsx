import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./whatsapp_button.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923174512095?text=Hello%2C%20I%20want%20to%20chat%20with%20you."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <div className="icon-ring">
        <FaWhatsapp size={28} />
      </div>
    </a>
  );
};

export default WhatsAppButton;
