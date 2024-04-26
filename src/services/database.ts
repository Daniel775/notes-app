import 'react-native-get-random-values';
import Realm from 'realm';

export class Note extends Realm.Object<Note> {
	_id!: Realm.BSON.ObjectId;
	title?: string;
	content?: string;
	owner_id!: string;

	static generate(
		title: string | null,
		content: string | null,
		owner_id: string,
	) {
		return {
			_id: new Realm.BSON.ObjectId(),
			title,
			content,
			owner_id,
		};
	}

	static schema = {
		name: 'Note',
		primaryKey: '_id',
		properties: {
			_id: 'objectId',
			title: 'string?',
			content: 'string?',
			owner_id: 'string',
		},
	};
}
