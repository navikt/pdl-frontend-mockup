module.exports = {
    presets: [require('@navikt/ds-tailwind')],
    theme: {
        extend: {
            colors: {
                BrandMagentaStrong: {
                    default: '#B65781',
                    hover: '#BE7F99',
                    pressed: '#C58AA2',
                },
            },
        },
    },
}
