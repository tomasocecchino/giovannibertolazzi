
"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from '@/navigation';
import { useTransition } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
  const locale = useLocale();
  const selectedLanguage = languages.find(lang => lang.code === locale);

  return (
      <div className="flex items-center gap-2 text-white/80 p-2 h-auto">
          {selectedLanguage && (
            <Image
              src={selectedLanguage.flag}
              alt={selectedLanguage.name}
              width={20}
              height={15}
            />
          )}
          <span className="text-sm">{selectedLanguage?.name}</span>
      </div>
  );
}
