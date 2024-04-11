import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_createAssertEqualsCustom_TemplateUnion = _test_assertEquals(
  CustomGuardError,
)("TemplateUnion")<TemplateUnion>(TemplateUnion)(
  (
    input: any,
    errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
      new CustomGuardError(p),
  ): TemplateUnion => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is TemplateUnion => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any, _index1: number) =>
            "object" === typeof elem &&
            null !== elem &&
            $io1(elem, true && _exceptionable),
        ) &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
        "string" === typeof input.prefix &&
        (RegExp(/^prefix_(.*)/).test(input.prefix) ||
          RegExp(/^prefix_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(
            input.prefix,
          )) &&
        "string" === typeof input.postfix &&
        (RegExp(/(.*)_postfix$/).test(input.postfix) ||
          RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_postfix$/).test(
            input.postfix,
          )) &&
        null !== input.middle &&
        undefined !== input.middle &&
        ("the_false_value" === input.middle ||
          "the_true_value" === input.middle ||
          ("string" === typeof input.middle &&
            RegExp(/^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/).test(
              input.middle,
            ))) &&
        null !== input.mixed &&
        undefined !== input.mixed &&
        ("the_A_value" === input.mixed ||
          "the_B_value" === input.mixed ||
          ("number" === typeof input.mixed && Number.isFinite(input.mixed)) ||
          "boolean" === typeof input.mixed ||
          ("string" === typeof input.mixed &&
            RegExp(/^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/).test(
              input.mixed,
            )) ||
          ("object" === typeof input.mixed &&
            null !== input.mixed &&
            $io2(input.mixed, true && _exceptionable))) &&
        (4 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (
              ["prefix", "postfix", "middle", "mixed"].some(
                (prop: any) => key === prop,
              )
            )
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
        "string" === typeof input.name &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["name"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TemplateUnion => {
        const $guard = (typia.createAssertEquals as any).guard;
        const $join = (typia.createAssertEquals as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.value) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected: "Array<TemplateUnion.Type>",
                value: input.value,
              },
              errorFactory,
            )) &&
            input.value.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value[" + _index1 + "]",
                      expected: "TemplateUnion.Type",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $ao1(
                    elem,
                    _path + ".value[" + _index1 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value[" + _index1 + "]",
                    expected: "TemplateUnion.Type",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected: "Array<TemplateUnion.Type>",
                value: input.value,
              },
              errorFactory,
            )) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(
                _exceptionable,
                {
                  path: _path + $join(key),
                  expected: "undefined",
                  value: value,
                },
                errorFactory,
              );
            }));
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("string" === typeof input.prefix &&
            (RegExp(/^prefix_(.*)/).test(input.prefix) ||
              RegExp(/^prefix_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(
                input.prefix,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".prefix",
                expected:
                  "(`[object Object]${number}` | `[object Object]${string}`)",
                value: input.prefix,
              },
              errorFactory,
            )) &&
          (("string" === typeof input.postfix &&
            (RegExp(/(.*)_postfix$/).test(input.postfix) ||
              RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_postfix$/).test(
                input.postfix,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".postfix",
                expected:
                  "(`${number}[object Object]` | `${string}[object Object]`)",
                value: input.postfix,
              },
              errorFactory,
            )) &&
          (null !== input.middle ||
            $guard(
              _exceptionable,
              {
                path: _path + ".middle",
                expected:
                  '("the_false_value" | "the_true_value" | `[object Object]${number}[object Object]`)',
                value: input.middle,
              },
              errorFactory,
            )) &&
          (undefined !== input.middle ||
            $guard(
              _exceptionable,
              {
                path: _path + ".middle",
                expected:
                  '("the_false_value" | "the_true_value" | `[object Object]${number}[object Object]`)',
                value: input.middle,
              },
              errorFactory,
            )) &&
          ("the_false_value" === input.middle ||
            "the_true_value" === input.middle ||
            ("string" === typeof input.middle &&
              RegExp(/^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/).test(
                input.middle,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".middle",
                expected:
                  '("the_false_value" | "the_true_value" | `[object Object]${number}[object Object]`)',
                value: input.middle,
              },
              errorFactory,
            )) &&
          (null !== input.mixed ||
            $guard(
              _exceptionable,
              {
                path: _path + ".mixed",
                expected:
                  '("the_A_value" | "the_B_value" | __type | `[object Object]${number}[object Object]` | boolean | number)',
                value: input.mixed,
              },
              errorFactory,
            )) &&
          (undefined !== input.mixed ||
            $guard(
              _exceptionable,
              {
                path: _path + ".mixed",
                expected:
                  '("the_A_value" | "the_B_value" | __type | `[object Object]${number}[object Object]` | boolean | number)',
                value: input.mixed,
              },
              errorFactory,
            )) &&
          ("the_A_value" === input.mixed ||
            "the_B_value" === input.mixed ||
            ("number" === typeof input.mixed && Number.isFinite(input.mixed)) ||
            "boolean" === typeof input.mixed ||
            ("string" === typeof input.mixed &&
              RegExp(/^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/).test(
                input.mixed,
              )) ||
            ((("object" === typeof input.mixed && null !== input.mixed) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".mixed",
                  expected:
                    '("the_A_value" | "the_B_value" | __type | `[object Object]${number}[object Object]` | boolean | number)',
                  value: input.mixed,
                },
                errorFactory,
              )) &&
              $ao2(input.mixed, _path + ".mixed", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".mixed",
                expected:
                  '("the_A_value" | "the_B_value" | __type | `[object Object]${number}[object Object]` | boolean | number)',
                value: input.mixed,
              },
              errorFactory,
            )) &&
          (4 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (
                ["prefix", "postfix", "middle", "mixed"].some(
                  (prop: any) => key === prop,
                )
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(
                _exceptionable,
                {
                  path: _path + $join(key),
                  expected: "undefined",
                  value: value,
                },
                errorFactory,
              );
            }));
        const $ao2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.name ||
            $guard(
              _exceptionable,
              {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              },
              errorFactory,
            )) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["name"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(
                _exceptionable,
                {
                  path: _path + $join(key),
                  expected: "undefined",
                  value: value,
                },
                errorFactory,
              );
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "TemplateUnion",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "TemplateUnion",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
);
