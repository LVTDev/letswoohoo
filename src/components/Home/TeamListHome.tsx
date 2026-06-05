import TeamListHomeSlider from "./TeamListHomeSlider";
import { fetchSanity } from "@/utils/sanityFetch";
// import { ArrowRight } from "react-feat

const TeamListHome = async ({ lang }: { lang: string }) => {
  const teamList = await fetchSanity("equipo");

  return <TeamListHomeSlider lang={lang} teamList={teamList} />;
};

export default TeamListHome;
