import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaReact } from 'react-icons/fa';

import workExperience from './data';

export default function Experience() {
  return (
    <VerticalTimeline>
      {workExperience.map(({title, subtitle, description, date}, index) => {
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={index === 0 ? { background: 'rgb(33, 150, 243)', color: '#fff' } : {}}
            contentArrowStyle={index === 0 ? { borderRight: '7px solid  rgb(33, 150, 243)' } : {}}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date={date}
            icon={<FaReact />}
          >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
            {typeof description === 'string' ? (
              <p>
                {description}
              </p>
            ) : (
              <ul>
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