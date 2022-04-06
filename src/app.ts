import { markdownToHTML } from "./markdownToHtml"
import fs from 'fs'

fs.writeFileSync('README.html', markdownToHTML('README.md'))
