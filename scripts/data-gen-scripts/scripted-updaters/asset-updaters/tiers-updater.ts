import { writeFile } from 'node:fs/promises';
import { fileURLToPath, URL } from 'node:url';
import { objectEntries } from '@sapphire/utilities';
import { green } from 'colorette';
import { format, type FormatConfig } from 'oxfmt';
import oxfmtConfig from '../../../../.oxfmtrc.json';
import { importFileFromWeb, rootDir } from '../../../utils.js';

const formatsFileUrl = new URL('src/lib/assets/formats.json', rootDir);

const { FormatsData } = await importFileFromWeb<{ FormatsData: { [k: string]: IFormatsData } }>({
	url: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/formats-data.ts',
	temporaryFileName: 'tiers.js'
});

const output = {};

for (const [pokemon, smogonFormatsData] of objectEntries(FormatsData)) {
	const tier = smogonFormatsData?.isNonstandard || smogonFormatsData?.tier;
	output[pokemon] = tier || 'Refer to base form / unknown';
}

if (output && Object.entries(output).length) {
	const filePath = fileURLToPath(formatsFileUrl);
	const formattedOutput = await format(filePath, JSON.stringify(output), oxfmtConfig as FormatConfig);

	if (formattedOutput.errors.length > 0) {
		throw new Error(`Failed to format ${filePath}: ${formattedOutput.errors.map((error) => error.codeframe ?? error.message).join('\n')}`);
	}

	await writeFile(formatsFileUrl, formattedOutput.code);
	console.log(green(`Successfully wrote updated formats data to file`));
}

export interface IFormatsData {
	[k: string]: {
		isNonstandard: string;
		tier: string;
		natDexTier: string;
	};
}
