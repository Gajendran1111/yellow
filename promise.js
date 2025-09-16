// promise 
// syntax 
// return new Promise((resolve, reject) => {})

    function scan (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const a = true
                if(a){
                    resolve("Scan the QR")
                }
                else{
                    reject("I am not Scan the QR")
                }
            },5000);
        })
    }
        function payment (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const b = false;
                if(b){
                    resolve("paying the amount")
                }   
                else{
                    reject("Payment not paid")
                }
            },2000);
        })
    }
        function statu (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const c = true;
                if(c){
                    resolve("Blue tick")
                }
                else(
                    reject("payment faild")
                )
            },3000);
        })
    }

    // scan()
    // .then(val => {console.log(val); return payment()})
    // .catch(val => {console.log(val); return statu()})
    // .then(val => {console.log(val)});


    async function js() {
        try {
        const a = await scan()
        console.log(a);
        const b = await payment()
        console.log(b);
        const c = await statu()
        console.log(c); 
        } catch (er) {
            console.log(er);  
        }
    }
    js();