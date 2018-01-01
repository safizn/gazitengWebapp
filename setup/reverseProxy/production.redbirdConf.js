// This file would be required in Redbird reverseProxy. 
// USAGE: 

module.exports = function reverseProxy(proxy) {

    let email = process.env.EMAIL
    let domain = 'gaziteng.com'
    
    proxy.register(
        domain, 
        'http://gazitengwebapp_nodejs:80', {
        ssl: {
                letsencrypt: {
                    email: email, // Domain owner/admin email
                    production: true, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
                }
            }
        }
    );
    proxy.register(
        'api.' + domain, 
        'http://gazitengwebapp_nodejs:8082', 
        {
            ssl: {
                letsencrypt: {
                    email: email, // Domain owner/admin email
                    production: true, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
                }
            }
        }
    );
    proxy.register(
        'cdn.' + domain, 
        'http://gazitengwebapp_nodejs:8081', 
        {
            ssl: {
                letsencrypt: {
                    email: email, // Domain owner/admin email
                    production: true, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
                }
            }
        }
    );
    proxy.register(
        'oauth.' + domain, 
        'http://gazitengwebapp_nodejs:8088', 
        {
            ssl: {
                letsencrypt: {
                    email: email, // Domain owner/admin email
                    production: true, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
                }
            }
        }
    );
    
    proxy.register(
        'rethinkdb.' + domain, 
        'http://gazitengwebapp_rethinkdb:8080'
    );

}
