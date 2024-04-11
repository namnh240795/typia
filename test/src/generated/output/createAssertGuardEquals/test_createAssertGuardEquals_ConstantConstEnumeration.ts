import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_createAssertGuardEquals_ConstantConstEnumeration =
  _test_assertGuardEquals(TypeGuardError)(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)(
    (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): asserts input is ConstantConstEnumeration => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is ConstantConstEnumeration => {
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any, _index1: number) =>
              0 === elem ||
              1 === elem ||
              2 === elem ||
              "Three" === elem ||
              "Four" === elem,
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ConstantConstEnumeration => {
          const $guard = (typia.createAssertGuardEquals as any).guard;
          return (
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ConstantConstEnumeration",
                  value: input,
                },
                errorFactory,
              )) &&
              input.every(
                (elem: any, _index1: number) =>
                  0 === elem ||
                  1 === elem ||
                  2 === elem ||
                  "Three" === elem ||
                  "Four" === elem ||
                  $guard(
                    true,
                    {
                      path: _path + "[" + _index1 + "]",
                      expected: '("Four" | "Three" | 0 | 1 | 2)',
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ConstantConstEnumeration",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
    },
  );
