import AOS from "aos";
import EventInfo from "../components/EventInfo";
import LocationInfo from "../components/LocationInfo";
import CountdownInfo from "../components/CountdownInfo";
import AssistanceInfo from "../components/AssistanceInfo";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "aos/dist/aos.css";
import ImagesBabyShower from "../components/ImagesBabyShower";

const Invitation = () => {
  AOS.init();
  return (
    <section className="w-11/12 mx-auto my-5 overflow-hidden bg-animated">
      <div className="space-y-6">
        <ImagesBabyShower />

        <p className="uppercase text-center mx-auto text-secondary text-pretty text-up">
          Aún estoy en la pancita, pero ya quiero conocerte.{" "}
          <span className="font-semibold">
            ¡Te invito a mi primer gran fiesta!
          </span>
        </p>

        <hr className="text-secondary" />

        <div className="flex items-center justify-between text-up">
          <div className="basis-1/2">
            <img src="/images/WinniePoohInicio.png" alt="Baby Shower" />
          </div>

          <h2
            className="text-5xl text-left flex flex-col gap-1 text-primary basis-1/2"
            style={{ fontFamily: "MiFuente" }}
          >
            <span className="text-3xl">My</span>
            <span>Baby Shower</span>
          </h2>
        </div>

        <p className="uppercase text__invitation text-pretty text-secondary text-up">
          Soy un pequeño milagro que crece día a día y me emociona compartir
          este momento contigo.
        </p>

        <p
          className="grid grid-cols-2 text-primary text-5xl mt-10"
          style={{ fontFamily: "MiFuente" }}
        >
          <span className="text-right -mr-3 slow-left">Gael</span>
          <span></span>
          <span></span>
          <span className="-ml-3 slow-right">Adriel</span>
        </p>

        <p className="uppercase text__invitation text-secondary z-10 mt-14">
          Mis papis
        </p>

        <p
          className="text-primary text-center text-4xl -mt-4"
          style={{ fontFamily: "MiFuente" }}
        >
          Mario y Gelen
        </p>

        <p className="uppercase text__invitation text-secondary">
          Están organizando una fiestota para celebrar que muy pronto llegaré, y
          tú eres parte de la lista VIP.
        </p>

        <p className="uppercase text__invitation text-secondary">
          Ven a compartir con nosotros este:
        </p>

        <EventInfo />

        <div className="flex -mt-6">
          <LocationInfo />
          <CountdownInfo />
        </div>

        <AssistanceInfo />

        <hr className="text-secondary -mt-3" />

        <p className="text-secondary uppercase text-center text-pretty">
          No vengas con las manos vacías, <strong>trae tu mejor sonrisa</strong>{" "}
          y muchas ganas de celebrar.
        </p>
      </div>
    </section>
  );
};

export default Invitation;
