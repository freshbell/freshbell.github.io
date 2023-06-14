/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized:true,
        domains:[
            'www.notion.so',
            'image.unsplash.com',
            ''
        ]
    }, 
    // basePath: '/',
    output:'export'
}

module.exports = nextConfig
