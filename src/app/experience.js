"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Timeline } from "flowbite-react";

export default function Experience({ date, role, company, link, content }) {
  const Icon = () => {
    return <FontAwesomeIcon icon={faCalendar} className="text-card" />;
  };

  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={Icon} />
        <Timeline.Content className="ms-5">
          <Timeline.Time className="text-xl text-secondary">
            {date}
          </Timeline.Time>
          <Timeline.Title className="text-xl text-textMain">
            {role}
          </Timeline.Title>
          <Timeline.Title className="font-medium text-textMain text-md">
            <a href={link} target="_blank">
              {company} &nbsp;
              {link == "" ? (
                ""
              ) : (
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-sm text-textMain"
                />
              )}
            </a>
          </Timeline.Title>
          <Timeline.Body className="mt-5 text-textMuted">
            <ul className="list-disc ms-5">
              {content.map((content) => (
                <li key={`1_${content.length}`}>{content}</li>
              ))}
            </ul>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
