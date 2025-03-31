/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import vwoLogoLight from "./assets/images/vwo-logo-color.svg";
import vwoLogoDark from "./assets/images/vwo-logo-white.svg";
import databaseLottie from "./assets/lottie/database.json";

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Harsh",
  title: "Hi all, I'm Harsh",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HarshDangi",
  linkedin: "https://www.linkedin.com/in/harshdangi/",
  gmail: "dangiharsh@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skills = {
  js: "JavaScript",
  ts: "Typescript",
  python: "Python",
  java: "Java",
  react: "React.js",
  node: "Node.js",
  cloud: "GCP/AWS",
  scikit: "scikit-learn",
  matplot: "matplolib"
};

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
    // {
    //   skillName: "kubernetes",
    //   fontAwesomeClassname: "fab fa-dharmachakra"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Edinburgh",
      logo: require("./assets/images/UoELogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2023 - August 2024",
      desc: "Grade: Distinction",
      descBullets: [
        "Focused on Parallel Processing and Distribtued Computing.",
        "Forayed into Machine Learning, Deep Learning and Quantum Computing."
      ]
    },
    {
      schoolName: "Maharaja Surajmal Institute of Technology",
      logo: require("./assets/images/msitLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "September 2016 - August 2020",
      desc: "CGPA: 8.71",
      descBullets: [
        "Subjects: Operating Systems, Computer Networks, Database Managment Systems, Finite Automata, Discrete Mathematics"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "VWO",
      companylogo: vwoLogoLight,
      companylogoDark: vwoLogoDark,
      logoStyle: {objectFit: "contain"},
      date: "November 2020 – August 2023",
      desc: "Teams: Visual Website Editor, Campaign Application library, DaCDN",
      descBullets: [
        "Re-invented the core library with Web Workers and Event-Architecture",
        "Dvelopment of no-code website editor",
        "Held ownership of VWO's Chrome Extension"
      ],
      skills: [skills.ts, skills.js, skills.node, skills.cloud]
    },
    {
      role: "Software Developer - Intern",
      company: "VWO",
      companylogo: vwoLogoLight,
      companylogoDark: vwoLogoDark,
      logoStyle: {objectFit: "contain"},
      date: "Jan 2020 – March 2021",
      desc: "Team: Visual Website Editor",
      descBullets: [
        "Responsible for Development for Widgets playground - a codepen style playground.",
        "Created a Web Crawler for statistical collection with Node.js and Puppeteer."
      ],
      skills: [skills.ts, skills.js, skills.node, skills.cloud]
    },
    {
      role: "Intern",
      company: "National Informatics Centre",
      companylogo: require("./assets/images/NICLogoSq.png"),
      date: "May 2019 – July 2019",
      desc: "Role: Data analysis using machine learning",
      descBullets: [
        "Wrote a Python script that leveraged Multivariate Analysis for a comprehensive route risk analysis."
      ],
      skills: [skills.python, skills.matplot, skills.scikit]
    },
    {
      role: "Intern",
      company: "Defence Research and Development Organisation, India",
      companylogo: require("./assets/images/drdo_logo.png"),
      date: "June 2018 – July 2018",
      desc: "Optimal location for Military bases.",
      descBullets: [
        "Wrote a Python script that employed K-Means algorithms to devise optimal locations for military bases"
      ],
      skills: [skills.python, skills.matplot, skills.scikit]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: null,
  projects: [
    {
      image: {
        src: require("./assets/images/dynamic-pricing.gif"),
        style: {
          // height: "auto",
          // maxWidth: "100%",
          // width: "70%"
          height: "100%"
        }
      },
      projectName: "Efficient Multi-Stream Machine Learning on Apache Flink",
      projectDesc:
        "In streaming scenarios, reduced the number of (re)computations and intermediate payload size that is required to generate the dataset to train survervised regression model.",
      back: {
        heading: "Abstract:",
        content:
          "Across numerous sectors, a pressing demand has risen for real-time machine learning model training, a pivotal requirement for swift decision-making. Extensive research has been conducted to address challenges such as concept drift, class imbalance, and other pertinent issues. A critical challenge within this domain is the effective joining of the pipeline with streams containing correlated data, which enriches the dataset with more correlations and thereby enables algorithms to learn better Multivariate Linear Regression models. However, the computational cost associated with join and aggregation operations presents a significant obstacle, rendering real-time learning difficult to achieve. This project seeks to optimize training times for incremental learning within data pipelines by utilizing the ideas of the Factorized incremental view maintenance (F-IVM) framework to function within distributed and multi-threaded environments provided by Apache Flink. By leveraging the factorization capabilities inherent in the F-IVM framework, the project aims to substantially reduce computational overhead, thereby advancing the feasibility of real-time machine learning."
      },
      footerLink: [
        {
          name: "View the paper",
          url: "/portfolio"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: {
        src: null,
        lottie: databaseLottie,
        style: {
          width: "250px"
        }
      },
      projectName: "Database Management System with Query Optimisation",
      projectDesc: null,
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: false,
  email_address: "dangiharsh@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
