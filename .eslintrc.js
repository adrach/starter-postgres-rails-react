module.exports = {
  "env": {
    "node": true,
    "browser": true,
    "es6": true,
    "jest": true
  },
  "parser": "babel-eslint", 
  "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "linebreak-style": 0,
        "no-undef": 0,
        "no-unused-expressions": 0,
        "jsx-a11y/label-has-associated-control": 0,
        "jsx-a11y/label-has-for": 0
    }
};