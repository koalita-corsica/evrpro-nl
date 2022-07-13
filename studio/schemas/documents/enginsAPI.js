export default {
    title: 'Engins',
    name: 'enginsAPI',
    type: 'document',
    fields: [
        {
            title: 'Nom',
            name: 'nom',
            type: 'string'
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            slugify: input => input
                                 .toLowerCase()
                                 .replace(/['"]+/g, '')
          }
      },
      {
        title: 'Marque',
        name: 'marque',
        type: 'string'
      },
      {
        title: 'ID de catégorie',
        name: 'catID',
        type: 'string'
      },
      {
        title: 'Famille',
        name: 'catFamille',
        type: 'string'
      },
      {
        title: 'Catégorie d\'engin',
        name: 'catEngin',
        type: 'string'
      },
      {
        title: 'Numero de série',
        name: 'numero_serie',
        type: 'string'
      },
      {
        title: 'Immatriculation',
        name: 'immatriculation',
        type: 'text'
      },
      {
        title: 'Date d\'achat',
        name: 'achat',
        type: 'date'
      },
      {
        title: 'Date de mise en circulation',
        name: 'circulation',
        type: 'date',
      },
      {
        title: 'Date de dernier VGP',
        name: 'dernierVGP',
        type: 'date',
      },
      {
        title: 'Date de dernier CT',
        name: 'dernierCT',
        type: 'date',
      },
      {
        name: "entreprise",
        type: "reference",
        title: "Entreprise",
        to: [{ type: "company" }],
      },
    ]
  }