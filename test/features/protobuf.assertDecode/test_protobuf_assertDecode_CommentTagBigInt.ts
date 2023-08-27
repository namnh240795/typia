import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_protobuf_assertDecode_CommentTagBigInt =
    _test_protobuf_assertDecode("CommentTagBigInt")<CommentTagBigInt>(
        CommentTagBigInt,
    )({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<CommentTagBigInt>(input),
        encode: typia.protobuf.createEncode<CommentTagBigInt>(),
    });
