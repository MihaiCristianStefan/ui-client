module.exports = {
    publicPath: '/web-magnat/',
    devServer: {
        proxy: {
            '/quiz/*': {
                target: 'http://localhost:8000',
                changeOrigin: true,
            }
        }
    } 
}