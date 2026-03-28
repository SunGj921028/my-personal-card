export function Toast({ visible, message }) {
  return (
    <div
      className={`toast${visible ? " show" : ""}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="toast-dot" aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}
