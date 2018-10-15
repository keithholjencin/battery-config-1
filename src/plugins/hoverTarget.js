const formatHoverTarget = (cx,indicator) => `hover-target:hover .${cx}`;

const pseudosPlugin = {
  name: 'hoverTarget',
  type: 'classname',
  prefixOrSuffix: 'prefix',
  modifiers: [
    {
      name: 'hover-item',
      separator: '-',
      indicator: 'bover-item',
      modifierFn: formatHoverTarget
    },
  ]
};

export default pseudosPlugin;