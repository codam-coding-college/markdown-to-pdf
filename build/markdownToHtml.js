"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownToHTML = void 0;
const showdown_1 = __importDefault(require("showdown"));
const fs_1 = __importDefault(require("fs"));
const converter = new showdown_1.default.Converter({
    ghCompatibleHeaderId: true,
    simpleLineBreaks: true,
    ghMentions: true,
    tables: true
});
converter.setFlavor('github');
function markdownToHTML(path) {
    const readmeFile = fs_1.default.readFileSync(path).toString();
    return `
<html>
	<head>
		<title> </title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<style type='text/css'>
			${fs_1.default.readFileSync(`static/highlight.js/stackoverflow-light.min.css`).toString()}
		</style>
		<script>
			${fs_1.default.readFileSync(`static/highlight.js/highlight.min.js`).toString()}
		</script>
	</head>
	<body>
		<div id='content'>
			${converter.makeHtml(readmeFile)}
		</div>
		<style type='text/css'>
			${fs_1.default.readFileSync(`style.css`).toString()}
		</style>
		<script>
			hljs.highlightAll()
		</script>
	</body>
</html>
`;
}
exports.markdownToHTML = markdownToHTML;
