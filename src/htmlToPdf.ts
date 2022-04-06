import puppeteer from 'puppeteer'

export async function htmlToPdf(htmlFilePath: string, outputFilePath: string) {
	const browser = await puppeteer.launch({ headless: true })
	const page = await browser.newPage()
	await page.goto(`file://${htmlFilePath}`, { waitUntil: 'networkidle0' })
	const pdf = await page.pdf({
		path: outputFilePath,
		format: 'a4'
	})
	await browser.close()
	return pdf
}