set dotenv-load := true

serve:
	npx http-server public/ -o -p 8080

deploy:
	npx @xmit.co/xmit $XMIT_DOMAIN public/
