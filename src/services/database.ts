import 'react-native-get-random-values';
import { createRealmContext } from '@realm/react';
import Realm from 'realm';


export class Note extends Realm.Object<Note> {
    _id!: Realm.BSON.ObjectId;
    title!: string;
    content!: string;


    static generate(title: string, content: string) {
        return {
            _id: new Realm.BSON.ObjectId(),
            title,
            content,
        };
    };

    static schema = {
        name: 'Note',
        primaryKey: '_id',
        properties: {
            _id: 'objectId',
            title: 'string',
            content: 'string'
        },
    };
}

const realmConfig: Realm.Configuration = {
    schema: [Note]
};

const RealmContext = createRealmContext(realmConfig);

export default RealmContext;