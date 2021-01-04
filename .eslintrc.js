module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    extends: ['prettier', 'prettier/@typescript-eslint'],
    plugins: ['prettier'],
};
