var assign  = Object.assign || require('object.assign')
var faye    = require('faye')
var retry   = require('retry-connection')
var EE      = require('events').EventEmitter

var DispatcherConnection = function(options) {
    this.ready    = false
    this.client   = null
    this.host     = options.host
    this.port     = options.port
    this.interval = options.interval || 5000
    this.timeout  = options.timeout  || 500
}
DispatcherConnection.prototype =  assign({

    listen : function() {
        this.connection = retry({ 
            host     : this.host, 
            port     : this.port,
            interval : this.interval,
            timeout  : this.timeout
        })
        this.connection.on('ready', this.handleReady.bind(this))
        this.connection.on('issue', this.handleIssue.bind(this))
        this.connection.connect()
    },

    handleReady : function() {
        if (this.ready) return
        this.ready  = true
        this.client = new faye.Client(this.getURI())
        this.emit('up')
    },

    handleIssue : function(issue) {
        console.log(issue.message)
        if (!this.ready) return
        this.ready  = false
        this.client = null 
        this.emit('down')
    },

    getURI : function() {
        return 'http://'+this.host+':'+this.port
    },

    subscribe : function(path, fn) {
        return this.client.subscribe(path, fn)
    }

}, EE.prototype)

module.exports = function(options) { return new DispatcherConnection(options)  }
