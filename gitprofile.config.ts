// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'TejasDhole', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['TejasDhole/CRUD-Application', 'TejasDhole/Authentication--project-J2EE-','TejasDhole/BookHub','TejasDhole/Diliciosa','TejasDhole/flutter-firebase_otp_verification'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'BOOKHUB',
          description:
            'Kotlin based android app where all the list of book and their descriptions  ',
          imageUrl:
            '',
          link: 'https://github.com/TejasDhole/BookHub.git',
        },
        {
          title: 'Login and Registration System (J2EE)',
          description:
            'Develop secure web application using Servlet,JSP & JDBC',
          imageUrl:
            '',
          link: 'https://github.com/TejasDhole/Authentication--project-J2EE-.git',
        },
        {
          title: 'CRUD application of android',
          description:
            'A simple CRUD Android application that allows users to create, view, edit, and delete posts, featuring upvoting and downvoting functionalities',
          imageUrl:
            '',
          link: 'https://github.com/TejasDhole/CRUD-Application.git',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Tejas Dhole',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'tejas-dhole',
    twitter: '@Tejasdhole13',
    mastodon: '',
    Leetcode: 'tejas_22_',
    Hackerank: 'dholetejas039',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+91 9356705178',
    email: 'dholetejas039@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
     // Programming skills
    { name: 'Java', domain: 'Programming', color: '#FF5733' },
    { name: 'C/C++', domain: 'Programming', color: '#3366FF' },
    { name: 'Kotlin', domain: 'Programming', color: '#FF4081' },
    { name: 'XML', domain: 'Programming', color: '#4CAF50' },
    // Add more programming skills...

    // Operating System skills
    { name: 'Linux', domain: 'Operating System', color: '#795548' },
    { name: 'Windows', domain: 'Operating System', color: '#2196F3' },
    // Add more OS skills...

    // Tools skills
    { name: 'Git', domain: 'Tools', color: '#FFC107' },
    { name: 'Postman', domain: 'Tools', color: '#FF9800' },
    // Add more tools...

  ],
  experiences: [
    {
      company: 'Liveasy Logistics',
      position: 'Android intern',
      from: 'January 2024',
      to: 'Present',
      companyLink: 'https://liveasy.net.in/',
    },
    {
      company: 'PHN Technology Pvt Ltd',
      position: 'Android Intern',
      from: 'April 2023',
      to: 'June 2023',
      companyLink: 'https://phntechnology.com/',
    },
  ],
  certifications: [
    {
      name: 'Android App Development',
      body: '',
      year: 'February 2023',
      link: 'https://trainings.internshala.com/view_certificate/94nktk5czei/gvwi7jov8v2/',
    },
    {
      name: 'Technical Aspect of Cyber Security',
      body: '',
      year: 'November 2022',
      link: 'https://drive.google.com/file/d/10fe7cMEXSdC3tfWWkBCJap599OaoRBvy/view',
    },
  ],
  educations: [
    {
      institution: 'PCETS NUTAN MAHARASHTRA INSTITUTE OF ENGINEERINGAND TECHNOLOGY, PUNE',
      degree: 'B.E in Computer Science',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'ARMY PUBLIC SCHOOL PATIALA',
      degree: '12th | CBSE',
      from: '2019',
      to: '2021',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/TejasDhole"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
