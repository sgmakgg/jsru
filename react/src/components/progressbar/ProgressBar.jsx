import useScrollProgress from "./useScrollProgress.js";
import classNames from "classnames";
import styles from "./progressBar.module.css";

const ScrollProgressBar = ({viewVariant = 'default'}) => {
    const scrollProgress = useScrollProgress();

  return (
    <div className={classNames(styles.progressBar, {
        [styles.default]: viewVariant === 'default',
        [styles.accent]: viewVariant === 'accent',
    })}
         style={{
             width: scrollProgress,
         }} />
  );
};

export default ScrollProgressBar;