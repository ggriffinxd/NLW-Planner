import { Link2, Plus } from "lucide-react";
import Button from "../../components/button";

function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do airbnb
            </span>
            <a className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
              https://www.airbnb.com/as7dghaisudhaiusdhaisuhdiasuhdiaushdiaushdiasuhdia
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do airbnb
            </span>
            <a className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
              https://www.airbnb.com/as7dghaisudhaiusdhaisuhdiasuhdiaushdiaushdiasuhdia
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>
      <Button size="full" variant="secondary">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
}

export default ImportantLinks;
