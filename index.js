'use strict';

class auto_inspect {

  constructor(mod) {

    // code
    mod.hook('S_ANSWER_INTERACTIVE', mod.majorPatchVersion >= 103 ? 3 : 2, (e) => {
      mod.send('C_REQUEST_USER_PAPERDOLL_INFO', 3, { name: e.name });
    });

  }

  destructor() {}

}

module.exports = { NetworkMod: auto_inspect };