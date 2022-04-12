import {} from "next/image";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

interface Props extends FontAwesomeIconProps {}

const Icon: React.FC<Props> = (props) => {
  const { icon } = props;
  if (!icon) {
    return <></>;
  }
  return <FontAwesomeIcon {...props} />;
};

export default Icon;
