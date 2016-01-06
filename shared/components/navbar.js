import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/lib/Navbar.js';
import NavDropdown from 'react-bootstrap/lib/NavDropdown.js';
import Nav from 'react-bootstrap/lib/Nav.js';
import NavItem from 'react-bootstrap/lib/Navitem.js';
import MenuItem from 'react-bootstrap/lib/MenuItem.js';
import Modal from 'react-bootstrap/lib/Modal.js';
import Button from 'react-bootstrap/lib/Button.js';
import Footer from './footer.js';
import Bootstrap_social from 'bootstrap-social/bootstrap-social.css';
import $ from 'jquery';
import { connect } from 'react-redux';
import { Component, PropTypes } from 'react';
import editorApp from '../reducers/reducers.js';
import { checkUser, storeChallenges, hideModal, showModal } from '../actions/actions.js';

var sublimeKeys = <div>
  <p>⌘ + X: Cut line</p>
  <p>⌃ + ⇧ + K: Delete line</p>
  <p>⌘ + ↩: Insert line after</p>
  <p>⌘ + ⇧ + ↩: Insert line before</p>
  <p>⌘ + ⌃ + ↑: Move line/selection up</p>
  <p>⌘ + ⌃ + ↓: Move line/selection down</p>
  <p>⌘ + L: Select line - Repeat to select next lines</p>
  <p>⌘ + ⇧ + L: Split line by selection</p>
  <p>⌘ + ⇧ + D: Duplicate line</p>
  <p>⌘ + D: Select word - Repeat to select next occurrence</p>
  <p>⌃ + M: Jump to closing parentheses. Repeat to jump to opening parentheses</p>
  <p>⌃ + ⇧ + M: Select all contents of the current parentheses</p>
  <p>⌘ + ⇧ + Space: Select current scope</p>
  <p>⌃ + A, ⌘ + Left: Move to beginning of line</p>
  <p>⌃ + E, ⌘ + Right: Move to end of line</p>
  <p>⌘ + K, ⌘ + K: Delete from cursor to end of line</p>
  <p>⌘ + K + ⌫: Delete from cursor to start of line</p>
  <p>⌘ + ]: Indent current line(s)</p>
  <p>⌘ + [: Un-indent current line(s)</p>
  <p>⌘ + J: Join line below to the end of the current line</p>
  <p>⌘ + /: Comment/un-comment current line</p>
  <p>⌘ + Y: Redo, or repeat last keyboard shortcut command</p>
  <p>⌃ + U: Soft undo; jumps to your last change before undoing change when repeated</p>
  <p>⌃ + ⇧ + K: Delete current line of cursor</p>
  <p>⌘ + Down: Scroll to end of file</p>
  <p>⌘ + Up:  Scroll to start of file</p>
  <p>⌘ + K, ⌘ + U: Transform to Uppercase</p>
  <p>⌘ + K, ⌘ + L: Transform to Lowercase</p>
  <p>⌘ + Left Click: Add cursor at selection</p>
</div>;

var vimKeys = <div>
  <h5>Cursor Movement</h5>
  <hr></hr>
  <p>h: Move left</p>
  <p>j: Move down</p>
  <p>k: Move up</p>
  <p>l: Move right</p>
  <p>w: Jump by start of words (punctuation considered words)</p>
  <p>W: Jump by words (spaces separate words)</p>
  <p>e: Jump to end of words (punctuation considered words)</p>
  <p>E: Jump to end of words (no punctuation)</p>
  <p>b: Jump backward by words (punctuation considered words)</p>
  <p>B: Jump backward by words (no punctuation)</p>
  <p>0: (zero) Start of line</p>
  <p>^: First non-blank character of line</p>
  <p>$: End of line</p>
  <p>G: Go To command (prefix with number</p>
  <p>Note: Prefix a cursor movement command with a number to execute that command multiple times. For example, 4j moves down 4 lines.</p>
  <hr></hr>
  <h5>Insert Mode Inserting/Appending text</h5>
  <hr></hr>
  <p>i: Start insert mode at cursor</p>
  <p>I: Insert at the beginning of the line</p>
  <p>a: Append after the cursor</p>
  <p>A: Append at the end of the line</p>
  <p>o: Open (append) blank line below current line (no need to press return)</p>
  <p>O: Open blank line above current line</p>
  <p>ea:  Append at end of word</p>
  <p>Esc: Exit insert mode</p>
  <hr></hr>
  <h5>Editing</h5>
  <hr></hr>
  <p>r: Replace a single character (does not use insert mode)</p>
  <p>J: Join line below to the current one</p>
  <p>cc: Change (replace) an entire line</p>
  <p>cw: Change (replace) to the end of word</p>
  <p>c$: Change (replace) to the end of line</p>
  <p>s: Delete character at cursor and subsitute text</p>
  <p>S: Delete line at cursor and substitute text (same as cc)</p>
  <p>xp: Transpose two letters (delete and paste, technically)</p>
  <p>u: Undo</p>
  <p>.: Repeat last command</p>
  <hr></hr>
  <h5>Marking text (visual mode)</h5>
  <hr></hr>
  <p>v: Start visual mode, mark lines, then do command (such as y-yank)</p>
  <p>V: Start Linewise visual mode</p>
  <p>o: Move to other end of marked area</p>
  <p>Ctrl+v:  Start visual block mode</p>
  <p>O: Move to Other corner of block</p>
  <p>aw: Mark a word</p>
  <p>ab: A () block (with braces)</p>
  <p>aB: A {} block (with brackets)</p>
  <p>ib: Inner () block</p>
  <p>iB: Inner {} block</p>
  <p>Esc: Exit visual mode</p>
  <hr></hr>
  <h5>Visual commands</h5>
  <hr></hr>
  <p>Right: Shift right</p>
  <p>Left: Shift left</p>
  <p>y: Yank (copy) marked text</p>
  <p>d: Delete marked text</p>
  <p>~: Switch case</p>
  <hr></hr>
  <h5>Cut and Paste</h5>
  <hr></hr>
  <p>yy: Yank (copy) a line</p>
  <p>2yy: Yank 2 lines</p>
  <p>yw: Yank word</p>
  <p>y$: Yank to end of line</p>
  <p>p: Put (paste) the clipboard after cursor</p>
  <p>P: Put (paste) before cursor</p>
  <p>dd: Delete (cut) a line</p>
  <p>dw: Delete (cut) the current word</p>
  <p>x: Delete (cut) current character</p>
</div>;

var emacsKeys = <div>
  <h5>Cursor Movement</h5>
  <hr></hr>
  <p>Arrow Keys: left, down, right, up</p>
  <p>Ctrl + B: Back one character without deleting</p>
  <p>Ctrl + F: Forward one character</p>
  <p>Alt + B: Back one word without deleting</p>
  <p>Alt + F: Forward one word</p>    
  <p>Ctrl + P: Up one line</p>
  <p>Ctrl + N: Down one line</p>
  <p>Ctrl + A: Goto beginning of line</p>
  <p>Ctrl + E: Goto end of line</p>
  <p>Note: Adding shift to the previous commmands will select the traversed area</p>
  <p>Alt + Shift + ,: Goto beginning of file</p>
  <p>Alt + Shift + .: Goto end of file</p>
  <hr></hr>
  <h5>Insertion and Deletion</h5>
  <hr></hr>
  <p>Ctrl + d: Delete next characer</p>
  <p>Alt + Delete: Delete previous word</p>
  <p>Alt + D: Delete next word</p>
  <p>Ctrl + K: Delete line to right of cursor</p>
  <hr></hr>
  <h5>Utility</h5>
  <hr></hr>
  <p>Alt + C: Capitalize first letter of word then move to next</p>
  <p>Alt + L: Lower-case first letter of word then move to next</p>
  <p>Alt + ;: Toggle comment</p>
</div>;

class Navigation extends Component{
  
  componentDidMount() {
    $.get('/isLoggedIn', function(response) {
      var loggedIn = Boolean(response);
      var username = response.githubName ? response.githubName : 'guest';
      var pic = response.githubProfile || null;
      var currentUserId = response.id || 1;
      var createdDate = response['created_at'] ? response['created_at'].substr(0, 10).split('-') : ['2015','04','30'];
      this.props.storeUser(loggedIn, username, pic, currentUserId, createdDate);
    }.bind(this));
  }

  render() {
    var hotkeys;
    switch (this.props.cheatSheet) {
    case 'Sublime Text':
      hotkeys = sublimeKeys;
      break;
    case 'Vim':
      hotkeys = vimKeys;
      break;
    case 'Emacs':
      hotkeys = emacsKeys;
      break;
    default:
      hotkeys = <p></p>;
    }
    var githubButton;
    if(!this.props.isLoggedIn) {
      githubButton = <span><div className="user-display github-button"><a href="/auth/github" id="github-button" className="btn btn-block btn-social btn-github"><span className="fa fa-github"></span>Log in With Github</a></div></span>;
    } else {
      githubButton =
          <NavDropdown eventKey={3} title="my account" id="basic-nav-dropdown" style={{float: 'right'}}>
            <MenuItem eventKey={3.1} id="dropdown-link" href="/profile">my profile</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.2} href="/auth/logout" id="dropdown-link">log out</MenuItem>
          </NavDropdown>;
    }
    var userDisplay;
    if(!this.props.profilePic) {
      userDisplay = <Nav id="user-display-guest"><b>welcome, <font color="#fc5848">{this.props.user}</font></b></Nav>;
    } else {
      userDisplay = <div className="user-display" style={{display: 'inline-block'}}><img src={this.props.profilePic} style={{height: '50px', display: 'inline-block'}} /><div className="user-display" style={{display: 'inline-block', color:'#575858', padding: '0px 10px'}}><b>welcome, <font color="#fc5848">{this.props.user}</font></b></div></div>;
    }
    var cheatSheet = <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg" show={this.props.lgShow} onHide={this.props.hideCheatSheet}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg"><strong>{this.props.cheatSheet} </strong><span style={{fontSize: '14px', float: 'right', marginRight: '16px', paddingTop: '3px'}}>{this.props.cheatSheet === 'Vim' ? 'Note: Vim keybindings are case-sensitive.' : ''}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {hotkeys}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hideCheatSheet}>Close</Button>
        </Modal.Footer>
      </Modal>;

    return (
    <div>
      <Navbar fluid id="navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"><div className="logo"></div></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav className="navbar-challenges">
          <NavItem eventKey={1} href="/challengeList" data-hover="challenges">challenges</NavItem>
          <NavDropdown eventKey={4}  data-hover="cheatsheets" title="cheatsheets" id="basic-nav-dropdown" style={{float: 'right'}}>
            <MenuItem eventKey={4.1} id="dropdown-link" onClick={this.props.showCheatSheet.bind(this, 'Sublime Text')}>sublime</MenuItem>
            <MenuItem eventKey={4.2} id="dropdown-link" onClick={this.props.showCheatSheet.bind(this, 'Vim')}>vim</MenuItem>
            <MenuItem eventKey={4.3} id="dropdown-link" onClick={this.props.showCheatSheet.bind(this, 'Emacs')}>emacs</MenuItem>
          </NavDropdown>
          <NavItem eventKey={5} href="/faqs">faqs</NavItem>
          <NavItem eventKey={6} href="/about">about</NavItem>
        </Nav>
        <Nav className="user-right" right>
          {userDisplay}
          {githubButton}
          {cheatSheet}
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>{this.props.children}</div>
      <Footer />
    </div>
    );
  }
}


Navigation.propTypes = {
  isLoggedIn: PropTypes.bool,
  user: PropTypes.string,
  profilePic: PropTypes.string,
  lgShow: PropTypes.bool,
  cheatSheet: PropTypes.string,
  currentUserId: PropTypes.number,
  hideCheatSheet: PropTypes.func,
  showCheatSheet: PropTypes.func,
  storeUser: PropTypes.func
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.loggedInState.loggedIn,
    user: state.loggedInState.user,
    profilePic: state.loggedInState.profilePic,
    lgShow: state.loggedInState.lgShow,
    cheatSheet: state.loggedInState.cheatSheet,
    currentUserId: state.loggedInState.currentUserId
  };
}


function mapDispatchToProps(dispatch) {
  return {
    storeUser: function(loggedIn, username, picture, currentUserId, createdDate) {
      dispatch(checkUser(loggedIn, username, picture, currentUserId, createdDate));
    },
    hideCheatSheet: function() {
      dispatch(hideModal());
    },
    showCheatSheet: function(cheatSheet) {
      dispatch(showModal(cheatSheet));
    }
  };
}
//add dispatch if creating new actions
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);


