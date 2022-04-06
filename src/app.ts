import { markdownToHTML } from './markdownToHtml'
import { htmlToPdf } from './htmlToPdf'
import fs from 'fs'

if (process.argv.length < 3) {
	console.log(`Usage: node ${process.argv[1]} <path/to/input.html> [path/to/output.pdf]`)
	process.exit(1)
}

const pwd = process.argv[2]![0] == '/' ? '' : process.cwd()
const inputPath = `${pwd}/${process.argv[2]!}`
const htmlPath = `${inputPath}.html`
const outputPath = process.argv[3] ? `${pwd}/${process.argv[3]!}` : inputPath.replace(/\.[^/.]+$/, '.pdf');

(async () => {
	console.log(`Reading: ${inputPath}`)
	await fs.promises.writeFile(htmlPath, markdownToHTML(inputPath))
	await htmlToPdf(htmlPath, outputPath)
	await fs.promises.unlink(htmlPath)
	console.log(`Created: ${outputPath}`)
})()
