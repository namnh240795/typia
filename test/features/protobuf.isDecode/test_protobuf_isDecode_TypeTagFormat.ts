import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_isDecode_TypeTagFormat = _test_protobuf_isDecode(
    "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)({
    isDecode: (input) => typia.protobuf.isDecode<TypeTagFormat>(input),
    encode: typia.protobuf.createEncode<TypeTagFormat>(),
});
