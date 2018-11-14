const addMs = (x) => `${x}ms`

const timePlugin = {
  name: 'times',
  type: 'pattern',
  valueRegexString: '[0-9]{1,4}',
  valueModifiers: [
    {
      name: 'milliseconds',
      default: true,
      indicator: '',
      modifierFn: addMs,
      sampleValues: ['300','500','1000']
    }
  ]
};

export default timePlugin;