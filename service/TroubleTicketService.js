'use strict';


/**
 * troubleTicketCreate
 * 
 *
 * troubleTicket TroubleTicket 
 * returns TroubleTicket
 **/
exports.troubleTicketCreate = function(troubleTicket) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "severity" : "severity",
  "statusChangeReason" : "statusChangeReason",
  "note" : [ {
    "date" : "2000-01-23",
    "author" : "author",
    "text" : "text"
  }, {
    "date" : "2000-01-23",
    "author" : "author",
    "text" : "text"
  } ],
  "relatedObject" : [ {
    "reference" : "reference",
    "involvement" : "involvement"
  }, {
    "reference" : "reference",
    "involvement" : "involvement"
  } ],
  "description" : "description",
  "type" : "type",
  "creationDate" : "2000-01-23",
  "relatedParty" : [ {
    "role" : "role",
    "href" : "href"
  }, {
    "role" : "role",
    "href" : "href"
  } ],
  "statusChangeDate" : "2000-01-23",
  "correlationId" : "correlationId",
  "id" : "id",
  "targetResolutionDate" : "2000-01-23",
  "status" : "Submitted"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * troubleTicketFind
 * 
 *
 * fields String  (optional)
 * returns List
 **/
exports.troubleTicketFind = function(fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "severity" : "severity",
  "statusChangeReason" : "statusChangeReason",
  "note" : [ {
    "date" : "2000-01-23",
    "author" : "author",
    "text" : "text"
  }, {
    "date" : "2000-01-23",
    "author" : "author",
    "text" : "text"
  } ],
  "relatedObject" : [ {
    "reference" : "reference",
    "involvement" : "involvement"
  }, {
    "reference" : "reference",
    "involvement" : "involvement"
  } ],
  "description" : "description",
  "type" : "type",
  "creationDate" : "2000-01-23",
  "relatedParty" : [ {
    "role" : "role",
    "href" : "href"
  }, {
    "role" : "role",
    "href" : "href"
  } ],
  "statusChangeDate" : "2000-01-23",
  "correlationId" : "correlationId",
  "id" : "id",
  "targetResolutionDate" : "2000-01-23",
  "status" : "Submitted"
}, {
  "severity" : "severity",
  "statusChangeReason" : "statusChangeReason",
  "note" : [ {
    "date" : "2000-01-23",
    "author" : "author",
    "text" : "text"
  }, {
    "date" : "2000-01-23",
    "author" : "author",
    "text" : "text"
  } ],
  "relatedObject" : [ {
    "reference" : "reference",
    "involvement" : "involvement"
  }, {
    "reference" : "reference",
    "involvement" : "involvement"
  } ],
  "description" : "description",
  "type" : "type",
  "creationDate" : "2000-01-23",
  "relatedParty" : [ {
    "role" : "role",
    "href" : "href"
  }, {
    "role" : "role",
    "href" : "href"
  } ],
  "statusChangeDate" : "2000-01-23",
  "correlationId" : "correlationId",
  "id" : "id",
  "targetResolutionDate" : "2000-01-23",
  "status" : "Submitted"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * troubleTicketGet
 * 
 *
 * troubleTicketId String 
 * fields String  (optional)
 * returns TroubleTicket
 **/
exports.troubleTicketGet = function(troubleTicketId,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "severity" : "severity",
  "statusChangeReason" : "statusChangeReason",
  "note" : [ {
    "date" : "2000-01-23",
    "author" : "author",
    "text" : "text"
  }, {
    "date" : "2000-01-23",
    "author" : "author",
    "text" : "text"
  } ],
  "relatedObject" : [ {
    "reference" : "reference",
    "involvement" : "involvement"
  }, {
    "reference" : "reference",
    "involvement" : "involvement"
  } ],
  "description" : "description",
  "type" : "type",
  "creationDate" : "2000-01-23",
  "relatedParty" : [ {
    "role" : "role",
    "href" : "href"
  }, {
    "role" : "role",
    "href" : "href"
  } ],
  "statusChangeDate" : "2000-01-23",
  "correlationId" : "correlationId",
  "id" : "id",
  "targetResolutionDate" : "2000-01-23",
  "status" : "Submitted"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * troubleTicketPatch
 * 
 *
 * troubleTicketId String 
 * troubleTicket TroubleTicket 
 * returns TroubleTicket
 **/
exports.troubleTicketPatch = function(troubleTicketId,troubleTicket) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "severity" : "severity",
  "statusChangeReason" : "statusChangeReason",
  "note" : [ {
    "date" : "2000-01-23",
    "author" : "author",
    "text" : "text"
  }, {
    "date" : "2000-01-23",
    "author" : "author",
    "text" : "text"
  } ],
  "relatedObject" : [ {
    "reference" : "reference",
    "involvement" : "involvement"
  }, {
    "reference" : "reference",
    "involvement" : "involvement"
  } ],
  "description" : "description",
  "type" : "type",
  "creationDate" : "2000-01-23",
  "relatedParty" : [ {
    "role" : "role",
    "href" : "href"
  }, {
    "role" : "role",
    "href" : "href"
  } ],
  "statusChangeDate" : "2000-01-23",
  "correlationId" : "correlationId",
  "id" : "id",
  "targetResolutionDate" : "2000-01-23",
  "status" : "Submitted"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * troubleTicketUpdate
 * 
 *
 * troubleTicketId String 
 * troubleTicket TroubleTicket 
 * returns TroubleTicket
 **/
exports.troubleTicketUpdate = function(troubleTicketId,troubleTicket) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "severity" : "severity",
  "statusChangeReason" : "statusChangeReason",
  "note" : [ {
    "date" : "2000-01-23",
    "author" : "author",
    "text" : "text"
  }, {
    "date" : "2000-01-23",
    "author" : "author",
    "text" : "text"
  } ],
  "relatedObject" : [ {
    "reference" : "reference",
    "involvement" : "involvement"
  }, {
    "reference" : "reference",
    "involvement" : "involvement"
  } ],
  "description" : "description",
  "type" : "type",
  "creationDate" : "2000-01-23",
  "relatedParty" : [ {
    "role" : "role",
    "href" : "href"
  }, {
    "role" : "role",
    "href" : "href"
  } ],
  "statusChangeDate" : "2000-01-23",
  "correlationId" : "correlationId",
  "id" : "id",
  "targetResolutionDate" : "2000-01-23",
  "status" : "Submitted"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

