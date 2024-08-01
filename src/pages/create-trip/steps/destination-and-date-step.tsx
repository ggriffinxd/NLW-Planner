import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import Button from "../../../components/button";

interface DestinationAndDateStepProps {
  isGuestIsOpen: boolean;
  closeGuestInput: () => void;
  openGuestInput: () => void;
}

function DestinationAndDateStep({
  closeGuestInput,
  isGuestIsOpen,
  openGuestInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          disabled={isGuestIsOpen}
        />
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Quando?"
          className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
          disabled={isGuestIsOpen}
        />
      </div>

      <div className="w-px h-6 bg-zinc-800"></div>

      {isGuestIsOpen ? (
        <Button onClick={closeGuestInput} variant="secondary">
          Alterar local/data <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestInput}>
          Continuar <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}

export default DestinationAndDateStep;
