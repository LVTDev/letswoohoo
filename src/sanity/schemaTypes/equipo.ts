import {RobotIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const equipoType = defineType({
  name: 'equipo',
  title: 'Equipo',
  type: 'document',
  icon: RobotIcon,
  fields: [
    defineField({
      name: 'nombre',
      type: 'string',
    }),
    defineField({
      name: 'orderPosition',
      type: 'number',
    }),

    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'puesto',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'nombre',
      media: 'mainImage',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
