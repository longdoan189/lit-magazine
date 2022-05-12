const decodeAssetId = id => { //measure image size
  const [, assetId, dimensions, format] = pattern.exec(id)
  const [width, height] = dimensions.split("x").map(v => parseInt(v, 10))

  return {
    assetId,
    dimensions: { width, height },
    format,
  }
}
const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/


export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      validation: Rule => Rule.required(),
    },
    {
      name: 'coAuthor',
      title: 'Co Author',
      type: 'array',
      of: [{type: 'reference', to: {type: 'author'}}],
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
        accept: '.jpg.jpeg'
      },
      validation: Rule => Rule.required().custom(image => {
        if (!image) return true
        const { dimensions } = decodeAssetId(image.asset._ref)
        return (dimensions.width < 1200 && dimensions.height < 800) || "Image must be smaller (1200x800)"
      })
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      validation: Rule => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: Rule => Rule.required()
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
