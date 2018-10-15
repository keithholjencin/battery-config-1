const squareClasses = num => [`w${num}`, `h${num}`];

const square = {
  className: 'square',
  modifiers: [
    {
      regex: '\\d+',
      modifierFn: squareClasses
    }
  ]
};

const generateAspectRatio = ratio => {
  const [width, height] = ratio.split('x');
  return `padding-bottom: ${(height / width) * 100}%`;
};

const aspectRatio = {
  className: ['aspect-ratio', ['h0', 'relative']],
  modifiers: [
    {
      separator: '--',
      regex: '(\\d+x\\d+)',
      modifierFn: generateAspectRatio
    },
    {
      separator: '__',
      className: [
        'object',
        ['absolute', 't0', 'r0', 'b0', 'l0', 'w100p', 'h100p', 'z100']
      ]
    }
  ]
};

const buttons = {
  className: [
    'bttn',
    [
      'medium',
      'text-center',
      'lh1',
      'pointer',
      'bg-white',
      'border-none',
      'relative',
      'inline-block',
      'no-radius'
    ]
  ],
  modifiers: [
    {
      separator: '-',
      classesName: [
        ['small', ['h6', 'lh6', 'px2', 'fz12px']],
        ['large', ['h8', 'lh8', 'px4', 'fz16px']]
      ]
    },
    {
      separator: '-',
      classes: [
        ['black', ['bg-black', 'white', 'hover-bg-white', 'hover-black']],
        ['white', ['bg-white', 'black', 'hover-bg-black', 'hover-white']]
      ]
    }
  ]
};

const sets = [...aspectRatio];
