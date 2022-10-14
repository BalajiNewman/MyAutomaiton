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
        './test/specs/login.spec.ts'
    ],  
    suites: {
        login: [
            './test/specs/login.success.spec.ts',
            './test/specs/login.failure.spec.ts'
        ],
        otherFeature: [
            // ...
        ],
        mutualfund :[
            './test/specs/login.success.spec.ts',
            './test/specs/login.failure.spec.ts'
        ]
    },
    exclude: [
        // 'path/to/excluded/files'
    ],   
   
    maxInstances: 1,

    //specFileRetries : 2,

    capabilities: [{          
        maxInstances: 1,       
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],  
   
    logLevel: 'silent',   
    
    bail: 0,   
    baseUrl: 'http://localhost',    
    waitforTimeout: 10000,   
    connectionRetryTimeout: 120000,  
    connectionRetryCount: 3,   
    services: ['chromedriver'],      
    framework: 'mocha',  //jasmin     
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },    
    
    beforeTest: function (test, context) {
        console.log('Before test hook')
        browser.url('https://the-internet.herokuapp.com/login')
    },
    afterTest: function(test, context, { error, result, duration, passed, retries }) {
        //Update the result to jira
        console.log('After Test:' + passed)
    }    
}
