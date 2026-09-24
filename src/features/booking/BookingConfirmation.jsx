export default function BookingConfirmation({ reference }) {
  return (
    <div className="text-center py-space-xl">
      <p className="font-headline-md text-headline-md">Booking confirmed (mock)</p>
      {reference && <p className="font-body-sm text-body-sm text-secondary mt-1">{reference}</p>}
    </div>
  );
}
