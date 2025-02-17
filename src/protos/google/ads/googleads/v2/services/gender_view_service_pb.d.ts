// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/gender_view_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_gender_view_pb from "../../../../../google/ads/googleads/v2/resources/gender_view_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetGenderViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGenderViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGenderViewRequest): GetGenderViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGenderViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGenderViewRequest;
  static deserializeBinaryFromReader(message: GetGenderViewRequest, reader: jspb.BinaryReader): GetGenderViewRequest;
}

export namespace GetGenderViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

