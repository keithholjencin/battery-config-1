const formatPseudo = (cx,pseudo) => `${cx}:${pseudo}`;

const pseudosPlugin = {
  name: 'pseudos',
  type: 'classname',
  prefixOrSuffix: 'prefix',
  modifiers: [
    {
      name: 'hover',
      separator: '-',
      indicator: 'hover',
      modifierFn: formatPseudo
    },
    {
      name: 'focus',
      separator: '-',
      indicator: 'focus',
      modifierFn: formatPseudo
    }
  ]
};

export default pseudosPlugin;