install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

run1:
	gendiff file1.json file2.json
