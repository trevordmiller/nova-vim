const colorValues = require("nova-colors").default;
const uiGroups = require("nova-colors").uiGroups;

const sourceString = `
  " Color palette

  " Colour codes that are used in the original nova.vim theme
  let s:light_red     = [ '${colorValues.colors.red}', 'NONE' ]
  let s:dark_red      = [ '${colorValues.colors.orange}', 'NONE' ]
  let s:green         = [ '${colorValues.colors.green}', 'NONE' ]
  let s:blue          = [ '${colorValues.colors.blue}', 'NONE' ]
  let s:cyan          = [ '${colorValues.colors.cyan}', 'NONE' ]
  let s:magenta       = [ '${colorValues.colors.purple}', 'NONE' ]
  let s:light_yellow  = [ '${colorValues.colors.yellow}', 'NONE' ]
  let s:dark_yellow   = [ '${colorValues.colors.yellow}', 'NONE' ]

  let s:black         = [ '${uiGroups.background}', 'NONE' ]
  let s:white         = [ '${uiGroups.foreground}', 'NONE' ]
  let s:comment_grey  = [ '${colorValues.grays.gray5}', 'NONE' ]
  let s:gutter_grey   = [ '${colorValues.grays.gray4}', 'NONE' ]
  " middle
  let s:cursor_grey   = [ '${colorValues.grays.gray1}', 'NONE' ]
  " second
  let s:visual_grey   = [ '${colorValues.grays.gray3}', 'NONE' ]
  let s:menu_grey     = s:visual_grey
  let s:special_grey  = [ '${colorValues.grays.gray0}', 'NONE' ]
  let s:vertsplit     = [ '#181a1f', 'NONE' ]

  let s:tab_color     = s:blue
  let s:normal_color  = s:blue
  let s:insert_color  = s:green
  let s:replace_color = s:light_red
  let s:visual_color  = s:light_yellow
  let s:active_bg     = s:visual_grey
  let s:inactive_bg   = s:special_grey

  let s:p = {'normal': {}, 'insert': {}, 'replace': {}, 'visual': {}, 'inactive': {}, 'tabline': {}}

  let s:p.normal.left     = [ [ s:black, s:normal_color, 'bold' ], [ s:white, s:active_bg ] ]
  let s:p.normal.right    = [ [ s:black, s:normal_color ], [ s:white, s:active_bg ] ]
  let s:p.normal.middle   = [ [ s:normal_color, s:cursor_grey ] ]

  let s:p.insert.left     = [ [ s:black, s:insert_color, 'bold' ], [ s:white, s:active_bg ] ]
  let s:p.insert.right    = [ [ s:black, s:insert_color ], [ s:white, s:active_bg ] ]
  let s:p.insert.middle   = [ [ s:insert_color, s:cursor_grey ] ]

  let s:p.replace.left    = [ [ s:black, s:replace_color, 'bold' ], [ s:white, s:active_bg ] ]
  let s:p.replace.right   = [ [ s:black, s:replace_color ], [ s:white, s:active_bg ] ]
  let s:p.replace.middle  = [ [ s:replace_color, s:cursor_grey ] ]

  let s:p.visual.left     = [ [ s:black, s:visual_color, 'bold' ], [ s:white, s:active_bg ] ]
  let s:p.visual.right    = [ [ s:black, s:visual_color ], [ s:white, s:active_bg ] ]
  let s:p.visual.middle   = [ [ s:visual_color, s:cursor_grey ] ]

  let s:p.inactive.left   = [ [ s:white, s:inactive_bg, 'bold' ], [ s:white, s:inactive_bg ] ]
  let s:p.inactive.right  = [ [ s:white, s:inactive_bg ], [ s:white, s:inactive_bg ] ]
  let s:p.inactive.middle = [ [ s:white, s:inactive_bg ] ]

  let s:p.tabline.left    = [ [ s:gutter_grey, s:cursor_grey ] ]
  let s:p.tabline.right   = [ [ s:tab_color, s:cursor_grey ] ]
  let s:p.tabline.middle  = [ [ s:black, s:black ] ]
  let s:p.tabline.tabsel  = [ [ s:black, s:blue ] ]
  let s:p.tabline.bufsel  = [ [ s:tab_color, s:visual_grey ] ]
  let s:p.tabline.tabsep  = [ [ s:white, s:cursor_grey ] ]

  let s:p.normal.error    = [ [ s:black, s:light_red ] ]
  let s:p.normal.warning  = [ [ s:black, s:light_yellow ] ]

  let g:lightline#colorscheme#nova#palette = lightline#colorscheme#flatten(s:p)
`;
process.stdout.write(sourceString);
