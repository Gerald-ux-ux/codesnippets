import { PlusIcon } from "lucide-react";

export default function AddEditorBtn({ handleAdd }: { handleAdd: any }) {
  return (
    <button
      onClick={(e) => handleAdd(e)}
      className="flex  items-center  w-64 gap-2 rounded-md p-2 text-primary hover:bg-hover"
    >
      Add another snippet
      <PlusIcon width={20} height={20} />
    </button>
  );
}
