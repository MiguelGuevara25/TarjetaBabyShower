import { useEffect, useState } from "react";
import CardInvitation from "./components/CardInvitation";
import Invitation from "./components/Invitation";
import { Howl } from "howler";

const App = () => {
  const [openInvitation, setOpenInvitation] = useState(false);

  // useEffect(() => {
  //   const sound = new Howl({
  //     src: ["/audio/sound-background.mp3"],
  //     loop: true,
  //     volume: 0.5,
  //   });

  //   sound.play();

  //   return () => {
  //     sound.stop();
  //   };
  // }, []);

  return (
    <div className="relative overflow-hidden">
      {!openInvitation && (
        <CardInvitation setOpenInvitation={setOpenInvitation} />
      )}
      {openInvitation && <Invitation />}
    </div>
  );
};

export default App;
