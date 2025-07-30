import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import Pin from "./icons/Pin";

const Invitation = () => {
  return (
    <div className="space-y-4">
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
          Sábado
          <br />
          3:00 PM
        </p>

        <hr className="w-10 rotate-90 text-primary" />

        <p className="text-primary text-5xl font-bold text-pretty pb-1.5">19</p>

        <hr className="w-10 rotate-90 text-primary" />

        <p className="uppercase text-center">
          Julio
          <br />
          2025
        </p>
      </div>

      <div className="flex">
        <div className="flex flex-col gap-2 w-1/2">
          <img src="/TiggerInicio.png" alt="Baby Shower" />
          <div className="flex flex-col items-center gap-1">
            <p className="text-primary text-xl">Dirección:</p>
            <p className="text-secondary uppercase text-center text-pretty">
              La Minka Mz.E Lt.35 Ate
            </p>
            <button className="bg-primary text-white rounded-full flex items-center py-1.5 px-3">
              <Pin />
              <span>Ver Ubicación</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-10 w-1/2">
          <div className="text-center space-y-2">
            <p className="text-primary text-xl">¿Cuánto falta?</p>
            <div className="w-max">
              <FlipClockCountdown
                to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
                showLabels={false}
                showSeparators={false}
                className="flip-clock"
              />
            </div>
          </div>
          <img src="/PiggletInicio.png" alt="Baby Shower" />
        </div>
      </div>
    </div>
  );
};

export default Invitation;
