// Version 1.03 r:00

module.exports = function AutoInspect(m) {

    //code
    m.hook('S_ANSWER_INTERACTIVE', 2, (e) => {
        m.send('C_REQUEST_USER_PAPERDOLL_INFO', 1, { name: e.name });
    });

}