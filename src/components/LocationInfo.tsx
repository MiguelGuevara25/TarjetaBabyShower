import Pin from "./icons/Pin";

const LocationInfo = () => {
  return (
    <div className="flex flex-col gap-2 basis-1/2">
      <img
        data-aos="fade-right"
        data-aos-duration="1000"
        src="/images/TiggerInicio.png"
        alt="Baby Shower"
      />
      <div className="flex flex-col items-center gap-1 mt-6">
        <p className="text-primary text-xl" style={{ fontFamily: "MiFuente" }}>
          Dirección:
        </p>
        <p className="text-secondary uppercase text-center text-pretty">
          Jr. Leon Velarde 296, Lince
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
  );
};

export default LocationInfo;
