const aspectRatioPlugin = {
  type: "class",
  name: "aspectRatio",
  className: ["aspect-ratio", ["relative", "h0"]],
  modifiers: [
    {
      className: ["object", ["absolute", "h100p"]],
      separator: "__"
    },
    {
      regex: "\\d+x\\d+",
      separator: "--",
      modifierFn: dimensions => {
        const [width, height] = dimensions.split("x");
        return {
          "padding-bottom": `${(height / width) * 100}%`
        };
      }
    }
  ]
};

export default aspectRatioPlugin;
