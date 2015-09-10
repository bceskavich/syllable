import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  nodeDefinitions
} from 'graphql-relay';

import {
  User,
  Syllabus,
  getViewer,
  getSyllabus,
  getSyllabi
} from './db';

// Node Definitions
const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'User') {
      return getViewer();
    } else if (type === 'Syllabus') {
      return getSyllabus(id);
    } else {
      return null;
    }
  },

  (obj) => {
    if (obj instanceof User) {
      return userType;
    } else if (obj instanceof Syllabus) {
      return syllabusType;
    } else {
      return null;
    }
  }
);

// Types
const userType = new GraphQLObjectType({
  name: 'User',
  description: 'A Syllable user.',
  interfaces: [nodeInterface],

  fields: () => ({
    id: globalIdField('User'),
    name: {
      type: GraphQLString,
      description: 'The user\'s name.'
    },
    syllabi: {
      type: syllabiConnection,
      description: 'A user\'s syllabi.',
      args: connectionArgs,
      resolve: (user, args) => connectionFromArray(getSyllabi(), args)
    }
  })
});

const syllabusType = new GraphQLObjectType({
  name: 'Syllabus',
  description: 'A course syllabus.',
  interfaces: [nodeInterface],

  fields: () => ({
    id: globalIdField('Syllabus'),
    title: {
      type: GraphQLString,
      description: 'The syllabus title.'
    },
    description: {
      type: GraphQLString,
      description: 'The syllabus details'
    }
  })
});

const { connectionType: syllabiConnection } = connectionDefinitions({
  name: 'Syllabus',
  nodeType: syllabusType
});

// Root Query
const query = new GraphQLObjectType({
  name: 'Query',

  fields: () => ({
    node: nodeField,
    viewer: {
      type: userType,
      resolve: () => getViewer()
    }
  })
});

// Export Schema
export const schema = new GraphQLSchema({query: query});
