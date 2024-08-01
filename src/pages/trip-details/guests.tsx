import { CircleDashed, UserCog } from "lucide-react";
import Button from "../../components/button";

function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Junior Alishe
            </span>
            <span className="block text-sm text-zinc-400 truncate ">
              junioralishe@email.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0" />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">João Fredo</span>
            <span className="block text-sm text-zinc-400 truncate ">
              joaofredo@email.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>
      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}

export default Guests;
