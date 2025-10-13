import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
      <Hero
        imgURl="/home.jpg"
        imgAlt={"Home image"}
        text={"Professional Cloud Hosting"}
      />
    </div>
  );
}
