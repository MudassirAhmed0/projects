
// $(document).ready(function () {
        //     jQuery(".quesion-dropdown").fadeOut();
        // });

        let isDropdownOpen = false;

        const openQuesDropdown = () => {
            if (isDropdownOpen == false) {

                // document.getElementById("question_chevron").classList.add("flip-h");
                // jQuery(".quesion-dropdown").fadeToggle(1000);

                document.getElementById("quesionDropdown").classList.add("fadeInDropdown");


                isDropdownOpen = !isDropdownOpen;
            } else if (isDropdownOpen == true) {
                document.getElementById("quesionDropdown").classList.remove("fadeInDropdown");
                // document.getElementById("question_chevron").classList.remove("flip-h");
                // jQuery(".quesion-dropdown").fadeToggle(1000);


                isDropdownOpen = !isDropdownOpen;
            }
        }

        const selectedOption = (selected) => {
            document.getElementById("deapartmentName").value = selected;
            openQuesDropdown();
        }

        // form submit funciton
        const submitForm = (event) => {
            event.preventDefault();
            let deapartmentName = document.getElementById("deapartmentName");
            let fullName = document.getElementById("fullName");
            let mobile = document.getElementById("mobile");
            let email = document.getElementById("email");
            let Summary = document.getElementById("Summary");

            if (deapartmentName.value == "") {
                document.getElementById("emptySubject").classList.add("show");
                deapartmentName.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); 

            }
            if (deapartmentName.value !== "") {
                document.getElementById("emptySubject").classList.remove("show");
            }
            if (fullName.value == "") {
                document.getElementById("emptyName").classList.add("show");
                deapartmentName.value !== '' && fullName.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
            }
            if (fullName.value !== "") {
                document.getElementById("emptyName").classList.remove("show");
            }
            if (mobile.value == "") {
                document.getElementById("emptyNumber").classList.add("show");
                deapartmentName.value !== '' &&  fullName.value !== '' &&  mobile.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
            }
            if (mobile.value !== "") {
                document.getElementById("emptyNumber").classList.remove("show");
            }
            if (email.value == "") {
                document.getElementById("emptyEmail").classList.add("show");
                deapartmentName.value !== '' &&  fullName.value !== '' && mobile.value !== ''  && email.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
            }
            if (email.value !== "") {
                document.getElementById("emptyEmail").classList.remove("show");
            }
            if (Summary.value == "") {
                document.getElementById("emptyMessage").classList.add("show");
                deapartmentName.value !== '' &&  fullName.value !== '' && mobile.value !== ''  && email.value !== ''  && Summary.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
                
            }
            if (Summary.value !== "") {
                document.getElementById("emptyMessage").classList.remove("show");
            }

            console.log("fullName", fullName);
        }