export default {
    name: 'feature',
    title: 'Feature',
    type: 'document',
    fields: [
        {
            name: 'first',
            title: 'First feature',
            type: 'reference',
            to: {type: 'post'},
            validation: Rule => Rule.required(),
        },
        {
            name: 'second',
            title: 'Second feature',
            type: 'array',
            of: [{type: 'reference', to: {type: 'post'}}],
            validation: Rule => Rule.required().min(3).max(3),
        },
    ],
  }