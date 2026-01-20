import { useEffect, useRef } from 'react';
import './ShinyText.css';

const ShinyText = ({
  text = "Shiny Text",
  speed = 2,
  delay = 0,
  color = "#b5b5b5",
  shineColor = "#ffffff",
  spread = 120,
  direction = "left",
  yoyo = false,
  pauseOnHover = false,
  disabled = false
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (disabled || !textRef.current) return;

    const element = textRef.current;
    element.style.setProperty('--shine-speed', `${speed}s`);
    element.style.setProperty('--shine-delay', `${delay}s`);
    element.style.setProperty('--text-color', color);
    element.style.setProperty('--shine-color', shineColor);
    element.style.setProperty('--shine-spread', `${spread}deg`);
    element.style.setProperty('--shine-direction', direction === 'left' ? '-200%' : '200%');
    element.style.setProperty('--animation-mode', yoyo ? 'alternate infinite' : 'infinite');
  }, [speed, delay, color, shineColor, spread, direction, yoyo, disabled]);

  return (
    <span 
      ref={textRef}
      className={`shiny-text ${disabled ? 'disabled' : ''} ${pauseOnHover ? 'pause-on-hover' : ''}`}
    >
      {text}
    </span>
  );
};

export default ShinyText;
