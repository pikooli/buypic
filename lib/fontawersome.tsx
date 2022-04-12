import "@fortawesome/fontawesome-svg-core/styles.css";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCoffee,
  faEdit,
  faTrash,
  faSearch,
  faTimes,
  faHome,
  faArrowLeft,
  faPaperPlane,
  faArrowCircleLeft,
  faArrowCircleRight,
  faPlusSquare,
  faPowerOff,
  faCogs,
  faUser,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

const Fontawersome = () => {
  config.autoAddCss = false;
  library.add(
    fab,
    faCoffee,
    faEdit,
    faTrash,
    faSearch,
    faTimes,
    faHome,
    faArrowLeft,
    faPaperPlane,
    faArrowCircleLeft,
    faArrowCircleRight,
    faPlusSquare,
    faPowerOff,
    faCogs,
    faUser,
    faImage
  );
  return <></>;
};

export default Fontawersome;
