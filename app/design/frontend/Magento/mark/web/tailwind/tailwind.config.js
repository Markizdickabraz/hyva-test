const {
    spacing
} = require('tailwindcss/defaultTheme');

const colors = require('tailwindcss/colors');

const hyvaModules = require('@hyva-themes/hyva-modules');

module.exports = hyvaModules.mergeTailwindConfig({
    theme: {
        extend: {
            content: {
                'border': "url('../images/border.svg')",
            },
            backgroundImage: {
                'hero': "url('../images/hero.png')",
                'heroTab': "url('../images/hero-bg-tab.png')",
                'heroDesk': "url('../images/heroDesk.png')",
                'heroDeskXXL': "url('../images/hero-desk-xxl.png')",
                'slider': "url('../images/slider.png')",
                'sliderTab': "url('../images/slider-tab.png')",
                'sliderDesc': 'url(../images/slider-desc.png)',
                'formTab': "url('../images/form.png')",
                'formDesc': "url('../images/form-desc.png')",
            },
            boxShadow: {
                cardShadow: '0px 5px 15px 0px rgba(0, 0, 0, 0.10)'
            }, dropShadow: {
                cardShadow: '0px 5px 15px 0px rgba(0, 0, 0, 0.10)'
            },
            spacing: {
                btnNav: '-24px',
                '200': '200px',
                'card4top': '-160px',
                'card6top': '-112px',
                '2px': '2px',
            },
            margin: {
                hero: '0 -1.5rem 0 -1.5rem',
                adv: '0 -1.5rem',
                'm-0-auto': '0 auto',
                '74': '74px',
            },
            screens: {
                'xs': '375px',
                // => @media (min-width: 375px) { ... }
                's': '425px',
                // => @media (min-width: 425px) { ... }
                'sm': '640px',
                // => @media (min-width: 640px) { ... }
                'md': '768px',
                // => @media (min-width: 768px) { ... }
                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }
                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }
                '2xl': '1440px',
                // => @media (min-width: 1440px) { ... }
                '3xl': '1500px',
                // => @media (min-width: 1500px) { ... }
                '4xl': '1920px',
                // => @media (min-width: 1920px) { ... }
                '5xl': '2560px',
                // => @media (min-width: 2560px) { ... }
            },
            fontFamily: {
                sans: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"]
            },
            fontSize: {
                '37': '37px',
            },
            borderRadius: {
                borderRadBtn: '0 10px 0 10px',
                borderRadCard: '5px',
                borderForm: '0 20px 0 20px'
            },
            colors: {
                reviewColor: '#B0B0B0',
                customRed: '#EB212E',
                cardBorder: '#F0F0F0',
                footerWorks: '#909090',
                footerForm: '#5C5C5C',
                input: 'rgba(255, 255, 255, 0.79)',
                primary: {
                    lighter: colors.blue['300'],
                    "DEFAULT": colors.blue['800'],
                    darker: colors.blue['900']
                },
                secondary: {
                    lighter: colors.blue['100'],
                    "DEFAULT": colors.blue['200'],
                    darker: colors.blue['300']
                },
                background: {
                    lighter: colors.blue['100'],
                    "DEFAULT": colors.blue['200'],
                    darker: colors.blue['300']
                },
                green: colors.emerald,
                yellow: colors.amber,
                purple: colors.violet
            },
            textColor: {
                orange: colors.orange,
                red: {
                    ...colors.red,
                    "DEFAULT": colors.red['500']
                },
                primary: {
                    lighter: colors.gray['700'],
                    "DEFAULT": colors.gray['800'],
                    darker: colors.gray['900']
                },
                secondary: {
                    lighter: colors.gray['400'],
                    "DEFAULT": colors.gray['600'],
                    darker: colors.gray['800']
                }
            },
            padding: {
                '120': '120px',
                padBtn: '37.5px',
                padCard: '16.36px 24px 24.79px 24px',
                footerMob: '30px 16px 27px 16px',
                footerTab: '32px 24px',
            },
            width: {
                beforeDesc: '850px',
            },
            maxWidth: {
                cardMax: '288px',
            },
            backgroundColor: {
                input: 'rgba(255, 255, 255, 0.79)',
                footerBg: '#FAFAFA',
                advBg: '#E8E8E8',
                primary: {
                    lighter: colors.blue['600'],
                    "DEFAULT": colors.blue['700'],
                    darker: colors.blue['800']
                },
                secondary: {
                    lighter: colors.blue['100'],
                    "DEFAULT": colors.blue['200'],
                    darker: colors.blue['300']
                },
                container: {
                    lighter: '#ffffff',
                    "DEFAULT": '#fafafa',
                    darker: '#f5f5f5'
                },
                catalogBtn: '#E8E8E8',
                btnRed: '#EB212E'
            },
            borderColor: {
                primary: {
                    lighter: colors.blue['600'],
                    "DEFAULT": colors.blue['700'],
                    darker: colors.blue['800']
                },
                secondary: {
                    lighter: colors.blue['100'],
                    "DEFAULT": colors.blue['200'],
                    darker: colors.blue['300']
                },
                container: {
                    lighter: '#f5f5f5',
                    "DEFAULT": '#e7e7e7',
                    darker: '#b6b6b6'
                }
            },
            minWidth: {
                8: spacing["8"],
                20: spacing["20"],
                40: spacing["40"],
                48: spacing["48"],
                cardMin: '264px',
                btnMin: '120px'
            },
            height: {
                mobHero: '496px',
                '76': '76px',
                '88': '88px',
                '95': '95px',
                '257': '257px',
                '272': '272px',
                '336': '336px',
                '352': '352px',
                '365': '365px',
                '384': '384px',
                '408': '408px',
                '443': '443px',
                '448': '448px',
            },
            minHeight: {
                14: spacing["14"],
                a11y: '44px',
                'screen-25': '25vh',
                'screen-50': '50vh',
                'screen-75': '75vh'
            },
            maxHeight: {
                '0': '0',
                'screen-25': '25vh',
                'screen-50': '50vh',
                'screen-75': '75vh',
            },
            container: {
                center: true,
                padding: '1.5rem'
            }
        }
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
    // Examples for excluding patterns from purge
    content: [
        // this theme's phtml and layout XML files
        '../../**/*.phtml',
        '../../*/layout/*.xml',
        '../../*/page_layout/override/base/*.xml',
        // parent theme in Vendor (if this is a child-theme)
        '../../../../../../../vendor/hyva-themes/magento2-default-theme/**/*.phtml',
        '../../../../../../../vendor/hyva-themes/magento2-default-theme/*/layout/*.xml',
        '../../../../../../../vendor/hyva-themes/magento2-default-theme/*/page_layout/override/base/*.xml',
        // app/code phtml files (if need tailwind classes from app/code modules)
        //'../../../../../../../app/code/**/*.phtml',
    ]
});
