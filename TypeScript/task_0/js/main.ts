// Definir la interfaz Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Crea dos estudiantes
  const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York'
  };
  
  const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles'
  };
  
  // Guardar students en un array
  const studentsList: Student[] = [student1, student2];
  
  // Crear tabla
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  
  // Llenar la tabla con los estudiantes
  studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');
  
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });
  
  // Agregar el cuerpo a la tabla y luego al documento
  table.appendChild(tbody);
  document.body.appendChild(table);