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

brain-progression:
	node bin/brain-progression.js

brain-prime:
	node bin/brain-prime.js.

publish:
	npm publish --dry-run

lint:
	npx eslint . --fix

pretty:
	npx prettier --write .

format: 
	npx prettier --write .
	npx eslint --fix .
	
test:
	npm test

test-coverage:
	npm test -- --coverage --coverage.provider=v8

.PHONY: test