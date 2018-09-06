module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": ["react"],
    "rules": {
        "indent" : ["error", 2, { "ignoredNodes": ["JSXElement *"] ,"SwitchCase": 1}],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-indent": ["error", 2],
        "react/prefer-stateless-function": [0, { "ignorePureComponents": false }],
        "react/no-multi-comp": [0, { "ignoreStateless": true }],
        'no-console': 'off',
        "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }],
        "comma-dangle": ["error", "never"]
    }
};