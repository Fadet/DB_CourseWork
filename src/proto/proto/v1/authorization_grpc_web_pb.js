/**
 * @fileoverview gRPC-Web generated client stub for authorization.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.11.4
// source: proto/v1/authorization.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.authorization = {};
proto.authorization.v1 = require('./authorization_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.authorization.v1.AuthorizationClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.authorization.v1.AuthorizationPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.authorization.v1.RegisterRequest,
 *   !proto.authorization.v1.RegisterResponce>}
 */
const methodDescriptor_Authorization_Register = new grpc.web.MethodDescriptor(
  '/authorization.v1.Authorization/Register',
  grpc.web.MethodType.UNARY,
  proto.authorization.v1.RegisterRequest,
  proto.authorization.v1.RegisterResponce,
  /**
   * @param {!proto.authorization.v1.RegisterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.authorization.v1.RegisterResponce.deserializeBinary
);


/**
 * @param {!proto.authorization.v1.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.authorization.v1.RegisterResponce)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.authorization.v1.RegisterResponce>|undefined}
 *     The XHR Node Readable Stream
 */
proto.authorization.v1.AuthorizationClient.prototype.register =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/authorization.v1.Authorization/Register',
      request,
      metadata || {},
      methodDescriptor_Authorization_Register,
      callback);
};


/**
 * @param {!proto.authorization.v1.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.authorization.v1.RegisterResponce>}
 *     Promise that resolves to the response
 */
proto.authorization.v1.AuthorizationPromiseClient.prototype.register =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/authorization.v1.Authorization/Register',
      request,
      metadata || {},
      methodDescriptor_Authorization_Register);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.authorization.v1.LoginRequest,
 *   !proto.authorization.v1.LoginResponce>}
 */
const methodDescriptor_Authorization_Login = new grpc.web.MethodDescriptor(
  '/authorization.v1.Authorization/Login',
  grpc.web.MethodType.UNARY,
  proto.authorization.v1.LoginRequest,
  proto.authorization.v1.LoginResponce,
  /**
   * @param {!proto.authorization.v1.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.authorization.v1.LoginResponce.deserializeBinary
);


/**
 * @param {!proto.authorization.v1.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.authorization.v1.LoginResponce)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.authorization.v1.LoginResponce>|undefined}
 *     The XHR Node Readable Stream
 */
proto.authorization.v1.AuthorizationClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/authorization.v1.Authorization/Login',
      request,
      metadata || {},
      methodDescriptor_Authorization_Login,
      callback);
};


/**
 * @param {!proto.authorization.v1.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.authorization.v1.LoginResponce>}
 *     Promise that resolves to the response
 */
proto.authorization.v1.AuthorizationPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/authorization.v1.Authorization/Login',
      request,
      metadata || {},
      methodDescriptor_Authorization_Login);
};


module.exports = proto.authorization.v1;

