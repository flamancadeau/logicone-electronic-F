export async function createQuote(payload) {
  await new Promise((r) => setTimeout(r, 200));
  return { id: `Q-${Date.now().toString().slice(-6)}`, ...payload };
}
