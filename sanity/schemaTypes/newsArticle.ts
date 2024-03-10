import {defineField, defineType} from 'sanity'

export const newsArticle = defineType({
  name: 'newsArticle',
  title: 'News Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title of news Article',
    }),
    defineField({
      name: 'copy',
      type: 'string',
      title: 'Short description',
    }),
    defineField({
      name: 'date',
      type: 'datetime',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: "title",
      },
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Article content',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
