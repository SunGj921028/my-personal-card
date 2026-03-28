/** Sets --bx/--by on a button for radial hover highlight */
export function attachButtonGlow(btn) {
  if (!btn) return () => {};

  const onMove = (e) => {
    const rect = btn.getBoundingClientRect();
    const bx = ((e.clientX - rect.left) / rect.width) * 100;
    const by = ((e.clientY - rect.top) / rect.height) * 100;
    btn.style.setProperty("--bx", `${bx.toFixed(1)}%`);
    btn.style.setProperty("--by", `${by.toFixed(1)}%`);
  };

  btn.addEventListener("mousemove", onMove);
  return () => btn.removeEventListener("mousemove", onMove);
}
