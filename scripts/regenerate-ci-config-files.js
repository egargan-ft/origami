#!/usr/bin/env node
import * as workspaces from "./lib/workspaces.js"
import {readPackage} from "read-pkg"
import {readFile, writeFile} from "fs/promises"
import Mustache from "mustache"
import {basename} from "path"
import del from "del"

let testTemplate = await readFile("templates/test-workflow.yml", "utf-8")
let percyTemplate = await readFile("templates/percy-workflow.yml", "utf-8")
let labelerTemplate = await readFile("templates/labeler.yml", "utf-8")

let workspacePaths = await workspaces.paths()

let labelerFile = Mustache.render(labelerTemplate, {
	workspaces: workspacePaths.map(path => {
		return {
			name: basename(path),
			path,
		}
	}),
})

await writeFile(`.github/labeler.yml`, labelerFile)

await del([".github/workflows/percy-*.yml", ".github/workflows/test-*.yml"])

let dotReleasePleaseManifest = {}
let releasePleaseConfig = {
	"bootstrap-sha": "fdeb43fa39a78e96b2ae082458e04da5eb618a30",
	packages: {},
}

const percyProjects = [];
const allProjects = [];

for (let workspace of workspacePaths) {
	const projectConfig = {
		workspace: workspace,
		percyTokenName: workspace.replace(/[/-]/g, "_").toUpperCase(),
		workspaceFilename: workspace.replaceAll("/", "-"),
	};

	allProjects.push(projectConfig);

	let pkg = await readPackage({cwd: workspace})
	if (pkg.percy === true) {
		percyProjects.push(projectConfig);
	}

	if (pkg.private !== true) {
		dotReleasePleaseManifest[workspace] = pkg.version
		releasePleaseConfig.packages[workspace] = {}
	}
}

let testFile = Mustache.render(testTemplate, {
	projects: allProjects
})

await writeFile(`.github/workflows/test.yml`, testFile)

let percyFile = Mustache.render(percyTemplate,  {
	projects: percyProjects
})
await writeFile(
	`.github/workflows/percy.yml`,
	percyFile
)

await writeFile(
	".release-please-manifest.json",
	JSON.stringify(dotReleasePleaseManifest)
)
await writeFile(
	"release-please-config.json",
	JSON.stringify(releasePleaseConfig, null, "\t") + "\n"
)
