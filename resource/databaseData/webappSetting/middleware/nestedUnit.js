let data = [
  /**
   * Port: WebappUI
   */
  {
    label: { name: 'WebappUI container middleware nested unit.' },
    key: '43d6e114-54b4-47d8-aa68-a2ae97b961d5',
    unitKey: '3544ab32-f236-4e66-aacd-6fdf20df069b',
    insertionPoint: [{ key: 'de45db35-5e0d-49b1-82bc-659fc787b0c1', order: 1, traverseNodeImplementation: 'chronological' }],
    children: [
      // Common functions
      {
        nestedUnit: '0c01c061-92d4-44ad-8cda-098352c107ea',
        pathPointerKey: '9460ba3c-e9f4-415b-b7c3-96eef0c6382e',
        insertionPosition: { insertionPathPointer: null, insertionPoint: 'de45db35-5e0d-49b1-82bc-659fc787b0c1', order: 1 /* placement: { type: 'after/before', pathPointer: 'KeyXXXX', } */ },
      },
      {
        nestedUnit: '366b44e7-1c26-478c-86b7-70f9504f7586',
        pathPointerKey: '9460ba3c-e9f4-415b-b7c3-96eef0c6382e',
        insertionPosition: {
          insertionPathPointer: null,
          insertionPoint: 'de45db35-5e0d-49b1-82bc-659fc787b0c1',
          order: 1,
          // placement: {
          //     type: 'after/before',
          //     pathPointer: 'KeyXXXX',
          // }
        },
      },
      {
        nestedUnit: {
          label: { name: 'Google verification' },
          key: '7acf5873-630c-41a7-84c4-4b0d52706981',
          unitKey: {
            key: '3ee0de2a-1e28-436a-bea0-8d5e4637dbe2',
            label: {
              name: 'Google verification',
            },
            arguments: {
              filePath: `/template/root/google276dc830e9fade0c.html`,
              urlPath: '/google276dc830e9fade0c.html', // determines the scope of the service worker.
              options: {
                gzip: true,
              },
            },
            traverseNodeImplementation: 'regularFunction',
            fileKey: '81902e75-17a0-41a1-a12d-e5d4446e85d9',
          },
        },
        pathPointerKey: '9460ba3c-e9f4-415b-b7c3-96eef0c6382e',
        insertionPosition: {
          insertionPathPointer: null,
          insertionPoint: 'de45db35-5e0d-49b1-82bc-659fc787b0c1',
          order: 2,
          // placement: {
          //     type: 'after/before',
          //     pathPointer: 'KeyXXXX',
          // }
        },
      },
      {
        nestedUnit: {
          label: { name: 'Static root file' },
          key: '91140de5-9ab6-43cd-91fd-9eae5843c74c',
          unitKey: '20c4b7dd-66de-4b89-9188-f1601f9fc217',
          insertionPoint: [{ key: 'de45db35-5e0d-49b1-82bc-659fc787b0c1', order: 1, traverseNodeImplementation: 'chronological' }],
          children: [
            // fallback middleware, in case the file was not found.
            {
              nestedUnit: {
                label: { name: 'renderTemplateDocument - homepage' },
                key: '93afadbe-3b35-42b5-9ce8-1a8d99667e93',
                unitKey: {
                  key: '122c9a40-5872-4219-ad4e-ad1c237deacd',
                  label: {
                    name: 'RenderTemplateDocument: Main page.',
                  },
                  arguments: {
                    documentKey: '0d65c113-acce-4f01-8eea-ab6cb7152405',
                  },
                  traverseNodeImplementation: 'regularFunction',
                  fileKey: '20f0e914-e22b-4a07-83d0-1ff2c1d51902',
                },
              },
              pathPointerKey: 'xzy5',
              insertionPosition: { insertionPathPointer: null, insertionPoint: 'de45db35-5e0d-49b1-82bc-659fc787b0c1', order: 1 /* placement: { type: 'after/before', pathPointer: 'KeyXXXX', } */ },
            },
          ],
        },
        pathPointerKey: '9460ba3c-e9f4-415b-b7c3-96eef0c6382e',
        insertionPosition: {
          insertionPathPointer: null,
          insertionPoint: 'de45db35-5e0d-49b1-82bc-659fc787b0c1',
          order: 3,
          // placement: {
          //     type: 'after/before',
          //     pathPointer: 'KeyXXXX',
          // }
        },
      },
    ],
  },

  /**
   * Port: StaticContent
   */
  {
    label: { name: 'StaticContent container middleware nested unit.' },
    key: 'fd7848e4-b0e5-44dc-b7de-7fdb3406d504',
    unitKey: '3544ab32-f236-4e66-aacd-6fdf20df069b',
    insertionPoint: [{ key: 'de45db35-5e0d-49b1-82bc-659fc787b0c1', order: 1, traverseNodeImplementation: 'chronological' }],
    children: [
      // Common functions
      {
        nestedUnit: '0c01c061-92d4-44ad-8cda-098352c107ea',
        pathPointerKey: '9460ba3c-e9f4-415b-b7c3-96eef0c6382e',
        insertionPosition: { insertionPathPointer: null, insertionPoint: 'de45db35-5e0d-49b1-82bc-659fc787b0c1', order: 1 },
      },

      {
        nestedUnit: '68fb59e3-af0b-4ea2-800e-7e7e37d7cc31', // JSPM File
        pathPointerKey: '9460ba3c-e9f4-415b-b7c3-96eef0c6382e',
        insertionPosition: {
          insertionPathPointer: null,
          insertionPoint: 'de45db35-5e0d-49b1-82bc-659fc787b0c1',
          order: 1,
          // placement: {
          //     type: 'after/before',
          //     pathPointer: 'KeyXXXX',
          // }
        },
      },
      {
        nestedUnit: 'da18242e-792e-4e44-a12b-b280f6331b7c', // Static assets
        pathPointerKey: '9460ba3c-e9f4-415b-b7c3-96eef0c6382e',
        insertionPosition: {
          insertionPathPointer: null,
          insertionPoint: 'de45db35-5e0d-49b1-82bc-659fc787b0c1',
          order: 2,
          // placement: {
          //     type: 'after/before',
          //     pathPointer: 'KeyXXXX',
          // }
        },
      },
      {
        nestedUnit: 'a7912856-ad5a-46b0-b980-67fb500af399', // Document element
        pathPointerKey: '9460ba3c-e9f4-415b-b7c3-96eef0c6382e',
        insertionPosition: {
          insertionPathPointer: null,
          insertionPoint: 'de45db35-5e0d-49b1-82bc-659fc787b0c1',
          order: 3,
          // placement: {
          //     type: 'after/before',
          //     pathPointer: 'KeyXXXX',
          // }
        },
      },
      {
        nestedUnit: '81cc5f3a-ff61-454f-b6bb-49713c841c29', // Static upload files
        pathPointerKey: '9460ba3c-e9f4-415b-b7c3-96eef0c6382e',
        insertionPosition: {
          insertionPathPointer: null,
          insertionPoint: 'de45db35-5e0d-49b1-82bc-659fc787b0c1',
          order: 4,
          // placement: {
          //     type: 'after/before',
          //     pathPointer: 'KeyXXXX',
          // }
        },
      },
    ],
  },

  /*
 
     _   _       _ _     _   _           _            
    | | | |_ __ (_) |_  | \ | | ___   __| | ___  ___  
    | | | | '_ \| | __| |  \| |/ _ \ / _` |/ _ \/ __| 
    | |_| | | | | | |_  | |\  | (_) | (_| |  __/\__ \ 
     \___/|_| |_|_|\__| |_| \_|\___/ \__,_|\___||___/ 
                                                      
 
*/
  {
    key: 'fe175a7c-45ab-4d7a-9fba-57245eee0527',
    label: {
      name: 'jspm.config.js static file',
    },
    arguments: {
      filePath: `/jspm_packageManager/jspm.config.js`,
      urlPath: '/asset/javascript/jspm.config.js',
      options: { gzip: true },
    },
    traverseNodeImplementation: 'regularFunction',
    fileKey: '81902e75-17a0-41a1-a12d-e5d4446e85d9',
  },
]

export default data
