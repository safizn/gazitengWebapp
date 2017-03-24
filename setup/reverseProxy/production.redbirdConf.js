// This file would be required in Redbird reverseProxy. 
// USAGE: 

export default function reverseProxy(proxy) {

    let email = process.env.EMAIL
    let domain = 'gaziteng.com'

    proxy.register(domain, 'http://gazitengwebapp_wordpress:80', {
        ssl: {
            letsencrypt: {
                email: email, // Domain owner/admin email
                production: true, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
            }
        }
    });
        
}
