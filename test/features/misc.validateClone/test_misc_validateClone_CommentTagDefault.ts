import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_misc_validateClone_CommentTagDefault =
    _test_misc_validateClone("CommentTagDefault")<CommentTagDefault>(
        CommentTagDefault,
    )((input) => typia.misc.validateClone<CommentTagDefault>(input));
