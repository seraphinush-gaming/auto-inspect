// Version 1.01 r:01

module.exports = function AutoInspect(d) {

    //code
    d.hook('S_ANSWER_INTERACTIVE', (e) => {
        d.toServer('C_REQUEST_USER_PAPERDOLL_INFO', { name: e.name })
    })

}