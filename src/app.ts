import { markdownToHTML } from './markdownToHtml'
import { htmlToPdf } from './htmlToPdf'
import fs from 'fs'

if (process.argv.length < 3) {
	console.log(`Usage: ${process.argv[0]} ${process.argv[1]} [file_to_convert]`)
	process.exit(1)
}

const pwd: string = process.cwd()
const fileName: string = process.argv[2]!.replace(/\.[^/.]+$/, '')

fs.writeFileSync(`${pwd}/${fileName}.html`, markdownToHTML(`${pwd}/${process.argv[2]}`))
htmlToPdf(`${pwd}/${fileName}.html`, `${pwd}/${fileName}.pdf`)
