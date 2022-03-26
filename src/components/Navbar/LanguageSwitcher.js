import { Dialog } from "@headlessui/react";
import {
  I18nextContext,
  Link,
  useI18next,
  useTranslation,
} from "gatsby-plugin-react-i18next";
import React, { useContext, useState } from "react";
import { Button } from "@mantine/core";

export default function LanguageSwitcher() {
  const context = useContext(I18nextContext);
  const { languages, originalPath } = useI18next();
  const { t } = useTranslation();
  let [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <button
        className={
          "rounded-xl py-3 px-8 text-green shadow-inner shadow-neutral-200"
        }
        onClick={() => setMenuOpen(true)}
      >
        {context.language.toUpperCase()}
      </button>
      <Dialog
        as="div"
        open={menuOpen}
        className="fixed inset-0 z-50 w-full overflow-y-auto px-8"
        onClose={() => setMenuOpen(false)}
      >
        <div className="flex min-h-screen items-center justify-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-20" />

          <div
            className={
              "my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-neutral-800"
            }
          >
            <Dialog.Title
              as={"h3"}
              className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
            >
              {t("languageSwitcherTitle")}
            </Dialog.Title>
            <div className="mt-6">
              <p className="flex justify-start space-x-6 text-sm text-gray-500">
                {languages.map((language) => (
                  <Link
                    key={language}
                    to={originalPath}
                    language={language}
                    onClick={() => setMenuOpen(false)}
                  >
                    {language.toUpperCase()}
                  </Link>
                ))}
              </p>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
