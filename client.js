$(document).ready(onReady);

class Employee {
    constructor(firstName, lastName, idNumber, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.title = title;
        this.annualSalary = annualSalary;
    }
}

let totalSalaries = 0;
let allEmployees = [];

function isEmpty(str) {
    return !str.replace(/\s+/, '').length;
  }

function onReady() {
    $('#submitButton').on('click', submitButton);
    $('#employeeTable').on('click', '.deleteButton', deleteEmployeeButton);
};

function submitButton() {
    $('tbody').append('<tr><td>' + $('#firstName').val() + '</td><td>' + $('#lastName').val() + '</td><td>' + $('#idNumber').val() + '</td><td>' + $('#title').val() + '</td><td>' + $('#annualSalary').val() + '</td><td><button class="deleteButton">Delete</button></td></tr>');
    totalSalaries += Number($('#annualSalary').val());
    $('#totalMonthly').text('Total Monthly: ' + (Math.round(totalSalaries/12)));
    if((totalSalaries/12) > 20000) {
        $('#totalMonthly').css('background-color', 'red');
    } else {
        $('#totalMonthly').css('background-color', 'white');
    }
    allEmployees.push(new Employee($('#firstName').val(), $('#lastName').val(), $('#idNumber').val(), $('#title').val(), $('#annualSalary').val()));
    $('.employeeInput').val('');
}

function deleteEmployeeButton() {
    
    $(this).closest('tr').remove();
}
