# Single Page Application SEO

## Initialization

```bash
npm i
```

## Test

```bash
npm run test
```

## Start

```bash
pm2 start server.js
```

## Nginx

```bash
location / {
    proxy_set_header  Host            $host:$proxy_port;
    proxy_set_header  X-Real-IP       $remote_addr;
    proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
    try_files $uri $uri/ /index.html;
    # SSR for Search Engine Spider
    if ($http_user_agent ~* "Baiduspider|twitterbot|facebookexternalhit|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|slackbot|vkShare|W3C_Validator|bingbot|Sosospider|Sogou Pic Spider|Googlebot|360Spider") {
        proxy_pass  http://127.0.0.1:8686;
    }
}
```

## LICENSE

GPLv3
