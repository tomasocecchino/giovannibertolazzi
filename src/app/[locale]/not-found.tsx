import { useTranslations } from 'next-intl';
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export default function NotFoundPage({params: {locale}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);
  const t = useTranslations('Error');

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] text-center px-4 pt-24">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">{t('title')}</h2>
      <p className="text-lg text-muted-foreground">{t('message')}</p>
    </div>
  );
}
