'use strict';

class auto_inspect {

  constructor(mod) {

    // code
    mod.hook('S_ANSWER_INTERACTIVE', 2, (e) => {
      mod.send('C_REQUEST_USER_PAPERDOLL_INFO', 1, { name: e.name });
    });

  }

}

module.exports = auto_inspect;