import { AlumniCardType, Course, IHeroStat, Mentor } from '@/types';
import M1 from '~/images/Mentor1.png';
import M2 from '~/images/Mentor2.png';
import M3 from '~/images/Mentor3.png';
import N1 from '~/images/N1.png';
import N2 from '~/images/N2.png';
import N3 from '~/images/N3.png';


export const HeroSectionOptions = [
    'Placement Assistance',
    'MAANG Faculty',
    'AI-infused curriculum',
    '1:1 Mentorship',
  ];
  
export const HeroSectionStats: IHeroStat[] = [
    {
      count: '95%',
      title: 'Placement rate',
    },
    {
      count: '1200+',
      title: 'Hiring partners',
    },
    {
      count: '128%',
      title: 'Average hike',
    },
    {
      count: '1.5 L+',
      title: 'Learners',
    },
];

export const AlumniCards: AlumniCardType[] = [
  {
    cardImage: N3,
    checkTitle: 'Product Designer',
    videoPath: '/resources/W3.mp4',
    alumniName: 'FUWAD MUHAMMED',
    alumniJobDesc: 'Aesthetic & visually astute',
    alumniJobDescTextColor: 'text-[#00C2FF]',
    cardWrapperShadowColor: 'shadow-blue-multi',
    cardWrapperBackgroundColor: 'bg-[#00C2FF]',
    cardWrapperRingColor: 'ring-[#00C2FF]',
    cardShadowFromColor: 'from-[#00c3ff75]',
    cardShadowViaColor: 'via-[#00c3ff13]',
    videoPlayButtonBorderColor: 'border-l-[#01b9f19c]',
  },

  {
    cardImage: N1,
    checkTitle: 'Marketing',
    videoPath: '/resources/W2.mp4',
    alumniName: 'ZAINAB MALIK',
    alumniJobDesc: 'Execution Expert',
    alumniJobDescTextColor: 'text-[#FF4C65]',
    cardWrapperShadowColor: 'shadow-red-multi',
    cardWrapperBackgroundColor: 'bg-[#FF4C65]',
    cardWrapperHeight: 'h-[450px]',
    cardWrapperRingColor: 'ring-[#FF4C65]',
    cardShadowFromColor: 'from-[#ff4c647f]',
    cardShadowViaColor: 'via-[#ff4c6412]',
    videoPlayButtonBorderColor: 'border-l-[#ff4c6493]', 
  },

  {
    cardImage: N2,
    checkTitle: 'Accountant',
    videoPath: '/resources/W1.mp4',
    alumniName: 'ETHAN THOMPSON',
    alumniJobDesc: 'Insightful analysis',
    alumniJobDescTextColor: 'text-[#ECC231]',
    cardWrapperShadowColor: 'shadow-yellow-multi',
    cardWrapperBackgroundColor: 'bg-[#ECC231]',
    cardWrapperRingColor: 'ring-[#ECC231]',
    cardShadowFromColor: 'from-[#ecc3317d]',
    cardShadowViaColor: 'via-[#ecc3310d]',
    videoPlayButtonBorderColor: 'border-l-[#ecc3318c]', 
  }
];

export const Courses: Course[] = [
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
    courseDuration: '1 Month',
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
      'Intro to JS, Syntax, Variables, Scopes',
      'Hoisting, Control Flow Statements'
    ],
  },

  {
    courseName: 'Full Stack Web Developement (Level 2)',
    courseDuration: '1 Month',
    courseDescription: 'You will learn JS fundamentals and advanced concepts like Async/Await, ES6 and DOM manipulation. You will learn Backend Developement with Node.js, Express and MVC enabling you to build dynamic, scalable applications and write efficient maintainable code.',
    courseKeyPoints: [
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
    courseDuration: '1 Month',
    courseDescription: 'You will learn MongoDB Integration, authentication with Passport JS and real time communication with web sockets, along with react for building dynamic front-end application',
    courseKeyPoints: [
      'Intro to MongoDB, Integration with Backend',
      'Intro to Cookies & Authentication',
      'Implementation with Node and Express',
      'Passport JS, Web Sockets, Intro to React',
      'Directory Structure, JSX, React Component'
    ],
  },

  {
    courseName: 'Full Stack Web Developement (Level 4)',
    courseDuration: '1 Month',
    courseDescription: 'You will learn to build React apps with Class/Functional Component, State, Props, Hooks, and Redux for efficient state management and naigation',
    courseKeyPoints: [
      'Class based Components',
      'Functional Based Components',
      'Life Cycle Methods, Props, State, Hooks Intro',
      'Forms, APIs & Events, Routers & Lists, Redux'
    ],
  },

  {
    courseName: 'System Design LLD + HLD (Level 1)',
    courseDuration: '2 Weeks',
    courseDescription: 'You will learn JS fundamentals and advanced concepts like Async/Await, ES6 and DOM manipulation. You will learn Backend Developement with Node.js, Express and MVC enabling you to build dynamic, scalable applications and write efficient maintainable code.',
    courseKeyPoints: [
      'Top-down steps for Design Interviews',
      'Depth and Bredth Analysis',
      'Cryptographic Hash Functions',
      'Network Protocols, Web Server',
      'Hash Index, Scaling, Horizontal vs Vertical',
      'For Data Size, For Throughut',
      'For Fault Tolerance, Foe Geolocation',
      'For Hotspots'
    ],
  },

  {
    courseName: 'System Design LLD + HLD (Level 2)',
    courseDuration: '2 Weeks',
    courseDescription: 'You will learn MongoDB Integration, authentication with Passport JS and real time communication with web sockets, along with react for building dynamic front-end application',
    courseKeyPoints: [
      'Corectness, Availablity, Throughput',
      'Response Time, SLOs and SLAs, Proxy',
      'Reverse and Forward, Load Balancing',
      'Replication, Single Leader, Multi Leader',
      'Leaderless, CAP Theorem, CDN, Cache',
      'Reads and Writes, LRU Cache, Strategies'
    ],
  },

  {
    courseName: 'System Design LLD + HLD (Level 3)',
    courseDuration: '2 Weeks',
    courseDescription: 'You will learn to build React apps with Class/Functional Component, State, Props, Hooks, and Redux for efficient state management and naigation',
    courseKeyPoints: [
      'Sharding, Consistent Hashing Storage',
      'Key-Value Stores, Relatinal Database',
      'Tree Index, SQL, Normalization and Keys',
      'Acid Transactions, Big Data, NoSQL',
      'URL Shortner, Instagram, Uber',
      'Twitter Messaging/Chat Services'
    ],
  },

  {
    courseName: 'Soft Skills (Level 1)',
    courseDuration: '1 Month',
    courseDescription: 'You will learn JS fundamentals and advanced concepts like Async/Await, ES6 and DOM manipulation. You will learn Backend Developement with Node.js, Express and MVC enabling you to build dynamic, scalable applications and write efficient maintainable code.',
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
    courseDuration: '1 Month',
    courseDescription: 'You will learn JS fundamentals and advanced concepts like Async/Await, ES6 and DOM manipulation. You will learn Backend Developement with Node.js, Express and MVC enabling you to build dynamic, scalable applications and write efficient maintainable code.',
    courseKeyPoints: [
      'Building Confidence, Limiting Beliefs',
      'Building Rapport, Connect before you speak',
      'Listening and Assertive Communication',
      'Body Language'
    ],
  },
  
  {
    courseName: 'Soft Skills (Level 3)',
    courseDuration: '1 Month',
    courseDescription: 'You will learn JS fundamentals and advanced concepts like Async/Await, ES6 and DOM manipulation. You will learn Backend Developement with Node.js, Express and MVC enabling you to build dynamic, scalable applications and write efficient maintainable code.',
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
  topPositions: ['top-0', 'top-2', 'top-4'],
  leftPositions: ['left-16', 'left-28', 'left-40'],
  zIndexes: ['z-[70]', 'z-[60]', 'z-[50]'],
  cardHeight: ['375px', '290px', '240px'],
  cardWidth: ['240px', '220px', '200px']
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
    mentorExperience: 'Software Engineer 3 @Google | Ex Associate @Goldman Sachs Ex Software Engineer @UnitedHealth Group 7 Years of Experience | System Design Instructor & Mentor @InterviewCall'
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
    mentorExperience: 'Software Engineer - Microsoft IND. Ex - Goldman Sachs, Rippling, Directi.9 Years of Experience. System Design Instructor & Mentor @InterviewCall.'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[2],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[2],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[2],
    cardHeight: mentorCardPositioning.cardHeight[2],
    cardWidth: mentorCardPositioning.cardWidth[2],
    mentorImage: M3,
    mentorAlt: 'N3',
    mentorName: 'Jyotirmoy Deb',
    mentorExperience: 'Software Engineer - Apple USA. Ex Software Engineer - AT&T. 11 Years of Experience. Web Dev Instructor & Mentor @InterviewCall'
  }
];