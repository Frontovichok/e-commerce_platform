import OurTeamMobile from "./Mobile/OurTeamMobile";
import OurTeamDesktop from "./Desktop/OurTeamDesktop";

const isMobile = window.innerWidth <= 500;

function OurTeam() {
  return isMobile ? (
    <OurTeamMobile workers={workers} />
  ) : (
    <OurTeamDesktop workers={workers} />
  );
}

export default OurTeam;

let workers = [
  {
    id: 1,
    name: "Капитальный красаучег!",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/Vladimir_Putin_in_KGB_uniform.jpg",
    position: "Старший менеджер",
    description: "Капитальный красаучег!",
  },
  {
    id: 2,
    name: "Валентин Галимый",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/%D0%9C%D0%B0%D1%82%D0%B2%D0%B8%D0%B5%D0%BD%D0%BA%D0%BE_%D0%92%D0%B0%D0%BB%D0%B5%D0%BD%D1%82%D0%B8%D0%BD%D0%B0_%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%BD%D0%B0.jpg/267px-%D0%9C%D0%B0%D1%82%D0%B2%D0%B8%D0%B5%D0%BD%D0%BA%D0%BE_%D0%92%D0%B0%D0%BB%D0%B5%D0%BD%D1%82%D0%B8%D0%BD%D0%B0_%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%BD%D0%B0.jpg",
    position: "Старший менеджер",
    description: "Классный чел, но иногда кидает на бабки",
  },
  {
    id: 3,
    name: "Мужчина такая!",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Alexander_Lukashenko_in_April_2021.jpg/230px-Alexander_Lukashenko_in_April_2021.jpg",
    position: "Старший менеджер",
    description: "Мужчина такая!",
  },
  {
    id: 4,
    name: "Четкий пацан!",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/Vladimir_Putin_in_KGB_uniform.jpg",
    position: "Старший менеджер",
    description: "Четкий пацан!",
  },
];
