  // useEffect(() => {
  //   if (pathName == '/fullstack-mern') {
  //     setTitle('Get Job Ready for Top Tech Companies');
  //     setDescription(
  //       '8-month structured program building all the right skills you need to get placed at top tech companies.'
  //     );
  //   } else if (pathName == '/job-switch' || pathName == '/program') {
  //     setTitle('Level Up Your Career & Grab Your Dream Tech Job');
  //     setDescription(
  //       '6-month program designed by industry leaders to accelerate your switch to top product companies.'
  //     );
  //   } else if (pathName == '/transformer') {
  //     setTitle('Upskill & Ace Your Tech Career');
  //     setDescription('Program designed by industry leaders to accelerate your switch to top product companies.');
  //   }
  // }, [pathName]);

import { HeroSectionPropsDetails } from '@/types';


export const heroSectionDetails: HeroSectionPropsDetails = {
    '/job-switch': {
        title: 'Level Up Your Career & Grab Your Dream Tech Job',
        description: '6-month program designed by industry leaders to accelerate your switch to top product companies.'
    },

    '/program': {
        title: 'Level Up Your Career & Grab Your Dream Tech Job',
        description: '6-month program designed by industry leaders to accelerate your switch to top product companies.'
    },


    '/transformer': {
        title: 'Upskill & Ace Your Tech Career',
        description: 'Program designed by industry leaders to accelerate your switch to top product companies.'
    },

    '/fullstack-mern': {
        title: 'Get Job Ready for Top Tech Companies',
        description: '8-month structured program building all the right skills you need to get placed at top tech companies.'
    }
};