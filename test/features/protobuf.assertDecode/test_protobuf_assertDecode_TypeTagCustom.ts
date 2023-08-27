import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_protobuf_assertDecode_TypeTagCustom =
    _test_protobuf_assertDecode("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<TypeTagCustom>(input),
        encode: typia.protobuf.createEncode<TypeTagCustom>(),
    });
