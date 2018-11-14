const addLengthUnit = unit => num => `${num}${unit}`;

// Pre-configured length unit functions for converting numbers
// into length units compatible with CSS standards
const addPercent = addLengthUnit('%');
const addRem = addLengthUnit('rem');
const addPixel = addLengthUnit('px');
const addViewportHeight = addLengthUnit('vh');
const addViewportWidth = addLengthUnit('vw');

const pxToRem = (x, baseFontSize = 10) => addRem(x / baseFontSize);

const unboundFormatPx = ({
  baseFontSize,
  baselineUnit,
  useRems,
  useBaseline
}) => x => {
  const convertedUnit = useBaseline ? x * baselineUnit : x;
  return useRems
    ? pxToRem(convertedUnit, baseFontSize)
    : addPixel(convertedUnit);
};

const aspectRatio = (width, height) => {
  return `${(height / width) * 100}%`;
};

const unboundFormat = (baseFontSize, baselineUnit, useRems, useBaseline) => ({
  percent: addPercent,
  rem: addRem,
  pixel: unboundFormatPx({ baseFontSize, baselineUnit, useRems }),
  viewportHeight: addViewportHeight,
  viewportWidth: addViewportWidth,
  aspectRatio: aspectRatio,
  baseline: unboundFormatPx({
    baseFontSize,
    baselineUnit,
    useRems,
    useBaseline
  })
});

const format = unboundFormat(16, 6, true, true);

// Plugin config

const lengthUnitsPlugin = {
  name: 'lengthUnits',
  type: 'pattern',
  valueRegexString: '-?[0-9]{1,4}',
  valueModifiers: [
    {
      name: 'baseline',
      default: true,
      indicator: '',
      modifierFn: format.baseline,
      sampleValues: ['3', '5', '10', '0', '-2']
    },
    {
      name: 'percent',
      indicator: 'p',
      modifierFn: format.percent,
      sampleValues: ['20', '50', '100', '-10', '66']
    },
    {
      name: 'pixel',
      indicator: 'px',
      modifierFn: format.pixel,
      sampleValues: ['1', '2', '3', '-2', '-5']
    },
    {
      name: 'viewport height',
      indicator: 'vh',
      modifierFn: format.viewportHeight,
      sampleValues: ['10', '25', '50', '100', '130']
    },
    {
      name: 'viewport width',
      indicator: 'vw',
      modifierFn: format.viewportWidth,
      sampleValues: ['10', '25', '75', '50', '100']
    },
    {
      name: 'aspect ratio',
      indicator: '\\d+',
      separator: 'x',
      modifierFn: aspectRatio,
      sampleValues: ['16'],
      sampleIndicatorValues: ['9']
    }
  ]
};

export default lengthUnitsPlugin;
