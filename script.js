let h = Number(document.getElementById('hours').innerHTML);
      
      let m = Number(document.getElementById('mins').innerHTML);
      
      let s = Number(document.getElementById('secs').innerHTML); 
      
      let sRes = document.getElementById('secs');
      let mRes = document.getElementById('mins');
      let hRes = document.getElementById('hours');

      let isRunning = false;
      let idS;

      document.querySelector('.js-start-btn')
        .addEventListener('click', () => {
          countTime();
        });

      document.querySelector('.js-stop-btn')
        .addEventListener('click', () => {
          stopTime();
        });


      document.querySelector('.js-reset-btn')
        .addEventListener('click', () => {
          resetTime();
        });



      function countTime(){
        if(!isRunning){
          idS = setInterval(secs, 1000);
          isRunning = true;
        } else {
          resetTime();
          countTime();
        }
      }

      function hours(){
        h++;
        hRes.innerHTML = h;
      }

      function mins(){
        m++;
        if(m < 10){
          mRes.innerHTML = `0${m}`;
        } else if(m >= 10 && m <= 59) {
          mRes.innerHTML = m;
        }
        
        if(m === 60){
          m = 0;
          mRes.innerHTML = `0${m}`;
          hours();
        }
      }

      function secs(){
        s++;
        if(s < 10){
          sRes.innerHTML = `0${s}`;
        } else if(s >= 10 && s <= 59) {
          sRes.innerHTML = s;
        }

        if(s === 60){
          s = 0;
          sRes.innerHTML = `0${s}`;
          mins();
        }
      }

      function resetTime(){
        isRunning = false;
        clearInterval(idS);
        sRes.innerHTML = '00';
        mRes.innerHTML = '00';
        hRes.innerHTML = '00';

        s = 0;
        m = 0;
        h = 0;
      }

      function stopTime(){
        clearInterval(idS);
        isRunning = false;
      }