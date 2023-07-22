"use client";
import { useState } from "react";
import { Color, Size } from "@/types";
import Button from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ colors, sizes }) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* Back ground*/}

        <div className="flex insert-0 bg-black bg-opacity-25" />

        {/* position*/}
        <div className="flexed insert-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full w-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"></Dialog.Panel>

          <div className="flex items-center justify-end px-4">
            <IconButton icon={<X size={15} onClick={onClose} />} />
          </div>
          <div className="p-4">
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            <Filter valueKey="colorId" name="Colors" data={colors} />
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
