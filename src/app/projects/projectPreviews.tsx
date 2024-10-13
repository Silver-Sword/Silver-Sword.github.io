type Project = {
    id: number,
    title: string,
    description: string,
    type: string,
    image: string,
    skills: string[],
    isTeamProject: boolean,
    isFeatured: boolean,
};

export const PROJECTS: Project[] = [
    { 
      id: 1, 
      title: 'Tune Tracer', 
      type: 'Web App',
      description: 'A Google Docs style composition tool. Make music with collaborators in real-time.', 
      image: '/tune-tracer-logo-small.png',
      skills: ['TypeScript', 'Firebase', 'Jira'],
      isTeamProject: true,
      isFeatured: true,
    },
    { 
      id: 2, 
      title: 'Subliminal',
      type: 'Video Game', 
      description: 'RPG video game blending point and click adventures with fast paced combat.', 
      image: '/subliminal-sample-3.png',
      skills: ['C#', 'Unity', 'Jira'],
      isTeamProject: true,
      isFeatured: true,
    },
    { 
      id: 3, 
      title: 'Wordlify', 
      type: 'Web App',
      description: 'Compete with your friends in Wordle, online! Guess the word before your friends do.', 
      image: '/wordlify.gif',
      skills: ['TypeScript', 'Firebase', 'Thunder Client'],
      isTeamProject: true,
      isFeatured: true,
    },
    {
        id: 4,
        title: 'MegaBites',
        type: 'Mobile App',
        description: 'A cooking social media Android app. Compiles your saved and created recipes and allows you to time your cooking.',
        image: '/megabites-logo.png',
        skills: ['React Native', 'JavaScript', 'Jira'],
        isTeamProject: false,
        isFeatured: false,
    },
    {
        id: 5, 
        title: 'Quantum Key Distribution Research Paper',
        type: 'Research Paper',
        description: 'A research paper on Noise Resistance in Quantum Key Distribution Protocols, a analysis of error in quantum computing communication.',
        image: '/qkd-image.png',
        skills: ['Python', 'Research', 'Quantum Computing'],
        isTeamProject: false,
        isFeatured: false,
    },
    {
        id: 6,
        title: 'GMO Corporations Case Study',
        type: 'Research Paper',
        description: 'A case study on the business practices of GMO corporations and their impact on the environment in Missouri.',
        image: '/gmo-image.jpg',
        skills: ['Python', 'LaTeX', 'Research'],
        isTeamProject: false,
        isFeatured: false,
    },
    {
        id: 7,
        title: 'Alchemy',
        type: 'Video Game',
        description: 'Mix items and create increasingly complex entities.',
        image: '/elements.jpg',
        skills: ['Java', 'Eclipse', 'Github'],
        isTeamProject: false,
        isFeatured: false,
    },
    {
        id: 8,
        title: 'Competitive Programming Training',
        type: 'Collection of Solutions',
        description: 'A collection of solutions to competitive programming problems from Codeforces and other similar sites.',
        image: '/programming.webp',
        skills: ['C++', 'Java', 'Algorithms', 'Data Structures'],
        isTeamProject: false,
        isFeatured: false, 
    }
];

export function getFeaturedProjects(): Project[] {
    return PROJECTS.filter(project => project.isFeatured);
}