module.exports = {
  "extends": [
    "eslint:recommended",
    "prettier"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2020
  },
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 80,
        "semi": false,
        "arrowParens": "avoid"
      }
    ],
  },
  "plugins": [
    "html",
    "prettier",
  ]
}
