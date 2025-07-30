interface CardInvitationProps {
  setOpenInvitation: (open: boolean) => void;
}

const CardInvitation = ({ setOpenInvitation }: CardInvitationProps) => {
  const handleInvitation = () => {
    setOpenInvitation(true);
  };

  return (
    <div className="bg-[url(/images/fondoMiel.png)] bg-cover bg-no-repeat min-h-screen flex flex-col items-center justify-center gap-10">
      <img src="/images/DisenoPortadaSinBoton.png" alt="Portada Baby Shower" />

      <button
        className="bg-[#4F99E7] text-white py-2 font-semibold px-4 rounded-2xl border-2 border-white uppercase"
        onClick={handleInvitation}
      >
        Clic aquí para ver la invitación
      </button>
    </div>
  );
};

export default CardInvitation;
