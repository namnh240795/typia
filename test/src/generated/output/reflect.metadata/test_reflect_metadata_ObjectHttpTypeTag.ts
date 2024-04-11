import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";

export const test_reflect_metadata_ObjectHttpTypeTag = _test_reflect_metadata(
  "ObjectHttpTypeTag",
)({
  metadatas: [
    {
      any: false,
      required: true,
      optional: false,
      nullable: false,
      functional: false,
      atomics: [],
      constants: [],
      templates: [],
      escaped: null,
      rest: null,
      arrays: [],
      tuples: [],
      objects: ["ObjectHttpTypeTag"],
      aliases: [],
      natives: [],
      sets: [],
      maps: [],
    },
  ],
  components: {
    objects: [
      {
        name: "ObjectHttpTypeTag",
        properties: [
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: [
                    {
                      value: "int32",
                    },
                  ],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "number",
                  tags: [
                    [
                      {
                        target: "number",
                        name: 'Type<"int32">',
                        kind: "type",
                        value: "int32",
                        validate:
                          "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                        exclusive: true,
                        schema: {
                          type: "integer",
                        },
                      },
                    ],
                  ],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: null,
            jsDocTags: [],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: [
                    {
                      value: "uint64",
                    },
                  ],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "bigint",
                  tags: [
                    [
                      {
                        target: "bigint",
                        name: 'Type<"uint64">',
                        kind: "type",
                        value: "uint64",
                        validate: "BigInt(0) <= $input",
                        exclusive: true,
                      },
                    ],
                  ],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: null,
            jsDocTags: [],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: [
                    {
                      value: "uuid",
                    },
                  ],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "string",
                  tags: [
                    [
                      {
                        target: "string",
                        name: 'Format<"uuid">',
                        kind: "format",
                        value: "uuid",
                        validate:
                          "/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test($input)",
                        exclusive: ["format", "pattern"],
                        schema: {
                          format: "uuid",
                        },
                      },
                    ],
                  ],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: null,
            jsDocTags: [],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: [
                    {
                      value: "range",
                    },
                  ],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [
                {
                  name: "Array<number & Minimum<3> & Maximum<7>>",
                  tags: [
                    [
                      {
                        target: "array",
                        name: "MinItems<10>",
                        kind: "minItems",
                        value: 10,
                        validate: "10 <= $input.length",
                        exclusive: true,
                        schema: {
                          minItems: 10,
                        },
                      },
                      {
                        target: "array",
                        name: "MaxItems<100>",
                        kind: "maxItems",
                        value: 100,
                        validate: "$input.length <= 100",
                        exclusive: true,
                        schema: {
                          maxItems: 100,
                        },
                      },
                    ],
                  ],
                },
              ],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: null,
            jsDocTags: [],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: [
                    {
                      value: "length",
                    },
                  ],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [
                {
                  name: "Array<string & MinLength<3> & MaxLength<7>>",
                  tags: [
                    [
                      {
                        target: "array",
                        name: "MinItems<10>",
                        kind: "minItems",
                        value: 10,
                        validate: "10 <= $input.length",
                        exclusive: true,
                        schema: {
                          minItems: 10,
                        },
                      },
                      {
                        target: "array",
                        name: "MaxItems<100>",
                        kind: "maxItems",
                        value: 100,
                        validate: "$input.length <= 100",
                        exclusive: true,
                        schema: {
                          maxItems: 100,
                        },
                      },
                    ],
                  ],
                },
              ],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: null,
            jsDocTags: [],
          },
        ],
        jsDocTags: [],
        index: 0,
        recursive: false,
        nullables: [false],
      },
    ],
    aliases: [],
    arrays: [
      {
        name: "Array<number & Minimum<3> & Maximum<7>>",
        value: {
          any: false,
          required: true,
          optional: false,
          nullable: false,
          functional: false,
          atomics: [
            {
              type: "number",
              tags: [
                [
                  {
                    target: "number",
                    name: "Minimum<3>",
                    kind: "minimum",
                    value: 3,
                    validate: "3 <= $input",
                    exclusive: ["minimum", "exclusiveMinimum"],
                    schema: {
                      minimum: 3,
                    },
                  },
                  {
                    target: "number",
                    name: "Maximum<7>",
                    kind: "maximum",
                    value: 7,
                    validate: "$input <= 7",
                    exclusive: ["maximum", "exclusiveMaximum"],
                    schema: {
                      maximum: 7,
                    },
                  },
                ],
              ],
            },
          ],
          constants: [],
          templates: [],
          escaped: null,
          rest: null,
          arrays: [],
          tuples: [],
          objects: [],
          aliases: [],
          natives: [],
          sets: [],
          maps: [],
        },
        nullables: [false],
        recursive: false,
        index: null,
      },
      {
        name: "Array<string & MinLength<3> & MaxLength<7>>",
        value: {
          any: false,
          required: true,
          optional: false,
          nullable: false,
          functional: false,
          atomics: [
            {
              type: "string",
              tags: [
                [
                  {
                    target: "string",
                    name: "MinLength<3>",
                    kind: "minLength",
                    value: 3,
                    validate: "3 <= $input.length",
                    exclusive: true,
                    schema: {
                      minLength: 3,
                    },
                  },
                  {
                    target: "string",
                    name: "MaxLength<7>",
                    kind: "maxLength",
                    value: 7,
                    validate: "$input.length <= 7",
                    exclusive: true,
                    schema: {
                      maxLength: 7,
                    },
                  },
                ],
              ],
            },
          ],
          constants: [],
          templates: [],
          escaped: null,
          rest: null,
          arrays: [],
          tuples: [],
          objects: [],
          aliases: [],
          natives: [],
          sets: [],
          maps: [],
        },
        nullables: [false],
        recursive: false,
        index: null,
      },
    ],
    tuples: [],
  },
});
