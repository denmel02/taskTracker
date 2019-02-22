const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer({
            browsers: ['last 3 versions', 'ie >= 6', 'ff >= 20', '>0.01%'],
            remove: false
        })
    ]
};
