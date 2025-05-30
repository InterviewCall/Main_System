import defaultTheme from 'tailwindcss/defaultTheme';
import { Config } from 'tailwindcss/types/config';

export default {
    darkMode: ['class'],
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
  	extend: {
  		borderWidth: {
  			gradient: '1px'
  		},
  		backgroundImage: {
  			'gradient-border': 'linear-gradient(90deg, #00FFE0, #000)',
  			'text-gradient': 'linear-gradient(90.34deg, #FFFFFF 0%, #B3A7B2 99.64%)',
  			'text-red': 'linear-gradient(90.34deg, #FF4C65 0%, #FFFFFF 99.64%)',
  			'black-to-blue': 'linear-gradient(to bottom, #000000, #2C3F8E)',
  			'card-gradient': 'linear-gradient(45deg, #2A499A, #022B84)',
  			'custom-gradient': 'linear-gradient(90deg, rgba(192, 192, 192, 0), #ffffff, rgba(192, 192, 192, 0))'
  		},
  		boxShadow: {
  			'custom-multi': '10px 0px 40px rgba(11, 36, 99, 1)',
  			'blue-multi': '10px 0px 40px rgba(0, 194, 255, 1)',
  			'red-multi': '10px 0px 40px rgba(255, 76, 101, 1)',
  			'red-multi-2': '10px 0px 40px, rgba(130, 41, 63, 0.5)',
  			'yellow-multi': '10px 0px 40px rgba(236, 194, 49, 1)',
  			'green-multi': '10px 0px 40px rgba(49, 236, 113, 1)',
  			'orange-multi': '10px 0px 40px rgba(236, 113, 49, 1)'
  		},
  		fontFamily: {
  			primary: [
  				'Inter',
                    ...defaultTheme.fontFamily.sans
                ],
  			inter: [
  				'Inter',
  				'sans-serif'
  			],
  			mulish: [
  				'Mulish',
  				'sans-serif'
  			],
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			]
  		},
  		colors: {
  			primary: {
  				'50': 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
  				'100': 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
  				'300': 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
  				'400': 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
  				'500': 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
  				'600': 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
  				'700': 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
  				'800': 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
  				'900': 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
  				'950': 'rgb(var(--tw-color-primary-950) / <alpha-value>)',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			dark: '#222222',
  			primaryblue: '#0A203E',
  			ankerblue: '#0052FF',
  			darkblue: '#021028',
  			teal: '#00FFE0',
  			violet: '#373FFF',
  			'header-grey': '#BFCBE3',
  			'select-card': '#152037',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		screens: {
  			xs: '300px',
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1366px',
  			'2xl': '1440px',
  			base: '1920px'
  		},
  		keyframes: {
  			flicker: {
  				'0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
  					opacity: '0.99',
  					filter: 'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))'
  				},
  				'20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
  					opacity: '0.4',
  					filter: 'none'
  				}
  			},
  			shimmer: {
  				'0%': {
  					backgroundPosition: '-700px 0'
  				},
  				'100%': {
  					backgroundPosition: '700px 0'
  				}
  			},
  			rotateInfinite: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			shine: {
  				'0%': {
  					left: '-100%'
  				},
  				'20%': {
  					left: '100%'
  				},
  				'100%': {
  					left: '100%'
  				}
  			},
  			shake: {
  				'10%, 90%': {
  					transform: 'translate3d(-1px, 0, 0)'
  				},
  				'20%, 80%': {
  					transform: 'translate3d(2px, 0, 0)'
  				},
  				'30%, 50%, 70%': {
  					transform: 'translate3d(-4px, 0, 0)'
  				},
  				'40%, 60%': {
  					transform: 'translate3d(4px, 0, 0)'
  				}
  			}
  		},
  		animation: {
  			flicker: 'flicker 3s linear infinite',
  			shimmer: 'shimmer 1.3s linear infinite',
  			rotateSlow: 'rotateInfinite 30s linear infinite',
  			shine: 'shine 2s linear infinite',
  			shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('@tailwindcss/forms'), require('daisyui'), require('tailwindcss-animate')],
  daisyui: {
    themes: [],
  },
} satisfies Config;
