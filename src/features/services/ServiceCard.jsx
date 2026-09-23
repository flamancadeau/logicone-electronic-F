export default function ServiceCard({ service }) {
  return (
    <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
      <h3 className="font-headline-md text-headline-md">{service?.title}</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{service?.description}</p>
    </div>
  );
}
