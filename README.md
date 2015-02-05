# dux-dispatcher-connection

This module takes a [Dux](https://github.com/asbjornenge/dux) dispatcher hostname & port and creates a dispatcher connection that will automatically reconnect on failures.

## Install

    npm install dux-dispatcher-connection

## Use

    var conn = require('dux-dispatcher-connection')({
        host     : 'dux-dispatcher.dux.test',
        port     : 8000,
        interval : 5000, // Retry interval     (default 5000)
        timeout  : 500,  // Connection timeout (default 500)
    })
    conn.on('up', fn)
    conn.on('down', fn)
    conn.listen()

## Changelog

### 2.0.1

* Updated README with listen call !important

### 2.0.0

* De-argumentified the options :stuck_out_tongue:

### 1.0.0

* Initial release :tada:

enjoy
