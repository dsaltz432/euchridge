module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true
    },
    "extends": ["airbnb", "prettier"],
    "plugins": [
        "prettier"
    ],
    "rules": {
        "prettier/prettier": ["error"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": "off",
        "react/prop-types": "off",
        "import/prefer-default-export": "off"
    }
};
