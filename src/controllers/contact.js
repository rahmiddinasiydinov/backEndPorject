const FS = require('../utils/fileSystem');
let base = new FS('/data.json') 
module.exports = (req, res)=>{
    let data = req.body;
    let messages = base.read();
    data.id = messages.length;
    messages.push(data);
    base.write(messages);
    res.redirect('/')
    
}