import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin py-space-2xl">
      <span className="font-label-tech text-label-tech uppercase tracking-widest text-primary">About</span>
      <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-space-xs">
        LogicOne Electronic
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-md">
        LogicOne combines an electronics services business — CCTV, computer repair, networking, solar/backup
        power, TV, printers — with a Training Center in Kigali. We repair, upgrade, and build, while training
        the next generation of hardware technicians.
      </p>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-md">
        Our lab emphasizes ESD-safe workflows, genuine OEM parts, fixed quotes before soldering, and a 6-month
        guarantee on board-level work.
      </p>
      <div className="mt-space-xl flex flex-wrap gap-space-md">
        <Link to="/services" className="text-primary font-label-lg hover:underline">
          Our services
        </Link>
        <Link to="/training" className="text-tertiary font-label-lg hover:underline">
          Training academy
        </Link>
        <Link to="/contact" className="text-on-surface font-label-lg hover:underline">
          Visit us
        </Link>
      </div>
    </div>
  );
}
