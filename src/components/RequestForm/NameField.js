import { TextInput } from "@mantine/core";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";

export default function NameField() {
  const { t } = useTranslation();

  return (
    <TextInput
      placeholder={t("email")}
      variant="unstyled"
      className="w-full min-w-[40px] flex-1 rounded-xl shadow-inner shadow-neutral-200 xl:mr-2"
      classNames={{
        input: "text-center leading-none h-fit text-md",
        label:
          "flex justify-center mb-0 text-center font-sans text-xs text-gray-400",
        root: "p-3 w-full items-center flex justify-center",
      }}
    />
  );
}
