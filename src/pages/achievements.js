import SingleAchievement from "../components/SingleAchievement";
import { fakeDatas } from "../data/achievements.data";

export default function Achievements() {
  return (
    <>
      {fakeDatas.map((sData) => {
        return <SingleAchievement infos={sData} />;
      })}
    </>
  );
}
