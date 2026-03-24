export type ProjectItem = {
  title: string;
  description: string;
  techStack: string[];
  projectUrl?: string;
};

export type PortfolioData = {
  name: string;
  intro: string;
  role: string;
  coreStack: string[];
  projects: ProjectItem[];
  contact: {
    email: string;
    github: string;
    blogOrLinkedIn: string;
  };
};

export const portfolioData: PortfolioData = {
  name: "손승연",
  intro: "안녕하세요! 프론트엔드 개발을 공부하며 사용자 경험을 개선하는 학생 손승연입니다.",
  role: "학생",
  coreStack: ["추가 예정"],
  projects: [
    {
      title: "프로젝트 준비 중",
      description:
        "첫 번째 프로젝트 정보를 입력하면 여기에 설명이 표시됩니다.",
      techStack: ["기술 스택 추가 예정"]
    },
    {
      title: "프로젝트 준비 중",
      description:
        "두 번째 프로젝트 정보를 입력하면 여기에 설명이 표시됩니다.",
      techStack: ["기술 스택 추가 예정"]
    }
  ],
  contact: {
    email: "sons38628@gmail.com",
    github: "#",
    blogOrLinkedIn: "#"
  }
};
