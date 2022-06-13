import {Paper, Researcher} from './seo/yoastseo'

const paper = new Paper( "Text to analyze", {
    keyword: "analyze",
    description: "gimana description"
} );

const researcher = new Researcher( paper );

console.log( researcher.getResearch( "metaDescriptionKeyword" ) );