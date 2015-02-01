# dux-dispatcher-connection

This module takes a [Dux](https://github.com/asbjornenge/dux) dispatcher hostname & port and creates a dispatcher connection that will automatically reconnect on failures.

## Install

    npm install dux-dispatcher-connection

## Use

    var ddc  = require('dux-dispatcher-connection')
    var conn = ddc('dux-dispatcher.dux.test', 8000)
    conn.on('connect', fn)
    conn.on('close', fn)

enjoy
