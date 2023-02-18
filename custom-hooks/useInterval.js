import { useEffect, useRef } from "react";

const useInterval = (callback, delay) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof delay === "number") {
      const intervalId = setInterval(savedCallback.current, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);
};

export default useInterval;
