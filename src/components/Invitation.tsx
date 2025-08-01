import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import Pin from "./icons/Pin";
import Wsp from "./icons/Wsp";

const Invitation = () => {
  return (
    <section className="w-11/12 mx-auto my-5 relative">
      <div className="space-y-6">
        <img
          className="absolute w-20 top-[2%] right-[1.5%]"
          src="/images/Abejita.png"
          alt="Logo"
        />
        <img
          className="absolute w-20 top-[29%] left-[1.5%]"
          src="/images/Abejita2.png"
          alt="Logo"
        />

        <img
          className="absolute w-8 top-[65%] left-[48%]"
          src="/images/AbejitaParada.png"
          alt="Logo"
        />

        <img
          className="absolute w-20 bottom-[12%] right-[12%]"
          src="/images/Abejita.png"
          alt="Logo"
        />

        <p className="uppercase w-60 text-center mx-auto text-secondary font-semibold">
          ¡Pronto seremos tres!
        </p>

        <div className="flex items-center">
          <img
            className="w-1/2"
            src="/images/WinniePoohInicio.png"
            alt="Baby Shower"
          />

          <h2
            className="text-5xl text-center text-primary"
            style={{ fontFamily: "MiFuente" }}
          >
            Baby shower
          </h2>
        </div>

        <p className="uppercase text__invitation text-pretty text-secondary">
          Un nuevo integrante está por llegar a esta familia con amor e ilusión.
        </p>

        <p
          className="text__invitation text-primary text-3xl"
          style={{ fontFamily: "MiFuente" }}
        >
          Mario & Gelen
        </p>

        <p className="uppercase text__invitation text-secondary">
          Te invitamos a celebrar con nosotros este día lleno de alegría. !Tu
          presencia lo hará aún más especial!
        </p>

        <div className="flex justify-center text-secondary items-center mb-10">
          <p className="uppercase text-center">
            <span className="font-semibold">Domingo</span>
            <br />
            4:30 PM
          </p>

          <hr className="w-10 rotate-90 text-primary" />

          <p className="text-primary text-5xl font-bold text-pretty pb-1.5">
            31
          </p>

          <hr className="w-10 rotate-90 text-primary" />

          <p className="uppercase text-center">
            <span className="font-semibold">Agosto</span>
            <br />
            2025
          </p>
        </div>

        <div className="flex">
          <div className="flex flex-col gap-2 basis-1/2">
            <img src="/images/TiggerInicio.png" alt="Baby Shower" />
            <div className="flex flex-col items-center gap-1">
              <p
                className="text-primary text-xl"
                style={{ fontFamily: "MiFuente" }}
              >
                Dirección:
              </p>
              <p className="text-secondary uppercase text-center text-pretty">
                La Minka Mz.E Lt.35 Ate
              </p>
              <a
                href="https://maps.app.goo.gl/sEwSqnsK45zLCMqg7"
                target="_blank"
                className="bg-primary text-white rounded-full flex items-center py-1.5 px-3 gap-2 font-semibold cursor-pointer uppercase text-sm text-center"
              >
                <Pin />
                <span>Ver Ubicación</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-10 basis-1/2">
            <div className="text-center space-y-2">
              <p
                className="text-primary text-xl"
                style={{ fontFamily: "MiFuente" }}
              >
                ¿Cuánto falta?
              </p>
              <div className="w-max">
                <FlipClockCountdown
                  to={new Date("2025-08-31T16:30:00").getTime()}
                  labels={["Días", "Horas", "Minutos", "Segundos"]}
                  showSeparators={false}
                  className="flip-clock"
                />
              </div>
            </div>
            <img src="/images/PiggletInicio.png" alt="Baby Shower" />
          </div>
        </div>

        <div className="flex">
          <div className="basis-1/2">
            <img src="/images/IgorInicio.png" alt="Baby Shower" />
          </div>

          <div className="basis-1/2 flex flex-col gap-3 items-center justify-center">
            <a
              href="https://wa.me/51923750803?text=Hola%2C%20confirmo%20mi%20asistencia%20a%20su%20Baby%20Shower.%20Nos%20vemos%20el%2031%20de%20Agosto.%20%F0%9F%A7%B8%F0%9F%8D%AF%F0%9F%92%99"
              target="_blank"
              className="bg-primary text-white rounded-full flex items-center py-1.5 px-4 w-max gap-2 cursor-pointer uppercase text-sm font-semibold text-center"
            >
              <Wsp />
              <span>
                Confirmar
                <br />
                Asistencia
              </span>
            </a>

            <p
              className="text-primary text-xl"
              style={{ fontFamily: "MiFuente" }}
            >
              ¡Te esperamos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
