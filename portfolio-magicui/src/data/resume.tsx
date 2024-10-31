import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Devashish Patil",
  initials: "DP",
  url: "https://devashishpatil56.github.io",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
    "Cloud Engineer and a Developer. I love building things and helping people.",
  summary:
    "I love exploring new technologies and my expertise lie in Cloud Computing, DevOps, Application Modernization and API Management. In the past, [I pursued a bachelor's degree at IIT Roorkee](/#education), and currently [I am working at Google](/#experience).",
  avatarUrl: "/me.jpeg",
  skills: [
    "Google Cloud Platform",
    "AWS",
    "Apigee",
    "DevOps",
    "Python",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Apache Airflow",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "devashishpatil56@gmail.com",
    tel: "+91 9876543210",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/g-devpat",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/devashishpatil",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/devashishpatil_",
        icon: Icons.x,

        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://devashishpatil.medium.com",
        icon: Icons.medium,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Google",
      href: "https://google.com",
      badges: [],
      location: "Bengaluru, India",
      title: "Strategic Cloud Engineer",
      logoUrl: "/google.png",
      start: "March 2022",
      end: "Present",
      description:
        "Currently working as part of the Google Cloud Consulting organization, collaborating with Google Cloud customers to solve complex problems using GCP products, custom-built applications, and tailored automations. Specialized in designing and implementing API management solutions with Apigee, spanning across multiple deployment models including Cloud, Hybrid, Multi-Cloud, and On-Premise. Regularly working with GCP networking, DevOps, Security, and Infrastructure as Code. Demonstrated excellent communication skills and stakeholder management, as required by the role. Successfully delivered projects with numerous customers and Google Cloud partners, managing varying levels of complexity and scale. Continuously working on automating tasks for migrating to Google Cloud to streamline customer onboarding and delivery.",
    },
    {
      company: "Servian",
      badges: [],
      href: "https://servian.com",
      location: "Remote",
      title: "Cloud Engineer",
      logoUrl: "/servian.png",
      start: "May 2021",
      end: "March 2022",
      description:
        "Developed and deployed an Apache Airflow-based product enhanced with custom functionalities and integrations in Python, deployed on Azure Kubernetes Service. Additionally, worked on an enterprise-level event broker application that bridges applications on Azure with on-premise legacy systems, utilizing Python and backed by Azure EventHub. Extensively leveraged Azure DevOps for a range of CI/CD and Infrastructure-as-Code use cases.",
    },
    {
      company: "Quantiphi Inc.",
      href: "https://quantiphi.com/",
      badges: [],
      location: "Bengaluru India",
      title: "Platform Engineer",
      logoUrl: "/quantiphi.png",
      start: "May 2019",
      end: "April 2021",
      description:
        "Developed CI/CD pipelines for web application deployments using AWS developer tools and created serverless processing workflows with AWS Lambda, S3, SQS, and DynamoDB. Built scalable, compute-intensive applications on AWS EC2 for scanned document processing, integrating asynchronously with AWS Textract and optimizing compute time and resources. Additionally, automated machine learning workflows with SageMaker and Apache Airflow, reducing infrastructure setup time and enabling ML engineers to focus on core ML tasks.",
    },
  ],
  education: [
    {
      school: "Indian Institute of Technology, Roorkee",
      href: "https://iitr.ac.in",
      degree: "Bachelor of Technology",
      logoUrl: "/iitr.png",
      start: "2015",
      end: "2019",
    },
  ],
  projects: [
    // {
    //   title: "Chat Collect",
    //   href: "https://chatcollect.com",
    //   dates: "Jan 2024 - Feb 2024",
    //   active: true,
    //   description:
    //     "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://chatcollect.com",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    // },
  ],
  hackathons: [
    // {
    //   title: "Hack Western 5",
    //   dates: "November 23rd - 25th, 2018",
    //   location: "London, Ontario",
    //   description:
    //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
  ],
} as const;
