import { useTranslation } from 'react-i18next';

import { ReactComponent as OctoCat } from 'assets/github.svg';

// TODO
export const GitHubLink = () => {
  const { t } = useTranslation();

  return (
    <a
    // TODO
      href="https://github.com/JB1905/map-comparificator"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('settings.github.label')}
    >
      <OctoCat className="octocat" />
    </a>
  );
};

// TODO? export default
