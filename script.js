$(document).ready(function() {
    $('#certificateForm').submit(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        if (name) {
            $('#userName').text(name);
            $('#certificate').show();
        }
    });

    $('#downloadBtn').click(function() {
        html2canvas($('#certificate')[0], {
            onrendered: function(canvas) {
                var link = document.createElement('a');
                link.href = canvas.toDataURL("image/png");
                link.download = 'certificate.png';
                link.click();
            }
        });
    });
});
