import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_message_ObjectUnionExplicitPointer =
    _test_protobuf_message("ObjectUnionExplicitPointer")(
        'syntax = "proto3";\n\nmessage ObjectUnionExplicitPointer {\n    repeated IPointer_lt_ObjectUnionExplicitPointer.Shape_gt_ value = 1;\n    message Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicitPointer {\n        message IPoint_gt_ {\n            required double x = 1;\n            required double y = 2;\n            required string type = 3;\n        }\n    }\n\n    message Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicitPointer {\n        message ILine_gt_ {\n            required ObjectUnionExplicitPointer.IPoint p1 = 1;\n            required ObjectUnionExplicitPointer.IPoint p2 = 2;\n            required string type = 3;\n        }\n    }\n\n    message IPoint {\n        required double x = 1;\n        required double y = 2;\n    }\n\n    message Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicitPointer {\n        message ITriangle_gt_ {\n            required ObjectUnionExplicitPointer.IPoint p1 = 1;\n            required ObjectUnionExplicitPointer.IPoint p2 = 2;\n            required ObjectUnionExplicitPointer.IPoint p3 = 3;\n            required string type = 4;\n        }\n    }\n\n    message Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicitPointer {\n        message IRectangle_gt_ {\n            required ObjectUnionExplicitPointer.IPoint p1 = 1;\n            required ObjectUnionExplicitPointer.IPoint p2 = 2;\n            required ObjectUnionExplicitPointer.IPoint p3 = 3;\n            required ObjectUnionExplicitPointer.IPoint p4 = 4;\n            required string type = 5;\n        }\n    }\n\n    message Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicitPointer {\n        message IPolyline_gt_ {\n            repeated ObjectUnionExplicitPointer.IPoint points = 1;\n            required string type = 2;\n        }\n    }\n\n    message Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicitPointer {\n        message IPolygon_gt_ {\n            required ObjectUnionExplicitPointer.IPolyline outer = 1;\n            repeated ObjectUnionExplicitPointer.IPolyline inner = 2;\n            required string type = 3;\n        }\n    }\n\n    message IPolyline {\n        repeated ObjectUnionExplicitPointer.IPoint points = 1;\n    }\n\n    message Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicitPointer {\n        message ICircle_gt_ {\n            required ObjectUnionExplicitPointer.IPoint centroid = 1;\n            required double radius = 2;\n            required string type = 3;\n        }\n    }\n}\n\nmessage IPointer_lt_ObjectUnionExplicitPointer {\n    message Shape_gt_ {\n        oneof value {\n            ObjectUnionExplicitPointer.Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicitPointer.IPoint_gt_ v1 = 1;\n            ObjectUnionExplicitPointer.Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicitPointer.ILine_gt_ v2 = 2;\n            ObjectUnionExplicitPointer.Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicitPointer.ITriangle_gt_ v3 = 3;\n            ObjectUnionExplicitPointer.Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicitPointer.IRectangle_gt_ v4 = 4;\n            ObjectUnionExplicitPointer.Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicitPointer.IPolyline_gt_ v5 = 5;\n            ObjectUnionExplicitPointer.Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicitPointer.IPolygon_gt_ v6 = 6;\n            ObjectUnionExplicitPointer.Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicitPointer.ICircle_gt_ v7 = 7;\n        }\n    }\n}',
    );
