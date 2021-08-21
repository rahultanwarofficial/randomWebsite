let el = document.getElementById('nav-list2');


        el.style.display = "none";

        hamBurger = () => {

            if (el.style.display == "none") {
                el.style.display = "block";
            }
            else {
                el.style.display = "none";
            }
        }

        let search = document.getElementById('rightNav2');

        search.style.display = "none";

        toggleSearch = ()=>{
            
            if(search.style.display == "none"){
                search.style.display = "flex";
            }
            else{
                search.style.display = "flex";
            }

        }

        toggleSearchEnd = ()=>{
            if(search.style.display = "flex"){
                search.style.display = "none";
            }
            else{
                search.style.display = "flex"
            }
        }