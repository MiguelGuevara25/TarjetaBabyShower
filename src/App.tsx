import { useEffect, useState } from "react";
import Invitation from "./components/Invitation";
import { Howl } from "howler";
import CardInvitation from "./components/CardInvitation";

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

  const [openInvitation, setOpenInvitation] = useState(false);

  return (
    <>
      {!openInvitation && (
        <CardInvitation setOpenInvitation={setOpenInvitation} />
      )}
      {openInvitation && <Invitation />}
    </>
  );
};

export default App;
