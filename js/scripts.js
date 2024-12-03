document.addEventListener('DOMContentLoaded', function () {
    
    let availableSeats = 20;
    let bookedSeats = 0;
    let selectedSeats = 0;
    let totalSelections = 0;

    const availableCountElement = document.getElementById('availableCount');
    const bookedCountElement = document.getElementById('bookedCount');
    const selectedCountElement = document.getElementById('selectedCount');
    const totalSelectionsElement = document.getElementById('totalSelections');
    const seatContainer = document.getElementById('seatContainer');

    availableCountElement.textContent = availableSeats;
    bookedCountElement.textContent = bookedSeats;
    selectedCountElement.textContent = selectedSeats;
    totalSelectionsElement.textContent = totalSelections;

    for (let i = 1; i <= availableSeats; i++) {
        const seatCard = document.createElement('div');
        seatCard.classList.add('col-md-2', 'mb-3');
        seatCard.innerHTML = `
            <div class="card" data-seat-id="${i}">
                <div class="card-body text-center">
                    <h6 class="card-title">Seat ${i}</h6>
                    <button class="btn btn-primary seat-btn" id="bookSeatBtn${i}">Book</button>
                    <button class="btn btn-danger seat-btn hidden" id="cancelSeatBtn${i}" style="display: none;">Cancel</button>
                </div>
            </div>
        `;
        seatContainer.appendChild(seatCard);
    }

    seatContainer.addEventListener('click', function (e) {
        
        if (e.target.classList.contains('seat-btn')) {
            const button = e.target;
            const seatId = button.id.replace('bookSeatBtn', '');
        
            if (button.textContent == 'Book') {
                if (availableSeats > 0) {
                    availableSeats--;
                    bookedSeats++;
                    totalSelections++;
                    button.textContent = 'Booked';
                    console.log('Button after booking:', button); // Log the button to the console
                    button.classList.remove('btn-primary');
                    button.classList.add('btn-secondary');
                    document.getElementById('cancelSeatBtn' + seatId).style.display = 'inline-block';
        
                    availableCountElement.textContent = availableSeats;
                    bookedCountElement.textContent = bookedSeats;
                    totalSelectionsElement.textContent = totalSelections;
                } else {
                    alert('No available seats left!');
                }
        
            } else if (button.textContent == 'Cancel') {
                availableSeats++;
                bookedSeats--;
                totalSelections--;
                button.textContent = 'Book';
               
                button.classList.remove('btn-secondary');
                button.classList.add('btn-primary');
                document.getElementById('cancelSeatBtn' + seatId).style.display = 'none';
                availableCountElement.textContent = availableSeats;
                bookedCountElement.textContent = bookedSeats;
                totalSelectionsElement.textContent = totalSelections;
            }
        }
        
    });

    $('#bookingDate').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
        todayHighlight: true
    });
});
