_This assumes you have Bash, Git, Node, and npm_

- Fork repo
- Branch off `master`
- Override your normal Vim colorscheme with the local version you are building in this repo (for example, in Vim, you can do so with a symbolic link to the `.vim/colors` directory like this: `ln -sf "$(pwd)"/colors/nova.vim ~/.vim/colors/nova.vim`)
- Run `npm start` to lint and compile (when you edit a file in `src` it will be compiled to `colors`)
- With each change, you will need to run `:source $MYVIMRC` to see the change
- Stage and commit (if your pull request resolves an issue, add ` (resolve #{issueNumber})` to the end of your commit message)
- Run `npm version {major/minor/patch}` ([following semver](https://docs.npmjs.com/cli/version))
- Run `git push && git push --tags`
- Submit a pull request
- Ensure your pull request passes all checks
- An admin will review your pull request
- Once the pull request is merged, a script will be run that automatically bumps the version based on your commit message `type`
- Remove your local colorscheme (for example, in Vim, you can do so with `rm ~/.vim/colors/nova.vim`)
- Update to the latest remote version that has your changes in it with your Vim plugin manager
