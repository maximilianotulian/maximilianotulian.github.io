enum Agile {
  KANBAN = 'Kanban',
  SCRUM = 'Scrum',
}

enum Technology {
  BACKBONE = 'Backbone',
  BAOBAB = 'Baobab',
  BEM = 'BEM',
  BOOTSTRAP = 'Bootstrap',
  NESTJS = 'Nest JS',
  NODE = 'Node',
  NPM = 'NPM',
  REACT = 'React',
  REDUX = 'Redux',
  SASS = 'SASS',
  STORYBOOK = 'Storybook',
  THREEJS = 'ThreeJS',
  TYPESCRIPT = 'Typescript',
  VUE = 'Vue',
  VUEX = 'Vuex',
  WEBPACK = 'Webpack',
}

const experience = [
  {
    agile: [Agile.SCRUM],
    date: 'April 2022 to present',
    description: [],
    technologies: [
      Technology.REACT,
      Technology.REDUX,
      Technology.BEM,
      Technology.SASS
    ],
    title: 'React.JS developer at Santex',
  },
  {
    agile: [Agile.SCRUM],
    date: 'November 2021 to April 2022',
    description: [
      'Working for Kilburn Live a global market leader in branded live entertainment.',
      'Mainly focusing in leading a team to construct a couple of Vue applications.',
      'Training Junior and Semi Senior developers as well as updating available trainings.',
      'Performing interviews and helping in the update of the interview process.',
    ],
    technologies: [
      Technology.VUE,
      Technology.NESTJS,
      Technology.NODE,
      Technology.VUEX,
      Technology.SASS,
      Technology.BEM
    ],
    title: 'Senior Frontend Developer at Grupo Giga',
  },
  {
    agile: [Agile.SCRUM],
    date: 'May 2021 to October 2021',
    description: [
      'Working for ProvantageX the Media Industry’s First End-To-End Automated Premium Video Marketplace',
      'Mainly focusing in a React monolithic application.',
      'Training Junior and Semi Senior developers'
    ],
    technologies: [
      Technology.BAOBAB,
      Technology.BEM,
      Technology.REACT,
      Technology.SASS,
      Technology.TYPESCRIPT
    ],
    title: 'Senior Frontend Developer at Grupo Giga',
  },
  {
    agile: [Agile.KANBAN],
    date: 'January 2021 to May 2021',
    description: [
      'Working mainly in react and related technologies.',
      'Creating reusable components for different breakpoints.',
      'Assisting in technical decisions related to tech task and future tasks.',
    ],
    technologies: [
      Technology.BEM,
      Technology.BOOTSTRAP,
      Technology.REACT,
      Technology.REDUX,
      Technology.SASS,
    ],
    title: 'Principal Software Engineer at CMOList',
  },
  {
    agile: [Agile.SCRUM],
    date: 'April to August 2020',
    description: [
      'Creating 3d models with threejs that enables the product creation in real time.',
      'Applying previous experience to build reusable components.',
      'Estimate, analize, build and showcase long term features (more than one month of development)',
    ],
    technologies: [
      Technology.REACT,
      Technology.REDUX,
      Technology.THREEJS,
      Technology.SASS,
      Technology.BEM,
      Technology.WEBPACK,
      Technology.NPM,
      Technology.STORYBOOK,
    ],
    title: 'Software Engineer at Ergeon',
  },
  {
    agile: [Agile.SCRUM],
    date: 'March to April 2020',
    description: 'Working for InStride.com in front-end related tasks',
    technologies: [
      Technology.REACT,
      Technology.REDUX,
      Technology.SASS,
      Technology.BEM,
      Technology.NODE,
      Technology.NPM,
      Technology.STORYBOOK,
    ],
    title: 'Web UI Developer at Globant',
  },
  {
    agile: [Agile.SCRUM],
    date: 'February to March 2020',
    description: [
      'Being an important player in the creation, coordination and execution of the reutilization plan of the company.',
      'Building reusable components for five applications.',
      'Supporting and implement bug fixes and new requirements for each internal application.',
      'Coaching new and experienced developers',
    ],
    technologies: [
      Technology.REACT,
      Technology.REDUX,
      Technology.SASS,
      Technology.BEM,
      Technology.NODE,
      Technology.NPM,
      Technology.STORYBOOK,
    ],
    title: 'Web UI Developer at Globant',
  },
  {
    agile: [Agile.SCRUM],
    date: 'January 2018 to February 2019',
    description: [
      'Manager of technical decisions.',
      'In charge of the creation and execution of the project\'s deployment plan.',
      'Performing code reviews and leading teams to follow coding standards and best practices.',
      'Assisted in Web UI Interviews.',
      'Evaluating and providing technical/soft skills feedback to team members',
    ],
    technologies: [
      Technology.REACT,
      Technology.REDUX,
      Technology.SASS,
      Technology.BEM,
      Technology.BACKBONE,
      Technology.NODE,
      Technology.NPM,
      Technology.STORYBOOK,
    ],
    title: 'Tech Lead at OLX Classifields, Globant',
  },
  {
    agile: [Agile.SCRUM],
    date: 'April 2017 to January 2018',
    description: [
      'Focal point at a multidisciplinary team in one of the biggest accounts at the Latam Region of Globant.',
      'Leading front-end features quality and delivery.',
      'In charge of the company\'s bootcamp for Web UI Developers'
    ],
    technologies: [
      Technology.REACT,
      Technology.REDUX,
      Technology.SASS,
      Technology.BEM,
      Technology.BACKBONE,
      Technology.NODE,
      Technology.NPM,
      Technology.STORYBOOK,
    ],
    title: 'Focal Web UI Developer at OLX Classifields, Globant',
  },
  {
    agile: [Agile.SCRUM],
    date: 'October 2015 to April 2017',
    description: [
      'Building reusable components for application teams.',
      'Eliminating coding and logic errors and ensuring the program perform according to unit test.',
      'Performing code reviews and adding automation test with WebDriver / Selenium.',
    ],
    technologies: [
      Technology.REACT,
      Technology.REDUX,
      Technology.SASS,
      Technology.BEM,
      Technology.NPM,
    ],
    title: 'Web UI Developer at Globant',
  }
];

export default experience;
