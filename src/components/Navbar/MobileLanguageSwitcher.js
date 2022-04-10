import { Radio, RadioGroup } from "@mantine/core";
import {
  I18nextContext,
  useI18next,
  useTranslation,
} from "gatsby-plugin-react-i18next";
import React, { useContext } from "react";

export default function MobileLanguageSwitcher() {
  const { changeLanguage } = useI18next();
  const context = useContext(I18nextContext);
  const { t } = useTranslation();

  return (
    <RadioGroup
      label={t("languageSwitcherTitle")}
      description={t("languageSwitcherDescription")}
      color="gray"
      value={context.language}
      onChange={(language) => changeLanguage(language)}
      className="mx-auto mb-20 text-center"
      classNames={{
        description: "mb-2",
        radioWrapper: "mx-auto",
      }}
      size="md"
    >
      <Radio value="de" label="Deutsch" />
      <Radio value="en" label="English" />
      <Radio value="cz" label="čeština" />
    </RadioGroup>
  );
}
