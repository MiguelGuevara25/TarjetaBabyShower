import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import Pin from "./icons/Pin";
import Wsp from "./icons/Wsp";

const Invitation = () => {
  return (
    <div className="space-y-6">
      <p className="uppercase w-60 text-center mx-auto text-secondary">
        ¡La dulce espera está por terminar!
      </p>

      <div className="flex items-center gap-4">
        <img className="w-1/2" src="/WinniePoohInicio.png" alt="Baby Shower" />

        <h2 className="text-5xl text-center text-primary">Baby shower</h2>
      </div>

      <p className="uppercase text__invitation text-pretty text-secondary">
        Un nuevo integrante está por llegar a esta familia con amor e ilusión,
        esperamos se llegada. Gracias por ser parte de esta alegría
      </p>

      <p className="text__invitation text-primary text-2xl">Gelen & Mario</p>

      <p className="uppercase text__invitation text-secondary">
        Te invitamos a celebrar el
      </p>

      <div className="flex justify-center text-secondary items-center">
        <p className="uppercase text-center">
          Domingo
          <br />
          4:30 PM
        </p>

        <hr className="w-10 rotate-90 text-primary" />

        <p className="text-primary text-5xl font-bold text-pretty pb-1.5">31</p>

        <hr className="w-10 rotate-90 text-primary" />

        <p className="uppercase text-center">
          Agosto
          <br />
          2025
        </p>
      </div>

      <div className="flex">
        <div className="flex flex-col gap-2 basis-1/2">
          <img src="/TiggerInicio.png" alt="Baby Shower" />
          <div className="flex flex-col items-center gap-1">
            <p className="text-primary text-xl">Dirección:</p>
            <p className="text-secondary uppercase text-center text-pretty">
              La Minka Mz.E Lt.35 Ate
            </p>
            <a
              href="https://maps.app.goo.gl/sEwSqnsK45zLCMqg7"
              target="_blank"
              className="bg-primary text-white rounded-full flex items-center py-1.5 px-3 gap-2"
            >
              <Pin />
              <span>Ver Ubicación</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-10 basis-1/2">
          <div className="text-center space-y-2">
            <p className="text-primary text-xl">¿Cuánto falta?</p>
            <div className="w-max">
              <FlipClockCountdown
                to={new Date("2025-08-31T16:30:00").getTime()}
                showLabels={false}
                showSeparators={false}
                className="flip-clock"
              />
            </div>
          </div>
          <img src="/PiggletInicio.png" alt="Baby Shower" />
        </div>
      </div>

      <div className="flex">
        <div className="basis-1/2">
          <img src="/IgorInicio.png" alt="Baby Shower" />
        </div>

        <div className="basis-1/2 flex flex-col gap-3 items-center">
          <a
            href="https://wa.me/51912345678?text=Hola%2C%20confirmo%20mi%20asistencia%20a%20su%20Baby%20Shower.%20Nos%20vemos%20el%2031%20de%20Agosto.%20%F0%9F%A7%B8%F0%9F%8D%AF%F0%9F%92%99"
            target="_blank"
            className="bg-primary text-white rounded-full flex items-center py-1.5 px-3 w-max gap-2 cursor-pointer"
          >
            <Wsp />
            <span>Confirmar a Gelen</span>
          </a>

          <button className="bg-primary text-white rounded-full flex items-center py-1.5 px-3 w-max gap-2">
            <Wsp />
            <span>Confirmar a Mario</span>
          </button>

          <p className="text-primary text-xl">¡Te esperamos!</p>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
