import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_reflect_metadata_ConstantAtomicSimple =
  _test_reflect_metadata("ConstantAtomicSimple")({
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
        tuples: [
          {
            name: "ConstantAtomicSimple",
            tags: [],
          },
        ],
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
      arrays: [],
      tuples: [
        {
          name: "ConstantAtomicSimple",
          index: null,
          elements: [
            {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "boolean",
                  values: [
                    {
                      value: false,
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
            {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "boolean",
                  values: [
                    {
                      value: true,
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
            {
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
                      value: 2,
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
                      value: "three",
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
          ],
          recursive: false,
          nullables: [false],
        },
      ],
    },
  });
