import { getCodeList } from 'country-list';
import { CountryCode, getCountryCallingCode, isSupportedCountry } from 'libphonenumber-js';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaLinkedin, FaSpotify, FaYoutube } from 'react-icons/fa';

import * as MainAssests from '@/assets/MainAssests';
import { AlumniCard, Course, Event, FAQ, FooterSectionArrayType, Icon, IHeroStat, Learner, MasterClassAlumni, Mentor, OptionType } from '@/types';

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
    cardImage: MainAssests.A3,
    alumniName: 'Abhinay Reddy',
    checkTitle: 'SDE - Valuefy',
    alumniJobDesc: 'Offer - Valuefy, Knolskape',
    videoPath: 'https://csforall.in/wp-content/uploads/2025/02/Abhinay-Final-Testimonial.mp4',
    alumniJobDescTextColor: 'text-[#ECC231]',
    cardWrapperShadowColor: 'shadow-yellow-multi',
    cardWrapperBackgroundColor: 'bg-[#ECC231]',
    cardShadowFromColor: 'from-[#ecc3317d]',
    cardShadowViaColor: 'via-[#00c3ff13]',
    cardWrapperRingColor: 'ring-[#ECC231]',
    videoPlayButtonBorderColor: 'border-l-[#ecc3318c]'
  },

  {
    cardImage: MainAssests.A2,
    alumniName: 'Shivansh Yashasvi',
    checkTitle: 'SDE - ION',
    alumniJobDesc: 'Offer @Amazon, ION, CISCO',
    videoPath: 'https://csforall.in/wp-content/uploads/2025/02/Shivansh-Testimonial-Final.mp4',
    alumniJobDescTextColor: 'text-[#FF4C65]',
    cardWrapperShadowColor: 'shadow-red-multi',
    cardWrapperBackgroundColor: 'bg-[#FF4C65]',
    cardWrapperHeight: 'h-[416px]',
    cardShadowFromColor: 'from-[#ff4c647f]',
    cardShadowViaColor: 'via-[#ff4c6412]',
    cardWrapperRingColor: 'ring-[#FF4C65]',
    videoPlayButtonBorderColor: 'border-l-[#ff4c6493]'
  },

  // {
  //   cardImage: MainAssests.A1,
  //   alumniName: 'Rounak Goswami',
  //   checkTitle: 'SDE - Morgan Stanley',
  //   alumniJobDesc: 'Offer - Morgan Stanley',
  //   videoPath: 'https://csforall.in/wp-content/uploads/2025/02/Rounak-Goswami-testimonial.mp4',
  //   alumniJobDescTextColor: 'text-[#00C2FF]',
  //   cardWrapperShadowColor: 'shadow-blue-multi',
  //   cardWrapperBackgroundColor: 'bg-[#00C2FF]',
  //   cardShadowFromColor: 'from-[#00c3ff75]',
  //   cardShadowViaColor: 'via-[#00c3ff13]',
  //   cardWrapperRingColor: 'ring-[#00C2FF]',
  //   videoPlayButtonBorderColor: 'border-l-[#01b9f19c]'
  // },

  {
    cardImage: MainAssests.A4,
    alumniName: 'Abhishek Dixit',
    checkTitle: 'Senior SDE - Meesho',
    alumniJobDesc: 'Offer - Goldman Sachs, Meesho',
    videoPath: 'https://csforall.in/wp-content/uploads/2025/02/coming-soon.mp4',
    alumniJobDescTextColor: 'text-[#fa9c02]',
    cardWrapperShadowColor: 'shadow-orange-multi',
    cardWrapperBackgroundColor: 'bg-[#ffa000]',
    cardShadowFromColor: 'from-[#ffa5007d]',
    cardShadowViaColor: 'via-[#00c3ff13]',
    cardWrapperRingColor: 'ring-[#ffa000]',
    videoPlayButtonBorderColor: 'border-l-[#f0c384]'
  },

  {
    cardImage: MainAssests.A6,
    alumniName: 'Yash Choudhary',
    checkTitle: 'SDE - PhonePe',
    alumniJobDesc: 'Offer - PhonePe',
    videoPath: 'https://csforall.in/wp-content/uploads/2025/02/coming-soon.mp4',
    alumniJobDescTextColor: 'text-[#DC143C]',
    cardWrapperShadowColor: 'shadow-red-multi',
    cardWrapperBackgroundColor: 'bg-[#DC143C]',
    cardWrapperHeight: 'h-[416px]',
    cardShadowFromColor: 'from-[#ff4c647f]',
    cardShadowViaColor: 'via-[#ff4c6412]',
    cardWrapperRingColor: 'ring-[#DC143C]',
    videoPlayButtonBorderColor: 'border-l-[#ff4c6493]'
  },

  {
    cardImage: MainAssests.A5,
    alumniName: 'Fahad Ali',
    checkTitle: 'Senior SDE - Razorpay',
    alumniJobDesc: 'Offer - Razorpay',
    videoPath: 'https://csforall.in/wp-content/uploads/2025/02/coming-soon.mp4',
    alumniJobDescTextColor: 'text-[#03fd9a]',
    cardWrapperShadowColor: 'shadow-green-multi',
    cardWrapperBackgroundColor: 'bg-[#03fd9a]',
    cardShadowFromColor: 'from-[#00c3ff75]',
    cardShadowViaColor: 'via-[#00c3ff13]',
    cardWrapperRingColor: 'ring-[#03fd9a]',
    videoPlayButtonBorderColor: 'border-l-[#75e49a]'
  },
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
      'Intro to Bootstrap & Tailwind, Typography, Colors',
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
      'Express Middleware & FS',
      'API Handling, Postman'
    ],
  },

  {
    courseName: 'Full Stack Web Developement (Level 3)',
    courseDuration: '5 Weeks',
    courseDescription: 'You will learn MongoDB Integration, authentication with Passport JS and real time communication with web sockets',
    courseKeyPoints: [
      'Introduction to typescript',
      'Types, Interface, Functions in TypeScript',
      'Enums, Inferring, Unions',
      'Class, Generics, Type vs Interfaces, Generics Interface',
      'Introduction To MongoDB & SQL (MySQL)',
      'Integeration with Backend',
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
    courseDuration: '5 Weeks',
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
      'React Reconcillation',
      'React.js vs Next.js',
      'Intro to Next.js, Hydration',
      'Dynamic Routing',
      'Intro to GraphQL, LLM',
      '8 AI-Capstone Projects',
      'Intro to DevOps',
      'Project Deployment, CI/CD',
      'Docker & Containerization',
      'Intro to AWS, EC2, S3, etc'
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
      'Intro to Bootstrap & Tailwind, Typography, Colors',
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
      'Express Middleware & FS',
      'API Handling, Postman'
    ],
  },

  {
    courseName: 'Full Stack Web Developement (Level 3)',
    courseDuration: '5 Weeks',
    courseDescription: 'You will learn MongoDB Integration, authentication with Passport JS and real time communication with web sockets',
    courseKeyPoints: [
      'Introduction to typescript',
      'Types, Interface, Functions in TypeScript',
      'Enums, Inferring, Unions',
      'Class, Generics, Type vs Interfaces, Generics Interface',
      'Introduction To MongoDB & SQL (MySQL)',
      'Integeration with Backend',
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
    courseDuration: '5 Weeks',
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
      'React Reconcillation',
      'React.js vs Next.js',
      'Intro to Next.js, Hydration',
      'Dynamic Routing',
      'Intro to GraphQL, LLM',
      '8 AI-Capstone Projects',
      'Intro to DevOps',
      'Project Deployment, CI/CD',
      'Docker & Containerization',
      'Intro to AWS, EC2, S3, etc'
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
  leftPositions: ['left-4', 'left-[4.9rem]', 'left-[9.2rem]'],
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
    mentorImage: MainAssests.M1,
    mentorAlt: 'N1',
    mentorName: 'Supriya Sharma',
    mentorExperience: 'Senior Software Engineer @Google USA | Ex Associate @Goldman Sachs | Ex Software Engineer @UnitedHealth Group | 8 Years of Experience | System Design Instructor & Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/supriya-sharma-901675b1/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[1],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[1],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[1],
    cardHeight: mentorCardPositioning.cardHeight[1],
    cardWidth: mentorCardPositioning.cardWidth[1],
    mentorImage: MainAssests.M3,
    mentorAlt: 'N6',
    mentorName: 'Jyotirmoy Deb',
    mentorExperience: 'Software Engineer @Apple USA | Ex Software Engineer - AT&T | 15 Years of Experience | Web Dev Instructor & Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/jyotirmoydeb/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[2],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[2],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[2],
    cardHeight: mentorCardPositioning.cardHeight[2],
    cardWidth: mentorCardPositioning.cardWidth[2],
    mentorImage: MainAssests.M2,
    mentorAlt: 'N2',
    mentorName: 'Vishal Sharma',
    mentorExperience: 'Senior Software Engineer @Microsoft India | Ex SWE @Rippling | Ex Senior Strats Analyst @Goldman Sachs, @Directi | 9 Years of Experience | System Design Instructor & Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/vishal-sharma-b698326b/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[0],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[0],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[0],
    cardHeight: mentorCardPositioning.cardHeight[0],
    cardWidth: mentorCardPositioning.cardWidth[0],
    mentorImage: MainAssests.M9,
    mentorAlt: 'N2',
    mentorName: 'Soham Dasgupta',
    mentorExperience: 'Senior Software Engineer @Microsoft USA | Ex SDE @Amazon USA | Ex Software Engineer @Edgenuity, @TCS | 9 Years of Experience | Leadership Instructor & Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/sohamdasgupta08/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[1],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[1],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[1],
    cardHeight: mentorCardPositioning.cardHeight[1],
    cardWidth: mentorCardPositioning.cardWidth[1],
    mentorImage: MainAssests.M10,
    mentorAlt: 'N5',
    mentorName: 'Gurtej Singh Rehal',
    mentorExperience: 'Senior Software Engineer @Meta London | Ex SDE 2 @Microsoft | Ex Software Engineer @Amazon, @TCS | 5 Years of Experience | Web Dev Instructor & Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/gurtejrehal/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[2],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[2],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[2],
    cardHeight: mentorCardPositioning.cardHeight[2],
    cardWidth: mentorCardPositioning.cardWidth[2],
    mentorImage: MainAssests.M8,
    mentorAlt: 'N5',
    mentorName: 'Sumit Roy',
    mentorExperience: 'Software Engineer 2 @Atlassian | Ex Senior Software Engineer @Unacademy | Ex Software Engineer @bigbasket.com, Cyware Labs | 7 Years of Experience | System Design Instructor & Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/sroy8091/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[0],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[0],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[0],
    cardHeight: mentorCardPositioning.cardHeight[0],
    cardWidth: mentorCardPositioning.cardWidth[0],
    mentorImage: MainAssests.M6,
    mentorAlt: 'N4',
    mentorName: 'Saurabh Singh',
    mentorExperience: 'Software Engineer 3 @Walmart India | Ex Software Engineer @Infosys | 5.5 Years of Experience | Web Dev Instructor & Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/singhster/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[1],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[1],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[1],
    cardHeight: mentorCardPositioning.cardHeight[1],
    cardWidth: mentorCardPositioning.cardWidth[1],
    mentorImage: MainAssests.M12,
    mentorAlt: 'N5',
    mentorName: 'Ankit Gupta',
    mentorExperience: 'Software Engineer 2 @Atlassian India | Ex - Software Engineer @Decision Fiction | 5 Years of Experience | Web Dev Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/i-ankit25/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[2],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[2],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[2],
    cardHeight: mentorCardPositioning.cardHeight[2],
    cardWidth: mentorCardPositioning.cardWidth[2],
    mentorImage: MainAssests.M4,
    mentorAlt: 'N1',
    mentorName: 'Maria Shah',
    mentorExperience: 'Certified Neuro Linguistic Programming (NLP) Instructor | Ex Trainer - ICICI, HDFC, Kotak, Axis | 14 Years of Experience | Soft Skills Instructor & Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/coachmariashah/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[0],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[0],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[0],
    cardHeight: mentorCardPositioning.cardHeight[0],
    cardWidth: mentorCardPositioning.cardWidth[0],
    mentorImage: MainAssests.M5,
    mentorAlt: 'N5',
    mentorName: 'Mostafizur Rahaman',
    mentorExperience: 'Ex Software Engineer @The D.E. Shaw Group India | Ex Software Engineer @Waxwing, getgpt.ai, Infosys | 4 Years of Experience | DSA Instructor & Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/mostafijur-rahaman-21a2aa50/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[1],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[1],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[1],
    cardHeight: mentorCardPositioning.cardHeight[1],
    cardWidth: mentorCardPositioning.cardWidth[1],
    mentorImage: MainAssests.M11,
    mentorAlt: 'N1',
    mentorName: 'Sunyul Hossen',
    mentorExperience: 'Ex Software Engineer @Goldman Sachs Poland, Adobe, American Express | Offers - Amazon London, D.E. Shaw Luxembourg , Uber. Highest CTC of 1.47 Cr | 2 Years of Experience | Interview Strategist @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/shssn/'
  },

  {
    cardWrapperTopPosition: mentorCardPositioning.topPositions[2],
    cardWrapperLeftPosition: mentorCardPositioning.leftPositions[2],
    cardWrapperZIndex: mentorCardPositioning.zIndexes[2],
    cardHeight: mentorCardPositioning.cardHeight[2],
    cardWidth: mentorCardPositioning.cardWidth[2],
    mentorImage: MainAssests.M7,
    mentorAlt: 'N3',
    mentorName: 'Syed Abbas',
    mentorExperience: 'Software Engineer @NEC Corporation India | Ex Software Engineer @Ecera System | 3 Years of Experience | Web Dev Instructor & Mentor @InterviewCall',
    mentorLinkedinProfile: 'https://www.linkedin.com/in/syedabbasnec/'
  },
];

export const Learners: Learner[] = [
  {
    learnerImage: MainAssests.P4,
    learnerCompany: 'Google India',
    learnerRole: 'Software Engineer',
    learnerImageHeight: 'h-[500px]',
    companyIcon: 'google',
    companyRingColor: 'ring-green-600'
  },

  {
    learnerImage: MainAssests.P5,
    learnerCompany: 'Amazon India',
    learnerRole: 'Software Engineer',
    learnerImageHeight: 'h-[570px]',
    companyIcon: 'amazon',
    companyRingColor: 'ring-[#FF9800]'
  },

  {
    learnerImage: MainAssests.P6,
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
    eventPersonImage: MainAssests.P7,
    eventPersonNameColor: 'text-[#4DE3ED]'
  },

  {
    eventPersonName: 'Shawn Frost',
    eventTitle: 'Sell your first product online',
    eventType: 'Live Event',
    eventPrice: 499,
    eventPersonImage: MainAssests.P8,
    eventPersonNameColor: 'text-[#91F2A6]',
    cardWrapperMDHeight: 'md:h-[450px]',
    cardWrapperMDWidth: 'md:w-[400px]'
  },

  {
    eventPersonName: 'Rochelle Fernandez',
    eventTitle: 'Learn about no-code tools',
    eventType: 'Live Event',
    eventPrice: 499,
    eventPersonImage: MainAssests.P9,
    eventPersonNameColor: 'text-[#DF91F2]'
  }
];

export const FAQCatogories = ['Eligibility', 'Services Offered', 'Scheduling and Availability', 'Pricing and Payment', 'Technical Requirements', 'Support'];

export const QuestionAnswerOfCategory: Record<string, FAQ[]> = {
  'Eligibility': [
    {
      question: 'Who is eligible to use Interviewcall\'s services?',
      answer: 'Our platform is designed for job seekers across various experience levels, from recent graduates to seasoned professionals'
    },

    {
      question: 'Do I need prior interview experience to benefit from Interviewcall?',
      answer: 'No prior interview experience is necessary. Our resources cater to individuals at all stages of their career journey.'
    }
  ],

  'Services Offered': [
    {
      question: 'What services does Interviewcall provide?',
      answer: 'We offer a range of services including mock interviews, resume reviews, and personalized feedback sessions to help you prepare effectively for job interviews.'
    },

    {
      question: 'Are the mock interviews conducted live or pre-recorded?',
      answer: 'Our mock interviews are conducted live by experienced professionals to simulate real interview scenarios.'
    }
  ],

  'Scheduling and Availability': [
    {
      question: 'How can I schedule a mock interview?',
      answer: 'After signing up, you can access our scheduling portal to book a session at a time that suits you.'
    },

    {
      question: 'What if I need to reschedule my session?',
      answer: 'You can reschedule your session through our platform, provided you do so at least 24 hours in advance.'
    }
  ],
  'Pricing and Payment': [
    {
      question: 'What are the costs associated with Interviewcall\'s services?',
      answer: 'We offer various packages to suit different needs. Please visit our pricing page for detailed information.'
    },

    {
      question: 'Do you offer any discounts or promotions?',
      answer: 'We periodically offer discounts for new users and referrals. Check our website or subscribe to our newsletter for the latest offers.'
    }
  ],

  'Technical Requirements': [
    {
      question: 'What do I need for the online sessions?',
      answer: 'A stable internet connection, a functioning webcam, and a quiet environment are essential for effective sessions.'
    },

    {
      question: 'Do I need to install any software?',
      answer: 'Our sessions are conducted via commonly used video conferencing tools. Necessary instructions will be provided upon booking.'
    }
  ],

  'Support': [
    {
      question: 'How can I contact Interviewcall for support?',
      answer: 'For any inquiries or support, please email us at support@interviewcall.com or use the contact number on our website.'
    },

    {
      question: 'What if I encounter technical issues during a session?',
      answer: 'In case of technical difficulties, please inform your interviewer immediately. We will work to resolve the issue promptly or reschedule if necessary.'
    },
  ]
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

export const FSDWMasterclassSessionLearn = [
  'Full Stack Development Essentials – Master key front-end and back-end technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
  'Job Market Insights – Understand the demand for full stack developers and explore career opportunities with top tech companies.',
  'Interview Preparation – Get ready for tech interviews with a focus on coding assessments, system design, and impressing hiring managers.',
  'DevOps Practices – Learn how to streamline development processes, improve collaboration, and deploy applications efficiently with modern DevOps tools.', 
  'AI Integration – Discover how to incorporate AI into your web development projects to build smarter applications and stay ahead of the curve in the evolving tech landscape.',
  'Building Your Portfolio – Learn how to create a standout portfolio with real-world projects that demonstrate your skills to potential employers.',
  'Career Growth Strategies – Find out how to continuously upskill and stay competitive in the fast-changing tech industry.'
];

export const FSDWMasterclassMentorQualification = [
  'Ex - Software Engineer @Goldman Sachs Poland',
  'Ex - Software Engineer @Adobe, American Express',
  'Offer Holder - Amazon London, The D.E. Shaw Group Luxembourg, Uber'
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
    alumniImage: MainAssests.Alumni1
  },

  {
    alumniImage: MainAssests.Alumni2,
  },

  {
    alumniImage: MainAssests.Alumni3,
  },

  {
    alumniImage: MainAssests.Alumni4,
  }
];

export const MasterClassAlumnisMobile: MasterClassAlumni[] = [
  {
    alumniImage: MainAssests.AlumniMobile1
  },

  {
    alumniImage: MainAssests.AlumniMobile2,
  },

  {
    alumniImage: MainAssests.AlumniMobile3,
  },

  {
    alumniImage: MainAssests.AlumniMobile4,
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

export const CompaniesRow1 = [MainAssests.Apple, MainAssests.Amazon, MainAssests.Atlassian, MainAssests.C1, MainAssests.C2, MainAssests.C3, MainAssests.C4, MainAssests.C5, MainAssests.C6, MainAssests.C7, MainAssests.C8, MainAssests.C9, MainAssests.C10, MainAssests.C11, MainAssests.C12, MainAssests.C13, MainAssests.C14, MainAssests.C15];
export const CompaniesRow2 = [MainAssests.Google, MainAssests.Lyft, MainAssests.Meta, MainAssests.C16, MainAssests.C17, MainAssests.C18, MainAssests.C19, MainAssests.C20, MainAssests.C21, MainAssests.C22, MainAssests.C23, MainAssests.C24, MainAssests.C25, MainAssests.C26, MainAssests.C27, MainAssests.C28, MainAssests.C29, MainAssests.C30];
export const CompaniesRow3 = [MainAssests.Microsoft, MainAssests.Netflix, MainAssests.Zomato, MainAssests.C31, MainAssests.C32, MainAssests.C33, MainAssests.C34, MainAssests.C35, MainAssests.C36, MainAssests.C37, MainAssests.C38, MainAssests.C39, MainAssests.C40, MainAssests.C41, MainAssests.C42, MainAssests.C43, MainAssests.C44, MainAssests.C45];


export const PastLearnersRow1 = [
 MainAssests.PastLearner1,
 MainAssests.PastLearner2,
 MainAssests.PastLearner3,
 MainAssests.PastLearner4,
 MainAssests.PastLearner5,
 MainAssests.PastLearner6,
 MainAssests.PastLearner7,
 MainAssests.PastLearner8,
 MainAssests.PastLearner9,
 MainAssests.PastLearner10,
 MainAssests.PastLearner11,
 MainAssests.PastLearner12
];

export const PastLearnersRow2 = [
  MainAssests.PastLearner13,
  MainAssests.PastLearner14,
  MainAssests.PastLearner15,
  MainAssests.PastLearner16,
  MainAssests.PastLearner17,
  MainAssests.PastLearner18,
  MainAssests.PastLearner19,
  MainAssests.PastLearner20,
  MainAssests.PastLearner21,
  MainAssests.PastLearner22,
  MainAssests.PastLearner23,
  MainAssests.PastLearner24
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

export const AllCompanies = [
  MainAssests.Amazon,
  MainAssests.Apple,
  MainAssests.Atlassian,
  MainAssests.Google,
  MainAssests.Lyft,
  MainAssests.Meta,
  MainAssests.Microsoft,
  MainAssests.Netflix,
  MainAssests.Zomato,
  MainAssests.C1,
  MainAssests.C2,
  MainAssests.C3,
  MainAssests.C4,
  MainAssests.C5,
  MainAssests.C6,
  MainAssests.C7,
  MainAssests.C8,
  MainAssests.C9,
  MainAssests.C10,
  MainAssests.C11,
  MainAssests.C12,
  MainAssests.C13,
  MainAssests.C14,
  MainAssests.C15,
  MainAssests.C16,
  MainAssests.C17,
  MainAssests.C18,
  MainAssests.C19,
  MainAssests.C20,
  MainAssests.C21,
  MainAssests.C22,
  MainAssests.C23,
  MainAssests.C24,
  MainAssests.C25,
  MainAssests.C26,
  MainAssests.C27,
  MainAssests.C28,
  MainAssests.C29,
  MainAssests.C30,
  MainAssests.C31,
  MainAssests.C32,
  MainAssests.C33,
  MainAssests.C34,
  MainAssests.C35,
  MainAssests.C36,
  MainAssests.C37,
  MainAssests.C38,
  MainAssests.C39,
  MainAssests.C40,
  MainAssests.C41,
  MainAssests.C42,
  MainAssests.C43,
  MainAssests.C44,
  MainAssests.C45
];

// export const getCountryOptions = () => {
//   try {
//     const countryList = getCodeList();
//     if (!countryList || Object.keys(countryList).length === 0) {
//       console.error('getCodeList() returned an empty object.');
//       return [];
//     }

//     return Object.keys(countryList)
//       .map((countryCode) => {
//         const upperCaseCode = countryCode.toUpperCase() as CountryCode;

//         try {
//           const callingCode = getCountryCallingCode(upperCaseCode);
//           if (!callingCode) return null; // Skip if calling code is not found

//           return {
//             value: upperCaseCode,
//             label: `${upperCaseCode} (+${callingCode})`,
//           };
//         } catch (error) {
//           console.warn(`Error fetching calling code for ${upperCaseCode}:`, error);
//           return null;
//         }
//       })
//       .filter(Boolean) as OptionType[];
//   } catch (error) {
//     console.error('Error fetching country list:', error);
//     return [];
//   }
// };

export const getCountryOptions = () => {
  try {
    const countryList = getCodeList();

    if (!countryList || Object.keys(countryList).length === 0) {
      // console.error('getCodeList() returned an empty object.');
      return [];
    }

    return Object.keys(countryList)
      .map((countryCode) => {
        const upperCaseCode = countryCode.toUpperCase() as CountryCode;
        
        if (!isSupportedCountry(upperCaseCode)) {
          // console.warn(`Skipping unsupported country code: ${upperCaseCode}`);
          return null;
        }

        try {
          const callingCode = getCountryCallingCode(upperCaseCode);
          return {
            value: upperCaseCode,
            label: `${upperCaseCode} (+${callingCode})`,
          };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          // console.warn(`Error fetching calling code for ${upperCaseCode}:`, error);
          return null;
        }
      })
      .filter(Boolean) as OptionType[];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // console.error('Error fetching country list:', error);
    return [];
  }
};

