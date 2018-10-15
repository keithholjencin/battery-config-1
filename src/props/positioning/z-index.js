const zIndeces = [
  'dropdown-2',
  'dropdown-3',
  'popover-3',
  'site-nav-3',
  'build-nav-3',
  'creator-nav-3',
  'banner-3',
  'admin-nav-3',
  'guided-search-3',
  'user-menu-2',
  'user-menu-3',
  'discover-overlay-3',
  'modal-3',
  'growl-3',
  'grid-overlay-3'
];

const generateZs = (arr) => arr.reduce((xs,x) => {
  xs[x] = `${arr.indexOf(x) + 100}`
  return xs;
},{});

const zIndex = {
  propName: 'z',
  prop: 'z-index',
  enablePlugin: 'integers',
  keywordValues: {
    separator: '-',
    values: generateZs(zIndeces)
  }
};

export default zIndex;