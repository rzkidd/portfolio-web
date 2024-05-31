'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { Timeline } from "flowbite-react"

export default function Experience({date, role, company, link, content}){
    const Icon = () => {
        return <FontAwesomeIcon icon={faCalendar} className="text-color-dark-green "/>
    }

    
    return (
        <Timeline>
            <Timeline.Item>
                <Timeline.Point icon={Icon} className="bg-color-green"/>
                <Timeline.Content className="ms-5 hover:scale-105 transition-all">
                    <Timeline.Time className="text-color-light-green text-xl">{date}</Timeline.Time>
                    <Timeline.Title className="text-color-light-green text-xl">{role}</Timeline.Title>
                    <Timeline.Title className="text-color-light-green text-md font-medium">
                        <a href={link} target='_blank'>
                            {company} &nbsp;
                            {(link == '') ? 
                            '' 
                            : 
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-color-green text-sm"/>}
                        </a>
                    </Timeline.Title>
                    <Timeline.Body className="text-color-green mt-5">
                        <ul className="list-disc ms-5">
                            {content.map((content) => 
                                <li>{content}</li>
                            )}
                        </ul>
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
        </Timeline>
    )
}