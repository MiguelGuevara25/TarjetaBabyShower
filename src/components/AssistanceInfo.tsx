import Wsp from "./icons/Wsp";

const AssistanceInfo = () => {
  return (
    <div className="flex">
      <div className="basis-1/2">
        <img
          data-aos="fade-right"
          data-aos-duration="1000"
          src="/images/IgorInicio.png"
          alt="Baby Shower"
        />
      </div>

      <div className="basis-1/2 flex flex-col gap-3 items-center justify-center">
        <a
          href="https://goo.su/3mY1QnH"
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

        <p className="text-primary text-xl" style={{ fontFamily: "MiFuente" }}>
          ¡Te esperamos!
        </p>
      </div>
    </div>
  );
};

export default AssistanceInfo;
