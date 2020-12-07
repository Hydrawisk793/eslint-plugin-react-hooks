module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "loose": true,
                "modules": "commonjs"
            }
        ]
    ],
    "plugins": [
        [
            "@babel/plugin-transform-modules-commonjs",
            {
                "allowTopLevelThis": true
            }
        ],
        "@babel/plugin-transform-reserved-words"
    ]
};
