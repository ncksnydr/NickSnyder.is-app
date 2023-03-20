/**
 *  Prettier::Overrides::CSS
 * @see https://prettier.io/docs/en/configuration.html
 */

module.exports = {
    overrides: [
        {
            files: ['*.css'],
            options: {
                parser: 'css'
            }
        },
        {
            files: ['*.scss'],
            options: {
                parser: 'scss'
            }
        }
    ]
};
