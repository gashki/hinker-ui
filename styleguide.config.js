const path = require('path');

const sections = [
    {
        name: 'Colors',
        content: 'examples/colors.md',
    },
    {
        name: 'Components',
        description: '',
        components: () => ['src/components/switch/Switch.tsx'],
        sectionDepth: 1,
        usageMode: 'expand',
    },
];

const getComponentPathLine = componentPath => {
    const componentDir = path.dirname(componentPath);
    const componentName = path.basename(componentPath, path.extname(componentPath));
    const relativePath = componentDir.replace(/\\/g, '/').replace(/(.*\/)?src\//, '');

    return `import ${componentName} from 'hinker-ui/es/${relativePath}/${componentName}';`;
};

module.exports = {
    getComponentPathLine,
    pagePerSection: true,
    require: ['/examples/styles.scss'],
    sections,
    title: 'Hinker UI',
    webpackConfig: {
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    test: /\.(jsx|tsx)?$/,
                },
                {
                    test: /\.s?css$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
            ],
        },
    },
};
