let times = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const addTime = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let time = {
                id: Date.now(),
                Time: document.getElementById('time').value
            }
            times.push(time);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {time} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(times, '\t', 2);

            //saving to localStorage
            localStorage.setItem('Times', JSON.stringify(times) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addTime);
});