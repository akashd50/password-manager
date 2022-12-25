module.exports = {
    module: {
        rules: [
            {
                test:/\.(wgsl|glsl|vs|fs)$/,
                use: [
                    {
                        loader: 'ts-shader-loader',
                    }
                ]
            }
        ]
    }
}
