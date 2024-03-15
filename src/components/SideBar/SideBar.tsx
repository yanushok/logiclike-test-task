import React, { memo } from "react";

import cn from "classnames";

import styles from "./SideBar.module.scss";

interface Props {
  activeItem: string;
  items: string[];
  onChange: (item: string) => void;
  className?: string;
}

export const SideBar: React.FC<Props> = memo(({ activeItem, className, items, onChange }) => {
  return (
    <div className={cn(styles.container, className)}>
      {items.map((item) => (
        <div
          key={item}
          className={cn(styles.item, { [styles.active]: activeItem === item })}
          onClick={() => onChange(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
});
