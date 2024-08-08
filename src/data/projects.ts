export interface ProjectType {
  title: string;
  description: string;
  period: string;
  tech: string;
  mywork: string;
  image: string;
  projectLink: string;
  githubLink: string;
}

export const projects = [
  {
    title: "Trainer Matching Project",
    description: "팀프로젝트로 진행한 회원-트레이너 매칭사이트 입니다.",
    period: "2024.04.01 ~ 2024.05.17",
    tech: "React, Scss, JavaScript, axios, MySQL, react(library,hook)",
    mywork: "Design, Front-end, Back-end",
    image: `${process.env.PUBLIC_URL}/image/project/TMP.png`,
    projectLink:
      "https://gayounglee.notion.site/Trainer-Matching-Project-PPT-6c02aff850184dbeb843dff6fd695f81",
    githubLink: "https://github.com/gaebonglee/TMP.git",
  },
  {
    title: "ShoppingMall Luks",
    description:
      "개인프로젝트로 문자인증과 주소찾기 API를 활용한 쇼핑몰 사이트입니다.",
    period: "2024.05.25 ~ 2024.06.14, 지속 업데이트 예정",
    tech: "React, Scss, JavaScript, axios, API, MySQL, react(library,hook)",
    mywork: "Design, Front-end, Back-end",
    image: `${process.env.PUBLIC_URL}/image/project/luks.png`,
    projectLink:
      "https://gayounglee.notion.site/Luks-PPT-2ecadfde50dd4f1f9fc3e6fe6043708d?pvs=4",
    githubLink: "https://github.com/gaebonglee/luks.git",
  },
  {
    title: "Portfolio Site",
    description: "웹사이트 기준으로 제작된 포트폴리오 사이트입니다.",
    period: "2024.06.14 ~ 2024.06.21",
    tech: "React, TypeScript, Scss, react-hook, react-slick, gsap",
    mywork: "Design, Front-end",
    image: `${process.env.PUBLIC_URL}/image/project/myportfolio.png`,
    projectLink: "https://gaebonglee.github.io/gayoung_portfolio/",
    githubLink: "https://github.com/gaebonglee/gayoung_portfolio.git",
  },
  {
    title: "Exchange Currency",
    description: "네이버의 <환율계산> 영역을 마크업한 결과물입니다.",
    period: "2024.05.23 ~ 2024.05.24",
    tech: "HTML5, CSS3, JavaScript",
    mywork: "HTML 마크업, CSS 스타일링, JavaScript 기능구현",
    image: `${process.env.PUBLIC_URL}/image/project/exchange_currency.png`,
    projectLink:
      "https://gaebonglee.github.io/gayoung_portfolio/exchangeCurrency/index.html",
    githubLink: "https://github.com/gaebonglee/exchangeCurrency.git",
  },
  {
    title: "Kurly Header",
    description: "마켓컬리의 헤더부분을 마크업한 결과물입니다.",
    period: "2024.06.28 ~ 2024.07.01",
    tech: "HTML5, CSS3",
    mywork: "HTML 마크업, CSS 스타일링",
    image: `${process.env.PUBLIC_URL}/image/project/kurlyHeader.png`,
    projectLink:
      "https://gaebonglee.github.io/gayoung_portfolio/kurly/kurlyHeader/kurlyHeader.html",
    githubLink: "https://github.com/gaebonglee/kurly.git",
  },
  {
    title: "Kurly ProductTimer",
    description:
      "마켓컬리의 카테고리 영역을 마크업한 결과물입니다. 24시간마다 시간이 리셋됩니다.",
    period: "2024.06.28 ~ 2024.07.01",
    tech: "HTML5, CSS3, JavaScript",
    mywork: "HTML 마크업, CSS 스타일링, JavaScript 기능구현",
    image: `${process.env.PUBLIC_URL}/image/project/kurlyProductTimer.png`,
    projectLink: `https://gaebonglee.github.io/gayoung_portfolio/kurly/timerProduct/timerProduct.html`,
    githubLink: "https://github.com/gaebonglee/kurly.git",
  },
  {
    title: "Kurly Category",
    description: "마켓컬리의 카테고리 영역을 마크업한 결과물입니다.",
    period: "2024.06.28 ~ 2024.07.01",
    tech: "HTML5, CSS3, JavaScript",
    mywork: "HTML 마크업, CSS 스타일링, JavaScript 기능구현",
    image: `${process.env.PUBLIC_URL}/image/project/kurlyCategory.png`,
    projectLink:
      "https://gaebonglee.github.io/gayoung_portfolio/kurly/kurlyCategory/category.html",
    githubLink: "https://github.com/gaebonglee/kurly.git",
  },
  {
    title: "My To Do List",
    description: "반응형으로 구현한 My To Do List 입니다.",
    period: "2024.07.18 ~ 2024.07.19",
    tech: "HTML5, CSS3, JavaScript",
    mywork: "HTML 마크업, CSS 스타일링, JavaScript 기능구현",
    image: `${process.env.PUBLIC_URL}/image/project/todolist.png`,
    projectLink:
      "https://gaebonglee.github.io/gayoung_portfolio/toDoList/myToDoList.html",
    githubLink: "https://github.com/gaebonglee/toDoList.git",
  },
];
