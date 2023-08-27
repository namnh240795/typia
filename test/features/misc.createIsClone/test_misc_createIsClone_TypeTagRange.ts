import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_misc_isClone_TypeTagRange = _test_misc_isClone(
    "TypeTagRange",
)<TypeTagRange>(TypeTagRange)(typia.misc.createIsClone<TypeTagRange>());
