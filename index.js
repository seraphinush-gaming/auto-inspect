'use strict';

class AutoInspect {

  constructor(mod) {

    // definition
    try {
      mod.dispatch.addDefinition('C_REQUEST_USER_PAPERDOLL_INFO', 4, [
        ['serverId', 'uint32'],
        ['zoom', 'bool'],
        ['name', 'string'],
      ], false);
    }
    catch {
      mod.error('Failed to add definition.');
    }

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