let data = [
  /**
   * Port: StaticContent
   */
  {
    label: { name: 'GET' },
    key: '78f91938-f9cf-4cbf-9bc8-f97836ff23dd',
    unitKey: 'c639cd53-c764-4967-b052-1e1652107923',
    callback: { name: 'XXX', type: 'XXX' },
    insertionPoint: [
      { key: '2299cc1e-238f-4fe5-9069-51351ded59a7', order: 1, traverseNodeImplementation: 'raceFirstPromise' },
      { key: '13a170c5-be67-4a60-9630-b9d0750641f4', order: 2, traverseNodeImplementation: 'raceFirstPromise' },
    ],
    children: [
      /**
       * Port: CDN
       */
      { nestedUnit: 'c5a01ebf-8902-437c-a6e1-4a7082f3b28e', pathPointerKey: 'XYZ5', insertionPosition: { insertionPathPointer: null, insertionPoint: '2299cc1e-238f-4fe5-9069-51351ded59a7' } },
      {
        nestedUnit: {
          label: { name: 'URL: /asset' },
          key: 'dceb9ff2-1996-47f4-9e14-83111f4501ce',
          unitKey: 'af30c7db-4d26-4e4c-bab9-a4a5cc666edb',
          callback: { name: 'da18242e-792e-4e44-a12b-b280f6331b7c', type: 'middlewareNestedUnit' },
          insertionPoint: [{ key: '2299cc1e-238f-4fe5-9069-51351ded59a7', order: 1, traverseNodeImplementation: 'raceFirstPromise' }],
          children: [
            {
              nestedUnit: {
                label: { name: 'URL: /asset/javascript/jspm.config.js' },
                key: 'c8134b3d-752a-476d-b95e-9fd28b1ebb05',
                /**
                 * Port: StaticContent
                 */
                unitKey: {
                  key: '9c350896-7956-4003-89bb-45a9ae4c67ee',
                  label: {
                    name: 'URL: /asset/javascript/jspm.config.js',
                  },
                  expectedReturn: 'asset/javascript/jspm.config.js',
                  fileKey: '956a0f0f-437a-4cdf-9bcd-f205fc8336f9',
                },
                callback: { name: '68fb59e3-af0b-4ea2-800e-7e7e37d7cc31', type: 'middlewareNestedUnit' },
              },
              pathPointerKey: 'XYZ4',
              insertionPosition: { insertionPathPointer: null, insertionPoint: '2299cc1e-238f-4fe5-9069-51351ded59a7' },
            },
            { nestedUnit: '15a01ebf-8902-437c-a6e1-4a7082f3b281', pathPointerKey: 'XYZ4', insertionPosition: { insertionPathPointer: null, insertionPoint: '2299cc1e-238f-4fe5-9069-51351ded59a7' } },
          ],
        },
        pathPointerKey: 'XYZ4',
        insertionPosition: { insertionPathPointer: null, insertionPoint: '2299cc1e-238f-4fe5-9069-51351ded59a7' },
      },
      { nestedUnit: '182fb317-3361-46dd-9058-5dffd973edb0', pathPointerKey: 'XYZ6', insertionPosition: { insertionPathPointer: null, insertionPoint: '2299cc1e-238f-4fe5-9069-51351ded59a7' } },
    ],
  },
]

export default data
