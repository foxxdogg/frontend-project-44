install:
	npm ci
brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

publish:
	npm publish --dry-run

lint:
	npx eslint . --fix

pretty:
	npx prettier --write .

format: 
	npx prettier --write .
	npx eslint --fix .
	