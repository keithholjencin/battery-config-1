import { singleLetterPositionSubProps } from './_shared';

const margin = {
  prop: 'margin',
  propName: 'm',
  subProps: singleLetterPositionSubProps,
  keywordValues: {
    separator: '-',
    values: { auto: 'auto' }
  },
  enablePlugin: 'lengthUnits'
};

export default margin;