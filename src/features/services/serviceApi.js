import { services as mockServices } from '../../data/services';

export async function fetchServices() {
  await new Promise((r) => setTimeout(r, 150));
  return mockServices;
}

export async function fetchServiceById(id) {
  const list = await fetchServices();
  return list.find((s) => s.id === id) || null;
}
