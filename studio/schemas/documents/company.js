export default {
    name: 'company',
    type: 'document',
    title: 'Company',
    fields: [
        {
            name: 'id',
            type: 'string',
            title: 'Id dans la BD'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Raison Sociale'
        },
        {
            name: 'statut',
            type: 'string',
            title: 'Statut Juridique'
        },
        {
            name: 'gerant',
            type: 'string',
            title: 'Gérant:'
        },
        {
            name: 'activite',
            type: 'string',
            title: 'Activite',
        },
        {
            name: 'code',
            type: 'string',
            title: 'Code',
        },
        {
            name: 'division',
            type: 'string',
            title: 'Division',
        },
        {
            name: 'code_postal',
            type: 'string',
            title: 'Code Postal'
        },
        {
            name: 'rue',
            type: 'string',
            title: 'Rue',
        },
        {
            name: 'ville',
            type: 'string',
            title: 'Ville'
        },
        {
            name: 'email',
            type: 'string',
            title: 'E-mail'
        },
        {
            name: 'fax',
            type: 'string',
            title: 'Fax',
        },
        {
            name: 'telephone',
            type: 'string',
            title: 'Telephone',
        },
    ]
}