import React, { useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import PopperJs from "lib/popperjs";
import Icon from "components/commons/Icon";

export interface BtnProps extends React.HTMLProps<HTMLButtonElement> {
  text?: string;
  className?: string;
  icon?: IconProp;
  iconclassname?: string;
  toolTipText?: string;
  toolTipPosition?: string;
  type?: "button" | "submit" | "reset";
}

const Btn: React.FC<BtnProps> = ({
  onClick,
  text,
  className,
  disabled,
  icon,
  type,
  iconclassname,
  toolTipText,
  toolTipPosition,
}) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const [refElement, setRefElement] = useState<HTMLButtonElement | null>(null);
  const onMouseEnter = () => setShowToolTip((prev) => true);
  const onMouseLeave = () => setShowToolTip((prev) => false);
  return (
    <div>
      <button
        type={type}
        className={className || ""}
        onClick={onClick}
        disabled={disabled}
        ref={setRefElement}
        onMouseEnter={toolTipText ? onMouseEnter : undefined}
        onMouseLeave={toolTipText ? onMouseLeave : undefined}
      >
        {text && text}
        {icon && <Icon icon={icon} className={iconclassname || ""} />}
      </button>
      {toolTipText && showToolTip ? (
        <PopperJs
          refElement={refElement}
          toolTipText={toolTipText}
          position={toolTipPosition}
        />
      ) : null}
    </div>
  );
};

export default Btn;
