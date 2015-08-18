function include(jsFile){
	document.write('<script type="text/javascript" src="'+jsFile+'"></script>');
}


////dataStructures
include('../../frameworks2/dataStructures/DataModel.js');

// some data models require to be before -->
include('../../frameworks2/dataStructures/lists/List.js');
include('../../frameworks2/dataStructures/numeric/NumberList.js');
include('../../frameworks2/dataStructures/structures/elements/Node.js');
include('../../frameworks2/dataStructures/structures/lists/NodeList.js');
include('../../frameworks2/dataStructures/structures/lists/RelationList.js');
include('../../frameworks2/dataStructures/lists/Table.js');

include('../../frameworks2/dataStructures/dates/DateAxis.js');
include('../../frameworks2/dataStructures/dates/DateInterval.js');
include('../../frameworks2/dataStructures/dates/DateList.js');
include('../../frameworks2/dataStructures/geo/Country.js');
include('../../frameworks2/dataStructures/geo/CountryList.js');
include('../../frameworks2/dataStructures/geometry/Point.js');
include('../../frameworks2/dataStructures/geometry/Point3D.js');
include('../../frameworks2/dataStructures/geometry/Polygon.js');
include('../../frameworks2/dataStructures/geometry/Polygon3D.js');
include('../../frameworks2/dataStructures/geometry/Polygon3DList.js');
include('../../frameworks2/dataStructures/geometry/PolygonList.js');
include('../../frameworks2/dataStructures/geometry/Rectangle.js');
include('../../frameworks2/dataStructures/geometry/RectangleList.js');
include('../../frameworks2/dataStructures/graphic/ColorList.js');
include('../../frameworks2/dataStructures/graphic/ColorScale.js');
include('../../frameworks2/operators/graphic/ColorScaleGenerators.js');
include('../../frameworks2/dataStructures/numeric/Axis.js');
include('../../frameworks2/dataStructures/numeric/Axis2D.js');
include('../../frameworks2/dataStructures/numeric/Interval.js');
include('../../frameworks2/dataStructures/numeric/Matrix.js');
include('../../frameworks2/dataStructures/numeric/NumberTable.js');
include('../../frameworks2/dataStructures/spaces/Space2D.js');
include('../../frameworks2/dataStructures/strings/StringList.js');
include('../../frameworks2/dataStructures/structures/elements/Relation.js');
include('../../frameworks2/dataStructures/structures/networks/Network.js');
include('../../frameworks2/dataStructures/structures/networks/Tree.js');

////operators
include('../../frameworks2/operators/objects/ObjectOperators.js');
include('../../frameworks2/operators/objects/ObjectConversions.js');
include('../../frameworks2/operators/dates/DateListOperators.js');
include('../../frameworks2/operators/dates/DateOperators.js');
include('../../frameworks2/operators/geo/CountryListOperators.js');
include('../../frameworks2/operators/geo/CountryOperators.js');
include('../../frameworks2/operators/geo/GeoOperators.js');
include('../../frameworks2/operators/geometry/GeometryConvertions.js');
include('../../frameworks2/operators/geometry/GeometryOperators.js');
include('../../frameworks2/operators/geometry/PointOperators.js');
include('../../frameworks2/operators/geometry/PolygonGenerators.js');
include('../../frameworks2/operators/geometry/PolygonListEncodings.js');
include('../../frameworks2/operators/geometry/PolygonListOperators.js');
include('../../frameworks2/operators/geometry/PolygonOperators.js');
include('../../frameworks2/operators/geometry/RectangleOperators.js');
include('../../frameworks2/operators/graphic/ColorConvertions.js');
include('../../frameworks2/operators/graphic/ColorGenerators.js');
include('../../frameworks2/operators/graphic/ColorListGenerators.js');
include('../../frameworks2/operators/graphic/ColorListOperators.js');
include('../../frameworks2/operators/graphic/ColorOperators.js');
include('../../frameworks2/operators/graphic/ColorScales.js');
include('../../frameworks2/operators/lists/ListGenerators.js');
include('../../frameworks2/operators/lists/ListOperators.js');
include('../../frameworks2/operators/lists/TableConversions.js');
include('../../frameworks2/operators/lists/TableEncodings.js');
include('../../frameworks2/operators/lists/TableGenerators.js');
include('../../frameworks2/operators/lists/TableOperators.js');
include('../../frameworks2/operators/numeric/interval/IntervalListOperators.js');
include('../../frameworks2/operators/numeric/interval/IntervalTableOperators.js');
include('../../frameworks2/operators/numeric/MatrixGenerators.js');
include('../../frameworks2/operators/numeric/numberList/NumberListGenerators.js');
include('../../frameworks2/operators/numeric/numberList/NumberListOperators.js');
include('../../frameworks2/operators/numeric/NumberOperators.js');
include('../../frameworks2/operators/numeric/numberTable/NumberTableConversions.js');
include('../../frameworks2/operators/numeric/numberTable/NumberTableFlowOperators.js');
include('../../frameworks2/operators/numeric/numberTable/NumberTableOperators.js');
//include('../../frameworks2/operators/numeric/UniversalNumericOperators.js');
include('../../frameworks2/operators/strings/StringConversions.js');
include('../../frameworks2/operators/strings/StringListOperators.js');
include('../../frameworks2/operators/strings/StringOperators.js');
include('../../frameworks2/operators/structures/NetworkConvertions.js');
include('../../frameworks2/operators/structures/NetworkEncodings.js');
include('../../frameworks2/operators/structures/NetworkGenerators.js');
include('../../frameworks2/operators/structures/NetworkOperators.js');
include('../../frameworks2/operators/structures/TreeConversions.js');
include('../../frameworks2/operators/structures/TreeEncodings.js');

////apis
//include('../../frameworks2/apis/delicious/LoadDeliciousTagsFromWebsite.js');
//include('../../frameworks2/apis/geo/CountriesApi.js');
//include('../../frameworks2/apis/remarkableWords/RemarkableWordsApi.js');
//include('../../frameworks2/apis/twitter/networks/MentionRelation.js');
//include('../../frameworks2/apis/twitter/networks/MergedRelation.js');
//include('../../frameworks2/apis/twitter/networks/RTRelation.js');
//include('../../frameworks2/apis/twitter/networks/TweetNode.js');
//include('../../frameworks2/apis/twitter/networks/TwitterUserNode.js');
//include('../../frameworks2/apis/twitter/TweetsOperators.js');
//include('../../frameworks2/apis/twitter/TwitterApi.js');
//include('../../frameworks2/apis/twitter/TwitterCommunityMetrics.js');
//include('../../frameworks2/apis/twitter/TwitterSearch.js');
//include('../../frameworks2/apis/twitter/TwitterSearchProcesses.js');
//include('../../frameworks2/apis/wikipedia/WikipediaArticlesApi.js');
//include('../../frameworks2/apis/wikipedia/WikipediaArticlesOperators.js');
//include('../../frameworks2/apis/wikipedia/WikipediaArticlesVisits.js');

////Tools
include('../../frameworks2/Tools/graphic/CanvasAndContext.js');
include('../../frameworks2/Tools/graphic/Draw.js');
include('../../frameworks2/Tools/graphic/DrawSimpleVis.js');
include('../../frameworks2/Tools/graphic/DrawTexts.js');
include('../../frameworks2/Tools/graphic/DrawTextsAdvanced.js');
//include('../../frameworks2/Tools/graphic/ImageGenerators.js');
include('../../frameworks2/Tools/graphic/SimpleGraphics.js');
//include('../../frameworks2/Tools/interaction/ColorPicker.js');
include('../../frameworks2/Tools/interaction/DragDetection.js');
//include('../../frameworks2/Tools/interaction/InputTextField.js');
include('../../frameworks2/Tools/interaction/InputTextFieldHTML.js');
//include('../../frameworks2/Tools/interaction/Selection.js');
include('../../frameworks2/Tools/interaction/TextBox.js');
//include('../../frameworks2/Tools/interaction/TextButton.js');
include('../../frameworks2/Tools/interaction/TextFieldHTML.js');
//include('../../frameworks2/Tools/interaction/ToolTip.js');
include('../../frameworks2/Tools/loaders/Loader.js');
include('../../frameworks2/Tools/loaders/LoadEvent.js');
include('../../frameworks2/Tools/loaders/MultiLoader.js');
include('../../frameworks2/Tools/physics/Forces.js');
include('../../frameworks2/Tools/threeD/Engine3D.js');
include('../../frameworks2/Tools/utils/code/ClassUtils.js');
include('../../frameworks2/Tools/utils/strings/ConsoleTools.js');
include('../../frameworks2/Tools/utils/strings/FastHtml.js');
include('../../frameworks2/Tools/utils/strings/JSONUtils.js');
include('../../frameworks2/Tools/utils/strings/MD5.js'); //used for StructureLocalStorage y StructureLichenStorage
include('../../frameworks2/Tools/utils/strings/StringUtils.js');
//include('../../frameworks2/Tools/utils/strings/SVGdecode.js');
include('../../frameworks2/Tools/utils/system/Navigator.js');

////visualization
include('../../frameworks2/visualization/geo/CountryListDraw.js');
include('../../frameworks2/visualization/geometry/CirclesVisOperators.js');
include('../../frameworks2/visualization/graphic/ImageDraw.js');
include('../../frameworks2/visualization/lists/ListDraw.js');
include('../../frameworks2/visualization/numeric/IntervalTableDraw.js');
include('../../frameworks2/visualization/numeric/NumberTableDraw.js');
include('../../frameworks2/visualization/numeric/NumberListDraw.js');
include('../../frameworks2/visualization/objects/ObjectDraw.js');
include('../../frameworks2/visualization/strings/StringDraw.js');
include('../../frameworks2/visualization/strings/StringListDraw.js');
include('../../frameworks2/visualization/strings/StringListVisOperators.js');
include('../../frameworks2/visualization/structures/NetworkDraw.js');
include('../../frameworks2/visualization/structures/TreeDraw.js');

////Global
include('../../frameworks2/Global.js');
