# dux-dispatcher-connection

This module takes a [Dux](https://github.com/asbjornenge/dux) dispatcher hostname & port and creates a dispatcher connection that will automatically reconnect on failures.

## Install

    npm install dux-dispatcher-connection

## Use

    var conn = require('dux-dispatcher-connection')({
        'dispatcher-host' : 'dux-dispatcher.dux.test',
        'dispatcher-port' : 8000,
        'interval'        : 5000, // (default 5000)
        'timeout'         : 500,  // (default 500)
    })
    conn.on('up', fn)
    conn.on('down', fn)

## Changelog

### 1.0.0

* Initial release :tada:

enjoy
