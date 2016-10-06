const html = require('choo/html')

const { linearConversion } = require('../helpers/scale')

module.exports = (state, prev, send) => {
  const blockPadding = linearConversion({
    value: state.options.values.spacing,
    out: {
      min: 0.5,
      max: 5
    }
  })

  const fontSize = linearConversion({
    value: state.options.values.scale,
    out: {
      min: 0.5,
      max: 10
    }
  })

  return html`
    <style>
      body {
        background: ${state.options.values.colorBg};
      }

      .design-block-padding {
        padding: ${blockPadding}rem;
      }

      .tc-black {
        color: ${state.options.values.colorText};
      }

      .tc-white {
        color: ${state.options.values.colorBg};
      }

      .bg-black {
        background: ${state.options.values.colorText};
      }

      .bg-white {
        background: ${state.options.values.colorBg};
      }

      .design-color-entry,
      .design-color-entry a, {
        color: ${state.options.values.colorText};
      }

      .strike:before {
        background: ${state.options.values.colorText};
      }

      .bbu {
        border-bottom-color: ${state.options.values.colorText};
      }

      .design-font {
        font-family: ${state.options.values.font.value}, sans-serif;
        font-weight: ${state.options.values.font.weight || 400};
        font-size: ${fontSize}rem;
      }
    </style>
  `
}
