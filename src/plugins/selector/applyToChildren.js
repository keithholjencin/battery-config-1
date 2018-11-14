const formatPseudo = (cx, indicator) => {
  const match = cx.match(indicator);
  const num = match[2];

  if (match[1]) {
    return `${cx} > :not(:nth-last-child(${num}))`;
  } else if (num) {
    return `${cx} > :not(:nth-child(${num}))`;
  } else {
    return `${cx} > *`;
  }
};

const applyToChildrenPlugin = {
  name: "applyToChildren",
  type: "classname",
  prefixOrSuffix: "suffix",
  modifiers: [
    {
      name: "children",
      separator: "-",
      indicator: `children(?:(-)?(\\d+)|)`,
      modifierFn: formatPseudo
    }
  ]
};

export default applyToChildrenPlugin;
