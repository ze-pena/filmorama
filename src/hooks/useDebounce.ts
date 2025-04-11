// Dependencias
import { useEffect, useRef } from 'react';

// Hook
export default function useDebounce<T>(
  delay: number,
  dependency: T,
  callback: () => void
): void {
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => callback(), delay);

    return () => {
      clearTimeout(timer.current);
    };
  }, [timer, delay, dependency, callback]);
}
