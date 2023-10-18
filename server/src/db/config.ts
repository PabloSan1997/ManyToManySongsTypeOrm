import {DataSource} from 'typeorm';
import { environment_varieable } from '../utilities/variables';
import { Author } from './models/Author';
import { Songs } from './models/Songs';

export const AppDataSourse = new DataSource(
	{
		type:'postgres',
		url:environment_varieable.url_database,
		logging:true,
		synchronize:true,
		entities:[Author, Songs]
	}
);