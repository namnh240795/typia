import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_reflect_metadata_ConstantEnumeration = _test_reflect_metadata(
  "ConstantEnumeration",
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
      arrays: [
        {
          name: "ConstantEnumeration",
          tags: [],
        },
      ],
      tuples: [],
      objects: [],
      aliases: [],
      natives: [],
      sets: [],
      maps: [],
    },
  ],
  components: {
    objects: [],
    aliases: [],
    arrays: [
      {
        name: "ConstantEnumeration",
        value: {
          any: false,
          required: true,
          optional: false,
          nullable: false,
          functional: false,
          atomics: [],
          constants: [
            {
              type: "number",
              values: [
                {
                  value: 0,
                  tags: [],
                },
                {
                  value: 1,
                  tags: [],
                },
                {
                  value: 2,
                  tags: [],
                },
              ],
            },
            {
              type: "string",
              values: [
                {
                  value: "Three",
                  tags: [],
                },
                {
                  value: "Four",
                  tags: [],
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
        nullables: [false],
        recursive: false,
        index: null,
      },
    ],
    tuples: [],
  },
});
