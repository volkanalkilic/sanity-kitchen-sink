export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffb0d8dfce2f32e33e93817',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-r68bwfze',
                  apiId: 'a4bca816-07cb-4d8d-9cfc-74cfac201aca'
                },
                {
                  buildHookId: '5ffb0d8e5be5174b5db1ca51',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9jaj9xy6',
                  apiId: 'c438f4f4-f1b9-47d5-95ea-0b063e49c752'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/volkanalkilic/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9jaj9xy6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
