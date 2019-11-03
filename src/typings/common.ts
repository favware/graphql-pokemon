import {FuseOptions} from 'fuse.js';

export type SimpleFuseOptions = Exclude<FuseOptions<unknown>, 'id'>;