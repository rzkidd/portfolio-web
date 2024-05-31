'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact({icon, name, link, color}){
    return (
        <a href={link} target='_blank'>
            <div className={`border-0 ${color}  text-color-light-green flex items-center justify-center py-3 rounded-lg shadow-xl hover:scale-105 transition-all`}>
                <FontAwesomeIcon icon={icon} className="text-color-light-green text-3xl"/>
                <div className="ms-5 text-xl font-semibold">{name}</div> 
            </div>
        </a>
    )
}