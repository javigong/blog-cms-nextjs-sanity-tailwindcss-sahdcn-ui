import {defineField, defineType} from 'sanity'

export const blogType = defineType({
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug of blog article',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'titleImage',
      type: 'image',
      title: 'Image of your blog article',
    }),
    defineField({
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
})
