const opacityPercentage = (x) => parseFloat(x)/100;

const floatsPlugin = {
  name: 'floats',
  type: 'pattern',
  valueRegexString: '[0-9]{1,3}',
  valueModifiers: [
    {
      name: 'percent',
      indicator: 'p',
      modifierFn: opacityPercentage,
      sampleValues: ['20','50','100','66']
    },
  ]
};

export default floatsPlugin;