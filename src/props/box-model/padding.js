import { singleLetterPositionSubProps } from './_shared';

const padding = {
  prop: 'padding',
  propName: 'p',
  subProps: singleLetterPositionSubProps,
  keywordValues: {
    separator: '-',
    values: { auto: 'auto' }
  },
  enablePlugin: 'lengthUnits'
};

export default padding;