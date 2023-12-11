$(document).ready(function() {
    function addTask(taskName) {
      $('#taskList').append('<tr class="sortable-item"><td class="checkbox-col"><input type="checkbox"></td><td>' + taskName + '</td><td class="drag-handle">&#9776;</td></tr>');
    }
  
    $('#taskForm').submit(function(event) {
      event.preventDefault();
      var taskName = $('#taskInput').val();
      
      if (taskName.trim() !== '') {
        addTask(taskName);
        $('#taskInput').val('');
        makeTasksSortable();
      }
    });
  
    $('#taskList').on('change', ':checkbox', function() {
      $(this).closest('tr').find('td:nth-child(2)').toggleClass('completed');
    });
  
    $('#cancelButton').click(function() {
      $('#taskInput').val('');
    });
  
    function makeTasksSortable() {
      $('.sortable').sortable({
        handle: '.drag-handle',
        update: function(event, ui) {
        }
      });
    }
  
    makeTasksSortable();
  });
  