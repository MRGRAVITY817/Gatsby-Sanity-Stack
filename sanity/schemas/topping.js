import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  // Computer name
  name: 'topping',
  // visible title
  title: 'Toppings',
  type: 'document',
  // Give any React Components
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'What is name of the topping',
    },
    {
      name: 'vegetarian',
      title: 'vegetarian',
      type: 'boolean',
      description: 'What is name of the topping',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: ({name, vegetarian}) => ({
      title: `${name} ${vegetarian ? '🌿' : ''}`,
    }),
  },
}