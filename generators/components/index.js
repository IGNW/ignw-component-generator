const Generator = require('yeoman-generator')
const camelcase = require('camelcase')

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
        const componentName = camelcase(this.options.name, { pascalCase: true })

        this.fs.copyTpl(
            this.templatePath('index.ts'),
            this.destinationPath(`./client/src/components/${componentName}/index.ts`),
            { componentName }
        )
        this.fs.copyTpl(
            this.templatePath('component.tsx'),
            this.destinationPath(`./client/src/components/${componentName}/${componentName}.tsx`),
            { componentName }
        )
        this.fs.copyTpl(
            this.templatePath('stories.tsx'),
            this.destinationPath(`./client/src/components/${componentName}/${componentName}.stories.tsx`),
            { componentName }
        )
        this.fs.copyTpl(
            this.templatePath('test.tsx'),
            this.destinationPath(`./client/src/components/${componentName}/${componentName}.test.tsx`),
            { componentName }
        )
	}
}