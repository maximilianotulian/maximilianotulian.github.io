import React, { ReactNode } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaReact } from 'react-icons/fa';
import workExperience from './data';
import './experience.scss';

interface IWorkItem {
  date: string;
  description: string[] | string;
  technologies: string[];
  title: string;
}

export default function Experience() {
  return (
    <VerticalTimeline>
      {workExperience.map(({
        title, description, date, technologies,
      }: IWorkItem, index: number): ReactNode => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: '4px solid #61dafb' }}
          iconStyle={{ background: '#61dafb', color: '#fff' }}
          date={date}
          icon={<FaReact />}
          key={index}
        >
          <h3 className="vertical-timeline-element-title">{title}</h3>
          {typeof description === 'string' ? (
            <p className="experience--paragraph">
              {description}
            </p>
          ) : (
            <ul className="experience__list">
              {description.map((descriptionItem: string, i) => (
                <li key={i} className="experience__list-item">{descriptionItem}</li>),
              )}
            </ul>
          )}
          {technologies.length > 0 && (
          <div>
            <div className="experience__technologies-title">
              <strong>Technologies</strong>
            </div>
            <div className="experience__technologies-wrapper">
              {technologies.length > 0 && (
              <>
                {technologies.map((technology: string, i) => (
                  <div className="experience__technologies-item" key={i}>
                    {technology}
                  </div>
                ))}
              </>
              )}
            </div>
          </div>
          )}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
