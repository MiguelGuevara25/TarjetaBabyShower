const EventInfo = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="flex justify-center text-secondary items-center mb-10"
    >
      <p className="uppercase text-center">
        <span className="font-semibold">Domingo</span>
      </p>

      <hr className="w-10 rotate-90 text-primary" />

      <div className="text-primary text-5xl font-bold flex flex-col items-center">
        <span>21</span>
        <span className="text-secondary uppercase text-base font-normal">
          Septiembre
        </span>
      </div>

      <hr className="w-10 rotate-90 text-primary" />

      <p className="uppercase text-center">
        <span className="font-semibold">4:30 PM</span>
      </p>
    </div>
  );
};

export default EventInfo;
