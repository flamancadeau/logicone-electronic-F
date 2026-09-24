export async function loginRequest() {
  await new Promise((r) => setTimeout(r, 200));
  return { token: 'mock-token', user: { id: 'demo', name: 'Demo User', role: 'customer' } };
}
