export default {
    name: 'vgpcompacteur',
    type: 'document',
    title: 'VGP Compacteur',
    fields: [
        {
            name: "engin",
            type: "reference",
            title: "Engin du rapport",
            to: [{ type: "enginsAPI" }],
          },
        {
            name: 'date',
            type: 'date',
            title: 'Date',
        },
        {
            name: 'nClient',
            type: 'string',
            title: 'Numero Client',
        },
        {
            name: 'nRapport',
            type: 'string',
            title: 'Numero Rapport',
        },
        {
            name: 'nControle',
            type: 'string',
            title: 'Numero Controle',
        },
        {
            name: 'pVerification',
            type: 'date',
            title: 'Porchaine Verification'
        },
        {
            name: 'typeVerification',
            type: 'string',
            title: 'Type de verification',
            options: {
                list: [
                    {title: 'Vérification de mise en service', value: 'miseEnService'},
                    {title: 'Vérification Générale Périodique VGP (Article R4323-23,24,25,26,27)', value: 'periodique'},
                    {title: 'Vérification de remise en service', value: 'remiseEnService'}
                ]
            }
        },
        {
            name: 'certificat',
            type: 'string',
            title: 'Certifcat de conformité + épreuve de mise en service :',
            options: {
                lsit: [
                    {title: 'Oui', value: 'yes'},
                    {title: 'Non', value: 'no'}
                ]
            }
        },
        {
            name: 'manuel',
            type: 'string',
            title: "Manuel d’Utilisation (Art. R4323-1 du C.T.)",
            options: {
                lsit: [
                    {title: 'Oui', value: 'yes'},
                    {title: 'Non', value: 'no'}
                ]
            }
        },
        {
            name: 'rapports',
            type: 'string',
            title: 'Rapport(s) de vérification précédent’s) (Art L4711-1 du C.T.)',
            options: {
                lsit: [
                    {title: 'Oui', value: 'yes'},
                    {title: 'Non', value: 'no'}
                ]
            }
        },
        {
            name: 'carnet',
            type: 'string',
            title: 'Carnet de Maintenance (ArtR4323-19,20 du C.T.)',
            options: {
                lsit: [
                    {title: 'Oui', value: 'yes'},
                    {title: 'Non', value: 'no'}
                ]
            }
        },
        {
            name: 'registre',
            type: 'string',
            title: 'Registre de sécurité (Art. R.4323-26, 27 du C.T.)',
            options: {
                lsit: [
                    {title: 'Oui', value: 'yes'},
                    {title: 'Non', value: 'no'}
                ]
            }
        },
        {
            name: 'entreprise',
            type: 'reference',
            title: 'Client',
            to: [{type: 'company'}]
        },
        {
            name: 'marque',
            type: 'string',
            title: 'Marque',
        },
        {
            name: 'modele',
            type: 'string',
            title: 'Modele',
        },
        {
            name: 'nbSerie',
            type: 'string',
            title: 'Nº de serie',
        },
        {
            name: 'categorie',
            type: 'string',
            title: 'Categorie',
        },
        {
            name: 'acessoires',
            type: 'string',
            title: 'Acessoires'
        },
        {
            name: 'charge',
            type: 'string',
            title: 'Charge maxi de levage'
        },
        {
            name: 'anne',
            type: 'string',
            title: 'Anné de fabrication'
        },
        {
            name: 'marquage',
            type: 'string',
            title: 'Marquace CE'
        },
        {
            name: 'compteur',
            type: 'string',
            title: 'Compteur horamètre'
        },
        {
            name: 'remarques',
            type: 'array',
            title: 'Remarques',
            of: [{type: 'string'}]
        }
    ]
}