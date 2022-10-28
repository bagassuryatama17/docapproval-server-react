export const getGridColumns = formatters => [
    {
      id: 'docId',
      name: 'docId',
      field: 'docId',
      sortable: true,
      formatter: formatters?.text,
      align: 'left'
    },
    {
      id: 'description',
      name: 'Description',
      field: 'description',
      formatter: formatters?.text
    },
    {
      id: 'date',
      name: 'date',
      field: 'date',
      sortable: true,
      formatter: formatters?.text
    },
    {
      id: 'unit',
      name: 'unit',
      field: 'unit',
      formatter: formatters?.text
    }
  ];
  