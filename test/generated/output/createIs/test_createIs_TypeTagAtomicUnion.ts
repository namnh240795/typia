import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_is_TypeTagAtomicUnion = _test_is(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(TypeTagAtomicUnion)(
    (input: any): input is TypeTagAtomicUnion => {
        const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io1(elem),
            );
        const $io1 = (input: any): boolean =>
            ("number" === typeof input.value &&
                Number.isFinite(input.value) &&
                3 <= input.value) ||
            ("string" === typeof input.value &&
                3 <= input.value.length &&
                input.value.length <= 7);
        return "object" === typeof input && null !== input && $io0(input);
    },
);
