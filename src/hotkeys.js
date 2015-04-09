import globalShortcut from "global-shortcut";
import _ from "lodash";

export default {

  /**
   * Initializes the extension
   *
   * @param    {Copal}   copal   Copal instance to extend
   */
  init( copal ) {

    var hotkeys = copal.settings["command-hotkeys"];

    if( hotkeys ) {
      _.forIn( hotkeys, ( commandName, hotkey ) => {
        console.log( `Registering hotkey '${hotkey}' for command '${commandName}'` );
        globalShortcut.register( hotkey, () => copal.executeCommand( commandName ) );
      } );
    }
  }
};
