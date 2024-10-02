import useScrollProgress from "./useScrollProgress.js";

const ScrollProgressBar = () => {
    const scrollProgress = useScrollProgress();

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '5px', background: '#e0e0e0' }}>
      <div
        style={{
          width: `${scrollProgress}%`,
          height: '100%',
          background: '#76c7c0',
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;