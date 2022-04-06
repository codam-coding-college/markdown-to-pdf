import { markdownToHTML } from './markdownToHtml'
import { htmlToPdf } from './htmlToPdf'
import fs from 'fs'

if (process.argv.length < 3) {
	console.log(`Usage: ${process.argv[0]} ${process.argv[1]} [file_to_convert]`)
	process.exit(1)
}

const fileName = process.argv[2]?.replace(/\.[^/.]+$/, '')

fs.writeFileSync(`${fileName}.html`, markdownToHTML(process.argv[2]!))
htmlToPdf(`${fileName}.html`, `${fileName}.pdf`)
