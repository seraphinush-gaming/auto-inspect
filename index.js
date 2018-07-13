// Version 1.02 r:00

module.exports = function AutoInspect(d) {

    //code
    d.hook('S_ANSWER_INTERACTIVE', 2, (e) => {
        d.send('C_REQUEST_USER_PAPERDOLL_INFO', 1, { name: e.name })
    })

}