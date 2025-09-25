
"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from '@/navigation';
import { useTransition } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from "@/lib/utils";

const languages = [
  { code: "it", name: "Italiano", flag: "/flags/it.svg" },
  { code: "en", name: "English", flag: "/flags/gb.svg" },
  { code: "fr", name: "Français", flag: "/flags/fr.svg" },
  { code: "es", name: "Español", flag: "/flags/es.svg" },
  { code: "de", name: "Deutsch", flag: "/flags/de.svg" },
  { code: "ru", name: "Русский", flag: "/flags/ru.svg" },
  { code: "zh", name: "中文", flag: "/flags/cn.svg" },
];

export default function LanguageSwitcher({ forceDark, forceLight }: { forceDark?: boolean, forceLight?: boolean }) {
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
    <Select onValueChange={onSelectChange} defaultValue={locale} disabled={isPending}>
      <SelectTrigger 
        className={cn(
            "w-auto bg-transparent border-none p-2 h-auto focus:ring-0 focus:ring-offset-0 shadow-none",
            forceDark && "text-white/80",
            forceLight && "text-black/80"
        )}
        icon={null}
      >
        <SelectValue>
           {selectedLanguage && (
            <div className="flex items-center">
                <Image
                    src={selectedLanguage.flag}
                    alt={selectedLanguage.name}
                    width={20}
                    height={15}
                    className="w-5 h-auto"
                />
            </div>
           )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-primary border-white/20 text-white">
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
             <div className="flex items-center gap-3">
                <Image
                    src={lang.flag}
                    alt={lang.name}
                    width={20}
                    height={15}
                    className="w-5 h-auto"
                />
                <span>{lang.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
