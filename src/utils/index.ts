import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaLinkedin, FaSpotify, FaYoutube } from 'react-icons/fa';

import {
  Amazon,
  Apple,
  Atlassian,
  Google,
  Lyft,
  Meta,
  Microsoft,
  Netflix,
  Zomato,
} from '@/assets/CurriculamSectionAssets';
import { AlumniCard, Course, Event, FAQ, FooterSectionArrayType, Icon, IHeroStat, Learner, MasterClassAlumni, Mentor, PastLearner } from '@/types';
import A1 from '~/images/Alumni1.png';
import A2 from '~/images/Alumni2.png';
import A3 from '~/images/Alumni3.png';
import A4 from '~/images/Alumni4.png';
import A5 from '~/images/Alumni5.png';
import Alumni1 from '~/images/MasterClassAlumni1.png';
import Alumni2 from '~/images/MasterClassAlumni2.png';
import Alumni3 from '~/images/MasterClassAlumni3.png';
import Alumni4 from '~/images/MasterClassAlumni4.png';
import AlumniMobile1 from '~/images/MasterClassAlumniMobile1.png';
import AlumniMobile2 from '~/images/MasterClassAlumniMobile2.png';
import AlumniMobile3 from '~/images/MasterClassAlumniMobile3.png';
import AlumniMobile4 from '~/images/MasterClassAlumniMobile4.png';
import M1 from '~/images/Mentor1.png';
import M2 from '~/images/Mentor2.png';
import M3 from '~/images/Mentor3.png';
import M4 from '~/images/Mentor4.png';
import M5 from '~/images/Mentor5.png';
import M6 from '~/images/Mentor6.png';
import M7 from '~/images/Mentor7.png';
import M8 from '~/images/Mentor8.png';
import M9 from '~/images/Mentor9.png';
import M10 from '~/images/Mentor10.png';
import M11 from '~/images/Mentor11.png';
import M12 from '~/images/Mentor12.png';
import P4 from '~/images/P4.png';
import P5 from '~/images/P5.png';
import P6 from '~/images/P6.png';
import P7 from '~/images/P7.png';
import P8 from '~/images/P8.png';
import P9 from '~/images/P9.png';
import PastLearner1 from '~/images/PastLearner1.png';


export const HeroSectionOptions = [
    'Placement Assistance',
    'AI-infused curriculum',
    'Faculty from MAANG',
    '1:1 Mentorship',
  ];
  
export const HeroSectionStats: IHeroStat[] = [
    {
      count: '92%',
      jobSwitchCount: '128%',
      title: {
        row1: 'Average',
        row2: 'Placement Rate',
        jobSwitchRow2: 'Salary Hike'
      },
    },
    {
      count: '681+',
      jobSwitchCount: '681+',
      title: {
        row1: 'Companies',
        row2: 'Hired From Us',
        jobSwitchRow2: 'Hired From Us'
      }
    },
    {
      count: '58LPA',
      jobSwitchCount: '58LPA',
      title: {
        row1: 'Highest',
        row2: 'Package',
        jobSwitchRow2: 'Package'
      },
    },
    {
      count: '826+',
      jobSwitchCount: '826+',
      title: {
        row1: 'Learners',
        row2: 'Placed',
        jobSwitchRow2: 'Placed'
      }
    },
];
// videoPath: 'https://csforall.in/wp-content/uploads/2024/11/Abhinay-Final-Testimonial.mp4',
export const AlumniCards: AlumniCard[] = [
  {
    cardImage: A3,
    alumniName: 'Abhinay Reddy',
    checkTitle: 'SDE - Valuefy',
    alumniJobDesc: 'Offer - Valuefy, Knolskape',
    videoPath: 'https://csforall.in/wp-content/uploads/2024/11/Abhinay-Final-Testimonial.mp4',
    alumniJobDescTextColor: 'text-[#ECC231]',
    cardWrapperShadowColor: 'shadow-yellow-multi',
    cardWrapperBackgroundColor: 'bg-[#ECC231]',
    cardShadowFromColor: 'from-[#ecc3317d]',
    cardShadowViaColor: 'via-[#00c3ff13]',
    cardWrapperRingColor: 'ring-[#ECC231]',
    videoPlayButtonBorderColor: 'border-l-[#ecc3318c]'
  },

  {
    cardImage: A2,
    alumniName: 'Shivansh Yashasvi',
    checkTitle: 'SDE - ION',
    alumniJobDesc: 'Offer @Amazon, ION, CISCO',
    videoPath: 'https://csforall.in/wp-content/uploads/2024/11/Shivansh-Testimonial-Final.mp4',
    alumniJobDescTextColor: 'text-[#FF4C65]',
    cardWrapperShadowColor: 'shadow-red-multi',
    cardWrapperBackgroundColor: 'bg-[#FF4C65]',
    cardWrapperHeight: 'h-[416px]',
    cardShadowFromColor: 'from-[#ff4c647f]',
    cardShadowViaColor: 'via-[#ff4c6412]',
    cardWrapperRingColor: 'ring-[#FF4C65]',
    videoPlayButtonBorderColor: 'border-l-[#ff4c6493]'
  },

  {
    cardImage: A1,
    alumniName: 'Rounak Goswami',
    checkTitle: 'SDE - Morgan Stanley',
    alumniJobDesc: 'Offer - Morgan Stanley',
    videoPath: 'https://csforall.in/wp-content/uploads/2024/11/Rounak-Final-Testiminial.mp4',
    alumniJobDescTextColor: 'text-[#00C2FF]',
    cardWrapperShadowColor: 'shadow-blue-multi',
    cardWrapperBackgroundColor: 'bg-[#00C2FF]',
    cardShadowFromColor: 'from-[#00c3ff75]',
    cardShadowViaColor: 'via-[#00c3ff13]',
    cardWrapperRingColor: 'ring-[#00C2FF]',
    videoPlayButtonBorderColor: 'border-l-[#01b9f19c]'
  },

  {
    cardImage: A4,
    alumniName: 'Abhishek Dixit',
    checkTitle: 'Senior SDE - Meesho',
    alumniJobDesc: 'Offer - Goldman Sachs, Meesho',
    videoPath: 'https://csforall.in/wp-content/uploads/2024/11/Coming-in-December.mp4',
    alumniJobDescTextColor: 'text-[#fa9c02]',
    cardWrapperShadowColor: 'shadow-orange-multi',
    cardWrapperBackgroundColor: 'bg-[#ffa000]',
    cardShadowFromColor: 'from-[#ffa5007d]',
    cardShadowViaColor: 'via-[#00c3ff13]',
    cardWrapperRingColor: 'ring-[#ffa000]',
    videoPlayButtonBorderColor: 'border-l-[#f0c384]'
  },

  {
    cardImage: A5,
    alumniName: 'Fahad Ali',
    checkTitle: 'Senior SDE - Razorpay',
    alumniJobDesc: 'Offer - Razorpay',
    videoPath: 'https://csforall.in/wp-content/uploads/2024/11/Coming-in-December.mp4',
    alumniJobDescTextColor: 'text-[#03fd9a]',
    cardWrapperShadowColor: 'shadow-green-multi',
    cardWrapperBackgroundColor: 'bg-[#03fd9a]',
    cardShadowFromColor: 'from-[#00c3ff75]',
    cardShadowViaColor: 'via-[#00c3ff13]',
    cardWrapperRingColor: 'ring-[#03fd9a]',
    videoPlayButtonBorderColor: 'border-l-[#75e49a]'
  }
];

export const JobSwitchCourses: Course[] = [
  {
    courseName: 'Java/CPP + OOP',
    courseDuration: '2 Weeks',
    courseDescription: 'Mastering core java concepts like data types, control structures, and OOP will set the stage and tackling advanced topics and building scalable web applications.',
    courseKeyPoints: [
      'Introduction to Java/C++, Input Output',
      'Data Types, Operators, Conditions, Loops',
      'Patterns Problems, Functions, 1D - 2D Array',
      'Strings, Memory Management, OOP',
      'Java Collections/C++ STL'
    ], 
  },

  {
    courseName: 'Data Structures & Algorithms (Level 1)',
    courseDuration: '1 Month',
    courseDescription: 'These will sharpen your problem-solving skills. These concepts help you write efficient code and tackle complex coding challenges, preparing you advanced web developement tasks and technical interviews.',
    courseKeyPoints: [
      'Time/Space Complexity',
      'Arrays/Strings : Adhoc',
      'Hashmaps',
      'Two Pointers/Sliding Window',
      'Bit Manipulation',
      'Big Numbers',
      'Building Data Structures with OOP'
    ],
  },

  {
    courseName: 'Data Structures & Algorithms (Level 2)',
    courseDuration: '1 Month',
    courseDescription: 'These will equip you with the skills to solve complex problems and optimize web applications, preparing you for advanced developement and technical interviews.',
    courseKeyPoints: [
      'Stacks, Queues, Linked Lists',
      'Searching/Sortion, Greedy Techniques',
      'Recursion/Backtracking',
      'Dynamic Programming'
    ],
  },

  {
    courseName: 'Data Structures & Algorithms (Level 3)',
    courseDuration: '1 Month',
    courseDescription: 'These will help you optimize data handling and algorithms, will improve performance, essential for building scalable web apps and excelling in technicqal interviews.',
    courseKeyPoints: [
      'Trees - Binary Trees, BST, AVL Tree',
      'Graphs: DFS/BFS, Dijkstra, Topo Sort',
      'Euler Tour, Range Queries, Number Theory'
    ],
  },

  {
    courseName: 'Full Stack Web Developement (Level 1)',
    courseDuration: '4 Weeks',
    courseDescription: 'You will learn to build responsive, interactive websites using HTML, CSS, JS with Git for version control, ypu will also manage projects efficiently, preparing you for modern web developement.',
    courseKeyPoints: [
      'Structural Tags, Lists d Links, Media',
      'Tables, Forms, Intro to CSS, Selectors, Units',
      'Background, Borders, Box Model',
      'CSS Texts and Fonts, Float and Display',
      'Positioning, Flex, CSS Grids, Combinators',
      'Animations, Responsive Web Designs',
      'Intro to Bootstrap, Typography, Colors',
      'Alerts and Badges, Buttons, Bars & Spinners',
      'Cards, Lists & Pagination, Navigation & Select',
      'Tooltip, Model and & Carousel, Popover, Toast',
      'Utilities, Forms, Grids, Intro to Git',
      'Git push and git pull, Branching and Merging',
    ],
  },

  {
    courseName: 'Full Stack Web Developement (Level 2)',
    courseDuration: '4 Weeks',
    courseDescription: 'You will learn JS fundamentals and advanced concepts like Async/Await, ES6 and DOM manipulation. You will learn Backend Developement with Node.js, Express and MVC enabling you to build dynamic, scalable applications and write efficient maintainable code.',
    courseKeyPoints: [
      'Intro to JS, Syntax, Variables, Scopes',
      'Hoisting, Control Flow Statements',
      'Nested Loops and Functions',
      'Function Bindings and Clousers, JS Array',
      'JS Objects, Advanced Arrays, JSON',
      'JS DOM, Timing Events & Callbacks',
      'Ajax Intro, Promises and Error Handling',
      'Async/Await, ES6',
      'Intro to Node, JSON and Asynchronous JS',
      'OOPs, Design Patterns, MVC & Express',
      'Modules, Routes & Template Rendering',
      'Express Middleware & FS'
    ],
  },

  {
    courseName: 'Full Stack Web Developement (Level 3)',
    courseDuration: '4 Weeks',
    courseDescription: 'You will learn MongoDB Integration, authentication with Passport JS and real time communication with web sockets',
    courseKeyPoints: [
      'Intro to MongoDB, Integration with Backend',
      'Intro to Cookies & Authentication',
      'Implementation with Node and Express',
      'Passport JS, Web Sockets',
    ],
  },

  {
    courseName: 'Full Stack Web Developement (Level 4)',
    courseDuration: '2 Weeks',
    courseDescription: 'Essential for creating dynamic, efficient web applications. It enables reusable components, simplifies project setup, and enhances UI development with tools like JSX and state management',
    courseKeyPoints: [
      'Introduction to React',
      'Directory Structure',
      'JSX',
      'React Components',
      'Class Based Components',
      'Functional Based Components',
      'LifeCycle Methods'
    ],
  },

  {
    courseName: 'Full Stack Web Developement (Level 5)',
    courseDuration: '4 Weeks',
    courseDescription: 'Learning props, state, and React Hooks is vital for data management in React. Capstone projects offer practical experience to apply these concepts and showcase your skills effectively.',
    courseKeyPoints: [
      'Props',
      'State',
      'JSX',
      'Hooks Intro',
      'Forms',
      'API\'s and Events',
      'Routers and Lists',
      'Redux',
      'Capstone Projects'
    ],
  },

  {
    courseName: 'System Design LLD + HLD (Level 1)',
    courseDuration: '1 Week',
    courseDescription: 'Understanding design interview essentials—like depth analysis, cryptographic hash functions, network protocols, and scaling—is crucial for system design roles. It enhances your interview skills and overall design expertise.',
    courseKeyPoints: [
      'Steps for design interview',
      'Depth and Bredth Analysis',
      'Cryptographic Hash Functions',
      'Network Protocols',
      'Web Server, Hash Index',
      'Scaling, Horizontal vs Vertical',
      'For data Size & throughput',
      'For fault tolerance'
    ],
  },

  {
    courseName: 'System Design LLD + HLD (Level 2)',
    courseDuration: '1 Week',
    courseDescription: 'Essential for ensuring service accuracy and performance, focusing on correctness, availability, and efficient throughput. Understanding proxies and load balancing enhances scalability and reliability.',
    courseKeyPoints: [
      'For geolocation & hotspot',
      'Correctness, Availability',
      'Throughput, Response Time',
      'SLO\'s and SLA\'',
      'Proxy',
      'Reverse and Forward',
      'Load balancing',
      'Replication'
    ],
  },

  {
    courseName: 'System Design LLD + HLD (Level 3)',
    courseDuration: '1 Week',
    courseDescription: 'Learning these concepts helps optimize system performance, scalability, and data management in applications. They are essential for building efficient and reliable architectures.',
    courseKeyPoints: [
      'Single & Multi Leader',
      'Leaderless, CAP Theorem',
      'CDN & Cache',
      'Reads and Writes',
      'LRU Cache',
      'Strategies',
      'Sharding, Consistent Hashing',
      'Storage'
    ],
  },

  {
    courseName: 'System Design LLD + HLD (Level 4)',
    courseDuration: '2 Weeks',
    courseDescription: 'Learning these concepts is vital for effective data management and designing robust applications. They enable you to handle data integrity, scalability, and real-world system challenges efficiently.',
    courseKeyPoints: [
      'Key-Value Stores',
      'Relational Database and Tree Index',
      'SQL, Normalization & Keys',
      'ACID Transactions, Big Data',
      'No SQL, URL Shortener',
      'Instagram, Uber, Twitter',
      'Messaging/Chat Service'
    ],
  },

  {
    courseName: 'System Design LLD + HLD (Level 5)',
    courseDuration: '1 Week',
    courseDescription: 'Learning about inverted indexes and MapReduce is vital for efficient data handling and building scalable search engines, essential in today\'s data-driven world.',
    courseKeyPoints: [
      'Inverted Index',
      'External Sort Merge',
      'K-way External Sort-Merge',
      'Distributed File System',
      'Map-reduce Framework',
      'Distributed Sorting',
      'Search Engine'
    ],
  },

  {
    courseName: 'System Design LLD + HLD (Level 6)',
    courseDuration: '1 Week',
    courseDescription: 'Understanding graph processors and recommendation systems enhances personalized experiences and data processing efficiency in applications like Netflix.',
    courseKeyPoints: [
      'Graph Processor',
      'Typeahead Suggestions',
      'K-way External Sort-Merge',
      'Recommendation Systems',
      'Stream Processing',
      'APM',
      'Social Connections',
      'Netflix'
    ],
  },

  {
    courseName: 'System Design LLD + HLD (Level 7)',
    courseDuration: '2 Weeks',
    courseDescription: 'Learning these topics equips you to design effective APIs and models, crucial for apps like Google Maps and YouTube, while understanding UML and design patterns ensures scalable software solutions.',
    courseKeyPoints: [
      'Google Maps',
      'Trending Topics',
      'YouTube',
      'Object Modeling and API design',
      'UML, Design patterns',
      'Distributed Sorting',
      'Composite Pattern'
    ],
  },

  {
    courseName: 'System Design LLD + HLD (Level 8)',
    courseDuration: '1 Week',
    courseDescription: 'Learning design patterns like Decorator, Facade, and Observer improves code quality and maintainability, providing solutions to common software design problems.',
    courseKeyPoints: [
      'Decorator pattern',
      'Facade Pattern',
      'Visitor Pattern',
      'Flyweight Pattern',
      'Proxy Pattern',
      'Command Pattern',
      'Observer Pattern'
    ],
  },

  {
    courseName: 'System Design LLD + HLD (Level 9)',
    courseDuration: '2 Weeks',
    courseDescription: 'Learning these design patterns and principles equips you to build flexible, scalable software. They enhance code maintainability, improve API efficiency, and ensure better collaboration among developers.',
    courseKeyPoints: [
      'Strategy Pattern',
      'State Pattern',
      'Factory Pattern',
      'Singleton Pattern',
      'RESTful API design',
      'Distributed Sorting',
      'SOLID principles'
    ],
  },

  {
    courseName: 'Soft Skills (Level 1)',
    courseDuration: '4 Weeks',
    courseDescription: 'Learning spoken English enhances communication, builds confidence, and improves clarity through pronunciation and practice.',
    courseKeyPoints: [
      'Spoken English',
      'Common Mistakes & How to Correct Them',
      'Pronunciation & Accent, MTI, Breathing',
      'Impromptu Speaking, Inflection, Tone',
      'Pacing, Peer Practice, Q&A'
    ],
  },

  {
    courseName: 'Soft Skills (Level 2)',
    courseDuration: '4 Weeks',
    courseDescription: 'Learning these skills improves communication by building confidence, overcoming limiting beliefs, fostering connections, enhancing listening, and using effective body language.',
    courseKeyPoints: [
      'Building Confidence, Limiting Beliefs',
      'Building Rapport, Connect before you speak',
      'Listening and Assertive Communication',
      'Body Language'
    ],
  },
  
  {
    courseName: 'Soft Skills (Level 3)',
    courseDuration: '4 Weeks',
    courseDescription: 'Interview preparation techniques helps you avoid common mistakes, effectively answer behavioral questions, manage stress, and make strong first impressions, ultimately boosting your chances of success.',
    courseKeyPoints: [
      'Interview Preparations, Common Mistakes',
      'Behavioral Question Framework',
      'Managing Interview stress, NLP Technique',
      'Power of Fist Impression',
      'Mock Interviews'
    ],
  }
];

export const MernCourses: Course[] = [
  {
    courseName: 'Java/CPP + OOP',
    courseDuration: '2 Weeks',
    courseDescription: 'Mastering core java concepts like data types, control structures, and OOP will set the stage and tackling advanced topics and building scalable web applications.',
    courseKeyPoints: [
      'Introduction to Java/C++, Input Output',
      'Data Types, Operators, Conditions, Loops',
      'Patterns Problems, Functions, 1D - 2D Array',
      'Strings, Memory Management, OOP',
      'Java Collections/C++ STL'
    ], 
  },

  {
    courseName: 'Data Structures & Algorithms (Level 1)',
    courseDuration: '1 Month',
    courseDescription: 'These will sharpen your problem-solving skills. These concepts help you write efficient code and tackle complex coding challenges, preparing you advanced web developement tasks and technical interviews.',
    courseKeyPoints: [
      'Time/Space Complexity',
      'Arrays/Strings : Adhoc',
      'Hashmaps',
      'Two Pointers/Sliding Window',
      'Bit Manipulation',
      'Big Numbers',
      'Building Data Structures with OOP'
    ],
  },

  {
    courseName: 'Data Structures & Algorithms (Level 2)',
    courseDuration: '1 Month',
    courseDescription: 'These will equip you with the skills to solve complex problems and optimize web applications, preparing you for advanced developement and technical interviews.',
    courseKeyPoints: [
      'Stacks, Queues, Linked Lists',
      'Searching/Sortion, Greedy Techniques',
      'Recursion/Backtracking',
      'Dynamic Programming'
    ],
  },

  {
    courseName: 'Data Structures & Algorithms (Level 3)',
    courseDuration: '1 Month',
    courseDescription: 'These will help you optimize data handling and algorithms, will improve performance, essential for building scalable web apps and excelling in technicqal interviews.',
    courseKeyPoints: [
      'Trees - Binary Trees, BST, AVL Tree',
      'Graphs: DFS/BFS, Dijkstra, Topo Sort',
      'Euler Tour, Range Queries, Number Theory'
    ],
  },

  {
    courseName: 'Full Stack Web Developement (Level 1)',
    courseDuration: '4 Weeks',
    courseDescription: 'You will learn to build responsive, interactive websites using HTML, CSS, JS with Git for version control, ypu will also manage projects efficiently, preparing you for modern web developement.',
    courseKeyPoints: [
      'Structural Tags, Lists d Links, Media',
      'Tables, Forms, Intro to CSS, Selectors, Units',
      'Background, Borders, Box Model',
      'CSS Texts and Fonts, Float and Display',
      'Positioning, Flex, CSS Grids, Combinators',
      'Animations, Responsive Web Designs',
      'Intro to Bootstrap, Typography, Colors',
      'Alerts and Badges, Buttons, Bars & Spinners',
      'Cards, Lists & Pagination, Navigation & Select',
      'Tooltip, Model and & Carousel, Popover, Toast',
      'Utilities, Forms, Grids, Intro to Git',
      'Git push and git pull, Branching and Merging',
    ],
  },

  {
    courseName: 'Full Stack Web Developement (Level 2)',
    courseDuration: '4 Weeks',
    courseDescription: 'You will learn JS fundamentals and advanced concepts like Async/Await, ES6 and DOM manipulation. You will learn Backend Developement with Node.js, Express and MVC enabling you to build dynamic, scalable applications and write efficient maintainable code.',
    courseKeyPoints: [
      'Intro to JS, Syntax, Variables, Scopes',
      'Hoisting, Control Flow Statements',
      'Nested Loops and Functions',
      'Function Bindings and Clousers, JS Array',
      'JS Objects, Advanced Arrays, JSON',
      'JS DOM, Timing Events & Callbacks',
      'Ajax Intro, Promises and Error Handling',
      'Async/Await, ES6',
      'Intro to Node, JSON and Asynchronous JS',
      'OOPs, Design Patterns, MVC & Express',
      'Modules, Routes & Template Rendering',
      'Express Middleware & FS'
    ],
  },

  {
    courseName: 'Full Stack Web Developement (Level 3)',
    courseDuration: '4 Weeks',
    courseDescription: 'You will learn MongoDB Integration, authentication with Passport JS and real time communication with web sockets',
    courseKeyPoints: [
      'Intro to MongoDB, Integration with Backend',
      'Intro to Cookies & Authentication',
      'Implementation with Node and Express',
      'Passport JS, Web Sockets',
    ],
  },

  {
    courseName: 'Full Stack Web Developement (Level 4)',
    courseDuration: '2 Weeks',
    courseDescription: 'Essential for creating dynamic, efficient web applications. It enables reusable components, simplifies project setup, and enhances UI development with tools like JSX and state management',
    courseKeyPoints: [
      'Introduction to React',
      'Directory Structure',
      'JSX',
      'React Components',
      'Class Based Components',
      'Functional Based Components',
      'LifeCycle Methods'
    ],
  },

  {
    courseName: 'Full Stack Web Developement (Level 5)',
    courseDuration: '4 Weeks',
    courseDescription: 'Learning props, state, and React Hooks is vital for data management in React. Capstone projects offer practical experience to apply these concepts and showcase your skills effectively.',
    courseKeyPoints: [
      'Props',
      'State',
      'JSX',
      'Hooks Intro',
      'Forms',
      'API\'s and Events',
      'Routers and Lists',
      'Redux',
      'Capstone Projects'
    ],
  },

  {
    courseName: 'System Design LLD + HLD (Level 1)',
    courseDuration: '1 Week',
    courseDescription: 'Understanding design interview essentials—like depth analysis, cryptographic hash functions, network protocols, and scaling—is crucial for system design roles. It enhances your interview skills and overall design expertise.',
    courseKeyPoints: [
      'Steps for design interview',
      'Depth and Bredth Analysis',
      'Cryptographic Hash Functions',
      'Network Protocols',
      'Web Server, Hash Index',
      'Scaling, Horizontal vs Vertical',
      'For data Size & throughput',
      'For fault tolerance'
    ],
  },

  {
    courseName: 'System Design LLD + HLD (Level 2)',
    courseDuration: '1 Week',
    courseDescription: 'Essential for ensuring service accuracy and performance, focusing on correctness, availability, and efficient throughput. Understanding proxies and load balancing enhances scalability and reliability.',
    courseKeyPoints: [
      'For geolocation & hotspot',
      'Correctness, Availability',
      'Throughput, Response Time',
      'SLO\'s and SLA\'',
      'Proxy',
      'Reverse and Forward',
      'Load balancing',
      'Replication'
    ],
  },

  {
    courseName: 'System Design LLD + HLD (Level 3)',
    courseDuration: '1 Week',
    courseDescription: 'Learning these concepts helps optimize system performance, scalability, and data management in applications. They are essential for building efficient and reliable architectures.',
    courseKeyPoints: [
      'Single & Multi Leader',
      'Leaderless, CAP Theorem',
      'CDN & Cache',
      'Reads and Writes',
      'LRU Cache',
      'Strategies',
      'Sharding, Consistent Hashing',
      'Storage'
    ],
  },

  {
    courseName: 'Soft Skills (Level 1)',
    courseDuration: '4 Weeks',
    courseDescription: 'Learning spoken English enhances communication, builds confidence, and improves clarity through pronunciation and practice.',
    courseKeyPoints: [
      'Spoken English',
      'Common Mistakes & How to Correct Them',
      'Pronunciation & Accent, MTI, Breathing',
      'Impromptu Speaking, Inflection, Tone',
      'Pacing, Peer Practice, Q&A'
    ],
  },

  {
    courseName: 'Soft Skills (Level 2)',
    courseDuration: '4 Weeks',
    courseDescription: 'Learning these skills improves communication by building confidence, overcoming limiting beliefs, fostering connections, enhancing listening, and using effective body language.',
    courseKeyPoints: [
      'Building Confidence, Limiting Beliefs',
      'Building Rapport, Connect before you speak',
      'Listening and Assertive Communication',
      'Body Language'
    ],
  },
  
  {
    courseName: 'Soft Skills (Level 3)',
    courseDuration: '4 Weeks',
    courseDescription: 'Interview preparation techniques helps you avoid common mistakes, effectively answer behavioral questions, manage stress, and make strong first impressions, ultimately boosting your chances of success.',
    courseKeyPoints: [
      'Interview Preparations, Common Mistakes',
      'Behavioral Question Framework',
      'Managing Interview stress, NLP Technique',
      'Power of Fist Impression',
      'Mock Interviews'
    ],
  }
];

// export const mentorCardPositioning = {
//   topPositions: ['top-0', 'top-2', 'top-4'],
//   leftPositions: ['left-16', 'left-28', 'left-40'],
//   zIndexes: ['z-[70]', 'z-[60]', 'z-[50]'],
//   cardHeight: ['275px', '260px', '240px'],
//   cardWidth: ['210px', '200px', '180px']
// };

//Temporary positioning for the card(medium screen)
export const mentorCardPositioning = {
  topPositions: ['-bottom-24', '-top-5', 'top-4'],
  leftPositions: ['left-4', 'left-20', 'left-40'],
  zIndexes: ['z-[70]', 'z-[60]', 'z-[50]'],
  cardHeight: ['415px', '365px', '290px'],
  cardWidth: ['300px', '270px', '220px']
};

export const Mentors: Mentor[] = [
  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[0],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[0],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[0],
    cardHeight: mentorCardPositioning.cardHeight[0],
    cardWidth: mentorCardPositioning.cardWidth[0],
    mentorImage: M1,
    mentorAlt: 'N1',
    mentorName: 'Supriya Sharma',
    mentorExperience: 'Software Engineer 3 @Google | Ex Associate @Goldman Sachs Ex Software Engineer @UnitedHealth Group 7 Years of Experience | System Design Instructor & Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/supriya-sharma-901675b1/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[1],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[1],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[1],
    cardHeight: mentorCardPositioning.cardHeight[1],
    cardWidth: mentorCardPositioning.cardWidth[1],
    mentorImage: M2,
    mentorAlt: 'N2',
    mentorName: 'Vishal Sharma',
    mentorExperience: 'Software Engineer - Microsoft IND. Ex - Goldman Sachs, Rippling, Directi.9 Years of Experience. System Design Instructor & Mentor @InterviewCall.',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/vishal-sharma-b698326b/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[2],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[2],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[2],
    cardHeight: mentorCardPositioning.cardHeight[2],
    cardWidth: mentorCardPositioning.cardWidth[2],
    mentorImage: M10,
    mentorAlt: 'N5',
    mentorName: 'Gurtej Singh Rehal',
    mentorExperience: 'Software Engineer @Meta London | Ex SDE 2 @Microsoft | Ex Software Engineer @Amazon, @TCS | 5 Years of Experience | Web Dev Instructor & Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/gurtejrehal/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[0],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[0],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[0],
    cardHeight: mentorCardPositioning.cardHeight[0],
    cardWidth: mentorCardPositioning.cardWidth[0],
    mentorImage: M4,
    mentorAlt: 'N1',
    mentorName: 'Maria Shah',
    mentorExperience: 'Certified Neuro Linguistic Programming (NLP) Instructor | Ex Trainer - ICICI, HDFC, Kotak, Axis 14 Years of Experience | Soft Skill Instructor & Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/coachmariashah/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[1],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[1],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[1],
    cardHeight: mentorCardPositioning.cardHeight[1],
    cardWidth: mentorCardPositioning.cardWidth[1],
    mentorImage: M5,
    mentorAlt: 'N5',
    mentorName: 'Mostafizur Rahaman',
    mentorExperience: 'Ex Software Engineer @The D.E. Shaw Group India | Ex Software Engineer @Waxwing, getgpt.ai, Infosys | 4 Years of Experience | DSA Instructor & Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/mostafijur-rahaman-21a2aa50/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[2],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[2],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[2],
    cardHeight: mentorCardPositioning.cardHeight[2],
    cardWidth: mentorCardPositioning.cardWidth[2],
    mentorImage: M6,
    mentorAlt: 'N4',
    mentorName: 'Saurabh Singh',
    mentorExperience: 'Software Engineer 3 @Walmart India | Ex Software Engineer @Infosys | 5.5 Years of Experience | Web Dev Instructor & Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/singhster/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[0],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[0],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[0],
    cardHeight: mentorCardPositioning.cardHeight[0],
    cardWidth: mentorCardPositioning.cardWidth[0],
    mentorImage: M7,
    mentorAlt: 'N3',
    mentorName: 'Syed Abbas',
    mentorExperience: 'Software Engineer @NEC Corporation India | Ex Software Engineer @Ecera System | 3 Years of Experience | Web Dev Instructor & Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/syedabbasnec/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[1],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[1],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[1],
    cardHeight: mentorCardPositioning.cardHeight[1],
    cardWidth: mentorCardPositioning.cardWidth[1],
    mentorImage: M8,
    mentorAlt: 'N5',
    mentorName: 'Sumit Roy',
    mentorExperience: 'Software Engineer 2 @Atlassian | Ex Senior Software Engineer @Unacamy | Ex Software Engineer @bigbasket.com, Cyware Labs | & Years of Experience | System Design Instructor & Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/sroy8091/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[2],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[2],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[2],
    cardHeight: mentorCardPositioning.cardHeight[2],
    cardWidth: mentorCardPositioning.cardWidth[2],
    mentorImage: M9,
    mentorAlt: 'N2',
    mentorName: 'Soham Dasgupta',
    mentorExperience: 'Senior Software Engineer @Microsoft USA | Ex SDE @Amazon USA | Ex Software Engineer @Edgenuiti, @TCS | 9 Years of Experience | Leadershipp Instructor & Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/sohamdasgupta08/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[0],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[0],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[0],
    cardHeight: mentorCardPositioning.cardHeight[0],
    cardWidth: mentorCardPositioning.cardWidth[0],
    mentorImage: M3,
    mentorAlt: 'N6',
    mentorName: 'Jyotirmoy Deb',
    mentorExperience: 'Software Engineer - Apple USA. Ex Software Engineer - AT&T. 11 Years of Experience. Web Dev Instructor & Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/jyotirmoydeb/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[1],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[1],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[1],
    cardHeight: mentorCardPositioning.cardHeight[1],
    cardWidth: mentorCardPositioning.cardWidth[1],
    mentorImage: M11,
    mentorAlt: 'N1',
    mentorName: 'Sunyul Hossen',
    mentorExperience: 'Ex Software Engineer @Goldman Sachs Poland, Adobe, American Express Offers - Amazon London, D.E. Shaw Luxembourg | Uber Highest Placement of 1.47 Crore | Interview Strategist @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/shssn/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[2],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[2],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[2],
    cardHeight: mentorCardPositioning.cardHeight[2],
    cardWidth: mentorCardPositioning.cardWidth[2],
    mentorImage: M12,
    mentorAlt: 'N5',
    mentorName: 'Ankit Gupta',
    mentorExperience: 'Software Engineer 2 @Atlassian India | Ex - Software Engineer @Decision Fiction | 5 Years of Experience | Web Dev Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/i-ankit25/'
  },
];

export const Learners: Learner[] = [
  {
    learnerImage: P4,
    learnerCompany: 'Google India',
    learnerRole: 'Software Engineer',
    learnerImageHeight: 'h-[500px]',
    companyIcon: 'google',
    companyRingColor: 'ring-green-600'
  },

  {
    learnerImage: P5,
    learnerCompany: 'Amazon India',
    learnerRole: 'Software Engineer',
    learnerImageHeight: 'h-[570px]',
    companyIcon: 'amazon',
    companyRingColor: 'ring-[#FF9800]'
  },

  {
    learnerImage: P6,
    learnerCompany: 'Microsoft India',
    learnerRole: 'Software Engineer',
    learnerImageHeight: 'h-[500px]',
    companyIcon: 'microsoft',
    companyRingColor: 'ring-[#CEA968]'
  }
];

export const Events: Event[] = [
  {
    eventPersonName: 'Regina Phalange',
    eventTitle: 'Nail your interviews',
    eventType: 'Live Event',
    eventPrice: 499,
    eventPersonImage: P7,
    eventPersonNameColor: 'text-[#4DE3ED]'
  },

  {
    eventPersonName: 'Shawn Frost',
    eventTitle: 'Sell your first product online',
    eventType: 'Live Event',
    eventPrice: 499,
    eventPersonImage: P8,
    eventPersonNameColor: 'text-[#91F2A6]',
    cardWrapperMDHeight: 'md:h-[450px]',
    cardWrapperMDWidth: 'md:w-[400px]'
  },

  {
    eventPersonName: 'Rochelle Fernandez',
    eventTitle: 'Learn about no-code tools',
    eventType: 'Live Event',
    eventPrice: 499,
    eventPersonImage: P9,
    eventPersonNameColor: 'text-[#DF91F2]'
  }
];

export const FAQCatogories = ['General', 'Account', 'Payment', 'Support'];

export const QuestionAnswerOfCategory: Record<string, FAQ[]> = {
  'General': [
    {
      question: 'What is your return policy ?',
      answer: 'We offer a 30-day return policy for all items in original condition.'
    },

    {
      question: 'How do I track my order ?',
      answer: 'You can track your order through the tracking link in your confirmation email.'
    }
  ],

  'Account': [
    {
      question: 'How do I reset my password ?',
      answer: 'Go to the login page and click on "Forgot Password" to reset.'
    },

    {
      question: 'Can I change my email adddress ?',
      answer: 'Yes, go to account settings to update your email address.'
    }
  ],

  'Payment': [],
  'Support': []
};

export const FooterSectionArray: FooterSectionArrayType[] = [
  {
    itemName: 'Company',
    itemArray: ['Contact Us', 'Privacy Policy', 'Hire from us', 'Job Portal']
  },

  {
    itemName: 'Product',
    itemArray: ['FSWD Program', 'Job Switch', 'Masterclass', 'Terms', 'Refund Policy']
  }
];

export const JobSwitchMasterclassSessionLearn = [
  'Explore the Bootcamp Curriculum: Learn about key web development skills, including C++, JavaScript, React, and Node.js.',
  '⁠Understand Career Paths: Discover opportunities in full-stack development and software engineering.',
  'Master Technical Skills: Gain hands-on experience in data structures, algorithms, and API design.',
  'Prepare for Interviews: Get insights on coding challenges and system design.', 
  'Leverage AI & DevOps: Understand how to integrate AI and streamline development with DevOps.',
  'Access Placement Support: Learn about mock interviews, resume building, and connections to 550+ companies.'
];

export const JobSwitchMasterclassMentorQualification = [
  'Ex - Software Engineer @Goldman Sachs Poland',
  'Ex - Software Engineer @Adobe, American Express',
  'Offer Holder - Amazon London, The D.E. Shaw Group Luxembourg, Uber'
];

export const MasterclassDataScienceAbout = [
  'A structured, guided, and industry-vetted curriculum',
  'Live classes by faculty who have been there, done that',
  'Regular 1:1 mentorship from industry veterans',
  'Practical experience through real-life projects',
  'Career support via a dedicated recruitment team, alumni network, etc.',
  'Aspirational peer group of 3,500+ Scaler students & alumni'
];

export const MasterClassAlumnis: MasterClassAlumni[] = [
  {
    alumniImage: Alumni1
  },

  {
    alumniImage: Alumni2,
  },

  {
    alumniImage: Alumni3,
  },

  {
    alumniImage: Alumni4,
  }
];

export const MasterClassAlumnisMobile: MasterClassAlumni[] = [
  {
    alumniImage: AlumniMobile1
  },

  {
    alumniImage: AlumniMobile2,
  },

  {
    alumniImage: AlumniMobile3,
  },

  {
    alumniImage: AlumniMobile4,
  }
];

export function initiateOtp() {
  return 'https://auth.otpless.app/auth/v1/initiate/otp';
}

export function otpVerification() {
  return 'https://auth.otpless.app/auth/v1/verify/otp';
}

export function registerWebinarJam() {
  return 'https://api.webinarjam.com/webinarjam/register';
}

export function registerEverWebinar() {
  return 'https://api.webinarjam.com/everwebinar/register';
}

export const getGmtOffset = (timezone: string): string => {
  const date = new Date();

    // Create a new DateTimeFormat instance for the selected timezone
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    // Use the formatter to get a formatted time
    const timeParts = formatter.formatToParts(date);

    // Extract the time zone offset from the parts
    const timeZonePart = timeParts.find(part => part.type === 'timeZoneName');
    
    // Format the GMT offset
    if (timeZonePart) {
      const offset = timeZonePart.value; // This will give something like "GMT+5:30"
      return offset; 
    }

    return 'GMT+00:00'; 
};

export function isValidMobileNumber(mobileNumber: string): boolean {
  const indianMobilePattern = /^[6-9]\d{9}$/;
  return indianMobilePattern.test(mobileNumber);
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export const Companies = [Amazon, Apple, Atlassian, Lyft, Zomato, Google, Meta, Microsoft, Netflix, Lyft, Meta, Atlassian];


export const PastLearners: PastLearner[] = [
  {
    learnerImage: PastLearner1
  },

  {
    learnerImage: PastLearner1
  },

  {
    learnerImage: PastLearner1
  },

  {
    learnerImage: PastLearner1
  },

  {
    learnerImage: PastLearner1
  },

  {
    learnerImage: PastLearner1
  },

  {
    learnerImage: PastLearner1
  },

  {
    learnerImage: PastLearner1
  },

  {
    learnerImage: PastLearner1
  },

  {
    learnerImage: PastLearner1
  }
];

export const FooterIcons: Icon[] = [
  {
    iconName: FaFacebookF,
    iconLink: 'https://www.facebook.com/people/InterviewCall/61564708864260/',
  },

  {
    iconName: FaYoutube,
    iconLink: 'https://www.youtube.com/@InterviewCall'
  },

  {
    iconName: BsTwitterX,
    iconLink: 'https://x.com/interviewCall24'
  },

  {
    iconName: FaLinkedin,
    iconLink: 'https://www.linkedin.com/company/interviewcall/'
  },

  {
    iconName: FaInstagram,
    iconLink: 'https://www.instagram.com/interviewcall.club/'
  },

  {
    iconName: FaSpotify,
    iconLink: 'https://open.spotify.com/show/6LtpSAX4VBGzunKSkyzfDD?si=0f4a6bfac28f4b70'
  }
];