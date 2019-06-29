const url = 'https://answer-rambam.herokuapp.com/api/posts';


class postService {
    
    static get(test) {
        let image;
        if(test == "image"){
             image = "/image"
        }else {
             image = ""
        }
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(url+image);
                const json = await response.json();
                resolve(json)
            } catch (err) {
                reject(err)
            }
        })
    }
    static insert(obj, test) {
        let image;
        if(test == "image"){
             image = "/image"
        }else {
             image = ""
        }
        return new Promise(async (resolve, reject) => {
            try {
                const objtojson = JSON.stringify(obj);
                const response = await fetch(url+image, {
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: objtojson
                });
                const json = await response.json();
                console.log(json)
                resolve()
            } catch (err) {
                reject(err)
            }
        })
    }

}

export default postService