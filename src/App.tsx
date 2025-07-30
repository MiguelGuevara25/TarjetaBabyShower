import { useEffect } from "react";
import Invitation from "./components/Invitation";
import { Howl } from "howler";

const App = () => {
  useEffect(() => {
    const sound = new Howl({
      src: ["/audio/sound-background.mp3"],
      loop: true,
      volume: 0.5,
    });

    sound.play();

    return () => {
      sound.stop();
    };
  }, []);

  return (
    <section className="w-11/12 mx-auto my-5 relative">
      <Invitation />
    </section>
  );
};

export default App;
