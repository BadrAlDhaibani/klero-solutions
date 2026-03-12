"use client";

import { useState, useEffect, useCallback } from "react";

export interface TextSegment {
  text: string;
  className?: string;
}

interface TypewriterTextProps {
  segments: TextSegment[];
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export default function TypewriterText({
  segments,
  speed = 50,
  delay = 500,
  className,
  onComplete,
}: TypewriterTextProps) {
  const fullText = segments.map((s) => s.text).join("");
  const [displayedCount, setDisplayedCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const handleComplete = useCallback(() => {
    setIsComplete(true);
    onComplete?.();
    const timeout = setTimeout(() => setCursorVisible(false), 1500);
    return () => clearTimeout(timeout);
  }, [onComplete]);

  useEffect(() => {
    const timeout = setTimeout(() => setHasStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted || isComplete) return;

    const interval = setInterval(() => {
      setDisplayedCount((prev) => {
        const next = prev + 1;
        if (next >= fullText.length) {
          clearInterval(interval);
          handleComplete();
        }
        return next;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [hasStarted, isComplete, fullText.length, speed, handleComplete]);

  // Render segments with their styles, slicing based on displayedCount
  const renderSegments = () => {
    let charIndex = 0;
    return segments.map((segment, i) => {
      const segStart = charIndex;
      const segEnd = charIndex + segment.text.length;
      charIndex = segEnd;

      if (displayedCount <= segStart) return null;

      const visibleChars = Math.min(displayedCount, segEnd) - segStart;
      return (
        <span key={i} className={segment.className}>
          {segment.text.slice(0, visibleChars)}
        </span>
      );
    });
  };

  return (
    <span className={className}>
      {renderSegments()}
      <span
        className={`inline-block w-[2px] h-[1em] bg-current align-text-bottom ml-0.5 transition-opacity duration-700 ${
          cursorVisible
            ? isComplete
              ? "animate-[blink_1s_step-end_infinite]"
              : "animate-[blink_0.7s_step-end_infinite]"
            : "opacity-0"
        }`}
        aria-hidden="true"
      />
    </span>
  );
}
