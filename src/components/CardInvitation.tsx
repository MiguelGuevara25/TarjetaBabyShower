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
        className="bg-[#cba056] text-white py-2 font-semibold px-4 rounded-2xl border-2 border-white uppercase absolute bottom-[17%] left-1/2 -translate-x-1/2"
        onClick={handleInvitation}
      >
        Click aquí
      </button>
    </div>
  );
};

export default CardInvitation;
