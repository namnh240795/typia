import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_assertEncode_TypeTagPattern =
    _test_protobuf_assertEncode("TypeTagPattern")<TypeTagPattern>(
        TypeTagPattern,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<TypeTagPattern>(input),
        message: typia.protobuf.message<TypeTagPattern>(),
        decode: typia.protobuf.createDecode<TypeTagPattern>(),
    });
