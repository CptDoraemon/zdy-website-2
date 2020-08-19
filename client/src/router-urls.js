const navTabs = {
  home: '/',
  search: '/search',
  browse: '/browse',
  download: '/download',
  submission: '/submission',
  contact: '/contact',
  help: '/help'
};

export const navTabsDataForHeader = Object.keys(navTabs).map(key => ({
  title: key,
  link: navTabs[key]
}));

const routerUrls = {
  ...navTabs,
  searchRowDetail: (id) => `/search/detail/${id}`
};

export default routerUrls
