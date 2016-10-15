module.exports = {
  "root": true,
  "extends": ["eslint:recommended"],
  "env": {
    "es6": true,
    "node": true,
    "commonjs": true,
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    },
    "sourceType": "module",
  },
  "rules": {
    "linebreak-style": ["error", "unix"],
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "comma-dangle": ["error", "always-multiline"],
  }
}
