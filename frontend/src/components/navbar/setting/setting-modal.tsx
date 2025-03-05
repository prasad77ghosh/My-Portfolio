"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../../ui/animated-modal";

export function SettingModal({
  TriggerButton,
}: {
  TriggerButton?: React.ReactNode;
}) {
  return (
    <div className="py-40  flex items-center justify-center">
      <Modal>
        <ModalTrigger className="cursor-pointer">{TriggerButton}</ModalTrigger>
        <ModalBody>
          <ModalContent>
            <div>
              <h1>Setting Container</h1>
            </div>
          </ModalContent>
          {/* <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Book Now
            </button>
          </ModalFooter> */}
        </ModalBody>
      </Modal>
    </div>
  );
}
