import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_createRandom_ObjectHttpConstant = _test_random(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (ObjectHttpConstant as any)
      .RANDOM,
  ): import("typia").Resolved<ObjectHttpConstant> => {
    const $pick = (typia.createRandom as any).pick;
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      boolean: false,
      bigint: $pick([() => BigInt(1), () => BigInt(99)])(),
      number: $pick([() => 2, () => 98])(),
      string: $pick([() => "something", () => "three", () => "ninety-seven"])(),
      template: `abcd_${(generator?.customs ?? $generator.customs)?.string?.([]) ?? (generator?.string ?? $generator.string)()}`,
    });
    return $ro0();
  },
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ObjectHttpConstant => {
    const __is = (input: any): input is ObjectHttpConstant => {
      const $io0 = (input: any): boolean =>
        false === input.boolean &&
        (BigInt(1) === input.bigint || BigInt(99) === input.bigint) &&
        (2 === input.number || 98 === input.number) &&
        ("something" === input.string ||
          "three" === input.string ||
          "ninety-seven" === input.string) &&
        "string" === typeof input.template &&
        RegExp(/^abcd_(.*)/).test(input.template);
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectHttpConstant => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (false === input.boolean ||
            $guard(
              _exceptionable,
              {
                path: _path + ".boolean",
                expected: "false",
                value: input.boolean,
              },
              errorFactory,
            )) &&
          (BigInt(1) === input.bigint ||
            BigInt(99) === input.bigint ||
            $guard(
              _exceptionable,
              {
                path: _path + ".bigint",
                expected: "(1 | 99)",
                value: input.bigint,
              },
              errorFactory,
            )) &&
          (2 === input.number ||
            98 === input.number ||
            $guard(
              _exceptionable,
              {
                path: _path + ".number",
                expected: "(2 | 98)",
                value: input.number,
              },
              errorFactory,
            )) &&
          ("something" === input.string ||
            "three" === input.string ||
            "ninety-seven" === input.string ||
            $guard(
              _exceptionable,
              {
                path: _path + ".string",
                expected: '("ninety-seven" | "something" | "three")',
                value: input.string,
              },
              errorFactory,
            )) &&
          (("string" === typeof input.template &&
            RegExp(/^abcd_(.*)/).test(input.template)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".template",
                expected: "`[object Object]${string}`",
                value: input.template,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectHttpConstant",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ObjectHttpConstant",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
