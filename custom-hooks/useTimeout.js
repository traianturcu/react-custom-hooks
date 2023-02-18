import { useEffect, useRef } from "react";

const useTimeout = (callback, delay) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof delay === "number") {
      const timeoutId = setTimeout(savedCallback.current, delay);
      return () => clearTimeout(timeoutId);
    }
  }, [delay]);
};

export default useTimeout;
