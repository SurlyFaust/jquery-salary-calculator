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

let totalSalaries = Number(0);
let allEmployees = [];

function isEmpty(str) {
    return !str.replace(/\s+/, '').length;
  }

function onReady() {
    $('#submitButton').on('click', submitButton);
    $('#employeeTable').on('click', '.deleteButton', deleteEmployeeButton);
};

function submitButton() {
    $('tbody').append('<tr><td>' + $('#firstName').val() + '</td><td>' + $('#lastName').val() + '</td><td>' + $('#idNumber').val() + '</td><td>' + $('#title').val() + '</td><td class="salary">' + $('#annualSalary').val() + '</td><td><button class="deleteButton">Delete</button></td></tr>');
    totalSalaries += Number($('#annualSalary').val());
    $('#totalMonthly').text('Total Monthly: $' + (totalSalaries/12).toFixed(2));
    if((totalSalaries/12) > 20000) {
        $('#totalMonthly').css('background-color', 'red');
    } else {
        $('#totalMonthly').css('background-color', 'white');
    }
    allEmployees.push(new Employee($('#firstName').val(), $('#lastName').val(), Number($('#idNumber').val()), $('#title').val(), Number($('#annualSalary').val())));
    $('.employeeInput').val('');
}

function deleteEmployeeButton() {
    console.log(Number($(this).closest('tr.salary').text()));
    
    // totalSalaries -= Number($(this.salary).text());
    // $('#totalMonthly').text('Total Monthly: $' + Number((totalSalaries/12).toFixed(2)));
    $(this).closest('tr').remove();
}
