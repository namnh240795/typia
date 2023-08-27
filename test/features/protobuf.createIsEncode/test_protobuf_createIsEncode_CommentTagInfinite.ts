import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_protobuf_isEncode_CommentTagInfinite =
    _test_protobuf_isEncode("CommentTagInfinite")<CommentTagInfinite>(
        CommentTagInfinite,
    )({
        isEncode: typia.protobuf.createIsEncode<CommentTagInfinite>(),
        message: typia.protobuf.message<CommentTagInfinite>(),
        decode: typia.protobuf.createDecode<CommentTagInfinite>(),
    });
