import { ReactNode } from "react";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
  children: ReactNode[];
}

const Tooltip = ({ children }: TooltipProps) => {
  return (
    <div className={`${styles.tooltip} ${styles.tooltipTop}`}>
      <span className={styles.toolTipElement}>{children[0]}</span>
      <span className={styles.tooltipText}>{children[1]}</span>
    </div>
  );
};

export { Tooltip };
