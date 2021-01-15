import React from "react";

type CardProps = {
  imgSrc: string;
  children?: JSX.Element | JSX.Element[] | string | string[];
};

const Card: React.FC<CardProps> = ({ imgSrc, children }: CardProps) => (
  <div className="card rounded overflow-hidden shadow w-full">
    <div
      className="card__header"
      style={{
        background: `url(${imgSrc})`,
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
    <div className="card__body p-10">{children}</div>
  </div>
);

export default Card;
