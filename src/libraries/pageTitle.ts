const SITE_NAME = 'ShipSaaS';

export const setPageTitle = (title: string | null) => {
  if (!title) {
    window.document.title = SITE_NAME;
  }

  window.document.title = `${title} - ${SITE_NAME}`;
};
