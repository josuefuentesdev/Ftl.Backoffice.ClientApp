import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

export const b2cPolicies = {
     names: {
         signUpSignIn: "b2c_1_susi",
         editProfile: "b2c_1_edit_profile"
     },
     authorities: {
         signUpSignIn: {
             authority: "https://fictitelb2c.b2clogin.com/fictitelb2c.onmicrosoft.com/b2c_1_susi",
         },
         editProfile: {
             authority: "https://fictitelb2c.b2clogin.com/fictitelb2c.onmicrosoft.com/b2c_1_edit_profile"
         }
     },
     authorityDomain: "fictitelb2c.b2clogin.com"
 };


export const msalConfig: Configuration = {
     auth: {
         clientId: '40f8ff4f-55ea-4727-a227-6e65fd946fd7',
         authority: b2cPolicies.authorities.signUpSignIn.authority,
         knownAuthorities: [b2cPolicies.authorityDomain],
         redirectUri: '/',
     },
     cache: {
         cacheLocation: BrowserCacheLocation.LocalStorage,
         storeAuthStateInCookie: isIE,
     },
     system: {
         loggerOptions: {
            loggerCallback: (logLevel, message, containsPii) => {
                console.log(message);
             },
             logLevel: LogLevel.Verbose,
             piiLoggingEnabled: false
         }
     }
 }

export const protectedResources = {
  todoListApi: {
    endpoint: "http://localhost:5000/api/todolist",
    scopes: ["https://fictitelb2c.onmicrosoft.com/api/tasks.read"],
  },
}
export const loginRequest = {
  scopes: []
};
