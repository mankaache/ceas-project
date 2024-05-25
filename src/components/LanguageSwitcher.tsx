import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { i18n } from "~/next-i18next.config";
import { toast } from "react-toastify";
import { getError } from "@/utils";

export default function LanguageSwitcher() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale = "fr" } = router;

  const [savedLocale, setSavedLocale] = React.useState<string>();
  const [error, setError] = React.useState<Error | null | any>();

  React.useEffect(() => {
    function handleLocale() {
      try {
        const value = localStorage.getItem("NEXT_I18NEXT_LOCALE");
        if (value) {
          setSavedLocale(value as string);
        } else {
          const val = localStorage.setItem("NEXT_I18NEXT_LOCALE", locale);
          setSavedLocale(locale);
        }
      } catch (err) {
        console.log(err);
        setError(err);
      }
    }

    handleLocale();
  }, [locale]);

  React.useEffect(() => {
    if (savedLocale && locale != savedLocale)
      router.replace(router.pathname, router.pathname, { locale: savedLocale });
  }, [savedLocale, locale, router]);

  React.useEffect(() => {
    if (error)
      toast.error(getError("text", error, "Error switching languages"));
  }, [error]);

  const langLocaleMap: { [index: string]: string } = React.useMemo(
    () => ({
      en: t("languages.english"),
      fr: t("languages.french"),
    }),
    [t]
  );

  const languages = React.useMemo(
    () =>
      i18n.locales.map((lng) => ({
        label: langLocaleMap[lng],
        value: lng,
      })),
    [langLocaleMap]
  );

  const selectedLang = languages.find(
    (lng) => lng.value === (savedLocale ?? locale ?? i18n.defaultLocale)
  );

  const onLangClick = (v: string) => {
    try {
      console.log(v);
      const value = localStorage.setItem("NEXT_I18NEXT_LOCALE", v);
      setSavedLocale(v);
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };

  return (
    <Select
      value={savedLocale ?? i18n.defaultLocale}
      onValueChange={onLangClick}
    >
      {/* <SelectTrigger className="w-[150px] p-4 outline-none focus:outline-none"> */}
      <SelectTrigger className="border border-gray-800 cursor-pointer rounded-lg text-md px-2 py-3 mb-3 select-bordered w-[100px] md:w-[100px] focus:ring-0">
        <SelectValue className="bg-red-500" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Languages</SelectLabel> */}
          {languages.map((language, idx) => (
            <SelectItem
              key={idx}
              value={language.value}
              className="focus:bg-secondary"
            >
              {language.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
