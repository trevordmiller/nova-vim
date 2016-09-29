const uiGroups = require('nova-colors').uiGroups
const ansiGroups = require('nova-colors').ansiGroups

const sourceString =`
" ==================================================================
" COLORS
" ==================================================================

" NORMAL
let s:nova_normal_black = "${ansiGroups.normal.black}"
let s:nova_normal_red = "${ansiGroups.normal.red}"
let s:nova_normal_green = "${ansiGroups.normal.green}"
let s:nova_normal_yellow = "${ansiGroups.normal.yellow}"
let s:nova_normal_blue = "${ansiGroups.normal.blue}"
let s:nova_normal_magenta = "${ansiGroups.normal.magenta}"
let s:nova_normal_cyan = "${ansiGroups.normal.cyan}"
let s:nova_normal_white = "${ansiGroups.normal.white}"

" BRIGHT
let s:nova_bright_black = "${ansiGroups.bright.black}"
let s:nova_bright_red = "${ansiGroups.bright.red}"
let s:nova_bright_magenta = "${ansiGroups.bright.magenta}"
let s:nova_bright_white = "${ansiGroups.bright.white}"

" DECORATION
let s:nova_decoration_dark = "${uiGroups.gray0}"
let s:nova_decoration_medium = "${uiGroups.gray2}"
let s:nova_decoration_light = "${uiGroups.gray3}"


" ==================================================================
" HIGHLIGHT HELPER
" ==================================================================

function! s:highlight_helper(syntax_group, foreground_color, background_color)
  if a:background_color != ""
    exec "highlight " . a:syntax_group . " guifg=" . a:foreground_color . " guibg=" . a:background_color . " gui=NONE cterm=NONE term=NONE"
  else
    exec "highlight " . a:syntax_group . " guifg=" . a:foreground_color . " guibg=" . s:nova_normal_black . " gui=NONE cterm=NONE term=NONE"
  endif
endfunction


" ==================================================================
" RESET
" ==================================================================

" CORE
set background=dark
highlight clear
set termguicolors
set fillchars=""
syntax on
syntax reset
let g:colors_name = "nova"
call s:highlight_helper("Normal", s:nova_normal_white, "")

" NEOVIM TERMINAL MODE
let g:terminal_color_0 = "${ansiGroups.normal.black}"
let g:terminal_color_1 = "${ansiGroups.normal.red}"
let g:terminal_color_2 = "${ansiGroups.normal.green}"
let g:terminal_color_3 = "${ansiGroups.normal.yellow}"
let g:terminal_color_4 = "${ansiGroups.normal.blue}"
let g:terminal_color_5 = "${ansiGroups.normal.magenta}"
let g:terminal_color_6 = "${ansiGroups.normal.cyan}"
let g:terminal_color_7 = "${ansiGroups.normal.white}"
let g:terminal_color_8 = "${ansiGroups.bright.black}"
let g:terminal_color_9 = "${ansiGroups.bright.red}"
let g:terminal_color_10 = "${ansiGroups.normal.green}"
let g:terminal_color_11 = "${ansiGroups.normal.yellow}"
let g:terminal_color_12 = "${ansiGroups.normal.blue}"
let g:terminal_color_13 = "${ansiGroups.bright.magenta}"
let g:terminal_color_14 = "${ansiGroups.normal.cyan}"
let g:terminal_color_15 = "${ansiGroups.bright.white}"


" ==================================================================
" HIGHLIGHT GROUPS BY PURPOSE
" ==================================================================

" DECORATION
call s:highlight_helper("SignColumn", "NONE", "")
call s:highlight_helper("LineNr", s:nova_decoration_light, "")
call s:highlight_helper("CursorLine", "NONE", s:nova_decoration_medium)
call s:highlight_helper("CursorColumn", s:nova_decoration_medium, "")
call s:highlight_helper("EndOfBuffer", s:nova_decoration_medium, "")
call s:highlight_helper("VertSplit", s:nova_decoration_medium, s:nova_decoration_medium)
call s:highlight_helper("StatusLineNC", s:nova_normal_black, s:nova_decoration_medium)
call s:highlight_helper("Pmenu", s:nova_normal_white, s:nova_decoration_medium)
call s:highlight_helper("PmenuSbar", s:nova_bright_black, s:nova_bright_black)
call s:highlight_helper("DiffText", s:nova_decoration_dark, "")
call s:highlight_helper("ColorColumn", s:nova_decoration_medium, "")

" USER ACTION NEEDED
let s:nova_purpose_user_action_needed = s:nova_normal_red
call s:highlight_helper("Error", s:nova_purpose_user_action_needed, "")
call s:highlight_helper("ErrorMsg", s:nova_purpose_user_action_needed, "")
call s:highlight_helper("WarningMsg", s:nova_purpose_user_action_needed, "")
call s:highlight_helper("SpellBad", s:nova_purpose_user_action_needed, "")
call s:highlight_helper("SpellCap", s:nova_purpose_user_action_needed, "")
call s:highlight_helper("DiffChange", s:nova_purpose_user_action_needed, "")
call s:highlight_helper("DiffDelete", s:nova_purpose_user_action_needed, "")
call s:highlight_helper("Todo", s:nova_purpose_user_action_needed, "")

" USER CURRENT STATE
let s:nova_purpose_user_current_state = s:nova_normal_cyan
call s:highlight_helper("MatchParen", s:nova_purpose_user_current_state, "NONE")
call s:highlight_helper("CursorLineNr", s:nova_purpose_user_current_state, "")
call s:highlight_helper("Visual", s:nova_normal_black, s:nova_purpose_user_current_state)
call s:highlight_helper("VisualNOS", s:nova_normal_black, s:nova_purpose_user_current_state)
call s:highlight_helper("Folded", s:nova_normal_cyan, "")
call s:highlight_helper("FoldColumn", s:nova_purpose_user_current_state, "")
call s:highlight_helper("IncSearch", s:nova_normal_black, s:nova_purpose_user_current_state)
call s:highlight_helper("Search", s:nova_normal_black, s:nova_purpose_user_current_state)
call s:highlight_helper("WildMenu", s:nova_decoration_medium, s:nova_purpose_user_current_state)
call s:highlight_helper("Question", s:nova_purpose_user_current_state, "")
call s:highlight_helper("MoreMsg", s:nova_purpose_user_current_state, "")
call s:highlight_helper("ModeMsg", s:nova_purpose_user_current_state, "")
call s:highlight_helper("StatusLine", s:nova_purpose_user_current_state, s:nova_decoration_medium)
call s:highlight_helper("PmenuSel", s:nova_decoration_medium, s:nova_purpose_user_current_state)
call s:highlight_helper("PmenuThumb", s:nova_purpose_user_current_state, s:nova_purpose_user_current_state)
call s:highlight_helper("DiffAdd", s:nova_normal_black, s:nova_purpose_user_current_state)
call s:highlight_helper("CtrlPMatch", s:nova_normal_black, s:nova_purpose_user_current_state)

" CONSTANT
let s:nova_purpose_constant = s:nova_normal_cyan
call s:highlight_helper("Constant", s:nova_purpose_constant, "")
call s:highlight_helper("Directory", s:nova_purpose_constant, "")
call s:highlight_helper("jsObjectBraces", s:nova_purpose_constant, "")
call s:highlight_helper("jsBrackets", s:nova_purpose_constant, "")
call s:highlight_helper("jsObjectValue", s:nova_purpose_constant, "")
call s:highlight_helper("jsParen", s:nova_purpose_constant, "")
call s:highlight_helper("jsParenSwitch", s:nova_purpose_constant, "")
call s:highlight_helper("jsParenIfElse", s:nova_purpose_constant, "")
call s:highlight_helper("jsBracket", s:nova_purpose_constant, "")
call s:highlight_helper("jsTernaryIf", s:nova_purpose_constant, "")
call s:highlight_helper("jsTemplateString", s:nova_purpose_constant, "")
call s:highlight_helper("jsTemplateVar", s:nova_purpose_constant, "")
call s:highlight_helper("cssAttr", s:nova_purpose_constant, "")
call s:highlight_helper("cssAttrRegion", s:nova_purpose_constant, "")
call s:highlight_helper("cssAttributeSelector", s:nova_purpose_constant, "")
call s:highlight_helper("htmlTitle", s:nova_purpose_constant, "")
call s:highlight_helper("htmlH1", s:nova_purpose_constant, "")
call s:highlight_helper("htmlH2", s:nova_purpose_constant, "")
call s:highlight_helper("htmlH3", s:nova_purpose_constant, "")
call s:highlight_helper("htmlH4", s:nova_purpose_constant, "")
call s:highlight_helper("htmlH5", s:nova_purpose_constant, "")
call s:highlight_helper("htmlH6", s:nova_purpose_constant, "")
call s:highlight_helper("htmlLink", s:nova_purpose_constant, "")
call s:highlight_helper("markdownCode", s:nova_purpose_constant, "")
call s:highlight_helper("markdownCodeBlock", s:nova_purpose_constant, "")
call s:highlight_helper("xmlString", s:nova_purpose_constant, "")
call s:highlight_helper("netrwPlain", s:nova_purpose_constant, "")
call s:highlight_helper("netrwDir", s:nova_purpose_constant, "")
call s:highlight_helper("shDerefSimple", s:nova_purpose_constant, "")

" IDENTIFIER
let s:nova_purpose_identifier = s:nova_normal_blue
call s:highlight_helper("Identifier", s:nova_purpose_identifier, "")
call s:highlight_helper("jsVariableDef", s:nova_purpose_identifier, "")
call s:highlight_helper("jsObject", s:nova_purpose_identifier, "")
call s:highlight_helper("jsObjectKey", s:nova_purpose_identifier, "")
call s:highlight_helper("jsObjectStringKey", s:nova_purpose_identifier, "")
call s:highlight_helper("jsFuncArgs", s:nova_purpose_identifier, "")
call s:highlight_helper("jsDestructuringBlock", s:nova_purpose_identifier, "")
call s:highlight_helper("jsDestructuringArray", s:nova_purpose_identifier, "")
call s:highlight_helper("jsDestructuringPropertyValue", s:nova_purpose_identifier, "")
call s:highlight_helper("jsSpreadExpression", s:nova_purpose_identifier, "")
call s:highlight_helper("jsImportContainer", s:nova_purpose_identifier, "")
call s:highlight_helper("jsExportContainer", s:nova_purpose_identifier, "")
call s:highlight_helper("jsModuleGroup", s:nova_purpose_identifier, "")
call s:highlight_helper("cssClassName", s:nova_purpose_identifier, "")
call s:highlight_helper("cssIdentifier", s:nova_purpose_identifier, "")
call s:highlight_helper("htmlTagName", s:nova_purpose_identifier, "")
call s:highlight_helper("htmlSpecialTagName", s:nova_purpose_identifier, "")
call s:highlight_helper("htmlTag", s:nova_purpose_identifier, "")
call s:highlight_helper("htmlEndTag", s:nova_purpose_identifier, "")
call s:highlight_helper("jsonKeyword", s:nova_purpose_identifier, "")
call s:highlight_helper("xmlAttrib", s:nova_purpose_identifier, "")
call s:highlight_helper("netrwExe", s:nova_purpose_identifier, "")
call s:highlight_helper("shFunction", s:nova_purpose_identifier, "")

" STATEMENT
let s:nova_purpose_statement = s:nova_normal_yellow
call s:highlight_helper("Statement", s:nova_purpose_statement, "")
call s:highlight_helper("jsFuncCall", s:nova_purpose_statement, "")
call s:highlight_helper("jsOperator", s:nova_purpose_statement, "")
call s:highlight_helper("jsSpreadOperator", s:nova_purpose_statement, "")
call s:highlight_helper("cssFunctionName", s:nova_purpose_statement, "")
call s:highlight_helper("cssProp", s:nova_purpose_statement, "")
call s:highlight_helper("htmlArg", s:nova_purpose_statement, "")
call s:highlight_helper("jsxRegion", s:nova_purpose_statement, "")
call s:highlight_helper("xmlTag", s:nova_purpose_statement, "")
call s:highlight_helper("xmlEndTag", s:nova_purpose_statement, "")
call s:highlight_helper("xmlTagName", s:nova_purpose_statement, "")
call s:highlight_helper("xmlEqual", s:nova_purpose_statement, "")
call s:highlight_helper("shCmdSubRegion", s:nova_purpose_statement, "")

" TYPE
let s:nova_purpose_type = s:nova_normal_green
call s:highlight_helper("Type", s:nova_purpose_type, "")
call s:highlight_helper("jsFunction", s:nova_purpose_type, "")
call s:highlight_helper("jsStorageClass", s:nova_purpose_type, "")
call s:highlight_helper("jsNan", s:nova_purpose_type, "")
call s:highlight_helper("shFunctionKey", s:nova_purpose_type, "")

" GLOBAL
let s:nova_purpose_global = s:nova_normal_magenta
call s:highlight_helper("PreProc", s:nova_purpose_global, "")
call s:highlight_helper("jsGlobalObjects", s:nova_purpose_global, "")
call s:highlight_helper("jsThis", s:nova_purpose_global, "")
call s:highlight_helper("cssTagName", s:nova_purpose_global, "")
call s:highlight_helper("jsGlobalNodeObjects", s:nova_purpose_global, "")
call s:highlight_helper("cssFontDescriptor", s:nova_purpose_global, "")

" EMPHASIS
let s:nova_purpose_emphasis = s:nova_bright_magenta
call s:highlight_helper("Underlined", s:nova_purpose_emphasis, "")
call s:highlight_helper("markdownItalic", s:nova_purpose_emphasis, "")
call s:highlight_helper("markdownBold", s:nova_purpose_emphasis, "")
call s:highlight_helper("markdownBoldItalic", s:nova_purpose_emphasis, "")

" SPECIAL
let s:nova_purpose_special = s:nova_bright_red
call s:highlight_helper("Special", s:nova_purpose_special, "")
call s:highlight_helper("SpecialKey", s:nova_purpose_special, "")
call s:highlight_helper("NonText", s:nova_purpose_special, "")
call s:highlight_helper("Title", s:nova_purpose_special, "")
call s:highlight_helper("jsBraces", s:nova_purpose_special, "")
call s:highlight_helper("jsFuncBraces", s:nova_purpose_special, "")
call s:highlight_helper("jsDestructuringBraces", s:nova_purpose_special, "")
call s:highlight_helper("jsClassBraces", s:nova_purpose_special, "")
call s:highlight_helper("jsParens", s:nova_purpose_special, "")
call s:highlight_helper("jsFuncParens", s:nova_purpose_special, "")
call s:highlight_helper("jsArrowFunction", s:nova_purpose_special, "")
call s:highlight_helper("jsModuleAsterisk", s:nova_purpose_special, "")
call s:highlight_helper("cssBraces", s:nova_purpose_special, "")
call s:highlight_helper("cssBraces", s:nova_purpose_special, "")
call s:highlight_helper("markdownHeadingDelimiter", s:nova_purpose_special, "")
call s:highlight_helper("markdownH1", s:nova_purpose_special, "")
call s:highlight_helper("markdownH2", s:nova_purpose_special, "")
call s:highlight_helper("markdownH3", s:nova_purpose_special, "")
call s:highlight_helper("markdownH4", s:nova_purpose_special, "")
call s:highlight_helper("markdownH5", s:nova_purpose_special, "")
call s:highlight_helper("markdownH6", s:nova_purpose_special, "")
call s:highlight_helper("markdownRule", s:nova_purpose_special, "")
call s:highlight_helper("markdownListMarker", s:nova_purpose_special, "")
call s:highlight_helper("markdownOrderedListMarker", s:nova_purpose_special, "")
call s:highlight_helper("markdownLinkText", s:nova_purpose_special, "")
call s:highlight_helper("markdownCodeDelimiter", s:nova_purpose_special, "")
call s:highlight_helper("netrwClassify", s:nova_purpose_special, "")
call s:highlight_helper("netrwVersion", s:nova_purpose_special, "")
call s:highlight_helper("CtrlPStats", s:nova_purpose_special, "")

" TRIVIAL
let s:nova_purpose_trivial = s:nova_bright_black
call s:highlight_helper("Comment", s:nova_purpose_trivial, "")
call s:highlight_helper("Ignore", s:nova_purpose_trivial, "")
call s:highlight_helper("Conceal", s:nova_purpose_trivial, "")
call s:highlight_helper("Noise", s:nova_purpose_trivial, "")
call s:highlight_helper("jsNoise", s:nova_purpose_trivial, "")
call s:highlight_helper("cssClassNameDot", s:nova_purpose_trivial, "")
call s:highlight_helper("jsonQuote", s:nova_purpose_trivial, "")
call s:highlight_helper("shQuote", s:nova_purpose_trivial, "")
`

process.stdout.write(sourceString)
