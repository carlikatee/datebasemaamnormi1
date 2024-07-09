document.addEventListener('DOMContentLoaded', function() {
    const studentList = [
        {
            id: '2022-00273-MR-0',
            picture: 'carlo.jpeg.jpg',
            name: 'Cate, Carlobert B.',
            class: 'DIT-2',
            gender: 'Male'
        },
        {
            id: '2022-00532-MR-0',
            picture: 'ama.jpeg.jpg',
            name: 'Dolorito, Arman Marc Adriel G.',
            class: 'DIT-2',
            gender: 'Male'
        },
        {
            id: '2022-00282-MR-0',
            picture: 'lem.jpeg.jpg',
            name: 'Luciri, Lemuel T.',
            class: 'DIT-2',
            gender: 'Male'
        },
        {
            id: '2022-00270-MR-0',
            picture: 'nea.jpeg.jpg',
            name: 'Bidbid, Nealie O.',
            class: 'DIT-2',
            gender: 'Female'
        },
        {
            id: '2022-00278-MR-0',
            picture: 'meca.jpeg.jpg',
            name: 'Gloriani, Mecaella B. ',
            class: 'DIT-2',
            gender: 'Female'
        },
        {
            id: '2022-00281-MR-0',
            picture: 'jamaica.jpeg.jpg',
            name: 'Legaspi, Jamaica Angeilyn S. ',
            class: 'DIT-2',
            gender: 'Female'
        },
        {
            id: '2022-00292-MR-0',
            picture: 'kath.jpeg.jpg',
            name: 'Sapon, Kathrisha H.  ',
            class: 'DIT-2',
            gender: 'Female'
        }
    ];

    const tbody = document.getElementById('student-list');

    studentList.forEach((student, index) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${student.id}</td>
            <td><img src="${student.picture}" alt="Profile Picture"></td>
            <td>${student.name}</td>
            <td>${student.class}</td>
            <td>${student.gender}</td>
            <td>
                <button class="action-btn view-btn" data-index="${index}">View</button>
                <button class="action-btn remove-btn">Remove</button>
            </td>
        `;

        tbody.appendChild(tr);
    });

    // Modal functionality
    const modal = document.getElementById("student-modal");
    const span = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.view-btn').forEach(button => {
        button.addEventListener('click', function() {
            const studentIndex = this.getAttribute('data-index');
            const student = studentList[studentIndex];
            document.getElementById('student-details').innerHTML = `
                <p><strong>ID:</strong> ${student.id}</p>
                <p><strong>Name:</strong> ${student.name}</p>
                <p><strong>Class:</strong> ${student.class}</p>
                <p><strong>Gender:</strong> ${student.gender}</p>
                <img src="${student.picture}" alt="Profile Picture">
            `;
            modal.style.display = "block";
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
