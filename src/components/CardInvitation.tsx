interface CardInvitationProps {
  setOpenInvitation: (open: boolean) => void;
}

const CardInvitation = ({ setOpenInvitation }: CardInvitationProps) => {
  const handleInvitation = () => {
    setOpenInvitation(true);
  };

  return (
    <div className="bg-[url(/images/fondo2.png)] h-dvh bg-no-repeat bg-contain bg-center relative">
      <button
        className="bg-trasnparent text-[#cba056] py-1 font-semibold px-3 rounded-2xl border-2 border-[#cba056] uppercase absolute top-[33.5%] left-1/2 -translate-x-1/2"
        onClick={handleInvitation}
      >
        Click aquí
      </button>
    </div>
  );
};

export default CardInvitation;
