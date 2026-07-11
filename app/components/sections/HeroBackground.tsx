import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src="/images/hero-image1.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Gradient overlays so text stays legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
    </div>
  );
}