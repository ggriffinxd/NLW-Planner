import { FormEvent, useState } from "react";
import InviteGuestsModal from "./invite-guests-modal";
import ConfirmTripModal from "./confirm-trip-modal";
import { useNavigate } from "react-router-dom";
import DestinationAndDateStep from "./steps/destination-and-date-step";
import InviteGuestsStep from "./steps/invite-guests-step";

export function CreateTripPage() {
  const navigate = useNavigate();
  const [isGuestIsOpen, setIsGuestIsOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState(["amigo1@email.com"]);
  function openGuestInput() {
    setIsGuestIsOpen(true);
  }

  function closeGuestInput() {
    setIsGuestIsOpen(false);
  }

  function openGuestModal() {
    setIsGuestModalOpen(true);
  }
  function closeGuestModal() {
    setIsGuestModalOpen(false);
  }
  function openTripModal() {
    setIsConfirmTripModalOpen(true);
  }
  function closeTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  function addNewEmailToInvite(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const data = new FormData(ev.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      alert("Você não preencheu o campo email!");
    } else {
      if (emailsToInvite.includes(email)) {
        alert("Email já cadastrado!");
        return;
      }
      setEmailsToInvite([...emailsToInvite, email]);
    }

    ev.currentTarget.reset();
  }

  function removeEmailOnList(emailToRemove: string) {
    const newListEmail = emailsToInvite.filter(
      (emails) => emails !== emailToRemove
    );

    setEmailsToInvite(newListEmail);
  }

  function createTrip(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    navigate("/trips/123");
  }
  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center ">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="space-y-4">
          <DestinationAndDateStep
            closeGuestInput={closeGuestInput}
            isGuestIsOpen={isGuestIsOpen}
            openGuestInput={openGuestInput}
          />
          {isGuestIsOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              openGuestModal={openGuestModal}
              openTripModal={openTripModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          <br />
          com nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade.
          </a>
        </p>
      </div>

      {isGuestModalOpen && (
        <InviteGuestsModal
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestModal={closeGuestModal}
          emailsToInvite={emailsToInvite}
          removeEmailOnList={removeEmailOnList}
          openGuestInput={openGuestInput}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeTripModal={closeTripModal}
          createTrip={createTrip}
        />
      )}
    </div>
  );
}
