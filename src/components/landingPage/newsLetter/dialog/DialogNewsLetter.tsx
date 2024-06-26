import React from "react";
import Button from "../../../UI/button/Button";
import heart from "../../../../../public/assets/heart.png";
import "./dialogNewsLetter.scss";

interface DialogProps {
  message: string;
  submitted: boolean;
  onClose: () => void;
}

const DialogNewsLetter: React.FC<DialogProps> = ({
  message,
  onClose,
  submitted,
}) => {
  return (
    <div>
      <dialog className="dialog-cont" open>
        <Button className="dialog-closing-btn" onClick={onClose}>
          x
        </Button>
        <div className="dialog-message-cont">
          <span className="dialog-message-subcont">
            <h3 className="dialog-message-title">{message}</h3>
            {submitted && (
              <img className="dialog-message-img" src={heart} alt="Heart" />
            )}
          </span>
        </div>
      </dialog>
    </div>
  );
};

export default DialogNewsLetter;
