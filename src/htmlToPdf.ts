import puppeteer from 'puppeteer'

export async function htmlToPdf(htmlFilePath: string, outputFilePath: string) {
	const browser = await puppeteer.launch({ headless: true })
	const page = await browser.newPage()
	await page.goto(`file://${htmlFilePath}`, { waitUntil: 'networkidle0' })
	const pdf = await page.pdf({
		path: outputFilePath,
		format: 'a4',
		printBackground: true,
		scale: 0.85,
		margin: {
			top: 80,
			bottom: 80,
			left: 10,
			right: 10
		}
	})
	await browser.close()
	return pdf
}