'use strict';

module.exports = appInfo => {
    const config = {
        cluster:{
            listen: {
                port: 7997
            }
        },
        // use for cookie sign key, should change to your own and keep security
        keys:'123456',
        // add your config here
        security: {
            csrf: {
                enable:false,
                ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
            },
        },
        nuxt: require('./config.nuxt')
    };
    return config;
};
