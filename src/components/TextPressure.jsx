import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import './TextPressure.css';

const dist = (a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
};

const getAttr = (distance, maxDist, minVal, maxVal) => {
  const val = maxVal - Math.abs((maxVal * distance) / maxDist);
  return Math.max(minVal, val + minVal);
};

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const TextPressure = ({
  text = 'Compressa',
  fontFamily = 'Compressa VF',
  fontUrl = 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2',
  width = true,
  weight = true,
  italic = true,
  alpha = false,
  flex = true,
  stroke = false,
  scale = false,
  textColor = '#FFFFFF',
  strokeColor = '#FF0000',
  className = '',
  minFontSize = 24,
  mobileMinFontSize = 72
}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const spansRef = useRef([]);

  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const touchActiveRef = useRef(false);
  const motionPhaseRef = useRef(0);

  const [fontSize, setFontSize] = useState(minFontSize);
  const [scaleY, setScaleY] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const chars = text.split('');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse)');

    const updateTouchDevice = () => {
      setIsTouchDevice(mediaQuery.matches);
    };

    updateTouchDevice();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateTouchDevice);
    } else {
      mediaQuery.addListener(updateTouchDevice);
    }

    const handleMouseMove = e => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };
    const handleTouchMove = e => {
      const t = e.touches[0];
      cursorRef.current.x = t.clientX;
      cursorRef.current.y = t.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    if (containerRef.current) {
      const { left, top, width: containerWidth, height: containerHeight } = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + containerWidth / 2;
      mouseRef.current.y = top + containerHeight / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);

      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', updateTouchDevice);
      } else {
        mediaQuery.removeListener(updateTouchDevice);
      }
    };
  }, []);

  const resetToCenter = useCallback(() => {
    if (!containerRef.current) return;

    const { left, top, width: containerWidth, height: containerHeight } = containerRef.current.getBoundingClientRect();
    const centerX = left + containerWidth / 2;
    const centerY = top + containerHeight / 2;

    mouseRef.current.x = centerX;
    mouseRef.current.y = centerY;
    cursorRef.current.x = centerX;
    cursorRef.current.y = centerY;
  }, []);

  const updateTouchPosition = useCallback(
    event => {
      if (!isTouchDevice) return;

      touchActiveRef.current = true;
      cursorRef.current.x = event.clientX;
      cursorRef.current.y = event.clientY;
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    },
    [isTouchDevice]
  );

  const handlePointerDown = useCallback(
    event => {
      if (!isTouchDevice || (event.pointerType !== 'touch' && event.pointerType !== 'pen')) return;

      updateTouchPosition(event);

      if (event.currentTarget.setPointerCapture) {
        try {
          event.currentTarget.setPointerCapture(event.pointerId);
        } catch {
          // Ignore capture failures on browsers that restrict it.
        }
      }
    },
    [isTouchDevice, updateTouchPosition]
  );

  const handlePointerMove = useCallback(
    event => {
      if (!isTouchDevice || (event.pointerType !== 'touch' && event.pointerType !== 'pen')) return;

      updateTouchPosition(event);
    },
    [isTouchDevice, updateTouchPosition]
  );

  const handlePointerUp = useCallback(
    event => {
      if (!isTouchDevice || (event.pointerType !== 'touch' && event.pointerType !== 'pen')) return;

      if (event.currentTarget.releasePointerCapture) {
        try {
          event.currentTarget.releasePointerCapture(event.pointerId);
        } catch {
          // Ignore capture failures on browsers that no longer own the pointer.
        }
      }

      touchActiveRef.current = false;
      resetToCenter();
    },
    [isTouchDevice, resetToCenter]
  );

  const setSize = useCallback(() => {
    if (!containerRef.current || !titleRef.current) return;

    const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();
    const effectiveMinFontSize = isTouchDevice ? mobileMinFontSize : minFontSize;

    let newFontSize = containerW / 12;
    newFontSize = Math.max(newFontSize, effectiveMinFontSize);

    setFontSize(newFontSize);
    setScaleY(1);
    setLineHeight(1);

    requestAnimationFrame(() => {
      if (!titleRef.current) return;
      const textRect = titleRef.current.getBoundingClientRect();

      if (scale && textRect.height > 0) {
        const yRatio = containerH / textRect.height;
        setScaleY(yRatio);
        setLineHeight(yRatio);
      }
    });
  }, [chars.length, isTouchDevice, minFontSize, mobileMinFontSize, scale]);

  useEffect(() => {
    const debouncedSetSize = debounce(setSize, 100);
    debouncedSetSize();
    window.addEventListener('resize', debouncedSetSize);
    return () => window.removeEventListener('resize', debouncedSetSize);
  }, [setSize]);

  useEffect(() => {
    let rafId;
    const animate = () => {
      if (isTouchDevice && !touchActiveRef.current && containerRef.current) {
        const { left, top, width: containerWidth, height: containerHeight } = containerRef.current.getBoundingClientRect();
        const centerX = left + containerWidth / 2;
        const centerY = top + containerHeight / 2;
        const motionRadiusX = containerWidth * 0.08;
        const motionRadiusY = containerHeight * 0.03;

        motionPhaseRef.current += 0.01;
        cursorRef.current.x = centerX + Math.sin(motionPhaseRef.current) * motionRadiusX;
        cursorRef.current.y = centerY + Math.cos(motionPhaseRef.current * 1.3) * motionRadiusY;
      }

      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const maxDist = titleRect.width / 2;

        spansRef.current.forEach(span => {
          if (!span) return;

          const rect = span.getBoundingClientRect();
          const charCenter = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2
          };

          const d = dist(mouseRef.current, charCenter);

          const wdth = width ? Math.floor(getAttr(d, maxDist, 5, 200)) : 100;
          const wght = weight ? Math.floor(getAttr(d, maxDist, 100, 900)) : 400;
          const italVal = italic ? getAttr(d, maxDist, 0, 1).toFixed(2) : 0;
          const alphaVal = alpha ? getAttr(d, maxDist, 0, 1).toFixed(2) : 1;

          const newFontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;

          if (span.style.fontVariationSettings !== newFontVariationSettings) {
            span.style.fontVariationSettings = newFontVariationSettings;
          }
          if (alpha && span.style.opacity !== alphaVal) {
            span.style.opacity = alphaVal;
          }
        });
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [width, weight, italic, alpha]);

  const styleElement = useMemo(() => {
    return (
      <style>{`        @font-face {
          font-family: '${fontFamily}';
          src: url('${fontUrl}');
          font-style: normal;
        }

        .text-pressure-flex {
          display: flex;
          justify-content: space-between;
        }

        .text-pressure-stroke span {
          position: relative;
          color: ${textColor};
        }
        .text-pressure-stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: ${strokeColor};
        }

        .text-pressure-title {
          color: ${textColor};
        }
      `}</style>
    );
  }, [fontFamily, fontUrl, textColor, strokeColor]);

  const dynamicClassName = [className, flex ? 'text-pressure-flex' : '', stroke ? 'text-pressure-stroke' : ''].filter(Boolean).join(' ');

  return (
    <div
      ref={containerRef}
      className="text-pressure-container"
      style={{ touchAction: isTouchDevice ? 'pan-y' : 'auto' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {styleElement}
      <h1
        ref={titleRef}
        className={`text-pressure-title ${dynamicClassName}`}
        style={{
          fontFamily,
          textTransform: 'uppercase',
          fontSize: fontSize,
          lineHeight,
          transform: `scale(1, ${scaleY})`,
          transformOrigin: 'center top',
          margin: 0,
          textAlign: 'center',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          fontWeight: 100,
          width: '100%'
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={el => (spansRef.current[i] = el)}
            data-char={char}
            style={{
              display: 'inline-block',
              color: stroke ? undefined : textColor
            }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextPressure;
