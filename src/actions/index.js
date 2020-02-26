export const PRESS_BUTTON = 'PRESS_BUTTON';
export const PRESS_EQUALS = 'PRESS_EQUALS';
export const PRESS_RESET = 'PRESS_RESET';
export const SELECT_HISTORY = 'SELECT_HISTORY';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';

export function pressButton(value) {
  console.log('PRESSED BUTTON : ', value)
  return {
    type: PRESS_BUTTON,
    value
  }
}

export function pressEqual() {
  console.log('PRESSED BUTTON : equals')
  return {
    type: PRESS_EQUALS
  }
}

export function pressReset() {
  console.log('PRESSED RESET')
  return {
    type: PRESS_RESET
  }
}

export function selectHistory(id) {
  console.log('SELECT HISTORY',id)
  return {
    type: SELECT_HISTORY,
    id
  }
}

export function clearHistory () {
  console.log('CLEAR HISTORY')
  return {
    type: CLEAR_HISTORY
  }
}