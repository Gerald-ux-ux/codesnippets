import { PlusIcon } from "lucide-react";

export default function AddEditorBtn({ handleAdd }: { handleAdd: any }) {
  return (
    <div className="flex">

    <button
      onClick={(e) => handleAdd(e)}
      className="flex  items-center justify-center py-3 px-5 gap-2 rounded-md  text-primary bg-secondary border-primary border"
    >
      Add another snippet
      <PlusIcon width={20} height={20} />
    </button>
    </div>
  );
}
