var write = require('./write')
var update = require('./update')
var read = require('./read')

read(70676890).then(console.log);
update(70676890,"giorgiosd",12132,123123)
write("giorgdsdsio",1231,13231)