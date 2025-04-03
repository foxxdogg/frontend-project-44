install:
	npm ci
brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run

make lint:
	npx eslint . --fix

make pretty:
	npx prettier --write .

make format: 
	npx prettier --write .
	npx eslint --fix .
	