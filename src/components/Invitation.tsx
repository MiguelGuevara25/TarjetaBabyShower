import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const Invitation = () => {
  return (
    <div className="space-y-4">
      <p className="uppercase w-60 text-center mx-auto text-secondary">
        ¡La dulce espera está por terminar!
      </p>

      <div className="flex items-center gap-4">
        <img
          className="border w-1/2"
          src="/WinniePoohInicio.png"
          alt="Baby Shower"
        />

        <h2 className="text-5xl text-center text-primary">Baby shower</h2>
      </div>

      <p className="uppercase text__invitation text-secondary">
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

      <div className="flex justify-between">
        <img
          className="w-1/3"
          src="/TiggerInicio.png"
          alt="Baby Shower"
        />
        <div className="text-center">
          <p className="text-primary text-2xl">¿Cuánto falta?</p>
          <div className="w-max">
            <FlipClockCountdown
              to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
              labels={["Días", "Horas", "Minutos", "Segundos"]}
              labelStyle={{
                fontSize: 10,
                fontWeight: 500,
                textTransform: "uppercase",
              }}
              showSeparators={false}
              className="flip-clock"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
