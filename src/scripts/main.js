'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const tableRow = document.querySelector('.field tr');
const table = document.querySelector('tbody');
const minElements = 2;
const maxElements = 10;

addRow.addEventListener('click', () => {
  const count = table.childElementCount;

  if (count < maxElements) {
    tableRow.parentNode.append(createRow());
  }
});

removeRow.addEventListener('click', () => {
  const count = table.childElementCount;

  if (count > minElements) {
    table.lastElementChild.remove();
  }
});

addColumn.addEventListener('click', () => {
  const tr = document.querySelectorAll('.field tr');

  tr.forEach((element) => {
    const count = element.cells.length;

    if (count < maxElements) {
      element.lastElementChild.after(createColumn());
    }
  });
});

removeColumn.addEventListener('click', () => {
  const tr = document.querySelectorAll('.field tr');

  tr.forEach((element) => {
    const count = element.cells.length;

    if (count > minElements) {
      element.lastElementChild.remove();
    }
  });
});

function createRow() {
  const row = document.createElement('tr');

  for (let i = 0; i < tableRow.cells.length; i++) {
    const column = document.createElement('td');

    row.append(column);
  }

  return row;
}

function createColumn() {
  const column = document.createElement('td');

  return column;
}
