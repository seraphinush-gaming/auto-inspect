// Version 1.01 r:03

module.exports = function AutoInspect(d) {

    //code
    d.hook('S_ANSWER_INTERACTIVE', 2, (e) => {
        d.send('C_REQUEST_USER_PAPERDOLL_INFO', 1, { name: e.name })
    })

}