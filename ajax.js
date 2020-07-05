window.jQuery.ajax = function({url,method,body}){
    return new Promise = (resolve,reject) =>{
        let request = new XMLHttpRequest()
        request.open(method,url)
        request.onreadystatechange = (e)=>{
            if(request.readyState === 4){
                if(request.status >=200 && request.status < 300){
                    resolve.call(undefined,request.responseText)
                }else if(request.status >= 400){
                    reject.call(undefined,request)
                }
            }
        }
        request.send(body)
    }

}
button.addEventListener('click',(e)=>{
    window.jQuery.ajax({
        url: '/xxx',
        method: 'POST',
        body: 'userName=xxx&&password=xxxx',
    }).then(
        (responseText) =>{ console.log('success') },
        (request) => { console.log('error') }
)
})