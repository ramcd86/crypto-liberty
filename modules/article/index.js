module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Article'
  },
  fields: {
    add: {
      subtitle: {
        type: 'string'
      },
      author: {
        type: 'string'
      },
      date: {
        type: 'date'
      },
      main: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {}
          }
        }
      }
    },
    group: {
      basics: {
        fields: ['title', 'subtitle', 'author', 'date', 'main']
      }
    }
  }
};
