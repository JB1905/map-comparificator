import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export const Head = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <Helmet>
      <html lang={i18n.language} />
      <meta name="description" content={t('app.description')} />
      <body className={themeClassName} />
    </Helmet>
  )
}
