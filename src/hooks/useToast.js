import { useCallback, useRef, useState } from "react";

export function useToast({ defaultDuration = 2000 } = {}) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const timerRef = useRef(null);

  const showToast = useCallback(
    (msg, { duration = defaultDuration } = {}) => {
      setMessage(msg);
      setVisible(true);
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setVisible(false);
      }, duration);
    },
    [defaultDuration],
  );

  return { visible, message, showToast };
}
