function viewProfile() {
                const profileSection = document.getElementById('profileSection');
                const overlay = document.getElementById('overlay');

                if (profileSection.innerHTML === '') {
                    profileSection.innerHTML = `
                    <div class="profile-content">
                        <span class="close" onclick="closeProfile()">&times;</span>
                        <div class="profile-card">
                            <img src="https://via.placeholder.com/100" alt="Profile Picture" class="profile-pic">
                            <div class="profile-info">
                                <h4>Dr. Alice Johnson</h4>
                                <p class="designation">Associate Professor</p>
                                <p class="department">Department of Computer Science</p>
                                <br>
                                <p class="contact">
                                    <span class="material-icons">phone</span> +1 234 567 890
                                </p>
                                <p class="email">
                                    <span class="material-icons">email</span> alice.johnson@example.com
                                </p>
                                <br>
                                <h5>Educational Qualifications</h5>
                                <ul>
                                    <li>Ph.D. in Computer Science</li>
                                    <li>M.Sc. in Software Engineering</li>
                                </ul>
                                <br>
                                <h5>Experience</h5>
                                <p>10 years of teaching experience in various universities.</p>
                                <br>
                                <h5>Professional Membership</h5>
                                <p>Member of ACM and IEEE.</p>
                                <br>
                                <h5>Publications</h5>
                                <ul>
                                    <li>Advanced Algorithms for Data Processing - Journal of Computer Science, 2022</li>
                                    <li>Machine Learning Applications - International Journal of AI Research, 2021</li>
                                </ul>
                                <br>
                                <h5>Research Projects</h5>
                                <ul>
                                    <li>AI in Education - Funded by XYZ Foundation</li>
                                    <li>Blockchain for Secure Transactions - Collaborated with ABC University</li>
                                </ul>
                                <button class="edit-btn" title="Edit">
        <i class="material-icons">edit</i>
    </button>
                            </div>
                        </div>
                    </div>`;
                }
                overlay.classList.remove('hidden');
                profileSection.classList.remove('hidden');
                setTimeout(() => {
                    profileSection.classList.add('visible');
                }, 10);
            }

            function closeProfile() {
                const profileSection = document.getElementById('profileSection');
                const overlay = document.getElementById('overlay');

                profileSection.classList.remove('visible');
                overlay.classList.add('hidden');
                setTimeout(() => {
                    profileSection.innerHTML = '';
                    profileSection.classList.add('hidden');
                }, 500);
            }