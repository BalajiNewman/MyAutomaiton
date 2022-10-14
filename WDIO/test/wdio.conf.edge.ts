import type { Options } from '@wdio/types'

export const config: Options.Testrunner = {
    autoCompileOpts: {
        autoCompile: true,      
        tsNodeOpts: {
            transpileOnly: true,
            project: 'test/tsconfig.json'
        }        
    },   
    specs: [
        './test/specs/**/*.js'
    ],  
    suites: {
        login: [
            './test/specs/login.success.spec.js',
            './test/specs/login.failure.spec.js'
        ],
        otherFeature: [
            // ...
        ],
        mutualfund :[
            './test/specs/login.success.spec.js',
            './test/specs/login.failure.spec.js'
        ]
    },
    exclude: [
        // 'path/to/excluded/files'
    ],   
   
    maxInstances: 2,

    specFileRetries : 2,

    capabilities: [{          
        maxInstances: 2,       
        browserName: 'edge',
        acceptInsecureCerts: true
    }],  
   
    logLevel: 'silent',   
    
    bail: 0,   
    baseUrl: 'http://localhost',    
    waitforTimeout: 10000,   
    connectionRetryTimeout: 120000,  
    connectionRetryCount: 3,   
    services: ['chromedriver'],      
    framework: 'mocha',      
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    } ,

    //hooks
    onPrepare: function (config, capabilities) {
    },
    onWorkerStart: function (cid, caps, specs, args, execArgv) {
    },
    before: function (capabilities, specs) {    

    },
    beforeTest: function (test, context) {
        browser.url('https://the-internet.herokuapp.com/login')
    },
    onWorkerEnd: function (cid, exitCode, specs, retries) {
    },
    beforeSession: function (config, capabilities, specs, cid) {
    },

}
