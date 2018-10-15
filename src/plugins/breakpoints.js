const breakpointsPlugin = {
  name: 'breakpoints',
  type: 'atrule',
  atrule: 'media',
  prefixOrSuffix: 'suffix',
  modifiers: [
    {
      name: 'responsiveSmall',
      indicator: 'sm',
      separator: '-',
      condition: '(min-width: 560px)'
    },
    {
      name: 'responsiveMedium',
      indicator: 'md',
      separator: '-',
      condition: '(min-width: 940px)'
    },
    {
      name: 'responsiveLarge',
      indicator: 'lg',
      separator: '-',
      condition: '(min-width: 1040px)'
    }
  ]
};

export default breakpointsPlugin;
