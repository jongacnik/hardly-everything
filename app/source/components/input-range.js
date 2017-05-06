const h = require('choo/html')
const x = require('xtend')

const inputRange = (opts) => {
  const options = x({
    name: 'Range',
    height: '3rem',
    slideBg: 'rgba(127, 127, 127, 0.165)',
    value: 20,
    valueShow: true,
    handleInput: e => { }
  }, opts)

  const valueEl = h`
    <div class="psa t0 r0 pen px1 mono">
      ${options.value}
    </div>
  `

  return h`
    <div
      class="psr ofh cur-ewr c12"
      style="height: ${options.height}; line-height: ${options.height}"
    >
      <label class="psa t0 l0 pen px1">
        ${options.name}
      </label>
      ${options.valueShow ? valueEl : ''} 
      <input
        type="range"
        min="0"
        max="1000"
        class="op0 cur-ewr"
        style="height: ${options.height}; width: 100%;"
        tabindex="-1"
        value="${options.value * 10}"
        oninput=${e => options.handleInput(Math.floor(parseInt(e.target.value) / 10))}
      >
      <div
        class="psa t0 b0 range-position"
        style="
          background: ${options.slideBg};
          pointer-events: none;
          transform: translate3d(${options.value}%, 0, 0);
          width: 100%;
        "
      ></div>
    </div>
  `
}

module.exports = inputRange