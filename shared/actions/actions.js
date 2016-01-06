/* ACTION CREATOR */

/*
 * action types
 */

export const KEY_PRESSED = 'KEY_PRESSED';
export const STRING_CHANGED = 'STRING_CHANGED';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const CHANGE_KEYMAP = 'CHANGE_KEYMAP';
export const LOAD_CHALLENGE = 'LOAD_CHALLENGE';
export const CHECK_USER = 'CHECK_USER';
export const COUNT_DOWN = 'COUNT_DOWN';
export const COUNT_DOWN_BY_SECOND = 'COUNT_DOWN_BY_SECOND';
export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const CLOCK_RUNNING = 'CLOCK_RUNNING';
export const SETTING_INTERVAL = 'SETTING_INTERVAL';
export const CLOCK_STOP = 'CLOCK_STOP';
export const STORE_CHALLENGES = 'STORE_CHALLENGES';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';
export const INCREMENT_KEY_HANDLED = 'INCREMENT_KEY_HANDLED';
export const UPDATE_TOP_25_TIMES = 'UPDATE_TOP_25_TIMES';
export const UPDATE_TOP_25_KEYSTROKES = 'UPDATE_TOP_25_KEYSTROKES';
export const UPDATE_TOP_FIVE_TIMES = 'UPDATE_TOP_FIVE_TIMES';
export const SHOW_CLOCK = 'SHOW_CLOCK';
export const SOLVED_CODE_CHANGED = 'SOLVED_CODE_CHANGED';
export const UNSOLVED_CODE_CHANGED = 'UNSOLVED_CODE_CHANGED';
export const FIELD_CHANGED = 'FIELD_CHANGED';
export const HIDE_RESULTS_MODAL = 'HIDE_RESULTS_MODAL';
export const CHALLENGE_COMPLETE = 'CHALLENGE_COMPLETE';
export const ADD_COMPLETED_CHALLENGES = 'ADD_COMPLETED_CHALLENGES';
export const SELECT_MENU_ITEM = 'SELECT_MENU_ITEM';
export const CHANGE_ORDER_OPTION = 'CHANGE_ORDER_OPTION';



/*
 * action creators
 */

export function keyPressed(ch) {
  return { type: KEY_PRESSED, ch };
}

export function stringChanged(newCode, timeStamp) {
  return { type: STRING_CHANGED, code: newCode, timeStopped: timeStamp };
}

export function incrementCounter() {
  return { type: INCREMENT_COUNTER };
}

export function updateKeyMap(newKeyMap) {
  return { type: CHANGE_KEYMAP, keyMap: newKeyMap };
}

export function loadChallenge(unsolved, solved, stringDiff) {
  return { type: LOAD_CHALLENGE, unsolved: unsolved, solved: solved, editDistance: stringDiff };
}

export function checkUser(loggedIn, username, picture, userId, createdDate) {
  return { type: CHECK_USER, loggedIn: loggedIn, username: username, picture: picture, currentUserId: userId, createdDate: createdDate };
}

export function countDown() {
  return { type: COUNT_DOWN };
} 

export function countDownBySecond() {
  return {type: COUNT_DOWN_BY_SECOND};
}

export function startTimer (timestamp) {
  return { type: START_TIMER, timeBegan: timestamp };
}

export function stopTimer (timestamp) {
  return { type: STOP_TIMER, timeStopped: timestamp};
}

export function clockRunning () {
  return { type: CLOCK_RUNNING };
}

export function settingInterval (intervals) {
  return { type: SETTING_INTERVAL, started: intervals };
}

export function clockStop () {
  return { type: CLOCK_STOP };
}

export function storeChallenges (challenges) {
  return { type: STORE_CHALLENGES, challenges: challenges };
}

export function hideModal() {
  return { type: HIDE_MODAL };
}

export function showModal(cheatSheet) {
  return { type: SHOW_MODAL, cheatSheet: cheatSheet};
}
export function updateTop25Times (arr) {
  return { type: UPDATE_TOP_25_TIMES, top25Times: arr };
}

export function incrementKeyHandled () {
  return { type: INCREMENT_KEY_HANDLED };
}

export function updateTop25KeyStrokes (arr) {
  return { type: UPDATE_TOP_25_KEYSTROKES, top25KeyStrokes: arr };
}

export function showClock() {
  return { type: SHOW_CLOCK };
}

// Add Challenge

export function updateSolvedCode (newCode) {
  return { type: SOLVED_CODE_CHANGED, code: newCode };
}

export function updateUnsolvedCode (newCode) {
  return { type: UNSOLVED_CODE_CHANGED, code: newCode };
}

export function updateField (newText) {
  return { type: FIELD_CHANGED, text: newText };
}

export function hideResultsModal() {
  return { type: HIDE_RESULTS_MODAL };
}

//Profile Page

export function addCompletedChallenges(challenges, results) {
  return {type: ADD_COMPLETED_CHALLENGES, allChallenges: challenges, challengeResults: results};
}

export function selectMenuItem(challenge) {
  return {type: SELECT_MENU_ITEM, dropDownDisplay: challenge};
}

export function changingOrderOptions(event) {
  return {type: CHANGE_ORDER_OPTION, orderOptions: event};
}
