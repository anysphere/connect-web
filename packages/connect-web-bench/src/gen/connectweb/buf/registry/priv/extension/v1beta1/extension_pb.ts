// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.10.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file buf/registry/priv/extension/v1beta1/extension.proto (package buf.registry.priv.extension.v1beta1, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, MessageOptions, proto3 } from "@bufbuild/protobuf";

/**
 * Constraints on a message.
 *
 * @generated from message buf.registry.priv.extension.v1beta1.MessageConstraints
 */
export class MessageConstraints extends Message<MessageConstraints> {
  /**
   * The given message should only be recursively used as part of RPC requests and should
   * never be part of an RPC response.
   *
   * This is not just for request/response messages, this is also for any message that
   * is part of a request. It says that the message cannot form part of a response.
   *
   * This applies to all nested messages within the message that are marked as request_only.
   *
   * Exclusive with response_only.
   *
   * TODO: Also have a marker for specific request/response messages?
   * TODO: enum?
   *
   * @generated from field: bool request_only = 1;
   */
  requestOnly = false;

  /**
   * The given message should only be recursively used as part of RPC responses and should
   * never be part of an RPC request.
   *
   * This is not just for request/response messages, this is also for any message that
   * is part of a response. It says that the message cannot form part of a request.
   *
   * This applies to all nested messages within the message that are marked as response_only.
   *
   * Exclusive with request_only.
   *
   * TODO: Also have a marker for specific request/response messages?
   * TODO: enum?
   *
   * @generated from field: bool response_only = 2;
   */
  responseOnly = false;

  /**
   * The given message should only be recursively used as part of RPCs that are marked
   * as NO_SIDE_EFFECTS. Typically used to denote that a message should
   * only be used in read-only contexts.
   *
   * This applies to all nested messages within the message that are marked as no_side_effects_only.
   *
   * This is not just for request/response messages, this is also for any message that
   * is part of an RPC.
   *
   * @generated from field: bool no_side_effects_only = 3;
   */
  noSideEffectsOnly = false;

  constructor(data?: PartialMessage<MessageConstraints>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.registry.priv.extension.v1beta1.MessageConstraints";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "request_only", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "response_only", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "no_side_effects_only", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MessageConstraints {
    return new MessageConstraints().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MessageConstraints {
    return new MessageConstraints().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MessageConstraints {
    return new MessageConstraints().fromJsonString(jsonString, options);
  }

  static equals(a: MessageConstraints | PlainMessage<MessageConstraints> | undefined, b: MessageConstraints | PlainMessage<MessageConstraints> | undefined): boolean {
    return proto3.util.equals(MessageConstraints, a, b);
  }
}

/**
 * Constraints on a message.
 *
 * Prototyping for now - we will want to change this to a number in Buf's reserved range if
 * this goes further.
 *
 * @generated from extension: buf.registry.priv.extension.v1beta1.MessageConstraints message = 89181;
 */
export const message = proto3.makeExtension<MessageOptions, MessageConstraints>(
  "buf.registry.priv.extension.v1beta1.message", 
  MessageOptions, 
  () => ({ no: 89181, kind: "message", T: MessageConstraints }),
);
