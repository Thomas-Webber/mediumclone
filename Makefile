.PHONY: run
run:
	if command -v python3 ; then python3 -m http.server; else python -m SimpleHTTPServer; fi