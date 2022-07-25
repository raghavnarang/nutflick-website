import cx from "classNames";
import styles from "./container.module.css";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={cx(className, styles.nfContainer)}>{children}</div>;
};

export default Container;
export type { ContainerProps };
