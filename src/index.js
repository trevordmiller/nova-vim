const uiGroups = require('nova-colors').uiGroups
const syntaxGroups = require('nova-colors').syntaxGroups
const ansiGroups = require('nova-colors').ansiGroups
const versionControlGroups = require('nova-colors').versionControlGroups

const sourceString = `
" ==================================================================
" HIGHLIGHT HELPER
" ==================================================================

function! s:highlight_helper(...)
  let l:syntax_group = a:1
  let l:foreground_color = a:2
  let l:background_color = empty(a:3) ? "NONE" : a:3
  let l:gui = a:0 == 3 ? "None" : a:4

  exec "highlight " . l:syntax_group . " guifg=" . l:foreground_color . " guibg=" . l:background_color . " gui=" . l:gui . " cterm=NONE term=NONE"
endfunction


" ==================================================================
" RESET
" ==================================================================

set background=dark
highlight clear
set termguicolors
syntax on
syntax reset
let g:colors_name = "nova"
call s:highlight_helper("Normal", "${uiGroups.foreground}", "${uiGroups.background}")


" ==================================================================
" UI GROUPS
" ==================================================================

" USER ACTION NEEDED
call s:highlight_helper("Error", "${uiGroups.userActionNeeded}", "")
call s:highlight_helper("ErrorMsg", "${uiGroups.userActionNeeded}", "")
call s:highlight_helper("WarningMsg", "${uiGroups.userActionNeeded}", "")
call s:highlight_helper("SpellBad", "${uiGroups.userActionNeeded}", "")
call s:highlight_helper("SpellCap", "${uiGroups.userActionNeeded}", "")
call s:highlight_helper("Todo", "${uiGroups.userActionNeeded}", "")
call s:highlight_helper("SignColumn", "NONE", "${uiGroups.userActionNeeded}")
call s:highlight_helper("typescriptParenError", "${
  uiGroups.userActionNeeded
}", "")
call s:highlight_helper("NeomakeErrorSign", "${uiGroups.userActionNeeded}", "")
call s:highlight_helper("NeomakeWarningSign", "${
  uiGroups.userActionNeeded
}", "")

" USER CURRENT STATE
call s:highlight_helper("MatchParen", "${uiGroups.userCurrentState}", "")
call s:highlight_helper("CursorLineNr", "${uiGroups.userCurrentState}", "")
call s:highlight_helper("Visual", "${uiGroups.background}", "${
  uiGroups.userCurrentState
}")
call s:highlight_helper("VisualNOS", "${uiGroups.background}", "${
  uiGroups.userCurrentState
}")
call s:highlight_helper("Folded", "${uiGroups.userCurrentState}", "")
call s:highlight_helper("FoldColumn", "${uiGroups.userCurrentState}", "")
call s:highlight_helper("IncSearch", "${uiGroups.userCurrentState}", "${
  uiGroups.backgroundShade
}")
call s:highlight_helper("Search", "${uiGroups.userCurrentState}", "${
  uiGroups.backgroundShade
}")
call s:highlight_helper("WildMenu", "${uiGroups.backgroundShade}", "${
  uiGroups.userCurrentState
}")
call s:highlight_helper("ToolbarButton", "${uiGroups.backgroundShade}", "${
  uiGroups.userCurrentState
}")
call s:highlight_helper("Question", "${uiGroups.userCurrentState}", "")
call s:highlight_helper("MoreMsg", "${uiGroups.userCurrentState}", "")
call s:highlight_helper("ModeMsg", "${uiGroups.userCurrentState}", "")
call s:highlight_helper("StatusLine", "${uiGroups.userCurrentState}", "${
  uiGroups.backgroundShade
}")
call s:highlight_helper("StatusLineTerm", "${uiGroups.userCurrentState}", "${
  uiGroups.backgroundShade
}")
call s:highlight_helper("TabLineSel", "${uiGroups.userCurrentState}", "${
  uiGroups.background
}")
call s:highlight_helper("PmenuSel", "${uiGroups.gray2}", "${
  uiGroups.userCurrentState
}")
call s:highlight_helper("PmenuThumb", "${uiGroups.userCurrentState}", "${
  uiGroups.userCurrentState
}")
call s:highlight_helper("netrwTime", "${uiGroups.userCurrentState}", "")
call s:highlight_helper("netrwSizeDate", "${uiGroups.userCurrentState}", "")
call s:highlight_helper("CtrlPMatch", "${uiGroups.background}", "${
  uiGroups.userCurrentState
}")
call s:highlight_helper("gitcommitSummary", "${uiGroups.userCurrentState}", "")

" VERSION CONTROL
call s:highlight_helper("DiffAdd", "${uiGroups.background}", "${
  versionControlGroups.added
}")
call s:highlight_helper("DiffChange", "${uiGroups.background}", "${
  versionControlGroups.modified
}")
call s:highlight_helper("DiffDelete", "${versionControlGroups.removed}", "")
call s:highlight_helper("DiffText", "${uiGroups.background}", "${
  versionControlGroups.modified
}", "BOLD")
call s:highlight_helper("GitGutterAdd", "${versionControlGroups.added}", "")
call s:highlight_helper("GitGutterChange", "${
  versionControlGroups.modified
}", "")
call s:highlight_helper("GitGutterChangeDelete", "${
  versionControlGroups.modified
}", "")
call s:highlight_helper("GitGutterDelete", "${
  versionControlGroups.removed
}", "")

" OTHER
call s:highlight_helper("LineNr", "${uiGroups.gray3}", "")
call s:highlight_helper("CursorLine", "NONE", "${uiGroups.gray2}")
call s:highlight_helper("CursorColumn", "NONE", "${uiGroups.gray2}")
call s:highlight_helper("ColorColumn", "NONE", "${uiGroups.gray2}")
call s:highlight_helper("EndOfBuffer", "${uiGroups.gray2}", "")
call s:highlight_helper("VertSplit", "${uiGroups.backgroundShade}", "")
call s:highlight_helper("StatusLineNC", "${uiGroups.gray3}", "${
  uiGroups.backgroundShade
}")
call s:highlight_helper("StatusLineTermNC", "${uiGroups.gray3}", "${
  uiGroups.backgroundShade
}")
call s:highlight_helper("TabLine", "${uiGroups.gray3}", "${
  uiGroups.backgroundShade
}")
call s:highlight_helper("TabLineFill", "${uiGroups.backgroundShade}", "${
  uiGroups.backgroundShade
}")
call s:highlight_helper("ToolbarLine", "${uiGroups.gray3}", "${
  uiGroups.backgroundShade
}")
call s:highlight_helper("Pmenu", "${uiGroups.foreground}", "${uiGroups.gray2}")
call s:highlight_helper("PmenuSbar", "${uiGroups.gray4}", "${uiGroups.gray4}")
call s:highlight_helper("fzf1", "${uiGroups.background}", "${uiGroups.gray2}")
call s:highlight_helper("fzf2", "${uiGroups.background}", "${uiGroups.gray2}")
call s:highlight_helper("fzf3", "${uiGroups.background}", "${uiGroups.gray2}")
call s:highlight_helper("EasyMotionTarget", "${
  ansiGroups.normal.red
}", "", "BOLD")
call s:highlight_helper("EasyMotionTarget2First", "${
  ansiGroups.bright.red
}", "")
call s:highlight_helper("EasyMotionTarget2Second", "${
  ansiGroups.normal.yellow
}", "")


" ==================================================================
" SYNTAX GROUPS
" ==================================================================

" CONSTANT
call s:highlight_helper("Constant", "${syntaxGroups.constant}", "")
call s:highlight_helper("Directory", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsObjectBraces", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsBrackets", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsBlock", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsFuncBlock", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsClassBlock", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsTryCatchBlock", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsIfElseBlock", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsFinallyBlock", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsSwitchBlock", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsRepeatBlock", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsObjectValue", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsClassValue", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsParen", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsParenSwitch", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsParenCatch", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsParenIfElse", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsParenRepeat", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsBracket", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsTernaryIf", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsTemplateString", "${syntaxGroups.constant}", "")
call s:highlight_helper("jsTemplateVar", "${syntaxGroups.constant}", "")
call s:highlight_helper("cssAttr", "${syntaxGroups.constant}", "")
call s:highlight_helper("cssAttrRegion", "${syntaxGroups.constant}", "")
call s:highlight_helper("cssAttributeSelector", "${syntaxGroups.constant}", "")
call s:highlight_helper("htmlTitle", "${syntaxGroups.constant}", "")
call s:highlight_helper("htmlH1", "${syntaxGroups.constant}", "")
call s:highlight_helper("htmlH2", "${syntaxGroups.constant}", "")
call s:highlight_helper("htmlH3", "${syntaxGroups.constant}", "")
call s:highlight_helper("htmlH4", "${syntaxGroups.constant}", "")
call s:highlight_helper("htmlH5", "${syntaxGroups.constant}", "")
call s:highlight_helper("htmlH6", "${syntaxGroups.constant}", "")
call s:highlight_helper("htmlLink", "${syntaxGroups.constant}", "")
call s:highlight_helper("markdownCode", "${syntaxGroups.constant}", "")
call s:highlight_helper("markdownCodeBlock", "${syntaxGroups.constant}", "")
call s:highlight_helper("xmlString", "${syntaxGroups.constant}", "")
call s:highlight_helper("netrwPlain", "${syntaxGroups.constant}", "")
call s:highlight_helper("netrwDir", "${syntaxGroups.constant}", "")
call s:highlight_helper("shDerefSimple", "${syntaxGroups.constant}", "")
call s:highlight_helper("typescriptBracket", "${syntaxGroups.constant}", "")
call s:highlight_helper("typescriptBlock", "${syntaxGroups.constant}", "")
call s:highlight_helper("goConst", "${syntaxGroups.constant}", "")

" IDENTIFIER
call s:highlight_helper("Identifier", "${syntaxGroups.identifier}", "")
call s:highlight_helper("jsVariableDef", "${syntaxGroups.identifier}", "")
call s:highlight_helper("jsObject", "${syntaxGroups.identifier}", "")
call s:highlight_helper("jsObjectKey", "${syntaxGroups.identifier}", "")
call s:highlight_helper("jsObjectKeyComputed", "${syntaxGroups.identifier}", "")
call s:highlight_helper("jsClassPropertyComputed", "${
  syntaxGroups.identifier
}", "")
call s:highlight_helper("jsDestructuringPropertyComputed", "${
  syntaxGroups.identifier
}", "")
call s:highlight_helper("jsDestructuringValue", "${
  syntaxGroups.identifier
}", "")
call s:highlight_helper("jsFutureKeys", "${syntaxGroups.identifier}", "")
call s:highlight_helper("jsObjectProp", "${syntaxGroups.identifier}", "")
call s:highlight_helper("jsPrototype", "${syntaxGroups.identifier}", "")
call s:highlight_helper("jsObjectStringKey", "${syntaxGroups.identifier}", "")
call s:highlight_helper("jsFuncArgs", "${syntaxGroups.identifier}", "")
call s:highlight_helper("jsTaggedTemplate", "${syntaxGroups.identifier}", "")
call s:highlight_helper("jsDestructuringBlock", "${
  syntaxGroups.identifier
}", "")
call s:highlight_helper("jsDestructuringArray", "${
  syntaxGroups.identifier
}", "")
call s:highlight_helper("jsDestructuringPropertyValue", "${
  syntaxGroups.identifier
}", "")
call s:highlight_helper("jsImportContainer", "${syntaxGroups.identifier}", "")
call s:highlight_helper("jsExportContainer", "${syntaxGroups.identifier}", "")
call s:highlight_helper("jsModuleGroup", "${syntaxGroups.identifier}", "")
call s:highlight_helper("jsModuleKeyword", "${syntaxGroups.identifier}", "")
call s:highlight_helper("javascriptHtmlEvents", "${
  syntaxGroups.identifier
}", "")
call s:highlight_helper("javascriptDomElemAttrs", "${
  syntaxGroups.identifier
}", "")
call s:highlight_helper("javascriptDomElemFuncs", "${
  syntaxGroups.identifier
}", "")
call s:highlight_helper("cssClassName", "${syntaxGroups.identifier}", "")
call s:highlight_helper("cssIdentifier", "${syntaxGroups.identifier}", "")
call s:highlight_helper("htmlTagName", "${syntaxGroups.identifier}", "")
call s:highlight_helper("htmlSpecialTagName", "${syntaxGroups.identifier}", "")
call s:highlight_helper("htmlTag", "${syntaxGroups.identifier}", "")
call s:highlight_helper("htmlEndTag", "${syntaxGroups.identifier}", "")
call s:highlight_helper("jsonKeyword", "${syntaxGroups.identifier}", "")
call s:highlight_helper("xmlAttrib", "${syntaxGroups.identifier}", "")
call s:highlight_helper("netrwExe", "${syntaxGroups.identifier}", "")
call s:highlight_helper("shFunction", "${syntaxGroups.identifier}", "")
call s:highlight_helper("typescriptVariableDeclaration", "${
  syntaxGroups.identifier
}", "")
call s:highlight_helper("typescriptCall", "${syntaxGroups.identifier}", "")
call s:highlight_helper("typescriptRef", "${syntaxGroups.identifier}", "")
call s:highlight_helper("typescriptVars", "${syntaxGroups.identifier}", "")
call s:highlight_helper("typescriptFunction", "${syntaxGroups.identifier}", "")

" STATEMENT
call s:highlight_helper("Statement", "${syntaxGroups.statement}", "")
call s:highlight_helper("jsFuncCall", "${syntaxGroups.statement}", "")
call s:highlight_helper("jsOperator", "${syntaxGroups.statement}", "")
call s:highlight_helper("jsSpreadOperator", "${syntaxGroups.statement}", "")
call s:highlight_helper("jsTemplateExpression", "${syntaxGroups.statement}", "")
call s:highlight_helper("jsFuncArgExpression", "${syntaxGroups.statement}", "")
call s:highlight_helper("jsSpreadExpression", "${syntaxGroups.identifier}", "")
call s:highlight_helper("jsRestExpression", "${syntaxGroups.identifier}", "")
call s:highlight_helper("cssFunctionName", "${syntaxGroups.statement}", "")
call s:highlight_helper("cssProp", "${syntaxGroups.statement}", "")
call s:highlight_helper("htmlArg", "${syntaxGroups.statement}", "")
call s:highlight_helper("jsxRegion", "${syntaxGroups.statement}", "")
call s:highlight_helper("xmlTag", "${syntaxGroups.statement}", "")
call s:highlight_helper("xmlEndTag", "${syntaxGroups.statement}", "")
call s:highlight_helper("xmlTagName", "${syntaxGroups.statement}", "")
call s:highlight_helper("xmlEqual", "${syntaxGroups.statement}", "")
call s:highlight_helper("shCmdSubRegion", "${syntaxGroups.statement}", "")
call s:highlight_helper("typescriptOperator", "${syntaxGroups.statement}", "")
call s:highlight_helper("typescriptOpSymbols", "${syntaxGroups.statement}", "")
call s:highlight_helper("typescriptProp", "${syntaxGroups.statement}", "")
call s:highlight_helper("typescriptInterpolation", "${
  syntaxGroups.statement
}", "")
call s:highlight_helper("typescriptEventListenerMethods", "${
  syntaxGroups.statement
}", "")
call s:highlight_helper("dockerfileKeyword", "${syntaxGroups.statement}", "")

" TYPE
call s:highlight_helper("Type", "${syntaxGroups.type}", "")
call s:highlight_helper("jsFunction", "${syntaxGroups.type}", "")
call s:highlight_helper("jsFunctionKey", "${syntaxGroups.type}", "")
call s:highlight_helper("jsStorageClass", "${syntaxGroups.type}", "")
call s:highlight_helper("jsExportDefault", "${syntaxGroups.type}", "")
call s:highlight_helper("jsNan", "${syntaxGroups.type}", "")
call s:highlight_helper("shFunctionKey", "${syntaxGroups.type}", "")
call s:highlight_helper("jsFlowDefinition", "${syntaxGroups.type}", "")
call s:highlight_helper("jsFlowClassDef", "${syntaxGroups.type}", "")
call s:highlight_helper("jsFlowTypeStatement", "${syntaxGroups.type}", "")
call s:highlight_helper("jsFlowTypeKeyword", "${syntaxGroups.type}", "")
call s:highlight_helper("jsFlowImportType", "${syntaxGroups.type}", "")
call s:highlight_helper("jsFlowArgumentDef", "${syntaxGroups.type}", "")
call s:highlight_helper("jsFlowReturn", "${syntaxGroups.type}", "")
call s:highlight_helper("jsFlowFunctionGroup", "${syntaxGroups.type}", "")
call s:highlight_helper("jsFlowClassGroup", "${syntaxGroups.type}", "")
call s:highlight_helper("typescriptEnumKeyword", "${syntaxGroups.type}", "")
call s:highlight_helper("typescriptVariable", "${syntaxGroups.type}", "")
call s:highlight_helper("typescriptFuncKeyword", "${syntaxGroups.type}", "")
call s:highlight_helper("typescriptDefault", "${syntaxGroups.type}", "")
call s:highlight_helper("typescriptReserved", "${syntaxGroups.type}", "")
call s:highlight_helper("goDeclaration", "${syntaxGroups.type}", "")

" GLOBAL
call s:highlight_helper("PreProc", "${syntaxGroups.global}", "")
call s:highlight_helper("Keyword", "${syntaxGroups.global}", "")
call s:highlight_helper("jsGlobalObjects", "${syntaxGroups.global}", "")
call s:highlight_helper("jsThis", "${syntaxGroups.global}", "")
call s:highlight_helper("jsSwitchCase", "${syntaxGroups.global}", "")
call s:highlight_helper("jsParenDecorator", "${syntaxGroups.global}", "")
call s:highlight_helper("cssTagName", "${syntaxGroups.global}", "")
call s:highlight_helper("jsGlobalNodeObjects", "${syntaxGroups.global}", "")
call s:highlight_helper("cssFontDescriptor", "${syntaxGroups.global}", "")
call s:highlight_helper("typescriptGlobal", "${syntaxGroups.global}", "")
call s:highlight_helper("typescriptExport", "${syntaxGroups.global}", "")
call s:highlight_helper("typescriptImport", "${syntaxGroups.global}", "")
call s:highlight_helper("goPackage", "${syntaxGroups.global}", "")
call s:highlight_helper("goImport", "${syntaxGroups.global}", "")

" EMPHASIS
call s:highlight_helper("Underlined", "${syntaxGroups.emphasis}", "")
call s:highlight_helper("markdownItalic", "${syntaxGroups.emphasis}", "")
call s:highlight_helper("markdownBold", "${syntaxGroups.emphasis}", "")
call s:highlight_helper("markdownBoldItalic", "${syntaxGroups.emphasis}", "")

" SPECIAL
call s:highlight_helper("Special", "${syntaxGroups.special}", "")
call s:highlight_helper("SpecialKey", "${syntaxGroups.special}", "")
call s:highlight_helper("NonText", "${syntaxGroups.special}", "")
call s:highlight_helper("Title", "${syntaxGroups.special}", "")
call s:highlight_helper("jsBraces", "${syntaxGroups.special}", "")
call s:highlight_helper("jsFuncBraces", "${syntaxGroups.special}", "")
call s:highlight_helper("jsDestructuringBraces", "${syntaxGroups.special}", "")
call s:highlight_helper("jsClassBraces", "${syntaxGroups.special}", "")
call s:highlight_helper("jsParens", "${syntaxGroups.special}", "")
call s:highlight_helper("jsFuncParens", "${syntaxGroups.special}", "")
call s:highlight_helper("jsArrowFunction", "${syntaxGroups.special}", "")
call s:highlight_helper("jsModuleAsterisk", "${syntaxGroups.special}", "")
call s:highlight_helper("cssBraces", "${syntaxGroups.special}", "")
call s:highlight_helper("cssBraces", "${syntaxGroups.special}", "")
call s:highlight_helper("markdownHeadingDelimiter", "${
  syntaxGroups.special
}", "")
call s:highlight_helper("markdownH1", "${syntaxGroups.special}", "")
call s:highlight_helper("markdownH2", "${syntaxGroups.special}", "")
call s:highlight_helper("markdownH3", "${syntaxGroups.special}", "")
call s:highlight_helper("markdownH4", "${syntaxGroups.special}", "")
call s:highlight_helper("markdownH5", "${syntaxGroups.special}", "")
call s:highlight_helper("markdownH6", "${syntaxGroups.special}", "")
call s:highlight_helper("markdownRule", "${syntaxGroups.special}", "")
call s:highlight_helper("markdownListMarker", "${syntaxGroups.special}", "")
call s:highlight_helper("markdownOrderedListMarker", "${
  syntaxGroups.special
}", "")
call s:highlight_helper("markdownLinkText", "${syntaxGroups.special}", "")
call s:highlight_helper("markdownCodeDelimiter", "${syntaxGroups.special}", "")
call s:highlight_helper("netrwClassify", "${syntaxGroups.special}", "")
call s:highlight_helper("netrwVersion", "${syntaxGroups.special}", "")
call s:highlight_helper("netrwSpecial", "${syntaxGroups.special}", "")
call s:highlight_helper("typescriptParens", "${syntaxGroups.special}", "")
call s:highlight_helper("typescriptBraces", "${syntaxGroups.special}", "")
call s:highlight_helper("typescriptArrowFunc", "${syntaxGroups.special}", "")
call s:highlight_helper("typescriptPropietaryMethods", "${
  syntaxGroups.special
}", "")
call s:highlight_helper("typescriptParen", "${syntaxGroups.special}", "")
call s:highlight_helper("CtrlPStats", "${syntaxGroups.special}", "")

" TRIVIAL
call s:highlight_helper("Comment", "${syntaxGroups.trivial}", "")
call s:highlight_helper("Ignore", "${syntaxGroups.trivial}", "")
call s:highlight_helper("Conceal", "${syntaxGroups.trivial}", "")
call s:highlight_helper("Noise", "${syntaxGroups.trivial}", "")
call s:highlight_helper("jsNoise", "${syntaxGroups.trivial}", "")
call s:highlight_helper("jsFuncArgCommas", "${syntaxGroups.trivial}", "")
call s:highlight_helper("cssClassNameDot", "${syntaxGroups.trivial}", "")
call s:highlight_helper("jsonQuote", "${syntaxGroups.trivial}", "")
call s:highlight_helper("shQuote", "${syntaxGroups.trivial}", "")
call s:highlight_helper("typescriptEndColons", "${syntaxGroups.trivial}", "")
call s:highlight_helper("typescriptTemplateSB", "${syntaxGroups.trivial}", "")
call s:highlight_helper("typescriptCommentSkip", "${syntaxGroups.trivial}", "")
call s:highlight_helper("typescriptDotNotation", "${syntaxGroups.trivial}", "")
call s:highlight_helper("netrwSortBy", "${syntaxGroups.trivial}", "")
call s:highlight_helper("netrwSortSeq", "${syntaxGroups.trivial}", "")
call s:highlight_helper("netrwQuickHelp", "${syntaxGroups.trivial}", "")
call s:highlight_helper("netrwCopyTgt", "${syntaxGroups.trivial}", "")
call s:highlight_helper("netrwTreeBarSpace", "${syntaxGroups.trivial}", "")
call s:highlight_helper("netrwSlash", "${syntaxGroups.trivial}", "")
call s:highlight_helper("netrwCmdNote", "${syntaxGroups.trivial}", "")
call s:highlight_helper("EasyMotionShade", "${syntaxGroups.trivial}", "")


" ==================================================================
" VARIABLES
" ==================================================================

" VIM TERMINAL MODE
let g:terminal_ansi_colors = [
\\ "${ansiGroups.normal.black}",
\\ "${ansiGroups.normal.red}",
\\ "${ansiGroups.normal.green}",
\\ "${ansiGroups.normal.yellow}",
\\ "${ansiGroups.normal.blue}",
\\ "${ansiGroups.normal.magenta}",
\\ "${ansiGroups.normal.cyan}",
\\ "${ansiGroups.normal.white}",
\\ "${ansiGroups.bright.black}",
\\ "${ansiGroups.bright.red}",
\\ "${ansiGroups.bright.green}",
\\ "${ansiGroups.bright.yellow}",
\\ "${ansiGroups.bright.blue}",
\\ "${ansiGroups.bright.magenta}",
\\ "${ansiGroups.bright.cyan}",
\\ "${ansiGroups.bright.white}"
\\]

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
let g:terminal_color_10 = "${ansiGroups.bright.green}"
let g:terminal_color_11 = "${ansiGroups.bright.yellow}"
let g:terminal_color_12 = "${ansiGroups.bright.blue}"
let g:terminal_color_13 = "${ansiGroups.bright.magenta}"
let g:terminal_color_14 = "${ansiGroups.bright.cyan}"
let g:terminal_color_15 = "${ansiGroups.bright.white}"

" FZF
let g:fzf_colors = {
\\ "fg":      ["fg", "Normal"],
\\ "bg":      ["bg", "Normal"],
\\ "hl":      ["fg", "IncSearch"],
\\ "fg+":     ["fg", "CursorLine", "CursorColumn", "Normal"],
\\ "bg+":     ["bg", "CursorLine", "CursorColumn"],
\\ "hl+":     ["fg", "IncSearch"],
\\ "info":    ["fg", "IncSearch"],
\\ "border":  ["fg", "Ignore"],
\\ "prompt":  ["fg", "Comment"],
\\ "pointer": ["fg", "IncSearch"],
\\ "marker":  ["fg", "IncSearch"],
\\ "spinner": ["fg", "IncSearch"],
\\ "header":  ["fg", "IncSearch"] 
\\}

" VIM-POLYGLOT
let g:javascript_plugin_flow = 1
`

process.stdout.write(sourceString)
