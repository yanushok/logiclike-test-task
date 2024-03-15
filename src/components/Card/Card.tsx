import React from "react";

import styles from "./Card.module.scss";

interface Props {
  bgColor: string;
  image: string;
  title: string;
}

export const Card: React.FC<Props> = ({ bgColor, image, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image} style={{ backgroundColor: bgColor }}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.caption}>{title}</div>
    </div>
  );
};
