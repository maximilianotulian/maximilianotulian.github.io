import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaReact } from 'react-icons/fa';

import workExperience from './data';
import './experience.scss';

export default function Experience() {
  return (
    <VerticalTimeline>
      {workExperience.map(({title, description, date}, index) => {
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderTop: '4px solid #61dafb'}}
            iconStyle={{ background: '#61dafb', color: '#fff' }}
            date={date}
            icon={<FaReact />}
          >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            {typeof description === 'string' ? (
              <p className="experience--paragraph">
                {description}
              </p>
            ) : (
              <ul className="experience__list">
                {description.map(descriptionItem =>
                  <li>{descriptionItem}</li>
                )}
              </ul>
            )}

          </VerticalTimelineElement>
        )
      })}

    </VerticalTimeline>
  );
}