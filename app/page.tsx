import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { EmotionalHook } from "@/components/EmotionalHook";
import { JourneyPreview } from "@/components/JourneyPreview";
import { NotificationsPreview } from "@/components/NotificationsPreview";
import { Registration } from "@/components/Registration";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <EmotionalHook />
        <JourneyPreview />
        <NotificationsPreview />
        <Registration />
      </main>
    </>
  );
}
