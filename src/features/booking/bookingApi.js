export async function createBooking(payload) {
  await new Promise((r) => setTimeout(r, 200));
  return { id: `LO-${Date.now().toString().slice(-6)}`, ...payload, status: 'pending' };
}
