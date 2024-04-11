import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_reflect_metadata_TypeTagDefault = _test_reflect_metadata(
  "TypeTagDefault",
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
      objects: ["TypeTagDefault"],
      aliases: [],
      natives: [],
      sets: [],
      maps: [],
    },
  ],
  components: {
    objects: [
      {
        name: "TypeTagDefault",
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
                      value: "boolean",
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
                  type: "boolean",
                  tags: [
                    [
                      {
                        target: "boolean",
                        name: "Default<false>",
                        kind: "default",
                        value: false,
                        exclusive: true,
                        schema: {
                          default: false,
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
                      value: "number",
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
                        name: "Default<1>",
                        kind: "default",
                        value: 1,
                        exclusive: true,
                        schema: {
                          default: 1,
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
                      value: "string",
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
                        name: 'Default<"two">',
                        kind: "default",
                        value: "two",
                        exclusive: true,
                        schema: {
                          default: "two",
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
                      value: "text",
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
                        name: 'Default<"Very long text, can you understand it?">',
                        kind: "default",
                        value: "Very long text, can you understand it?",
                        exclusive: true,
                        schema: {
                          default: "Very long text, can you understand it?",
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
                      value: "boolean_and_number_and_string",
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
                        name: "Default<1>",
                        kind: "default",
                        value: 1,
                        exclusive: true,
                        schema: {
                          default: 1,
                        },
                      },
                    ],
                  ],
                },
                {
                  type: "string",
                  tags: [
                    [
                      {
                        target: "string",
                        name: 'Default<"two">',
                        kind: "default",
                        value: "two",
                        exclusive: true,
                        schema: {
                          default: "two",
                        },
                      },
                    ],
                  ],
                },
                {
                  type: "boolean",
                  tags: [
                    [
                      {
                        target: "boolean",
                        name: "Default<false>",
                        kind: "default",
                        value: false,
                        exclusive: true,
                        schema: {
                          default: false,
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
                      value: "union_but_boolean",
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
                  tags: [],
                },
                {
                  type: "number",
                  tags: [],
                },
                {
                  type: "boolean",
                  tags: [
                    [
                      {
                        target: "boolean",
                        name: "Default<false>",
                        kind: "default",
                        value: false,
                        exclusive: true,
                        schema: {
                          default: false,
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
                      value: "union_but_number",
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
                  tags: [],
                },
                {
                  type: "number",
                  tags: [
                    [
                      {
                        target: "number",
                        name: "Default<1>",
                        kind: "default",
                        value: 1,
                        exclusive: true,
                        schema: {
                          default: 1,
                        },
                      },
                    ],
                  ],
                },
                {
                  type: "boolean",
                  tags: [],
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
                      value: "union_but_string",
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
                  tags: [],
                },
                {
                  type: "string",
                  tags: [
                    [
                      {
                        target: "string",
                        name: 'Default<"two">',
                        kind: "default",
                        value: "two",
                        exclusive: true,
                        schema: {
                          default: "two",
                        },
                      },
                    ],
                  ],
                },
                {
                  type: "boolean",
                  tags: [],
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
                      value: "boolean_and_number_and_template",
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
                        name: "Default<2>",
                        kind: "default",
                        value: 2,
                        exclusive: true,
                        schema: {
                          default: 2,
                        },
                      },
                    ],
                  ],
                },
                {
                  type: "boolean",
                  tags: [
                    [
                      {
                        target: "boolean",
                        name: "Default<false>",
                        kind: "default",
                        value: false,
                        exclusive: true,
                        schema: {
                          default: false,
                        },
                      },
                    ],
                  ],
                },
              ],
              constants: [],
              templates: [
                [
                  {
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
                            value: "prefix_",
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
                  {
                    any: false,
                    required: true,
                    optional: false,
                    nullable: false,
                    functional: false,
                    atomics: [
                      {
                        type: "string",
                        tags: [],
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
                ],
              ],
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
        ],
        jsDocTags: [],
        index: 0,
        recursive: false,
        nullables: [false],
      },
    ],
    aliases: [],
    arrays: [],
    tuples: [],
  },
});
