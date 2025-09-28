import { RowID, RowElement } from "./interface";

let currentId: RowID = 0;
const rows: { [key: number]: RowElement } = {};

// Insertar fila
export function insertRow(row: RowElement): RowID {
  currentId++;
  rows[currentId] = row;
  console.log(`Inserted row ${currentId}`, row);
  return currentId;
}

// Actualizar fila
export function updateRow(id: RowID, row: RowElement): void {
  if (rows[id]) {
    rows[id] = row;
    console.log(`Updated row ${id}`, row);
  } else {
    console.error(`Row ${id} not found`);
  }
}

// Eliminar fila
export function deleteRow(id: RowID): void {
  if (rows[id]) {
    delete rows[id];
    console.log(`Deleted row ${id}`);
  } else {
    console.error(`Row ${id} not found`);
  }
}
