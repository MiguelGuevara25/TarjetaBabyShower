import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";

const CountdownInfo = () => {
  return (
    <div className="flex flex-col gap-10 basis-1/2 mt-10">
      <div className="text-center space-y-2">
        <p className="text-primary text-xl" style={{ fontFamily: "MiFuente" }}>
          ¿Cuánto falta?
        </p>
        <div className="w-max">
          <FlipClockCountdown
            to={new Date("2025-09-21T16:30:00").getTime()}
            labels={["Días", "Horas", "Minutos", "Segundos"]}
            showSeparators={false}
            className="flip-clock"
          />
        </div>
      </div>
      <img
        data-aos="fade-left"
        data-aos-duration="1000"
        src="/images/PiggletInicio.png"
        alt="Baby Shower"
      />
    </div>
  );
};

export default CountdownInfo;
