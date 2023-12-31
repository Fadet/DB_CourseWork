// source: proto/v1/category.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

/*eslint-disable*/
// @ts-nocheck
var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.category.v1.CategoryGetAllResponce', null, global);
goog.exportSymbol('proto.category.v1.CategoryGetRequest', null, global);
goog.exportSymbol('proto.category.v1.CategoryGetRequest.FilterCase', null, global);
goog.exportSymbol('proto.category.v1.CategoryGetResponce', null, global);
goog.exportSymbol('proto.category.v1.CategoryGetResponce.Category', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.category.v1.CategoryGetAllResponce = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.category.v1.CategoryGetAllResponce.repeatedFields_, null);
};
goog.inherits(proto.category.v1.CategoryGetAllResponce, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.category.v1.CategoryGetAllResponce.displayName = 'proto.category.v1.CategoryGetAllResponce';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.category.v1.CategoryGetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.category.v1.CategoryGetRequest.oneofGroups_);
};
goog.inherits(proto.category.v1.CategoryGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.category.v1.CategoryGetRequest.displayName = 'proto.category.v1.CategoryGetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.category.v1.CategoryGetResponce = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.category.v1.CategoryGetResponce, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.category.v1.CategoryGetResponce.displayName = 'proto.category.v1.CategoryGetResponce';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.category.v1.CategoryGetResponce.Category = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.category.v1.CategoryGetResponce.Category.repeatedFields_, null);
};
goog.inherits(proto.category.v1.CategoryGetResponce.Category, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.category.v1.CategoryGetResponce.Category.displayName = 'proto.category.v1.CategoryGetResponce.Category';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.category.v1.CategoryGetAllResponce.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.category.v1.CategoryGetAllResponce.prototype.toObject = function(opt_includeInstance) {
  return proto.category.v1.CategoryGetAllResponce.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.category.v1.CategoryGetAllResponce} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.category.v1.CategoryGetAllResponce.toObject = function(includeInstance, msg) {
  var f, obj = {
    categoriesList: jspb.Message.toObjectList(msg.getCategoriesList(),
    proto.category.v1.CategoryGetResponce.Category.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.category.v1.CategoryGetAllResponce}
 */
proto.category.v1.CategoryGetAllResponce.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.category.v1.CategoryGetAllResponce;
  return proto.category.v1.CategoryGetAllResponce.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.category.v1.CategoryGetAllResponce} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.category.v1.CategoryGetAllResponce}
 */
proto.category.v1.CategoryGetAllResponce.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new proto.category.v1.CategoryGetResponce.Category;
      reader.readMessage(value,proto.category.v1.CategoryGetResponce.Category.deserializeBinaryFromReader);
      msg.addCategories(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.category.v1.CategoryGetAllResponce.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.category.v1.CategoryGetAllResponce.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.category.v1.CategoryGetAllResponce} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.category.v1.CategoryGetAllResponce.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.category.v1.CategoryGetResponce.Category.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CategoryGetResponce.Category categories = 4;
 * @return {!Array<!proto.category.v1.CategoryGetResponce.Category>}
 */
proto.category.v1.CategoryGetAllResponce.prototype.getCategoriesList = function() {
  return /** @type{!Array<!proto.category.v1.CategoryGetResponce.Category>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.category.v1.CategoryGetResponce.Category, 4));
};


/**
 * @param {!Array<!proto.category.v1.CategoryGetResponce.Category>} value
 * @return {!proto.category.v1.CategoryGetAllResponce} returns this
*/
proto.category.v1.CategoryGetAllResponce.prototype.setCategoriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.category.v1.CategoryGetResponce.Category=} opt_value
 * @param {number=} opt_index
 * @return {!proto.category.v1.CategoryGetResponce.Category}
 */
proto.category.v1.CategoryGetAllResponce.prototype.addCategories = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.category.v1.CategoryGetResponce.Category, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.category.v1.CategoryGetAllResponce} returns this
 */
proto.category.v1.CategoryGetAllResponce.prototype.clearCategoriesList = function() {
  return this.setCategoriesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.category.v1.CategoryGetRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.category.v1.CategoryGetRequest.FilterCase = {
  FILTER_NOT_SET: 0,
  ID: 1,
  NAMEEN: 2
};

/**
 * @return {proto.category.v1.CategoryGetRequest.FilterCase}
 */
proto.category.v1.CategoryGetRequest.prototype.getFilterCase = function() {
  return /** @type {proto.category.v1.CategoryGetRequest.FilterCase} */(jspb.Message.computeOneofCase(this, proto.category.v1.CategoryGetRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.category.v1.CategoryGetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.category.v1.CategoryGetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.category.v1.CategoryGetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.category.v1.CategoryGetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nameen: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.category.v1.CategoryGetRequest}
 */
proto.category.v1.CategoryGetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.category.v1.CategoryGetRequest;
  return proto.category.v1.CategoryGetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.category.v1.CategoryGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.category.v1.CategoryGetRequest}
 */
proto.category.v1.CategoryGetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNameen(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.category.v1.CategoryGetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.category.v1.CategoryGetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.category.v1.CategoryGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.category.v1.CategoryGetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.category.v1.CategoryGetRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.category.v1.CategoryGetRequest} returns this
 */
proto.category.v1.CategoryGetRequest.prototype.setId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.category.v1.CategoryGetRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.category.v1.CategoryGetRequest} returns this
 */
proto.category.v1.CategoryGetRequest.prototype.clearId = function() {
  return jspb.Message.setOneofField(this, 1, proto.category.v1.CategoryGetRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.category.v1.CategoryGetRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string nameEn = 2;
 * @return {string}
 */
proto.category.v1.CategoryGetRequest.prototype.getNameen = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.category.v1.CategoryGetRequest} returns this
 */
proto.category.v1.CategoryGetRequest.prototype.setNameen = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.category.v1.CategoryGetRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.category.v1.CategoryGetRequest} returns this
 */
proto.category.v1.CategoryGetRequest.prototype.clearNameen = function() {
  return jspb.Message.setOneofField(this, 2, proto.category.v1.CategoryGetRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.category.v1.CategoryGetRequest.prototype.hasNameen = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.category.v1.CategoryGetResponce.prototype.toObject = function(opt_includeInstance) {
  return proto.category.v1.CategoryGetResponce.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.category.v1.CategoryGetResponce} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.category.v1.CategoryGetResponce.toObject = function(includeInstance, msg) {
  var f, obj = {
    category: (f = msg.getCategory()) && proto.category.v1.CategoryGetResponce.Category.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.category.v1.CategoryGetResponce}
 */
proto.category.v1.CategoryGetResponce.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.category.v1.CategoryGetResponce;
  return proto.category.v1.CategoryGetResponce.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.category.v1.CategoryGetResponce} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.category.v1.CategoryGetResponce}
 */
proto.category.v1.CategoryGetResponce.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.category.v1.CategoryGetResponce.Category;
      reader.readMessage(value,proto.category.v1.CategoryGetResponce.Category.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.category.v1.CategoryGetResponce.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.category.v1.CategoryGetResponce.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.category.v1.CategoryGetResponce} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.category.v1.CategoryGetResponce.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.category.v1.CategoryGetResponce.Category.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.category.v1.CategoryGetResponce.Category.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.category.v1.CategoryGetResponce.Category.prototype.toObject = function(opt_includeInstance) {
  return proto.category.v1.CategoryGetResponce.Category.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.category.v1.CategoryGetResponce.Category} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.category.v1.CategoryGetResponce.Category.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nameru: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nameen: jspb.Message.getFieldWithDefault(msg, 3, ""),
    subcategoriesList: jspb.Message.toObjectList(msg.getSubcategoriesList(),
    proto.category.v1.CategoryGetResponce.Category.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.category.v1.CategoryGetResponce.Category}
 */
proto.category.v1.CategoryGetResponce.Category.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.category.v1.CategoryGetResponce.Category;
  return proto.category.v1.CategoryGetResponce.Category.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.category.v1.CategoryGetResponce.Category} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.category.v1.CategoryGetResponce.Category}
 */
proto.category.v1.CategoryGetResponce.Category.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNameru(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNameen(value);
      break;
    case 4:
      var value = new proto.category.v1.CategoryGetResponce.Category;
      reader.readMessage(value,proto.category.v1.CategoryGetResponce.Category.deserializeBinaryFromReader);
      msg.addSubcategories(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.category.v1.CategoryGetResponce.Category.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.category.v1.CategoryGetResponce.Category.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.category.v1.CategoryGetResponce.Category} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.category.v1.CategoryGetResponce.Category.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getNameru();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNameen();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSubcategoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.category.v1.CategoryGetResponce.Category.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.category.v1.CategoryGetResponce.Category.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.category.v1.CategoryGetResponce.Category} returns this
 */
proto.category.v1.CategoryGetResponce.Category.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string nameRu = 2;
 * @return {string}
 */
proto.category.v1.CategoryGetResponce.Category.prototype.getNameru = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.category.v1.CategoryGetResponce.Category} returns this
 */
proto.category.v1.CategoryGetResponce.Category.prototype.setNameru = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string nameEn = 3;
 * @return {string}
 */
proto.category.v1.CategoryGetResponce.Category.prototype.getNameen = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.category.v1.CategoryGetResponce.Category} returns this
 */
proto.category.v1.CategoryGetResponce.Category.prototype.setNameen = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Category subcategories = 4;
 * @return {!Array<!proto.category.v1.CategoryGetResponce.Category>}
 */
proto.category.v1.CategoryGetResponce.Category.prototype.getSubcategoriesList = function() {
  return /** @type{!Array<!proto.category.v1.CategoryGetResponce.Category>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.category.v1.CategoryGetResponce.Category, 4));
};


/**
 * @param {!Array<!proto.category.v1.CategoryGetResponce.Category>} value
 * @return {!proto.category.v1.CategoryGetResponce.Category} returns this
*/
proto.category.v1.CategoryGetResponce.Category.prototype.setSubcategoriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.category.v1.CategoryGetResponce.Category=} opt_value
 * @param {number=} opt_index
 * @return {!proto.category.v1.CategoryGetResponce.Category}
 */
proto.category.v1.CategoryGetResponce.Category.prototype.addSubcategories = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.category.v1.CategoryGetResponce.Category, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.category.v1.CategoryGetResponce.Category} returns this
 */
proto.category.v1.CategoryGetResponce.Category.prototype.clearSubcategoriesList = function() {
  return this.setSubcategoriesList([]);
};


/**
 * optional Category category = 1;
 * @return {?proto.category.v1.CategoryGetResponce.Category}
 */
proto.category.v1.CategoryGetResponce.prototype.getCategory = function() {
  return /** @type{?proto.category.v1.CategoryGetResponce.Category} */ (
    jspb.Message.getWrapperField(this, proto.category.v1.CategoryGetResponce.Category, 1));
};


/**
 * @param {?proto.category.v1.CategoryGetResponce.Category|undefined} value
 * @return {!proto.category.v1.CategoryGetResponce} returns this
*/
proto.category.v1.CategoryGetResponce.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.category.v1.CategoryGetResponce} returns this
 */
proto.category.v1.CategoryGetResponce.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.category.v1.CategoryGetResponce.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.category.v1);
