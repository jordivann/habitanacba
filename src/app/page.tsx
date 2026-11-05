import { HomeHero } from '@/components/home/HomeHero/HomeHero';
import { HomeAbout } from '@/components/home/HomeAbout/HomeAbout';
import { HomeHighlights } from '@/components/home/HomeHighlights/HomeHighlights';
import { HomePaths } from '@/components/home/HomePaths/HomePaths';
import { HomeContact } from '@/components/home/HomeContact/HomeContact';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeHighlights />
      <HomePaths />
      <HomeContact />
    </>
  );
}
