const hexToRgba = (hex, opacity) => {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity / 100})`;
};

const colorPlugin = {
  name: 'colors',
  type: 'lookup',
  values: {
    black: '#000000',
    white: '#ffffff',
    pink: '#ff9dd8',
    'totoro-belly': '#e1d6a8'
  },
  sampleValues: ['black', 'pink'],
  valueModifiers: [
    {
      name: 'opacity',
      separator: '_',
      indicator: '\\d+',
      modifierFn: hexToRgba,
      sampleIndicatorValues: ['01', '99', '50']
    }
  ]
};

export default colorPlugin;
