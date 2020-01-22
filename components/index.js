const Generator = require('yeoman-generator')
const camelCase = require('camelcase')
const kebobCase = require('kebab-case')

module.exports = class extends Generator {

	// note: arguments and options should be defined in the constructor.
	constructor(args, opts) {
		super(args, opts)

		// This makes `name` a required argument.
		this.argument('name', { type: String, required: true })

		// And you can then access it later; e.g.
		this.log(this.options.name)
	}

	prompting() {
        const componentName = camelCase(this.options.name, { pascalCase: true })
        const componentDirName = kebobCase(this.options.name)

        this.fs.copyTpl(
            this.templatePath('index.ts'),
            this.destinationPath(`./src/components/${componentDirName}/index.ts`),
            { componentName }
        )
        this.fs.copyTpl(
            this.templatePath('component.tsx'),
            this.destinationPath(`./src/components/${componentDirName}/${componentName}.tsx`),
            { componentName }
        )
        this.fs.copyTpl(
            this.templatePath('stories.tsx'),
            this.destinationPath(`./src/components/${componentDirName}/${componentName}.stories.tsx`),
            { componentName }
        )
        this.fs.copyTpl(
            this.templatePath('test.tsx'),
            this.destinationPath(`./src/components/${componentDirName}/${componentName}.test.tsx`),
            { componentName }
        )
	}
}