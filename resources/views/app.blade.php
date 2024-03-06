<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
    
        <meta name="description"
            content="Distributor Sembako Termurah dengan harga Ekomomis." />
        <meta name="keywords"
            content="Distributor, Sembako, Supplier, Supply Chain, Ekspedisi" />
        <meta name="copyright" content="remotify.com" itemprop="dateline" />
        <meta name="author" content="Devto.id" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="googlebot-news" content="index, follow" />
    
        <meta name="language" content="id" />
        <meta name="geo.country" content="id" />
        <meta http-equiv="content-language" content="id" />
        <meta name="geo.placename" content="Indonesia" />

        <title>PT. Indo Epe Morowali - IEM</title>
        <link rel="icon" type="image/png" href="{{ asset('img/icon/icon.png') }}">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
