const html = require('choo/html')
const sf = require('sheetify')
const x = require('xtend')

const { intToRest } = require('../helpers/time')
const inputRange = require('./input-range')

/**
 * Style
 */
const style = sf`
  :host {
    padding: 1px;
    width: 50%;
  }

  :host > div {
    width: 100%;
  }

  input {
    font-size: 1rem;
    height: 3rem;
    line-height: 3rem;
  }

  input[type="text"] {
    border: 0;
    outline: 0;
    margin: 0;
  }

  input[type="submit"] {
    border: 0;
  }

  input[type="button"] {
    border: 0;
  }
`

/**
 * Submit
 */
const handleSubmit = (state, event, send) => {
  if (state.panel.staging.id) {
    send('entries:update', state.panel.staging)
  } else {
    send('entries:add', state.panel.staging)
  }
  event.preventDefault()
}

/**
 * View
 */
module.exports = (state, prev, send) => {
  const checkInterval = interval => {
    return state.panel.staging.interval === interval ? 'selected' : ''
  }

  const getTime = value=> intToRest({
    value: value
  })

  return html`
    <form
      autocomplete="off"
      class="${style} x xw bg-black bro"
      onsubmit=${event => handleSubmit(state, event, send)}
    >
      <div class="p1px">
        <input
          name="title"
          placeholder="Title"
          value="${state.panel.staging.title}"
          oninput=${e => send('panel:updateStaging', { title: e.target.value })}
          type="text"
          class="c12 sans bg-white px1 brit"
        />
      </div>
      <div class="p1px">
        <input
          name="url"
          placeholder="http://"
          value="${state.panel.staging.url}"
          oninput=${e => send('panel:updateStaging', { url: e.target.value })}
          type="text"
          class="c12 sans bg-white px1"
        />
      </div>
      <div class="c12 x" style="line-height: 3rem">
        <div class="c8 p1px">
          <div class="c12 bg-white">
            ${inputRange({
              name: 'Rest',
              value: state.panel.staging.timeRange,
              valueShow: false,
              handleInput: value => send('panel:updateStaging', x(getTime(value), {
                timeRange: value
              })) 
            })}
          </div>
        </div>
        <div class="c2 p1px">
          <input
            value=${state.panel.staging.duration}
            oninput=${e => send('panel:updateStaging', {
              timeRange: 0,
              duration: parseInt(e.target.value || 0)
            })}
            type="text"
            class="p0 c12 tac fs1 mono bg-white tc-black"
          />
        </div>
        <div class="c2 p1px">
          <input
            value=${state.panel.staging.interval}
            oninput=${e => send('panel:updateStaging', {
              timeRange: 0,
              interval: e.target.value
            })}
            type="text"
            class="p0 c12 tac fs1 sans bg-white tc-black"
          />
        </div>
      </div>
      <div class="c12 x">
        <div class="${state.panel.staging.id ? 'x c4' : 'dn'} p1px">
          <input
            name="delete"
            value="Delete"
            tabindex="-1"
            class="c12 tc-black bg-white sans bribl"
            onclick=${e => send('entries:remove', { id: state.panel.staging.id })}
            type="button"
          />
        </div>
        <div class="${!state.panel.staging.id ? 'x c4' : 'dn'} p1px">
          <input
            name="cancel"
            value="Cancel"
            tabindex="-1"
            class="c12 tc-black bg-white sans bribl"
            onclick=${e => send('panel:open', { open: false })}
            type="button"
          />
        </div>
        <div class="xa p1px">
          <input
            type="submit"
            value="Save"
            class="c12 bg-white tc-black sans bribr"
          />
        </div>
        
      </div>
    </form>
  `
}
