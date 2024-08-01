import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import Button from "../../components/button";

interface InviteGuestsModalProps {
  closeGuestModal: () => void;
  openGuestInput: () => void;
  emailsToInvite: string[];
  addNewEmailToInvite: (ev: FormEvent<HTMLFormElement>) => void;
  removeEmailOnList: (emailToRemove: string) => void;
}

function InviteGuestsModal({
  addNewEmailToInvite,
  closeGuestModal,
  emailsToInvite,
  removeEmailOnList,
  openGuestInput,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button onClick={closeGuestModal} type="button">
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((emails) => (
            <div
              key={emails}
              className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
            >
              <span className="text-zinc-300">{emails}</span>
              <button type="button" onClick={() => removeEmailOnList(emails)}>
                <X className="size-4 text-zinc-400" />
              </button>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-zinc-800"></div>

        <form
          onSubmit={addNewEmailToInvite}
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
        >
          <div className="px-2 flex items-center flex-1 gap-2">
            <AtSign className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Digite o email do convidado"
              className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
            />
          </div>
          <Button type="submit" onClick={openGuestInput}>
            Convidar amigos <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default InviteGuestsModal;