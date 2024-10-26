import arrow2 from "@/assets/svg/arrow2.svg";
import set from "@/assets/svg/set.svg";
import doodles_round from "@/assets/svg/doodles-mixed-round.svg";
import Button from "@/assets/components/Button";
import { Download } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-around flex-row flex-wrap"
    >
      <div className="flex flex-row">
        <div className="py-12 px-2">
          <img src={arrow2} alt="Logo" />
        </div>
        <div className="flex gap-12 flex-col">
          <p className="text-8xl font-extrabold text-theme1-light">
            CREATIVE WEB <p className="text-theme1-primary">DEVELOPER</p>
          </p>
          <div className="flex gap-6">
            <Button>Hire Me</Button>
            <Button color="secondary">
              Download CV <Download />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative min-w-fit py-12 px-2">
        <img className="absolute bottom-0" src={set} alt="Logo" />
        <img src={doodles_round} alt="Logo" />
      </div>
    </section>
  );
};

export default Home;
