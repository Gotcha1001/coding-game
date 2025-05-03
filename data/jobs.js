const jobs = [
  {
    id: "junior-frontend",
    name: "Junior Frontend Developer",
    requiredSubjects: 1,
    earnings: 20,
    description: "Build user interfaces with basic frontend skills.",
    isAvailable: (totalMastered) => totalMastered >= 1,
  },
  {
    id: "backend",
    name: "Backend Developer",
    requiredSubjects: 5,
    earnings: 50,
    description: "Develop server-side logic and APIs.",
    isAvailable: (totalMastered) => totalMastered >= 5,
  },
  {
    id: "full-stack",
    name: "Full Stack Developer",
    requiredSubjects: 10,
    earnings: 200,
    description:
      "Create end-to-end applications with frontend and backend skills.",
    isAvailable: (totalMastered) => totalMastered >= 10,
  },
  {
    id: "senior-frontend",
    name: "Senior Frontend Developer",
    requiredSubjects: 15,
    earnings: 300,
    description: "Lead complex frontend projects with advanced skills.",
    isAvailable: (totalMastered) => totalMastered >= 15,
  },
  {
    id: "senior-backend",
    name: "Senior Backend Developer",
    requiredSubjects: 20,
    earnings: 400,
    description: "Architect robust backend systems with deep expertise.",
    isAvailable: (totalMastered) => totalMastered >= 20,
  },
  {
    id: "senior-full-stack",
    name: "Senior Full Stack Developer",
    requiredSubjects: 30,
    earnings: 500,
    description:
      "Master both frontend and backend to lead full-scale projects.",
    isAvailable: (totalMastered) => totalMastered >= 30,
  },
];

export { jobs };
