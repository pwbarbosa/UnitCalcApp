$(document).ready(function() {
    $('#_calc_in_input').on('input', function() {
        $('#_output_to_mm').val(($('#_calc_in_input').val() * 25.4).toFixed(2));
        $('#_additional_output_input_1').val(($('#_output_to_mm').val() / 160).toFixed(2));
        $('#_additional_output_input_2').val(($('#_output_to_mm').val() / 87).toFixed(2));
        $('#_additional_output_input_3').val(($('#_output_to_mm').val() / 64).toFixed(2));
        $('.additional-output-label').removeClass('hidden');
    });
    $('#_reset_button').click(function() {
        
        if($('#_calc_in_input').val() !== ''){
            $('#_calc_history_line_items').append(`
                <div class="history-row" id="_calc_history_row_${$('.history-row').length}">
                    <div class="history-column" id="_index_column_${$('.history-row').length}">${$('.history-row').length}</div>
                    <div class="history-column" id="_in_column_${$('.history-row').length}">${$('#_calc_in_input').val()}in</div>
                    <div class="history-column" id="_mm_column_${$('.history-row').length}">${$('#_output_to_mm').val()}mm</div>
                    <div class="history-column" id="_mm_1_column_${$('.history-row').length}">${$('#_additional_output_input_1').val()}mm</div>
                    <div class="history-column" id="_mm_2_column_${$('.history-row').length}">${$('#_additional_output_input_2').val()}mm</div>
                    <div class="history-column" id="_mm_3_column_${$('.history-row').length}">${$('#_additional_output_input_3').val()}mm</div>
                </div>
            `)
            $('#_calc_in_input').val('');
            $('#_output_to_mm').val('');
            $('#_additional_output_input_1').val('');
            $('#_additional_output_input_2').val('');
            $('#_additional_output_input_3').val('');
            $('#_calc_history_container').removeClass('hidden');
            
        }
    });
});