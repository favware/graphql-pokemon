import { writeFile } from 'node:fs/promises';
import { URL } from 'node:url';
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
	const formattedOutput = await format('', JSON.stringify(output), oxfmtConfig as FormatConfig);
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
