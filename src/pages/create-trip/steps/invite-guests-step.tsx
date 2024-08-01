import { ArrowRight, UserRoundPlus } from "lucide-react";
import Button from "../../../components/button";

interface InviteGuestsStepProps {
  openGuestModal: () => void;
  openTripModal: () => void;
  emailsToInvite: string[];
}

function InviteGuestsStep({
  emailsToInvite,
  openGuestModal,
  openTripModal,
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex-1">
        <button
          type="button"
          onClick={openGuestModal}
          className="flex items-center gap-2"
        >
          <UserRoundPlus className="size-5 text-zinc-400" />
          {emailsToInvite.length <= 0 ? (
            <span className="text-zinc-400 text-lg flex-1">
              Quem vai estar na viagem?
            </span>
          ) : (
            <span className="text-zinc-100 text-lg flex-1">
              {emailsToInvite.length} pessoa(s) convidada(s)
            </span>
          )}
        </button>
      </div>

      <div className="w-px h-6 bg-zinc-800" />
      <Button onClick={openTripModal}>
        Confirmar viagem <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}

export default InviteGuestsStep;
