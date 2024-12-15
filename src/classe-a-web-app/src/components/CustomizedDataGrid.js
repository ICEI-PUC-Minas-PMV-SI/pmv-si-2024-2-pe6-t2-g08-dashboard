import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function CustomizedDataGrid({columns, rows, pageSize, onSelectChange, selected}) {
  return (
    <DataGrid
      autoHeight
      checkboxSelection
      disableMultipleRowSelection
      rows={rows}
      columns={columns}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
      }
      initialState={{
        pagination: { paginationModel: { pageSize: 20 } },
      }}
      pageSizeOptions={pageSize || 20}
      disableColumnResize
      density="compact"
      slotProps={{
        filterPanel: {
          filterFormProps: {
            logicOperatorInputProps: {
              variant: 'outlined',
              size: 'small',
            },
            columnInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            operatorInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            valueInputProps: {
              InputComponentProps: {
                variant: 'outlined',
                size: 'small',
              },
            },
          },
        },
      }}
      onRowSelectionModelChange={(newSelection) => {
        onSelectChange(newSelection);
      }}
      rowSelectionModel={selected}
    />
  );
}
