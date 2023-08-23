
let EntitySchema = require('typeorm').EntitySchema

module.exports = new EntitySchema({
    name : 'zendesk_user_token',
    tableName : 'zendesk_user_token',

    columns :{
        id:{
            primary: true,
            type : 'int',
            generated: true
        },

        createdAt: {
            type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
        },
        updateAt: {
            type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
        },

        access_token : {
            type : 'varchar',
            length : 500,
            default : null
        },

        onpage_integration_token : {
            type : 'varchar',
            length: 100,
            default : null
        },

        clientID : {
            type:'varchar',
            length:250,
            default: null,
        },
        clientSecret : {
            type:'varchar',
            length:250,
            default: null,
        },

        subDomain : {
            type:'varchar',
            length:250,
            default: null,
        }

    },

    indices: [
        {
          name: "zendesk_user_token_onpage_integration_token_uk",
          unique: true,
          columns: ["onpage_integration_token"]
        }
      ]

})