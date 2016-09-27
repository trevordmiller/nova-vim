const uiGroups = require('nova-colors').uiGroups
const ansiGroups = require('nova-colors').ansiGroups

/**
 * A note about the `airline#themes#generate_color_map` function
 *
 * It takes three arrays as arguments.  The first item of each of these
 * arrays is the foreground (text) color and the second is the background
 * color.  The last items represent the same colors in non-GUI mode, but
 * since this theme only support True Color terminals, we can ignore that.
 *
 * The arrays, in order, represent the colors for:
 * 1. The "outer" sections
 * 2. The "inner" sections
 * 3. The "default" color of the bar, between the corners
 */

const sourceString =`
" Color palette

let g:airline#themes#nova#palette = {}
let s:modified = {
  \\ 'airline_c': [ "${uiGroups.userActionNeeded}" , "" , "" , "" , "" ]
  \\ }

" Normal mode
let s:N1 = [ "${ansiGroups.bright.white}" , "${ansiGroups.bright.black}" , "" , ""  ]
let s:N2 = [ "${ansiGroups.bright.white}" , "${uiGroups.gray3}" , "" , ""  ]
let s:N3 = [ "${ansiGroups.normal.white}" , "${uiGroups.gray2}" , "" , ""  ]
let g:airline#themes#nova#palette.normal = airline#themes#generate_color_map(s:N1, s:N2, s:N3)
let g:airline#themes#nova#palette.normal_modified = s:modified

" Insert mode
let s:I1 = [ "${uiGroups.gray1}" , "${ansiGroups.normal.yellow}", "" , ""  ]
let s:I2 = s:N2
let s:I3 = s:N3
let g:airline#themes#nova#palette.insert = airline#themes#generate_color_map(s:I1, s:I2, s:I3)
let g:airline#themes#nova#palette.insert_modified = s:modified

" Visual mode
let s:V1 = [ "${ansiGroups.bright.white}" , "${ansiGroups.bright.magenta}" , "" , "" ]
let s:V2 = s:N2
let s:V3 = s:N3
let g:airline#themes#nova#palette.visual = airline#themes#generate_color_map(s:V1, s:V2, s:V3)
let g:airline#themes#nova#palette.visual_modified = s:modified

" Replace mode
let s:R1 = [ "${ansiGroups.bright.white}" , "${ansiGroups.normal.magenta}" , "" , "" ]
let s:R2 = s:N2
let s:R3 = s:N3
let g:airline#themes#nova#palette.replace = airline#themes#generate_color_map(s:R1, s:R2, s:R3)
let g:airline#themes#nova#palette.replace_modified = s:modified

" Inactive mode
let s:IN1 = [ "${ansiGroups.normal.black}" , "${uiGroups.gray2}" , "" , "" ]
let s:IN2 = s:IN1
let s:IN3 = s:IN1
let g:airline#themes#nova#palette.inactive = airline#themes#generate_color_map(s:IN1, s:IN2, s:IN3)
let g:airline#themes#nova#palette.inactive_modified = s:modified

" Warning/Error Segment
let s:AirlineError = [ "${uiGroups.gray6}" , "${ansiGroups.normal.red}" , "" , "" ]
let g:airline#themes#nova#palette.normal.airline_error = s:AirlineError
let g:airline#themes#nova#palette.insert.airline_error = s:AirlineError
let g:airline#themes#nova#palette.visual.airline_error = s:AirlineError
let g:airline#themes#nova#palette.replace.airline_error = s:AirlineError
let g:airline#themes#nova#palette.normal_modified.airline_error = s:AirlineError
let g:airline#themes#nova#palette.insert_modified.airline_error = s:AirlineError
let g:airline#themes#nova#palette.visual_modified.airline_error = s:AirlineError
let g:airline#themes#nova#palette.replace_modified.airline_error = s:AirlineError

let s:AirlineWarning = [ "${uiGroups.gray6}" , "${ansiGroups.bright.red}" , "" , "" ]
let g:airline#themes#nova#palette.normal.airline_warning = s:AirlineWarning
let g:airline#themes#nova#palette.insert.airline_warning = s:AirlineWarning
let g:airline#themes#nova#palette.visual.airline_warning = s:AirlineWarning
let g:airline#themes#nova#palette.replace.airline_warning = s:AirlineWarning
let g:airline#themes#nova#palette.normal_modified.airline_warning = s:AirlineWarning
let g:airline#themes#nova#palette.insert_modified.airline_warning = s:AirlineWarning
let g:airline#themes#nova#palette.visual_modified.airline_warning = s:AirlineWarning
let g:airline#themes#nova#palette.replace_modified.airline_warning = s:AirlineWarning

" Accents -> Colors for the lock icon on read-only buffers
let g:airline#themes#nova#palette.accents = {'red': [ "${uiGroups.userCurrentState}" , "" , "" , "" ]}

" Tabline
let s:tabfill = airline#themes#get_highlight2(['Normal', 'bg'], ['Normal', 'bg'])
let g:airline#themes#nova#palette.tabline = {
  \\ 'airline_tab': s:N2,
  \\ 'airline_tabsel': s:N1,
  \\ 'airline_tabtype': [ "${ansiGroups.normal.black}" , "${ansiGroups.normal.green}" , "" , "" ],
  \\ 'airline_tabfill': s:tabfill,
  \\ 'airline_tabhid': s:IN2
  \\ }
`
process.stdout.write(sourceString)
