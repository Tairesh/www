set dotenv-load := true

serve:
	npx http-server public/ -o -p 8080

validate:
	html5validator --root public/ && echo "Validated successfully"

deploy:
	npx @xmit.co/xmit $XMIT_DOMAIN public/
