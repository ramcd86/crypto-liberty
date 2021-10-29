module.exports = {
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
      aboutTitle: {
        type: 'string'
      },
      aboutSubtitle: {
        type: 'string'
      },
      aboutArea: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {
            }
          }
        }
      },
      ourArtistsTitle: {
        type: 'string'
      },
      ourArtistsSubtitle: {
        type: 'string'
      },
      ourArtistsArea: {
        type: 'area',
        options: {
          widgets: {
            'two-column': {
              toolbar: [
                'styles',
                '|',
                'bold',
                'italic',
                'strike',
                'link',
                '|',
                'bulletList',
                'orderedList'
              ],
              styles: [
                {
                  tag: 'p',
                  label: 'Paragraph (P)'
                },
                {
                  tag: 'h3',
                  label: 'Heading 3 (H3)'
                },
                {
                  tag: 'h4',
                  label: 'Heading 4 (H4)'
                }
              ]
            }
          }
        }
      }
    },
    group: {
      about: {
        label: 'Home Page',
        fields: [
          'aboutTitle',
          'aboutSubtitle',
          'aboutArea',
          'ourArtistsTitle',
          'ourArtistsSubtitle',
          'ourArtistsArea'
        ]
      }
    }
  }
};
