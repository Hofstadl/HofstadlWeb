import { Modal, Radio, RadioGroup } from "@mantine/core";
import {
  I18nextContext,
  useI18next,
  useTranslation,
} from "gatsby-plugin-react-i18next";
import React, { useContext, useState } from "react";

export default function LanguageSwitcher() {
  const context = useContext(I18nextContext);
  const { changeLanguage } = useI18next();
  const { t } = useTranslation();
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className={
          "rounded-xl py-3 px-8 text-green shadow-inner shadow-neutral-200"
        }
        onClick={() => setIsOpen(true)}
      >
        {context.language.toUpperCase()}
      </button>
      <Modal
        title={t("languageSwitcherTitle")}
        opened={isOpen}
        onClose={() => setIsOpen(false)}
        centered
        overlayOpacity={0.4}
        radius="lg"
        className="hidden md:block"
        classNames={{ header: "mb-1" }}
      >
        <RadioGroup
          description={t("languageSwitcherDescription")}
          color="gray"
          value={context.language}
          onChange={(language) => changeLanguage(language)}
          className="mb-20 md:mb-0"
          classNames={{ description: "mb-4", radio: "fill-green" }}
          size="md"
        >
          <Radio value="de" label="Deutsch" />
          <Radio value="en" label="English" />
          <Radio value="cz" label="čeština" />
        </RadioGroup>
      </Modal>
    </div>
  );
}
