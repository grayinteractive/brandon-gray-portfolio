import { css } from 'styled-components';

const displaySizes = {
  desktop: 2160,
  tablet: 1024,
  phone: 425
}

// Iterate through the sizes and create a media template
export const mediaSize = Object.keys(displaySizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${displaySizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})



export const menuPageOptions = [
  {
    text: 'Home',
    route: '/',
    colour: '#85CEE8'
  },
  {
    text: 'About',
    route: '/about',
    colour: '#02A3EE'
  },
  {
    text: 'Work Experience',
    route: '/experience',
    colour: '#65d4FF'
  },
  {
    text: 'Past Projects',
    route: '/projects',
    colour: '#305077'
  },
  {
    text: 'Blog',
    route: '/blog',
    colour: '#00BA93'
  }
];

export const contactOptions = [
  {
    text: 'say hi!',
  },
  {
    text: 'resume'
  },
  {
    text: 'github'
  },
  {
    text: 'linkedin'
  }
];

export const resumeOptions = [
  {
    name: 'Current',
    previewSource: '/img/resume/current-resume.png',
    downloadName: 'Brandon Gray - Resume',
    downloadSource: '/docs/current-resume.pdf',
    color: '#88dbe3'
  },
];

export const greetingOptions = ['Hi!', 'Hey!', 'Heya!', 'Yo!', 'Salut!', '👋🏿 !']

export const roleOptions = ['Web Developer 👨🏿‍💻', 'UI Designer 🎨', 'Avid Traveller 🌍', 'Martial Artist 🥋', 'Trekkie 🖖🏿']

export const particleConfig = {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 3500
      }
    },
    "color": {
      "value": ["#85CEE8","#02A3EE","#65d4FF","#305077","#DEE7F9"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4.008530152163807,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
