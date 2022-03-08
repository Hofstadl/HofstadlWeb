import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { useTranslation } from "gatsby-plugin-react-i18next";

export default function RoomApartmentSwitch() {
  const [room, setRoom] = useState(true);
  const { t } = useTranslation();

  return (
    <>
      <div>
        <RadioGroup value={room} onChange={setRoom}>
          <div className="flex h-10 w-56 rounded-2xl shadow-inner shadow-neutral-200">
            <div
              className={`absolute h-10 w-24 transform rounded-2xl bg-blue transition duration-300 ease-in-out ${
                room
                  ? ""
                  : "w-32 translate-x-24 transition duration-300 ease-in-out"
              }`}
            />
            <div className="z-10 flex h-full w-full items-center justify-around">
              <RadioGroup.Option value={true}>
                {({ checked }) => (
                  <div
                    className={
                      checked
                        ? "text-white transition duration-150 ease-in-out"
                        : "text-black transition duration-150 ease-in-out"
                    }
                  >
                    {t("room")}
                  </div>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value={false}>
                {({ checked }) => (
                  <div
                    className={
                      checked
                        ? "text-white transition duration-150 ease-in-out"
                        : "text-black transition duration-150 ease-in-out"
                    }
                  >
                    {t("apartment")}
                  </div>
                )}
              </RadioGroup.Option>
            </div>
          </div>
        </RadioGroup>
      </div>
    </>
  );
}
