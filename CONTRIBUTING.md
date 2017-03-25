_This assumes you have Bash, Git, Node, and Yarn_

- Fork repo
- Run `yarn` to install dependencies
- Branch off `master`
- Override your normal Vim colorscheme with the local version you are building in this repo
  - In normal Vim, you can do this with a symbolic link to the `.vim/colors` directory like this: `ln -sf "$(pwd)"/colors/nova.vim ~/.vim/colors/nova.vim`
- Run `yarn dev` to lint and compile from `src` to `build` folder
- With each change, you will need to run `:source $MYVIMRC` to see the change, since Vim doesn't reload your `.vimrc` automatically
- Stage and commit
- Submit a pull request to `master`
- Ensure your pull request passes all checks
- An admin will review your pull request
- Remove your local colorscheme
  - In normal Vim, you can do this by removing the symbolic link to the `.vim/colors` directory like this: `rm ~/.vim/colors/nova.vim`
- Once your pull request is merged, update your `nova-vim` plugin to the latest remote version that has your changes in it and make sure everything is working as expected
