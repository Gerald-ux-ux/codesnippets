import { PlusIcon } from "lucide-react";

export default function AddEditorBtn({ handleAdd }: { handleAdd: any }) {
  return (
    <button
      onClick={(e) => handleAdd(e)}
      className="flex w-56 items-center  gap-2 rounded-lg p-2 text-primary hover:bg-secondaryA"
    >
      Add another snippet
      <PlusIcon width={20} height={20} />
    </button>
  );
}
