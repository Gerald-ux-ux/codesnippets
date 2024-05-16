import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function MobileToggleBtn({ open, setOpen }: Props) {
  return (
    <motion.button
      onClick={() => setOpen(!open)}
      className="ml-2 md:hidden"
      initial={false}
      animate={{ rotate: open ? 90 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {open ? (
        <IoCloseOutline className="h-8 w-8 text-secondary" />
      ) : (
        <IoMdMenu className="h-8 w-8  text-secondary" />
      )}
    </motion.button>
  );
}
