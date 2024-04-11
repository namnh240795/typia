import typia from "typia";

import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_json_createValidateStringify_TemplateAtomic =
  _test_json_validateStringify("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )((input: TemplateAtomic): typia.IValidation<string> => {
    const validate = (input: any): typia.IValidation<TemplateAtomic> => {
      const errors = [] as any[];
      const __is = (input: any): input is TemplateAtomic => {
        const $io0 = (input: any): boolean =>
          "string" === typeof input.prefix &&
          RegExp(/^prefix_(.*)/).test(input.prefix) &&
          "string" === typeof input.postfix &&
          RegExp(/(.*)_postfix$/).test(input.postfix) &&
          "string" === typeof input.middle_string &&
          RegExp(/^the_(.*)_value$/).test(input.middle_string) &&
          "string" === typeof input.middle_string_empty &&
          RegExp(/^the_(.*)_value$/).test(input.middle_string_empty) &&
          "string" === typeof input.middle_numeric &&
          RegExp(/^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/).test(
            input.middle_numeric,
          ) &&
          ("the_false_value" === input.middle_boolean ||
            "the_true_value" === input.middle_boolean) &&
          "string" === typeof input.ipv4 &&
          RegExp(
            /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
          ).test(input.ipv4) &&
          "string" === typeof input.email &&
          RegExp(/(.*)@(.*)\.(.*)/).test(input.email);
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input)) {
        const $report = (typia.json.createValidateStringify as any).report(
          errors,
        );
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is TemplateAtomic => {
          const $vo0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            [
              ("string" === typeof input.prefix &&
                RegExp(/^prefix_(.*)/).test(input.prefix)) ||
                $report(_exceptionable, {
                  path: _path + ".prefix",
                  expected: "`[object Object]${string}`",
                  value: input.prefix,
                }),
              ("string" === typeof input.postfix &&
                RegExp(/(.*)_postfix$/).test(input.postfix)) ||
                $report(_exceptionable, {
                  path: _path + ".postfix",
                  expected: "`${string}[object Object]`",
                  value: input.postfix,
                }),
              ("string" === typeof input.middle_string &&
                RegExp(/^the_(.*)_value$/).test(input.middle_string)) ||
                $report(_exceptionable, {
                  path: _path + ".middle_string",
                  expected: "`[object Object]${string}[object Object]`",
                  value: input.middle_string,
                }),
              ("string" === typeof input.middle_string_empty &&
                RegExp(/^the_(.*)_value$/).test(input.middle_string_empty)) ||
                $report(_exceptionable, {
                  path: _path + ".middle_string_empty",
                  expected: "`[object Object]${string}[object Object]`",
                  value: input.middle_string_empty,
                }),
              ("string" === typeof input.middle_numeric &&
                RegExp(/^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/).test(
                  input.middle_numeric,
                )) ||
                $report(_exceptionable, {
                  path: _path + ".middle_numeric",
                  expected: "`[object Object]${number}[object Object]`",
                  value: input.middle_numeric,
                }),
              "the_false_value" === input.middle_boolean ||
                "the_true_value" === input.middle_boolean ||
                $report(_exceptionable, {
                  path: _path + ".middle_boolean",
                  expected: '("the_false_value" | "the_true_value")',
                  value: input.middle_boolean,
                }),
              ("string" === typeof input.ipv4 &&
                RegExp(
                  /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                ).test(input.ipv4)) ||
                $report(_exceptionable, {
                  path: _path + ".ipv4",
                  expected:
                    "`${number}[object Object]${number}[object Object]${number}[object Object]${number}`",
                  value: input.ipv4,
                }),
              ("string" === typeof input.email &&
                RegExp(/(.*)@(.*)\.(.*)/).test(input.email)) ||
                $report(_exceptionable, {
                  path: _path + ".email",
                  expected:
                    "`${string}[object Object]${string}[object Object]${string}`",
                  value: input.email,
                }),
            ].every((flag: boolean) => flag);
          return (
            ((("object" === typeof input && null !== input) ||
              $report(true, {
                path: _path + "",
                expected: "TemplateAtomic",
                value: input,
              })) &&
              $vo0(input, _path + "", true)) ||
            $report(true, {
              path: _path + "",
              expected: "TemplateAtomic",
              value: input,
            })
          );
        })(input, "$input", true);
      }
      const success = 0 === errors.length;
      return {
        success,
        errors,
        data: success ? input : undefined,
      } as any;
    };
    const stringify = (input: TemplateAtomic): string => {
      const $string = (typia.json.createValidateStringify as any).string;
      const $throws = (typia.json.createValidateStringify as any).throws;
      const $so0 = (input: any): any =>
        `{"prefix":${$string(input.prefix)},"postfix":${$string(input.postfix)},"middle_string":${$string(input.middle_string)},"middle_string_empty":${$string(input.middle_string_empty)},"middle_numeric":${$string(input.middle_numeric)},"middle_boolean":${(() => {
          if ("string" === typeof input.middle_boolean)
            return $string(input.middle_boolean);
          if ("string" === typeof input.middle_boolean)
            return '"' + input.middle_boolean + '"';
          $throws({
            expected: '("the_false_value" | "the_true_value")',
            value: input.middle_boolean,
          });
        })()},"ipv4":${$string(input.ipv4)},"email":${$string(input.email)}}`;
      return $so0(input);
    };
    const output = validate(input) as any;
    if (output.success) output.data = stringify(input);
    return output;
  });
