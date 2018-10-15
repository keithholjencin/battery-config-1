const simple = {
  'for-screenreader': ['absolute', 't-100px', 'w1px', 'h1px', 'clip']
};

const buttons = {
  bttn: {
    set: 'buttons',
    styles: [
      'medium',
      'text-center',
      'lh1',
      'pointer',
      'bg-white',
      'border-none',
      'relative',
      'inline-block',
      'no-radius'
    ],
    modifiers: [
      {
        name: 'size',
        separator: '-',
        classes: {
          small: ['h6', 'lh6', 'px2', 'fz12px'],
          large: ['h8', 'lh8', 'px4', 'fz16px']
        }
      },
      {
        name: 'color',
        separator: '-',
        classes: {
          black: ['bg-black', 'white', 'hover-bg-white', 'hover-black'],
          white: ['bg-white', 'black', 'hover-bg-black', 'hover-white']
        }
      }
    ]
  }
};

const squareClasses = num => [`w${num}`, `h${num}`];

const square = {
  square: {
    modifiers: [
      {
        regex: '\\d+',
        modifierFn: squareClasses
      }
    ]
  }
};

const generateAspectRatio = ratio => {
  const [width, height] = ratio.split('x');
  return `padding-bottom: ${(height / width) * 100}%`;
};

const aspectRatio = {
  'aspect-ratio': {
    set: 'aspectRatio',
    styles: ['h0', 'relative'],
    modifiers: [
      {
        separator: '--',
        regex: '(\\d+x\\d+)',
        modifierFn: generateAspectRatio
      },
      {
        separator: '__',
        classes: {
          'object': ['absolute', 't0', 'r0', 'b0', 'l0', 'w100p', 'h100p', 'z100']
        }
      }
    ]
  },
};

const sets = {
  classes: {
    ...buttons,
    ...aspectRatio,
    ...square
  }
};
