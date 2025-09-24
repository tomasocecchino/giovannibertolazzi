"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/navigation";
import { useTransition } from "react";
import Image from "next/image";

const languages = [
  { code: "it", name: "Italiano", flag: "/flags/it.svg" },
  { code: "en", name: "English", flag: "/flags/gb.svg" },
  { code: "fr", name: "Français", flag: "/flags/fr.svg" },
  { code: "es", name: "Español", flag: "/flags/es.svg" },
  { code: "de", name: "Deutsch", flag: "/flags/de.svg" },
  { code: "ru", name: "Русский", flag: "/flags/ru.svg" },
  { code: "zh", name: "中文", flag: "/flags/cn.svg" },
];

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onSelectChange = (value: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: value });
    });
  };

  const selectedLanguage = languages.find(lang => lang.code === locale);

  return (
      <Select defaultValue={locale} onValueChange={onSelectChange} disabled={isPending}>
        <SelectTrigger className="w-auto bg-transparent border-none text-white/60 hover:text-white focus:ring-0 focus:ring-offset-0 p-2 h-auto gap-2">
          {selectedLanguage && (
            <Image
              src={selectedLanguage.flag}
              alt={selectedLanguage.name}
              width={20}
              height={15}
            />
          )}
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-primary/80 backdrop-blur-sm text-white border-white/20">
          {languages.map((language) => (
            <SelectItem key={language.code} value={language.code} className="cursor-pointer">
              <div className="flex items-center gap-2">
                <Image
                  src={language.flag}
                  alt={language.name}
                  width={20}
                  height={15}
                />
                <span>{language.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
  );
}
