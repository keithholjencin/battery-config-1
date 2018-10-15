
const buttons = {
  set: 'buttons',
  class: {
    'bttn': {
      root: [
        'medium','text-center','lh1','pointer','bg-white','border-none','relative','inline-block','no-radius'
      ],
      'svg': ['fill-currentColor']
    }
  },
  variantGroups: [
    {
      name: 'size',
      separator: '-',
      variants: [{
        'small': ['h6','lh6','px2','fz12px'],
        'large': ['h8','lh8','px4','fz16px'],
      }]
    },
    {
      name: 'color',
      separator: '-',
      variants: [{
        'black': ['bg-black','white','hover-bg-white','hover-black'],
        'white': ['bg-white','black','hover-bg-black','hover-white'],
      }]
    }
  ]
};

const generateAspectRatio = (ratio) => {
  const [ width, height ] = ratio.split('x');
  return `padding-bottom: ${(height/width)*100}%`;
}

const aspectRatio = {
  set: 'aspectRatio',
  class: {
    'aspect-ratio': ['h0','relative']
  },
  variantGroups: [
    {
      name: 'ratios',
      separator: '--',
      variantRegex: '(\\d+x\\d+)',
      variantFn: generateAspectRatio
    }
  ]
}

const aspectRatioObject = {
  set: 'aspectRatio',
  class: {
    'aspect-ratio__object': [
      'absolute','t0','r0','b0','l0','w100p','h100p','z100'
    ]
  }
}





