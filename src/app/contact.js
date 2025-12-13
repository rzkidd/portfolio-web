"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact({ icon, name, link, color }) {
  return (
    <a href={link} target="_blank">
      <div
        className = {`border-0 ${color}  text-textMain flex items-center justify-center py-3 rounded-lg shadow-xl hover:scale-105 transition-all`}
      >
        <FontAwesomeIcon icon={icon} className="text-3xl text-textMain" />
        <div className="text-xl font-semibold ms-5">{name}</div>
      </div>
    </a>
  );
}
