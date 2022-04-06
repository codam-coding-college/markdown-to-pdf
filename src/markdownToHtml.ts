import showdown from 'showdown'
import fs from 'fs'

let pageTitle = process.argv[2] || ''
const styleData = fs.readFileSync(`style.css`).toString()

const converter = new showdown.Converter({
	ghCompatibleHeaderId: true,
	simpleLineBreaks: true,
	ghMentions: true,
	tables: true
})
converter.setFlavor('github')

export function markdownToHTML(path: string) {
	const readmeFile = fs.readFileSync(path).toString()
	return `
<html>
	<head>
	<title> ${pageTitle} </title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	</head>
	<body>
		<div id='content'>
			${converter.makeHtml(readmeFile)}
		</div>
		<style type='text/css'>` + styleData + `</style>
	</body>
</html>
`
}
