import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaReact } from 'react-icons/fa';

const mockedData = [
  {
    title: 'Software Engineer at CMOList',
    subtitle: 'United States',
    description: 'Working mainly in front-end related tasks.',
    date: '2021 - present'
  },
  {
    title: 'Software Engineer at Ergeon',
    subtitle: 'San Francisco',
    description: 'Working at the main page of Ergeon mainly in front end related task. Home page: www.ergeon.com.',
    date: 'January to August 2020'
  },
  {
    title: 'Web UI Developer at Globant',
    subtitle: 'United States',
    description: 'Working for InStride.com in front-end related tasks',
    date: 'January to August 2020'
  },
  {
    title: 'Web UI Developer at Globant',
    subtitle: 'Argentina',
    description: 'Learning and applying design patterns to build reusable components',
    date: 'January to August 2020'
  },
  {
    title: 'Focal Web UI Developer at Globant',
    subtitle: 'Argentina',
    description: 'Working in OLX platform by leading the front end related tasks. Home page: www.olx.com',
    date: 'January to August 2020',
  },
  {
    title: 'Web UI Developer at Globant',
    subtitle: 'Argentina',
    description: 'Working in OLX platform with mainly front end tasks. Home page: www.olx.com',
    date: 'January to August 2020',
  },
  {
    title: 'Web UI Developer at Globant',
    subtitle: 'Dallas - United States',
    description: 'Working in components team by creating small reusable pieces of code that serve to the application. Home page: www.southwest.com',
    date: 'January to August 2020',
  }
];
export default function Experience() {
  return (
    <VerticalTimeline>
      {mockedData.map(({title, subtitle, description, date}, index) => {
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
            <p>
              {description}
            </p>
          </VerticalTimelineElement>
        )
      })}

    </VerticalTimeline>
  );
}