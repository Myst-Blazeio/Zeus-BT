function viewProfile() {
                const profileSection = document.getElementById('profileSection');
                const overlay = document.getElementById('overlay');

                if (profileSection.innerHTML === '') {
                    profileSection.innerHTML = `
                    <div class="profile-content">
                        <span class="close" onclick="closeProfile()">&times;</span>
                        <div class="profile-card">
                            <img src="assets/placeholder-image.jpeg" alt="Profile Picture" class="profile-pic">
                            <div class="profile-info">
                                <h4>Dr. Gurjinder Kaur</h4>
                                <p class="designation">Associate Professor</p>
                                <p class="department">Department of Computer Science</p>
                                <br>
                                <p class="contact">
                                    <span class="material-icons">phone</span> +91 1672-253326
                                </p>
                                <p class="email">
                                    <span class="material-icons">email</span> gurjinder13@yahoo.com
                                </p>
                                <br>
                                <h5>Educational Qualifications</h5>
                                <ul>
                                    <li>B.E Kyrgyz Techinical University, Bishkek</li>
                                    <li>M.S. BITS, Pilani</li>
                                    <li>Ph.D SLIET, Longowal</li>
                                </ul>
                                <br>
                                <h5>Experience</h5>
                                <p>Joined as Lecturer in August 1997 at SLIET and presently working as Associate Professor.</p>
                                <br>
                                <h5>Professional Membership</h5>
                                <p>1.Lifetime Member, ISTE.</p>
                                <p>2.Life Member, IEEE.</p>
                                <br>
                                 <a href="./edit-profile.html" target="asdfasdf" style="text-decoration: none">
                                <button class="edit-btn">
                                <i class="material-icons">edit</i>
                                </button>
                             </a>
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