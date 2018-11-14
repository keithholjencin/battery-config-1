const formatHoverTarget = cx => `hov-target:hover .${cx}`;

const pseudosPlugin = {
  name: "hoverTarget",
  type: "classname",
  prefixOrSuffix: "prefix",
  modifiers: [
    {
      name: "hover-item",
      separator: "-",
      indicator: "hov-item",
      modifierFn: formatHoverTarget
    }
  ]
};

export default pseudosPlugin;
