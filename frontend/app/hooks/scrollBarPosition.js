import { useState, useRef, useLayoutEffect } from 'react';

export default function useScrollBarPosition() {
  const [top, setTop] = useState(0);
  const ref = useRef();
  useLayoutEffect(() => {
    function getTopPosition() {
      const topPosition = ref.current.scrollTop;
      setTop(topPosition);
    }
    getTopPosition();
    return () => ref.current.removeEventListener('scroll', getTopPosition);
  }, []);
  return [ref, top];
}
