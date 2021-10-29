// modules/two-column-widget/index.js
module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Two column widget'
  },
  // 👇 The widget type's field schema
  fields: {
    add: {
      // 👇 The first column area
      columnOne: {
        type: 'area',
        label: 'Avatar',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          }
        }
      },
      // 👇 The second column area
      columnTwo: {
        type: 'area',
        label: 'Bio',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {
              styles: [
                {
                  tag: 'h2',
                  label: 'Heading 2 (h2)'
                },
                {
                  tag: 'p',
                  label: 'Paragraph (p)'
                }
              ]
            }
          }
        }
      }
    }
  }
}