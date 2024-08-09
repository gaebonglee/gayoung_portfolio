export interface ProjectType {
  title: string;
  subTitle: string;
  description: string;
  period: string;
  tech: string;
  image: string;
  projectLink: string;
  githubLink: string;
  design: boolean;
  frontEnd: boolean;
  backEnd: boolean;
  gridPosition: string;
}

export const projects = [
  {
    title: "TMP",
    subTitle: "Trainer Matching Project",
    description: "팀프로젝트로 진행한 회원-트레이너 매칭사이트 입니다.",
    period: "2024.04.01 ~ 2024.05.17",
    tech: "React, Scss, JavaScript, axios, MySQL, react(library,hook)",
    image: `${process.env.PUBLIC_URL}/image/project/TMP.png`,
    projectLink:
      "https://gayounglee.notion.site/Trainer-Matching-Project-PPT-6c02aff850184dbeb843dff6fd695f81",
    githubLink: "https://github.com/gaebonglee/TMP.git",
    design: true,
    frontEnd: true,
    backEnd: true,
    gridPosition: "grid__cell-c1-r1",
  },
  {
    title: "LUKS",
    subTitle: "ShoppingMall",
    description:
      "개인프로젝트로 문자인증과 주소찾기 API를 활용한 쇼핑몰 사이트입니다.",
    period: "2024.05.25 ~ 2024.06.14, 지속 업데이트 예정",
    tech: "React, Scss, JavaScript, axios, API, MySQL, react(library,hook)",
    image: `${process.env.PUBLIC_URL}/image/project/luks.png`,
    projectLink:
      "https://gayounglee.notion.site/Luks-PPT-2ecadfde50dd4f1f9fc3e6fe6043708d?pvs=4",
    githubLink: "https://github.com/gaebonglee/luks.git",
    design: true,
    frontEnd: true,
    backEnd: true,
    gridPosition: "grid__cell-c2-r1",
  },
  {
    title: "Portfolio",
    subTitle: "WebSite",
    description: "웹사이트 기준으로 제작된 포트폴리오 사이트입니다.",
    period: "2024.06.14 ~ 2024.06.21",
    tech: "React, TypeScript, Scss, react-hook, react-slick, gsap",

    image: `${process.env.PUBLIC_URL}/image/project/myportfolio.png`,
    projectLink: "https://gaebonglee.github.io/gayoung_portfolio/",
    githubLink: "https://github.com/gaebonglee/gayoung_portfolio.git",
    design: true,
    frontEnd: true,
    backEnd: false,
    gridPosition: "grid__cell-c4-r1",
  },
  {
    title: "Exchange Currency",
    subTitle: "Naver",
    description: "네이버의 <환율계산> 영역을 마크업한 결과물입니다.",
    period: "2024.05.23 ~ 2024.05.24",
    tech: "HTML5, CSS3, JavaScript",

    image: `${process.env.PUBLIC_URL}/image/project/exchange_currency.png`,
    projectLink:
      "https://gaebonglee.github.io/gayoung_portfolio/exchangeCurrency/index.html",
    githubLink: "https://github.com/gaebonglee/exchangeCurrency.git",
    design: false,
    frontEnd: true,
    backEnd: false,
    gridPosition: "grid__cell-c1-r2",
  },
  {
    title: "Header",
    subTitle: "Kurly",
    description: "마켓컬리의 헤더부분을 마크업한 결과물입니다.",
    period: "2024.06.28 ~ 2024.07.01",
    tech: "HTML5, CSS3",

    image: `${process.env.PUBLIC_URL}/image/project/kurlyHeader.png`,
    projectLink:
      "https://gaebonglee.github.io/gayoung_portfolio/kurly/kurlyHeader/kurlyHeader.html",
    githubLink: "https://github.com/gaebonglee/kurly.git",
    design: false,
    frontEnd: true,
    backEnd: false,
    gridPosition: "grid__cell-c3-r2",
  },
  {
    title: "ProductTimer",
    subTitle: "Kurly",
    description:
      "마켓컬리의 카테고리 영역을 마크업한 결과물입니다. 24시간마다 시간이 리셋됩니다.",
    period: "2024.06.28 ~ 2024.07.01",
    tech: "HTML5, CSS3, JavaScript",

    image: `${process.env.PUBLIC_URL}/image/project/kurlyProductTimer.png`,
    projectLink: `https://gaebonglee.github.io/gayoung_portfolio/kurly/timerProduct/timerProduct.html`,
    githubLink: "https://github.com/gaebonglee/kurly.git",
    design: false,
    frontEnd: true,
    backEnd: false,
    gridPosition: "grid__cell-c2-r3",
  },
  {
    title: "Category",
    subTitle: "Kurly",
    description: "마켓컬리의 카테고리 영역을 마크업한 결과물입니다.",
    period: "2024.06.28 ~ 2024.07.01",
    tech: "HTML5, CSS3, JavaScript",

    image: `${process.env.PUBLIC_URL}/image/project/kurlyCategory.png`,
    projectLink:
      "https://gaebonglee.github.io/gayoung_portfolio/kurly/kurlyCategory/category.html",
    githubLink: "https://github.com/gaebonglee/kurly.git",
    design: false,
    frontEnd: true,
    backEnd: false,
    gridPosition: "grid__cell-c4-r3",
  },
  {
    title: "To Do List",
    subTitle: "Task Management",
    description:
      "반응형으로 구현한 My To Do List 입니다. 할 일의 추가, 완료, 삭제 가능합니다.",
    period: "2024.07.18 ~ 2024.07.19",
    tech: "HTML5, CSS3, JavaScript",

    image: `${process.env.PUBLIC_URL}/image/project/todolist.png`,
    projectLink:
      "https://gaebonglee.github.io/gayoung_portfolio/toDoList/myToDoList.html",
    githubLink: "https://github.com/gaebonglee/toDoList.git",
    design: false,
    frontEnd: true,
    backEnd: false,
    gridPosition: "grid__cell-c4-r4",
  },
];
