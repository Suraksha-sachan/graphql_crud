const { GraphQLScalarType, Kind } = require('graphql');

const TimestampScalar = new GraphQLScalarType({
  name: 'Timestamp',
  description: 'Custom scalar type for representing timestamps',
  serialize(value) {
    return value.toISOString();
  },
  parseValue(value) {
    return new Date(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value);
    }
    return null;
  },
});

module.exports = TimestampScalar;
