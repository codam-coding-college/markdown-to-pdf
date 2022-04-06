import showdown from 'showdown'
import fs from 'fs'

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
		<title> </title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<style type='text/css'>
			${fs.readFileSync(`${__dirname}/../static/highlight.js/stackoverflow-light.min.css`).toString()}
		</style>
		<script>
			${fs.readFileSync(`${__dirname}/../static/highlight.js/highlight.min.js`).toString()}
		</script>
	</head>
	<body>
		<div id='content'>
			${converter.makeHtml(readmeFile)}
		</div>
		<style type='text/css'>
			${fs.readFileSync(`${__dirname}/../static/style.css`).toString()}
		</style>
		<script>
			hljs.highlightAll()
		</script>
	</body>
</html>
`
}
