set dotenv-load := true

serve:
	npx http-server public/ -o -p 8080

# vnu.jar straight from npm, which tracks its releases. The html5validator pip
# package pins vnu 20.6.30 from 2020, and that build's CSS checker rejects
# text-wrap and padding-inline-start as unknown properties.
# Two passes: vnu parses every file it is handed, so an unfiltered run over
# public/ reads favicon.ico as HTML and reports nine thousand null bytes.
validate:
	npx --yes vnu-jar --skip-non-html public/
	npx --yes vnu-jar --also-check-css --skip-non-css public/
	npx --yes eslint public/
	@echo "Validated successfully"

deploy:
	npx @xmit.co/xmit $XMIT_DOMAIN public/
