interface CardInvitationProps {
  setOpenInvitation: (open: boolean) => void;
}

const CardInvitation = ({ setOpenInvitation }: CardInvitationProps) => {
  const handleInvitation = () => {
    setOpenInvitation(true);
  };

  return (
    <div className="bg-[url(/fondoMiel.png)] bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center">
      <div
        className="absolute bottom-[18%] w-4/5 h-[5%] mx-auto cursor-pointer"
        onClick={handleInvitation}
      ></div>

      <img
        src="PortadaSinFondo.png"
        className="h-screen border"
        alt="Portada Baby Shower"
      />
    </div>
  );
};

export default CardInvitation;
