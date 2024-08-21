import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
    FaGithub
  } from 'react-icons/fa';
  import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
  import { Link } from 'react-router-dom';
  
  import Work1 from './assets/project-1.png';
  import Work2 from './assets/project-2.png';
  import Work3 from './assets/project-3.jpg';
  import Work4 from './assets/project-4.png';
  import Work5 from './assets/project-5.png';
  import Work6 from './assets/project-6.png';
  import Work7 from './assets/project-7.jpg';
  import Work8 from './assets/project-8.jpg';
  import Work9 from './assets/project-9.jpg';
  
  import Theme1 from './assets/purple.png';
  import Theme2 from './assets/red.png';
  import Theme3 from './assets/blueviolet.png';
  import Theme4 from './assets/blue.png';
  import Theme5 from './assets/goldenrod.png';
  import Theme6 from './assets/magenta.png';
  import Theme7 from './assets/yellowgreen.png';
  import Theme8 from './assets/orange.png';
  import Theme9 from './assets/green.png';
  import Theme10 from './assets/yellow.png';
  
  export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav__icon' />,
      path: '/',
    },
  
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav__icon' />,
      path: '/about',
    },
  
    {
      id: 3,
      name: 'Portfolio',
      icon: <FaFolderOpen className='nav__icon' />,
      path: '/portfolio',
    },
  
    {
      id: 4,
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav__icon' />,
      path: '/contact',
    },
    
    {
      id: 5,
      name: 'Github',
      icon: <FaGithub className='nav__icon' />,
      path: 'https://github.com/ARNAVPANDEY01',
      target: '_blank',
    },
  ];
  
  export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Arnav',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Pandey',
    },
  
    {
      id: 3,
      title: 'Age : ',
      description: '22 Years',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Indian',
    },
  
    {
      id: 5,
      title: 'Freelance : ',
      description: 'Available',
    },
  
    {
      id: 6,
      title: 'Address : ',
      description: 'Bhopal, India',
    },
  
    {
      id: 7,
      title: 'Phone : ',
      description: '+91 7667100932',
    },
  
    {
      id: 8,
      title: 'Email : ',
      description: 'pandeyarnav2002@gmail.com',
    },
  
    {
      id: 9,
      title: 'Linkedin : ',
      description: 'Arnav Pandey',
    },
  
    {
      id: 10,
      title: 'Langages : ',
      description: 'English, Hindi',
    },
  ];
  
  export const stats = [
    {
      id: 1,
      no: 'Fresher',
      title: 'Years of <br /> Experience',
    },
  
    {
      id: 2,
      no: '2+',
      title: 'Completed <br /> Projects',
    },
  
    {
      id: 3,
      no: '2+',
      title: 'Website <br/> Design',
    },
  
    {
      id: 4,
      no: '3+',
      title: ' Cultural  <br /> Participation',
    },
  ];
  
  export const resume = [
    {
      id: 1,
      category: 'experience',
      icon: <FaBriefcase />,
      year: 'JUL 2024 - JUL 2024',
      title: 'Research Intern <span> Indian Institute of Technology, Mandi  </span>',
      desc: 'Contributed to CLIP development for image-text retrieval. Built & trained model using PyTorch, Tensorflow etc, Developed machine learning model using Librosa to convert audio to spectrograms. Facilitated audio analysis for ML projects',
    },

    {
      id: 2,
      category: 'experience',
      icon: <FaBriefcase />,
      year: 'DEC 2023 - MAR 2024',
      title: 'Prompt Designer <span> Sugarcane AI </span>',
      desc: `As a Prompt Designing Intern at SugarCane AI,I focused on training their AI model.
      Responsibilities included data preprocessing, experimentation, and fine-tuning parameters for
      improved performance. Assisted in troubleshooting technical issues and documented processes
      for knowledge sharing.`,
    },
  
    // {
    //   id: 3,
    //   category: 'experience',
    //   icon: <FaBriefcase />,
    //   year: '2005 - 2013',
    //   title: 'Consultant <span> Videohive </span>',
    //   desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
    // },
  
    {
      id: 4,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2021-Present',
      title: 'Bachelor of Technology Degree <span> <br> Technocrats Institute of Technology </span>',
      desc: 'I am a Bachelor of Technology student in Computer Science Engineering with a specialization in Artificial Intelligence and Machine Learning from Technocrats Institute of Technology ',
    },
  
    {
      id: 5,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2020-2021',
      title: 'Senior Secondary Examination <span> <br>Resonance International School </span>',
      desc: 'I completed my Senior Secondary Examination with a specialization in Maths & Science from Resonance International School, Muzaffarpur with a percentage of 80.8%.',
    },
  
    {
      id: 6,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2018-2019',
      title: 'High School Examination <span> <br> Resonance International School </span>',
      desc: 'I completed my High School Examination from Resonance International School, Muzaffarpur with a percentage of 87.6%.',
    },
    {
      id: 7,
      category: 'position',
      icon: <FaGraduationCap />,
      year: 'Apr 2024-Present',
      title: 'Developer Advocate <span> <br> Oraichain Labs </span>',
      desc: `As a Developer Advocate we are responsible for progress to building projects, onboarding evangelists, and representing the
      community in events and workshops.`,
    },
    {
      id: 8,
      category: 'position',
      icon: <FaGraduationCap />,
      year: 'Apr 2024-Present',
      title: 'Regional Lead <span> <br> Outdefine </span>',
      desc:   `As a Regional Lead, I am responsible for managing the team of Outdefine in the region. I am responsible for the growth of the team and the company in the Central region.`,
    },
    {
      id: 10,
      category: 'position',
      icon: <FaGraduationCap />,
      year: 'JUL 2024-Present',
      title: 'Regional Lead <span> <br> MultichainIN </span>',
      desc:   `As a Regional Lead, I am responsible for managing the team of MultichainIN in the region. I am responsible for the growth of the team and the company in the Central region.`,
    },
    {
      id: 9,
      category: 'position',
      icon: <FaGraduationCap />,
      year: 'Jan 2024-Present',
      title: 'Campus Advocate <span> <br> Central DAO </span>',
      desc:  `Promote Central DAO in the campus and help students to understand the concept of DAO and blockchain technology.`,
    },
    {
      id: 10,
      category: 'position',
      icon: <FaGraduationCap />,
      year: 'Aug 2023-Sept 2023',
      title: 'Campus Ambassador <span> <br> Hackverse Hackathon </span>',
      desc: `Promote Hackverse Hackathon in the campus and help students to understand the concept of hackathons and how they can participate in it.`,
    },
  ];
  
  export const skills = [
    {
      id: 1,
      title: 'Html',
      percentage: '70',
    },
  
    {
      id: 2,
      title: 'CSS',
      percentage: '65',
    },
  
    {
      id: 3,
      title: 'Javascript',
      percentage: '60',
    },
  
    {
      id: 4,
      title: 'Java',
      percentage: '65',
    },

    {
      id: 5,
      title: 'Python',
      percentage: '39',
    },
  
    {
      id: 5,
      title: 'MySQL',
      percentage: '70',
    },
  
    {
      id: 6,
      title: 'React JS',
      percentage: '45',
    },
  
    {
      id: 7,
      title: 'DSA',
      percentage: '52',
    },

    
  ];
  
  export const portfolio = [
    {
      id: 1,
      img: Work1,
      title: 'Password Manager',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Testing Skills',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'MERN Stack Project',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://github.com/ARNAVPANDEY01/Password-Manager-',
        },
      ],
    },

    {
      id: 2,
      img: Work2,
      title: 'Animated Frontend Website',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Testing Skills',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Html CSS JS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: '',
        },
      ],
    },
  
    
  ];
  
  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'hsl(252, 35%, 51%)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(4, 93%, 54%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 4,
      img: Theme4,
      color: 'hsl(225, 73%, 57%)',
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(43, 74%, 49%)',
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(339, 81%, 66%)',
    },
  
    {
      id: 7,
      img: Theme7,
      color: 'hsl(80, 61%, 50%)',
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(19, 96%, 52%)',
    },
  
    {
      id: 9,
      img: Theme9,
      color: 'hsl(88, 65%, 43%)',
    },
  
    {
      id: 10,
      img: Theme10,
      color: 'hsl(42, 100%, 50%)',
    },
  ];
  
