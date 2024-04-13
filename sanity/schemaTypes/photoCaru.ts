import {defineField, defineType} from 'sanity'

export const photoCaru = defineType({
  name: 'photoCaru',
  title: 'Photo Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title for an image',
    }),
    defineField({
        name: 'gallery',
        type: 'array',
        of: [
          { type: 'image' }
        ],
        options: {
          layout: 'grid'
        }
      }),
  ],
})
