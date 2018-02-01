// OPCODE REQUIRED :
// - C_REQUEST_USER_PAPERDOLL_INFO
// - S_ASK_INTERACTIVE

// Version 1.00 r:00

module.exports = function AutoInspect(d) {

    //code
    d.hook('S_ANSWER_INTERACTIVE', (e) => { 
        d.toServer('C_REQUEST_USER_PAPERDOLL_INFO', { name: e.name })
    })

}
