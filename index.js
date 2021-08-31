'use strict';

class AutoInspect {

  constructor(mod) {

    // code
    mod.hook('S_ANSWER_INTERACTIVE', mod.majorPatchVersion >= 103 ? 3 : 2, (e) => {
      mod.send('C_REQUEST_USER_PAPERDOLL_INFO', mod.majorPatchVersion >= 108 ? 4 : 3, {
        serverId: e.serverId,
        zoom: false,
        name: e.name
      });
    });

  }

  destructor() { }

}

module.exports = { NetworkMod: AutoInspect };