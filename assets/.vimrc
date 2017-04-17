" PLUGIN MANAGER
" This example file uses vim-plug for Vim plugin management, but you can use any plugin manager you want as long as it supports GitHub repos
call plug#begin('~/.vim/plugged')
Plugin 'trevordmiller/nova-vim'
call plug#end()

" THE ONLY RULE YOU NEED
" Ensure you place this below any other plugins or rules that effect your colors so it isn't overwritten
" This will work for the latest versions of terminal Vim, Neovim, and GUI Vim
" There is no need for common old .vimrc color hacks or aesthentic rules when using the Nova colorscheme as this one rule sets all other colorscheme related rules for you
" If you are interested in what rules this one rule sets, see the "RESET" section of "https://github.com/trevordmiller/nova-vim/blob/master/colors/nova.vim"
colorscheme nova
