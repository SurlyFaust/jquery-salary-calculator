$(document).ready(onReady);

let totalSalaries = 0;

function isEmpty(str) {
    return !str.replace(/\s+/, '').length;
  }

function onReady() {
    $('#submitButton').on('click', submitButton);
    $('#employeeTable').on('click', '#deleteButton', deleteEmployeeButton);
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
    $('input').val('');
}

function deleteEmployeeButton() {
    console.log('Wokring');
    
    // $(this).closest('tr').remove()
}
