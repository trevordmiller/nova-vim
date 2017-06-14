# Contributing

- Ensure you have the latest [Git](https://git-scm.com/) and [Node + npm](https://nodejs.org) installed on your machine
- Override your normal Vim colorscheme with the local version you are building in this repo
  - In normal Vim, you can do this with a symbolic link to the `.vim/colors` directory like this: `ln -sf "$(pwd)"/colors/nova.vim ~/.vim/colors/nova.vim`
- Run `npm install` to install libraries
- Run `npm run dev` to develop
  - With each change, you will need to run `:source $MYVIMRC` to see the change, since Vim doesn't reload your `.vimrc` automatically
  - Run `:hi` to view all applied highlight groups
- Submit a pull request to `master`
- Continuous Integration runs `npm run verify` to ensure things are working as expected
- An admin merges your pull request into `master` and releases a new version
- Remove your local colorscheme
  - In normal Vim, you can do this by removing the symbolic link to the `.vim/colors` directory like this: `rm ~/.vim/colors/nova.vim`
- Once your pull request is merged, update your `nova-vim` plugin to the latest remote version that has your changes in it and make sure everything is working as expected
