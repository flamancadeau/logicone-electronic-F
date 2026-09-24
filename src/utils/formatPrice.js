/** Format an amount in Rwandan francs (FRW). */
export function formatFrw(amount) {
  const n = Number(amount) || 0;
  return `${n.toLocaleString('en-US')} FRW`;
}
