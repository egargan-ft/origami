import { GluegunCommand } from 'gluegun'
import { questions } from '../../helpers/questions'
import {
	getComponentName,
	getFinalConfirmation,
	generateKeywords,
} from '../../helpers/utils'
import { createStoryBookBoilerPlate } from '../../helpers/create-storybook'
const command: GluegunCommand = {
	name: 'create-component',
	description: 'Create new component',
	alias: ['new', 'create', 'n'],
	run: async (toolbox) => {
		if (toolbox.parameters.first === 'storybook') {
			return await createStoryBookBoilerPlate(toolbox)
		}
		const { print, prompt, origami } = toolbox
		const name = await getComponentName(toolbox)
		const answers = await prompt.ask(questions)

		const props = {
			name,
			...answers,
			keywords: generateKeywords(answers.keywords),
		}
		const confirm = await getFinalConfirmation(toolbox, props)
		print.highlight(confirm)
		if (!confirm) {
			print.error(`The component "${props.name}" was cancelled.`)
			return
		}
		print.warning(`ok! generating "${props.name}" in components folder!`)
		await origami.copyTemplates(props)
		print.success(`yay! "${props.name}" is ready!`)
		print.info(`here's what it looks like:`)
	},
}

module.exports = command
