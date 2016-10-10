" WARNING: Do not edit this file directly - it is built from the src directory


" ==================================================================
" HIGHLIGHT HELPER
" ==================================================================

function! s:highlight_helper(syntax_group, foreground_color, background_color)
  if a:background_color != ""
    exec "highlight " . a:syntax_group . " guifg=" . a:foreground_color . " guibg=" . a:background_color . " gui=NONE cterm=NONE term=NONE"
  else
    exec "highlight " . a:syntax_group . " guifg=" . a:foreground_color . " guibg=#3C4C55 gui=NONE cterm=NONE term=NONE"
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
call s:highlight_helper("Normal", "#C5D4DD", "")

" NEOVIM TERMINAL MODE
let g:terminal_color_0 = "#3C4C55"
let g:terminal_color_1 = "#DF8C8C"
let g:terminal_color_2 = "#A8CE93"
let g:terminal_color_3 = "#DADA93"
let g:terminal_color_4 = "#83AFE5"
let g:terminal_color_5 = "#9A93E1"
let g:terminal_color_6 = "#7FC1CA"
let g:terminal_color_7 = "#C5D4DD"
let g:terminal_color_8 = "#899BA6"
let g:terminal_color_9 = "#F2C38F"
let g:terminal_color_10 = "#A8CE93"
let g:terminal_color_11 = "#DADA93"
let g:terminal_color_12 = "#83AFE5"
let g:terminal_color_13 = "#D18EC2"
let g:terminal_color_14 = "#7FC1CA"
let g:terminal_color_15 = "#E6EEF3"

" ==================================================================
" UI GROUPS
" ==================================================================

" USER ACTION NEEDED
call s:highlight_helper("Error", "#DF8C8C", "")
call s:highlight_helper("ErrorMsg", "#DF8C8C", "")
call s:highlight_helper("WarningMsg", "#DF8C8C", "")
call s:highlight_helper("SpellBad", "#DF8C8C", "")
call s:highlight_helper("SpellCap", "#DF8C8C", "")
call s:highlight_helper("DiffChange", "#DF8C8C", "")
call s:highlight_helper("DiffDelete", "#DF8C8C", "")
call s:highlight_helper("Todo", "#DF8C8C", "")

" USER CURRENT STATE
call s:highlight_helper("MatchParen", "#7FC1CA", "NONE")
call s:highlight_helper("CursorLineNr", "#7FC1CA", "")
call s:highlight_helper("Visual", "#3C4C55", "#7FC1CA")
call s:highlight_helper("VisualNOS", "#3C4C55", "#7FC1CA")
call s:highlight_helper("Folded", "#7FC1CA", "")
call s:highlight_helper("FoldColumn", "#7FC1CA", "")
call s:highlight_helper("IncSearch", "#3C4C55", "#7FC1CA")
call s:highlight_helper("Search", "#6A7D89", "#7FC1CA")
call s:highlight_helper("WildMenu", "#556873", "#7FC1CA")
call s:highlight_helper("Question", "#7FC1CA", "")
call s:highlight_helper("MoreMsg", "#7FC1CA", "")
call s:highlight_helper("ModeMsg", "#7FC1CA", "")
call s:highlight_helper("StatusLine", "#7FC1CA", "#556873")
call s:highlight_helper("PmenuSel", "#556873", "#7FC1CA")
call s:highlight_helper("PmenuThumb", "#7FC1CA", "#7FC1CA")
call s:highlight_helper("DiffAdd", "#3C4C55", "#7FC1CA")
call s:highlight_helper("CtrlPMatch", "#3C4C55", "#7FC1CA")

" OTHER
call s:highlight_helper("SignColumn", "NONE", "")
call s:highlight_helper("LineNr", "#6A7D89", "")
call s:highlight_helper("CursorLine", "NONE", "#556873")
call s:highlight_helper("CursorColumn", "#556873", "")
call s:highlight_helper("EndOfBuffer", "#556873", "")
call s:highlight_helper("VertSplit", "#556873", "#556873")
call s:highlight_helper("StatusLineNC", "#3C4C55", "#556873")
call s:highlight_helper("Pmenu", "#C5D4DD", "#556873")
call s:highlight_helper("PmenuSbar", "#899BA6", "#899BA6")
call s:highlight_helper("DiffText", "#1E272C", "")
call s:highlight_helper("ColorColumn", "#556873", "")


" ==================================================================
" SYNTAX GROUPS
" ==================================================================

" CONSTANT
call s:highlight_helper("Constant", "#7FC1CA", "")
call s:highlight_helper("Directory", "#7FC1CA", "")
call s:highlight_helper("jsObjectBraces", "#7FC1CA", "")
call s:highlight_helper("jsBrackets", "#7FC1CA", "")
call s:highlight_helper("jsObjectValue", "#7FC1CA", "")
call s:highlight_helper("jsParen", "#7FC1CA", "")
call s:highlight_helper("jsParenSwitch", "#7FC1CA", "")
call s:highlight_helper("jsParenIfElse", "#7FC1CA", "")
call s:highlight_helper("jsBracket", "#7FC1CA", "")
call s:highlight_helper("jsTernaryIf", "#7FC1CA", "")
call s:highlight_helper("jsTemplateString", "#7FC1CA", "")
call s:highlight_helper("jsTemplateVar", "#7FC1CA", "")
call s:highlight_helper("cssAttr", "#7FC1CA", "")
call s:highlight_helper("cssAttrRegion", "#7FC1CA", "")
call s:highlight_helper("cssAttributeSelector", "#7FC1CA", "")
call s:highlight_helper("htmlTitle", "#7FC1CA", "")
call s:highlight_helper("htmlH1", "#7FC1CA", "")
call s:highlight_helper("htmlH2", "#7FC1CA", "")
call s:highlight_helper("htmlH3", "#7FC1CA", "")
call s:highlight_helper("htmlH4", "#7FC1CA", "")
call s:highlight_helper("htmlH5", "#7FC1CA", "")
call s:highlight_helper("htmlH6", "#7FC1CA", "")
call s:highlight_helper("htmlLink", "#7FC1CA", "")
call s:highlight_helper("markdownCode", "#7FC1CA", "")
call s:highlight_helper("markdownCodeBlock", "#7FC1CA", "")
call s:highlight_helper("xmlString", "#7FC1CA", "")
call s:highlight_helper("netrwPlain", "#7FC1CA", "")
call s:highlight_helper("netrwDir", "#7FC1CA", "")
call s:highlight_helper("shDerefSimple", "#7FC1CA", "")

" IDENTIFIER
call s:highlight_helper("Identifier", "#83AFE5", "")
call s:highlight_helper("jsVariableDef", "#83AFE5", "")
call s:highlight_helper("jsObject", "#83AFE5", "")
call s:highlight_helper("jsObjectKey", "#83AFE5", "")
call s:highlight_helper("jsObjectStringKey", "#83AFE5", "")
call s:highlight_helper("jsFuncArgs", "#83AFE5", "")
call s:highlight_helper("jsDestructuringBlock", "#83AFE5", "")
call s:highlight_helper("jsDestructuringArray", "#83AFE5", "")
call s:highlight_helper("jsDestructuringPropertyValue", "#83AFE5", "")
call s:highlight_helper("jsSpreadExpression", "#83AFE5", "")
call s:highlight_helper("jsImportContainer", "#83AFE5", "")
call s:highlight_helper("jsExportContainer", "#83AFE5", "")
call s:highlight_helper("jsModuleGroup", "#83AFE5", "")
call s:highlight_helper("cssClassName", "#83AFE5", "")
call s:highlight_helper("cssIdentifier", "#83AFE5", "")
call s:highlight_helper("htmlTagName", "#83AFE5", "")
call s:highlight_helper("htmlSpecialTagName", "#83AFE5", "")
call s:highlight_helper("htmlTag", "#83AFE5", "")
call s:highlight_helper("htmlEndTag", "#83AFE5", "")
call s:highlight_helper("jsonKeyword", "#83AFE5", "")
call s:highlight_helper("xmlAttrib", "#83AFE5", "")
call s:highlight_helper("netrwExe", "#83AFE5", "")
call s:highlight_helper("shFunction", "#83AFE5", "")

" STATEMENT
call s:highlight_helper("Statement", "#DADA93", "")
call s:highlight_helper("jsFuncCall", "#DADA93", "")
call s:highlight_helper("jsOperator", "#DADA93", "")
call s:highlight_helper("jsSpreadOperator", "#DADA93", "")
call s:highlight_helper("cssFunctionName", "#DADA93", "")
call s:highlight_helper("cssProp", "#DADA93", "")
call s:highlight_helper("htmlArg", "#DADA93", "")
call s:highlight_helper("jsxRegion", "#DADA93", "")
call s:highlight_helper("xmlTag", "#DADA93", "")
call s:highlight_helper("xmlEndTag", "#DADA93", "")
call s:highlight_helper("xmlTagName", "#DADA93", "")
call s:highlight_helper("xmlEqual", "#DADA93", "")
call s:highlight_helper("shCmdSubRegion", "#DADA93", "")

" TYPE
call s:highlight_helper("Type", "#A8CE93", "")
call s:highlight_helper("jsFunction", "#A8CE93", "")
call s:highlight_helper("jsStorageClass", "#A8CE93", "")
call s:highlight_helper("jsNan", "#A8CE93", "")
call s:highlight_helper("shFunctionKey", "#A8CE93", "")

" GLOBAL
call s:highlight_helper("PreProc", "#9A93E1", "")
call s:highlight_helper("jsGlobalObjects", "#9A93E1", "")
call s:highlight_helper("jsThis", "#9A93E1", "")
call s:highlight_helper("cssTagName", "#9A93E1", "")
call s:highlight_helper("jsGlobalNodeObjects", "#9A93E1", "")
call s:highlight_helper("cssFontDescriptor", "#9A93E1", "")

" EMPHASIS
call s:highlight_helper("Underlined", "#D18EC2", "")
call s:highlight_helper("markdownItalic", "#D18EC2", "")
call s:highlight_helper("markdownBold", "#D18EC2", "")
call s:highlight_helper("markdownBoldItalic", "#D18EC2", "")

" SPECIAL
call s:highlight_helper("Special", "#F2C38F", "")
call s:highlight_helper("SpecialKey", "#F2C38F", "")
call s:highlight_helper("NonText", "#F2C38F", "")
call s:highlight_helper("Title", "#F2C38F", "")
call s:highlight_helper("jsBraces", "#F2C38F", "")
call s:highlight_helper("jsFuncBraces", "#F2C38F", "")
call s:highlight_helper("jsDestructuringBraces", "#F2C38F", "")
call s:highlight_helper("jsClassBraces", "#F2C38F", "")
call s:highlight_helper("jsParens", "#F2C38F", "")
call s:highlight_helper("jsFuncParens", "#F2C38F", "")
call s:highlight_helper("jsArrowFunction", "#F2C38F", "")
call s:highlight_helper("jsModuleAsterisk", "#F2C38F", "")
call s:highlight_helper("cssBraces", "#F2C38F", "")
call s:highlight_helper("cssBraces", "#F2C38F", "")
call s:highlight_helper("markdownHeadingDelimiter", "#F2C38F", "")
call s:highlight_helper("markdownH1", "#F2C38F", "")
call s:highlight_helper("markdownH2", "#F2C38F", "")
call s:highlight_helper("markdownH3", "#F2C38F", "")
call s:highlight_helper("markdownH4", "#F2C38F", "")
call s:highlight_helper("markdownH5", "#F2C38F", "")
call s:highlight_helper("markdownH6", "#F2C38F", "")
call s:highlight_helper("markdownRule", "#F2C38F", "")
call s:highlight_helper("markdownListMarker", "#F2C38F", "")
call s:highlight_helper("markdownOrderedListMarker", "#F2C38F", "")
call s:highlight_helper("markdownLinkText", "#F2C38F", "")
call s:highlight_helper("markdownCodeDelimiter", "#F2C38F", "")
call s:highlight_helper("netrwClassify", "#F2C38F", "")
call s:highlight_helper("netrwVersion", "#F2C38F", "")
call s:highlight_helper("CtrlPStats", "#F2C38F", "")

" TRIVIAL
call s:highlight_helper("Comment", "#899BA6", "")
call s:highlight_helper("Ignore", "#899BA6", "")
call s:highlight_helper("Conceal", "#899BA6", "")
call s:highlight_helper("Noise", "#899BA6", "")
call s:highlight_helper("jsNoise", "#899BA6", "")
call s:highlight_helper("cssClassNameDot", "#899BA6", "")
call s:highlight_helper("jsonQuote", "#899BA6", "")
call s:highlight_helper("shQuote", "#899BA6", "")

" ==================================================================
" VERSION CONTROL
" ==================================================================

" GITGUTTER
call s:highlight_helper("GitGutterAdd", "#A8CE93", "")
call s:highlight_helper("GitGutterChange", "#F2C38F", "")
call s:highlight_helper("GitGutterChangeDelete", "#F2C38F", "")
call s:highlight_helper("GitGutterDelete", "#DF8C8C", "")
