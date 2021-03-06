export default {
  name: "couverture",
  type: "object",
  title: "Couverture",
  fields: [
    {
      name: 'precision',
      type: 'string',
      title: 'Precision :', 
    },
    {
      name: 'image',
      type: 'image',
      title: 'Logo',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'texte',
      type: 'bodyPortableText',
      title: 'Texte: '
    },
    {
      name: 'version',
      type: 'string',
      title: 'Version: '
    },
    {
      name: 'adresse',
      type: 'string',
      title: 'Adresse'
    },
    {
      name: 'numero',
      type: 'string',
      title: 'Telephone'
    },
    {
      name: 'mail',
      type: 'string',
      title: 'E-mail'
    },
  ]
}
